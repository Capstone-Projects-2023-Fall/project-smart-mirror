import React from 'react';

interface StockDataDisplayProps {
  currentDayData: Record<string, string>;
}

const StockDataDisplay: React.FC<StockDataDisplayProps> = ({ currentDayData }) => {
  return (
    <div className="stock-data-display">
      <span className="data-label">Stock Data for {currentDayData['date']}:</span>
      <span className="data-item">Open: {currentDayData['1. open']}</span>
      <span className="data-item">High: {currentDayData['2. high']}</span>
      <span className="data-item">Low: {currentDayData['3. low']}</span>
      <span className="data-item">Close: {currentDayData['4. close']}</span>
      <span className="data-item">Volume: {currentDayData['5. volume']}</span>
      {/* Add more details as needed */}
    </div>
  );
};

export default StockDataDisplay;
