import React from 'react';
import NavBarMind from '../Components/NavBarMind';
import NourishMind from '../Components/Nourish_Mind';
import Dr_Faye from '../Components/Dr_Faye';
import Patient_Satisfaction from '../Components/Patient_Satisfaction';
import Awerness_Gallery from '../Components/Awerness_Gallery';
import ContactUsMind from '../Components/ContactUsMind';
import Contactdetail from '../Components/Contact_detail';

const Mind_About = () => {
  return (
    <div>
    <NavBarMind/>
    <NourishMind/>
    <Dr_Faye/>
    <Patient_Satisfaction/>
    <Awerness_Gallery/>
    <ContactUsMind/>
    <Contactdetail/>  
    </div>
  )
}

export default Mind_About
