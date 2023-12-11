import React, { useState, useEffect } from 'react';
import './news.css';
import NewsSVG from "./svg/newsicon.svg";
import Image from 'next/image';

const NewsComponent = () => {
  const whiteNumberStyle = {
    color: 'white',
    fontSize: '24px',
    backgroundColor: 'black',
    padding: '10px',
  };

  const [newsData, setNewsData] = useState<any>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);
      try {
        const response = await fetch("tes"); //https://api.thenewsapi.com/v1/news/top?api_token=aAOeIjcNpmqiEh0KrZQQbTUNpQu1Sdz3UaNdxKiV&locale=us&limit=3

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setNewsData(data.data);
      } catch (error: any) {
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
      {newsData.map((data: { id: React.Key | null | undefined; snippet: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) => (
        <div key={data.id} className="news-item">
            <Image 
                src={NewsSVG.src} // Use the src from the WeatherSVG object
                alt={'News Icon'}
                width={25} // Use the width from the WeatherSVG object
                height={25} // Use the height from the WeatherSVG object
            />   
            <div className="news-content">
            <p className="description">{data.snippet}</p>
            </div>
        </div>
      ))}
    </div>
  );
};

export default NewsComponent;