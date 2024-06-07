import React from 'react';
import '../Asset/CSS/MindWellness.css';
import drPhoto from '../Asset/Images/Group 68.png';
import support from '../Asset/Images/support.png';
import Doctor from '../Asset/Images/doctor.png';
import heartrate from '../Asset/Images/heart-rate.png';
import socialcare from '../Asset/Images/social-care.png';



const Why_us = () => {
  return (
    <div className='mt-5'>
        <div className="Home-page-third  ms-0 me-0 pt-5 ">
          <div className="container-fluid">
          <div className="why-us">
          <h1 className='text-center'>Why <span className='txt-blue'>Choose</span> Us?</h1>
          <div className="row">
            <div className="col-6 why-us-feature">
              <div className="features-list">
              <div className="feature-one d-flex">
                <div className="feature-img1">
                <img src={support} alt="support"/>
                </div>
                <h6 className="feature-text1">24 Hrs Service</h6>
              </div>
              <div className="feature-two d-flex">
              <div className="feature-img2">
                <img src={Doctor} alt="doctor"/></div>
                <h6  className="feature-text2">Qualified Doctors</h6>
              </div>
              <div className="feature-three d-flex">
              <div className="feature-img2">
                <img src={heartrate} alt="heart-rate"/></div>
                <h6 className="feature-text2">Passion for work</h6>
              </div>
              <div className="feature-four d-flex">
              <div className="feature-img2">
                <img src={socialcare} alt="social-care"/></div>
                <h6 className="feature-text2">Care for Patients</h6>
              </div>
              </div>
            </div>

            <div className="col-6 why-us-img">
              <img src={drPhoto} className='bg-transparent'/>
              </div>
              </div>
              </div>
              </div>
              </div>
    </div>
  )
}

export default Why_us
