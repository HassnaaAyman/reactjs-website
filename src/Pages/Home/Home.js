import React from 'react';
import HomePageHeader from '../../Components/HomePageHeader/HomePageHeader';
import Services from '../../Components/Services/Services';
import Portfolios from '../../Components/Portfolios/Portfolios';

const Home = () => {
  return (
    <>
    <HomePageHeader/>
    <Services/>
    <Portfolios/>
    </>
  );
};

export default Home;
