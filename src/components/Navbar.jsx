import React, { useState, useEffect } from 'react';
import { Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';

import icon from '../images/logo.png';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <img className="img-logo" src={icon} />
        <Typography.Title level={2} className="logo">
          <Link to="/" />
        </Typography.Title>
        <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
      </div>
      {activeMenu && (
        <div className="nav-link-container">
          <div className="link">
            {/* <HomeOutlined /> */}
            {/* <a href="http://127.0.0.1:5173/"> */}
            <a href="https://gilded-madeleine-f072d2.netlify.app/">
              Hom
            </a>

          </div>
          <div className="link">
            {/* <FundOutlined /> */}
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </div>
          <div className="link">
            {/* <MoneyCollectOutlined /> */}
            <Link to="/">Market</Link>
          </div>
          <div className="link">
            {/* <BulbOutlined /> */}
            <Link to="/news">News</Link>

          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
