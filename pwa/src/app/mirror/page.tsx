"use client";
import React, { useState, useEffect } from "react";
import Clock from "./clock"; // Time display
import { motion, useAnimation } from 'framer-motion';
import './App.css'
import './clock.css'
import TemperatureDisplay from './weather';
type Props = {};

export default function Mirror({}: Props) {

  const [widgetVisibility, setWidgetVisibility] = useState({
    Weather: true,
    Calendar: true,
    News: true,
    Fitbit: true
  });

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

  const initialPositions =  { // pull from pwa
    weatherBox: { x: 0, y: 15 },
    marketBox: { x: 800, y: 15 },
    newsBox:{x: 15, y: 660 },
  };

  const [positions, setPositions] = useState(initialPositions);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: { point: { x: number, y: number } }, key: string) => {
    const updatedPositions = { ...positions, [key]: { x: info.point.x, y: info.point.y } };
    setPositions(updatedPositions);
    localStorage.setItem('widgetPositions', JSON.stringify(updatedPositions));
  };

  const loggedin = true;

  if(loggedin){
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
                right: window.innerWidth - 100,
                top: 0,
                bottom: window.innerHeight - 75
              }}
              onDragEnd={(event, info) => handleDragEnd(event, info, 'weatherBox')}
              dragElastic={0}
            >
              <TemperatureDisplay />
            </motion.div>
          )}

      </motion.div>
    </>)
    ;
  
  }else {
;
  }
}
