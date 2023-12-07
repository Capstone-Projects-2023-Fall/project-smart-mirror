import React, { useState, useEffect } from 'react';
import StockDataDisplay from './StockDataDisplay'; 
const backupResponse = await fetch('/stockbackup.txt');

const MarketDisplay = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stockData, setStockData] = useState({
    metaData: {},
    timeSeries: {},
    currentDayData: {},
  });

  useEffect(() => {
    async function fetchMarketInfo() {
      setIsLoading(true);
      setError(null);
  
      const apiKey = 'UCYM2JMP0X8C4VPT'; // replace with your Alpha Vantage API key
      const symbol = 'IBM';
      const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`;
  
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
  
        const metaData = data['Meta Data'];
        const timeSeries = data['Time Series (Daily)'];
        const currentDate = new Date().toISOString().split('T')[0]; // Get current date in "YYYY-MM-DD" format
        const currentDayData = timeSeries && timeSeries[currentDate] ? timeSeries[currentDate] : {};

        if (!metaData) {
          // Fetch local backup data if metadata is undefined
          const backupResponse = await fetch('./stockbackup.txt');
          const backupData = await backupResponse.json();
          setStockData({
            metaData: backupData['Meta Data'],
            timeSeries: backupData['Time Series (Daily)'],
            currentDayData: {
              date: currentDate,
              data: currentDayData,
            },
          });
        } else {
          setStockData({
            metaData: metaData,
            timeSeries: timeSeries,
            currentDayData: {
              date: currentDate,
              data: currentDayData,
            },
          });
        }
      } catch (error) {
        setError(`Error fetching data: ${error}`);
      } finally {
        setIsLoading(false);
      }
    }
  
    fetchMarketInfo();
    const fetchIntervalId = setInterval(fetchMarketInfo, 2 * 3600000);
    return () => clearInterval(fetchIntervalId);
  }, []);
  

  if (error) {
    return <div className="error-box">Error: {error}</div>;
  }

  if (isLoading) {
    return <div className="loading-box">Loading...</div>;
  }

  // Render your stock data here using the stockData state

  return (
    <div>
        <StockDataDisplay currentDayData={stockData.currentDayData.data} />
    </div>
  );
};

export default MarketDisplay;
