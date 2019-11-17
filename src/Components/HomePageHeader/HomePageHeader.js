import React from 'react';
import Header from '../../Shared/Header';


const HomePageHeader = () => {
  const img = require("../../assets/img/header-bg.jpg");

  return(
   <Header
    title="Welcome To Our Studio!"
    subTitle="IT'S NICE TO MEET YOU"
    buttonText="TELL ME MORE"
    showButton={true}
    image={img}
   />
  );
};

export default HomePageHeader;
