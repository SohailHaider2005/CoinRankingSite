import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import  {getCryptos}  from '../services/cryptoApi'; // Import the utility function


import Cryptocurrencies from './Cryptocurrencies';
import Loader from './Loader';

const { Title } = Typography;

const Homepage = () => {
    const [cryptoData, setCryptoData] = useState(null);
    const [isFetching, setIsFetching] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getCryptos('coins',10);
          console.log(data);
          setCryptoData(data);
          setIsFetching(false);
        } catch (error) {
          // Handle error if needed
          console.log(error);
          setIsFetching(false);
        }
      };
      fetchData();
    }, []); // Empty dependency array to ensure the effect runs only once on mount
    console.log(cryptoData);
  
    if (isFetching) return <Loader />;
    const globalStats = cryptoData?.data?.stats;
    console.log(globalStats);
  return (
    <div>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row gutter={[32, 32]}>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap:" value={`$${millify(globalStats.totalMarketCap)}`} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={`$${millify(globalStats.total24hVolume)}`} /></Col>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Cryptos In The World</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
      </div>
      <Cryptocurrencies simplified />
  
    </div>
  );
};

export default Homepage;