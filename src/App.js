import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import Homepage from './components/Homepage'
import Cryptocurrencies from './components/Cryptocurrencies'
import CryptoDetails from './components/CryptoDetails'
import Navbar from './components/Navbar'
import './App.css';

const App = () => (
  <div className="app">
    <Router>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
            <Link to="/">
              Cryptoverse Inc.
            </Link> <br />
            All Rights Reserved.
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>

          </Space>
        </div>
      </div>
    </Router>
  </div>
);

export default App;
