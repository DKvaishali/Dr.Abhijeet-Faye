import React from 'react';
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import '../Asset/CSS/MindWellness.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core';
import 'swiper/swiper-bundle.css'; 
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

SwiperCore.use([Pagination]);

const Patient_Satisfaction = () => {
  return (
    <div className='mb-1'>
           <div className="Patient-Satisfaction justify-content-center pt-5">
          <h1 className='text-center'>Patient <span className='txt-blue'>Satisfaction</span></h1>
          <div className="container-fluid d-flex ">
          <div className="row mt-5">
          <Swiper
      spaceBetween={30} // Space between slides in pixels
      slidesPerView={3} // Number of slides to show at once
      pagination={{
        
        clickable: true, // Allows pagination bullets to be clicked
      }}
      modules={[Pagination]} // Ensure to include Pagination module
      className="swiper-container" // Optional: custom class for additional styling
    >
       <SwiperSlide className=''>
            <div className=" col-4 patient-image">
              </div>
            </SwiperSlide>
    <SwiperSlide className=''>
            <div className="col-4">
              <div className="Patient-Satisfaction-second">
              <i className=''><BiSolidQuoteAltLeft /></i>
              <p>Dr. Faye is an exceptional <br/>
              psychiatrist who truly listens and<br/>
               understands. Their insight and <br/>
               guidance have been instrumental<br/>
                in my journey towards healing and <br/>
                self-discovery. I feel empowered <br/>
                and supported every step of the<br/>
                 way. Thank you, Dr. [Last Name],<br/>
                 for your unwavering commitment <br/>
                to my mental well-being.</p>
                
                </div>
                <div className=" mt-4  d-flex patient-second-image">
                <div className="patient-second-photo"></div>
                  <div className=" ms-3">
                    <span className='patient-second-name'>Ashish K.</span>
                  
                  <p className='address'>Pune</p></div>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className=''>
            <div className="col-4  ps-0 ms-0">
              <div className=" Patient-Satisfaction-second bg-white">
              <i className=''><BiSolidQuoteAltLeft /></i>
              <p>Finding Dr. Faye was a turning <br/>
              point in my life. Their expertise in<br/>
               psychiatry combined with their<br/>
               genuine care and empathy created <br/>
                a safe space for me to open up and<br/>
                 address my struggles.I'm grateful<br/>
                  for the positive changes I've<br/>
                   experienced under their guidance.</p>
                
                </div>
                <div className=" mt-4  d-flex patient-third-image">
                <div className="patient-third-photo"></div>
                <div className=" ms-3 ">
                    <span className='patient-second-name'>Sakshi G.</span>
                  
                  <p className='address'>Nagpur</p></div>
                </div>
            </div>
            </SwiperSlide>            
            <SwiperSlide className='me-0'>
            <div className="col-4">
              <div className="Patient-Satisfaction-second">
              <i className=''><BiSolidQuoteAltLeft /></i>
              <p>Dr. Faye is an exceptional <br/>
              psychiatrist who truly listens and<br/>
               understands. Their insight and <br/>
               guidance have been instrumental<br/>
                in my journey towards healing and <br/>
                self-discovery. I feel empowered <br/>
                and supported every step of the<br/>
                 way. Thank you, Dr. [Last Name],<br/>
                 for your unwavering commitment <br/>
                to my mental well-being.</p>
                
                </div>
                <div className=" mt-4  d-flex patient-second-image">
                <div className="patient-second-photo"></div>
                <div className=" ms-3">
                    <span className='patient-second-name'>Ashish K.</span>
                  
                  <p className='address'>Pune</p></div>
                </div>
            </div>
            </SwiperSlide> 
            </Swiper>
          </div>
          </div>
        </div>   
    </div>
  )
}

export default Patient_Satisfaction
