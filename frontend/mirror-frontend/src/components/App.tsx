import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';

import TemperatureDisplay from './weather';
import CalendarUI from './calendar';
import FitbitDataComponent from './fitbit';
import NewsComponent from './news';
import MarketDisplay from './stocks';
import Clock from "./clock";
import GlobalStyle from './GlobalStyle'; // Import the GlobalStyle
import './App.css';
import './clock.css';
import { motion, useAnimation } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';


const UI: React.FC = () => {
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
    // You might not need this interval if your data doesn't change often
    const intervalId = setInterval(fetchWidgetVisibility, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const upperCornerDeadzone = {
    top: 0,
    left: 0,
    right: window.innerWidth * 0.2, // Adjust the width of the deadzone as needed
    bottom: window.innerHeight * 0.2 // Adjust the height of the deadzone as needed
  };


  const initialPositionsString = localStorage.getItem('widgetPositions');
  const initialPositions =  { // pull from pwa
    weatherBox: { x: 1370, y: 15 },
    marketBox: { x: 800, y: 15 },
    newsBox:{x: 15, y: 660 },
  };
  const [positions, setPositions] = useState(initialPositions);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: { point: { x: number, y: number } }, key: string) => {
    // Save the new position to state and local storage
    const updatedPositions = { ...positions, [key]: { x: info.point.x, y: info.point.y } };
    setPositions(updatedPositions);
    localStorage.setItem('widgetPositions', JSON.stringify(updatedPositions));
    //save position and send to the data base
  };

  const loggedin = false;

  if(loggedin){
    return (
      <div className="ui-container">
        <div className="QRCode">
          <QRCodeSVG value={"https://www.youtube.com"} size={256} />
        </div>
        <div className="qr-code-text">
          Please scan QR Code on Project Lumina App
        </div>
        {/* Other mirror UI components */}
      </div>
    );
  } else {
    return (
      <>
        {/* <GlobalStyle /> Remove if you decide to use Tailwind for global styles */}
        {/* Assuming clock-box is styled to be full screen and centered */}
        <motion.div className="fixed inset-0 flex justify-center items-center">
          <Clock />
        </motion.div>
        
        {/* Assuming ui-container is styled to be full screen and flex */}
        <motion.div className="fixed inset-0 flex flex-wrap justify-around items-start p-4"> 
  
          {widgetVisibility.News && (
            <motion.div
            className="p-4 bg-black text-white rounded-lg shadow-lg mx-auto my-4"
            drag
            initial={{ x: positions.newsBox.x, y: positions.newsBox.y }}
            dragConstraints={{
              left: 10,
              right: window.innerWidth - 700,
              top: 0,
              bottom: window.innerHeight - 200
            }}
            onDragEnd={(event, info) => handleDragEnd(event, info, 'newsBox')}
            dragElastic={0}
          >
            <NewsComponent />
          </motion.div>
           )}  
          {widgetVisibility.Weather && (
            <motion.div 
              className="p-4 bg-black text-white rounded-lg shadow-lg mx-auto my-4"
              drag 
              initial={{ x: positions.weatherBox.x, y: positions.weatherBox.y }}
              dragConstraints={{
                left: 0,
                right: window.innerWidth - 150,
                top: -150,
                bottom: window.innerHeight - 275
              }}
              onDragEnd={(event, info) => handleDragEnd(event, info, 'weatherBox')}
              dragElastic={0}
            >
              <TemperatureDisplay />
            </motion.div>
          )}
  
          {/* ... other widgets ... */}
        </motion.div>
      </>
    );
  }; 


 
};

export default UI;
