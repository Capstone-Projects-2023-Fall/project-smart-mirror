import React, { useState, useEffect } from 'react';
import StockDataDisplay from './StockDataDisplay'; 
import stockBackupData from './stockbackup.json'

function yyyymmdd() {
    var now = new Date();
    var y = now.getFullYear();
    var m = now.getMonth() + 1;
    var d = now.getDate();
    return '' + y + (m < 10 ? '0' : '')+'-' + m +'-'+ (d < 10 ? '0' : '') + d;
}

const MarketDisplay = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stockData, setStockData] = useState<{
    metaData: Record<string, string>;
    timeSeries: Record<string, Record<string, string>>;
    currentDayData: Record<string, string>;
  }>({
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

        

        const currentDate: string = yyyymmdd();

        const currentDayData = timeSeries && timeSeries[currentDate] ? timeSeries[currentDate] : {};

        if (!metaData || Object.keys(metaData).length === 0) {

            
          console.log("Using backup");
          console.log(stockBackupData);
          console.log(currentDate)
        
          setStockData({
            metaData: stockBackupData['Meta Data'],
            timeSeries: stockBackupData['Time Series (Daily)'],
            currentDayData: stockBackupData['Time Series (Daily)'][currentDate as keyof typeof stockBackupData['Time Series (Daily)']] || {},
          });
          console.log(stockData);
          return;
        }
        setStockData({
          metaData: metaData,
          timeSeries: timeSeries,
          currentDayData: currentDayData || {}, // Handle if current day data is undefined
        });
      } catch (error:any) {
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
        <StockDataDisplay currentDayData={stockData.currentDayData} />
    </div>
  );
};

export default MarketDisplay;