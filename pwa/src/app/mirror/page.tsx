"use client";
import React, { useState, useEffect } from "react";
import Clock from "./clock"; // Time display
import { motion, useAnimation } from "framer-motion";
import "./App.css";
import "./clock.css";
import "./spotify.css";
import Spotify from "./spotify";
import TemperatureDisplay from "./weather";
import NewsDisplay from "./news";
import MarketDisplay from "./stocks";
import FitbitDataComponent from "./fitbit";
import { QRCodeSVG } from "qrcode.react";
import { supabase } from "../utils/supabase-client";
import { useRouter } from "next/navigation";
import { GoTrueClient } from "@supabase/supabase-js";
let firstRun = false;
let refresh = false;

type Props = {};

export default function Mirror({}: Props) {
  const [widgetVisibility, setWidgetVisibility] = useState({
    Weather: true,
    Calendar: true,
    News: true,
    Fitbit: true,
    Spotify: true,
  });

  const [userId, setUserId] = useState<string | null>(null);
  const router = useRouter();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data: users, error } = await supabase
          .from("profiles") // Replace with your actual user table name
          .select("*");

        if (error) {
          console.error("Error fetching users:", error.message);
          return;
        }

        // Find the user with the matching mirrorID
        const userWithMirrorID = users.find(
          (user) => user.mirrorID === "67ce79e9-b846-464c-bb44-1be8e0c9509a"
        );

        if (userWithMirrorID) {
          console.log("User with matching mirrorID:", userWithMirrorID);
          if (refresh == false) {
            refresh = true;
            router.refresh();
            // refreshj here
          }
          setUserId(userWithMirrorID);
        } else {
          console.log("No user found with the specified mirrorID");
        }
      } catch (error: any) {
        console.error("Error fetching users:", error.message);
      }
    };
    const intervalId = setInterval(fetchUserData, 15000);
    if (!firstRun) {
      firstRun = true;
      fetchUserData();
    }
    return () => clearInterval(intervalId);
  }, [userId]); // Make sure to include any dependencies if needed

  useEffect(() => {
    const fetchWidgetVisibility = async () => {
      /* try {
        const response = await fetch('http://localhost:3000/api/widget?user_id=21380693-3ade-4951-82c0-1440aaf54297');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        if (result && result.length > 0 && result[0].downloaded_modules) {
          setWidgetVisibility(result[0].downloaded_modules);
        } else {
          console.error('No widget visibility data found');
        }
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }*/
    };

    fetchWidgetVisibility();
    const intervalId = setInterval(fetchWidgetVisibility, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const initialPositions = {
    // pull from pwa
    weatherBox: { x: 1765, y: 30 },
    marketBox: { x: 800, y: 15 },
    newsBox: { x: 15, y: 880 },
    spotifyBox: { x: 1570, y: 950 },
    fitbitBox: { x: 15, y: 430 },
  };

  const [positions, setPositions] = useState(initialPositions);

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: { point: { x: number; y: number } },
    key: string
  ) => {
    const updatedPositions = {
      ...positions,
      [key]: { x: info.point.x, y: info.point.y },
    };
    setPositions(updatedPositions);
    localStorage.setItem("widgetPositions", JSON.stringify(updatedPositions));
  };

  const loggedin = userId != null;
  if (loggedin) {
    return (
      <>
        {/* Assuming clock-box is styled to be full screen and centered */}
        <motion.div className="fixed inset-0 flex justify-center items-center">
          <Clock />
        </motion.div>
        <motion.div className="fixed inset-0">
          {widgetVisibility.Weather && (
            <motion.div
              className="weather-box"
              drag
              initial={{ x: positions.weatherBox.x, y: positions.weatherBox.y }}
              dragConstraints={{
                left: 0,
                right: window.innerWidth - 155,
                top: 20,
                bottom: window.innerHeight - 75,
              }}
              onDragEnd={(event, info) =>
                handleDragEnd(event, info, "weatherBox")
              }
              dragElastic={0}
            >
              <TemperatureDisplay />
            </motion.div>
          )}
          {widgetVisibility.News && (
            <motion.div
              className="news-box"
              drag
              initial={{ x: positions.newsBox.x, y: positions.newsBox.y }}
              dragConstraints={{
                left: 15,
                right: window.innerWidth - 100,
                top: 0,
                bottom: window.innerHeight - 185,
              }}
              onDragEnd={(event, info) => handleDragEnd(event, info, "newsBox")}
              dragElastic={0}
            >
              <NewsDisplay />
            </motion.div>
          )}

          {widgetVisibility.Spotify && (
            <motion.div
              className="spotify-box"
              drag
              initial={{ x: positions.spotifyBox.x, y: positions.spotifyBox.y }}
              dragConstraints={{
                left: 0,
                right: window.innerWidth - 350,
                top: 65,
                bottom: window.innerHeight - 120,
              }}
              onDragEnd={(event, info) =>
                handleDragEnd(event, info, "spotifyBox")
              }
              dragElastic={0}
            >
              <Spotify id={userId} />
            </motion.div>
          )}
          {widgetVisibility.Fitbit && (
            <motion.div
              className="fitbit-box"
              drag
              initial={{ x: positions.fitbitBox.x, y: positions.fitbitBox.y }}
              dragConstraints={{
                left: 15,
                right: window.innerWidth - 295,
                top: 0,
                bottom: window.innerHeight - 175,
              }}
              onDragEnd={(event, info) =>
                handleDragEnd(event, info, "fitbitBox")
              }
              dragElastic={0}
            >
              <FitbitDataComponent id={userId} />
            </motion.div>
          )}
        </motion.div>
      </>
    );
  } else {
    return (
      <div className="ui-container">
        <div className="QRCode">
          <QRCodeSVG
            value={
              "http://projectlumina.app/login?mirrorID=67ce79e9-b846-464c-bb44-1be8e0c9509a"
            }
            size={256}
          />
        </div>
        <div className="qr-code-text">
          Please scan QR Code on Project Lumina App
        </div>
        {/* Other mirror UI components */}
      </div>
    );
  }
}
