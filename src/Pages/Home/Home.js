import React from 'react';
import HomePageHeader from '../../Components/HomePageHeader/HomePageHeader';
import Services from '../../Components/Services/Services';
import Portfolios from '../../Components/Portfolios/Portfolios';
import TeamCards from '../../Components/TeamCards/TeamCards';
import Clients from '../../Components/Clients/Clients';

const Home = () => {
  return (
    <>
    <HomePageHeader/>
    <Services/>
    <Portfolios/>
    <TeamCards/>
    <Clients/>
    </>
  );
};

export default Home;
