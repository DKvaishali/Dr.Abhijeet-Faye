import React from "react";
import '../Asset/CSS/MindWellness.css';
import DrFaye from '../Asset/Images/Group\ 67.png';

const Dr_Faye = () => {
  return (
    <div>
      <div className="">
        <div className="dr-faye justify-content-center mb-5 mt-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-6">
                  <div className="dr-faye-bg-img">
                    <img src={DrFaye} alt="DrFaye"/>
                </div>
              </div>
              <div className="col-6 Expert-BDS ">
                <h6>DR. Faye</h6>
                <span>Expert BDS Doctor</span>
                <p>
                  Dr. Faye is a renowned psychiatrist committed to <br />
                  promoting mental health and well-being.With a <br />
                  wealth of experience and expertise in diagnosing
                  <br />
                  and treating a wide range of mental health
                  <br /> conditions, Dr. Faye offers compassionate and <br />
                  personalized care to each patient. By integrating
                  <br />
                  evidence-based therapies and medication
                  <br />
                  management, Dr. Faye empowers individuals to <br />
                  overcome challenges, gain insight, and lead
                  <br />
                  fulfilling lives.
                  <br />
                  <br />
                  Their dedication to ongoing education and a <br />
                  patient-centered approach ensures that every <br />
                  individual receives the support and guidance they
                  <br />
                  need on their journey to mental wellness.
                </p>
                <div className="row  mt-5 me-5 ms-5 ps-4 pe-4 yr10">
                  <div className="col-6 mt-1 ms-0 me-5 yr10-first">
                    <h6 className="ps-4 pt-4">13+</h6>
                    <span className="ps-4">Years Exp.</span>
                  </div>
                  <div className="col-6  mt-1 ms-2 me-0 yr10-second">
                    <h6>1000+</h6>
                    <span className="text-center">Happy Patients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dr_Faye;
