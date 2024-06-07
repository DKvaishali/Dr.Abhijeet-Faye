import React from 'react';
import NavBarMind from '../Components/NavBarMind';
import Nourish_Discover from '../Components/Nourish_Discover';
import Mental_health from '../Components/Mental_health';
import Why_us from '../Components/Why_us';
import Our_Services from '../Components/Our_Services';
import Dr_Faye from '../Components/Dr_Faye';
import Patient_Satisfation from '../Components/Patient_Satisfaction';
import Contact_detail from '../Components/Contact_detail';

const Mind_Home = () => {
  return (
    <div>
    <NavBarMind/>
      <Nourish_Discover/>
      <Mental_health/>
      <Why_us/>
      <Our_Services/>
      <Dr_Faye/>
      <Patient_Satisfation/>
      <Contact_detail/>

    </div>
  )
}

export default Mind_Home
