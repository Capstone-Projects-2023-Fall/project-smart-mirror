import React, { useState, useEffect } from 'react';
import './new.css';
import NewsSVG from "../svg/newsicon.svg";

const NewsComponent = () => {
  const whiteNumberStyle = {
    color: 'white',
    fontSize: '24px',
    backgroundColor: 'black',
    padding: '10px',
  };

  const [newsData, setNewsData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);
      try {
        const response = await fetch("https://api.thenewsapi.com/v1/news/top?api_token=aAOeIjcNpmqiEh0KrZQQbTUNpQu1Sdz3UaNdxKiV&locale=us&limit=3");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setNewsData(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchNews();
  }, []);

  if (isLoading) {
    return <div className="loading-box">Loading News...</div>;
  }

  if (error) {
    return <div className="error-box">Error fetching data: {error}</div>;
  }

  return (
    <div className="news">
      <h2 className="underlined-heading">Top Stories</h2>
      {newsData.map((data) => (
        <div key={data.id} className="news-item">
          <img src={NewsSVG} alt="News Icon" className="news-icon" />
          <div className="news-content">
            <p className="description">{data.snippet}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsComponent;
