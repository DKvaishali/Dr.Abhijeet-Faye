import React from "react";
import '../Asset/CSS/MindWellness.css';
import mentalhealth from '../Asset/Images/mental-health-2.png';


const Mental_health = () => {
  return (
    <div>
      <div className=" ">
        <div className="container-fluid">
          <div className="  mt-5 ps-5 pe-5 Wel-mental-health">
            <div className="row d-flex">
              <div className="col-6 Mental-health-img">
                <img src={mentalhealth} className="" />
              </div>
              <div className="col-6">
                <div className="Mental-health-text mt-5">
                  <h1>
                    Welcome to our
                    <span className="txt-blue">
                      {" "}
                      Mental
                      <br /> Health
                    </span>{" "}
                    practice
                  </h1>
                  <p>
                  Welcome to ‘Healthy Minds & Kids Dental Care,<br/>
                   where mental wellness is our priority. At our<br/>
                    clinic,we understand the importance of <br/>
                    nurturing your mental health, and we're here to <br/>
                    provide compassionate support every step of <br/>
                    the way. Whether you're seeking guidance for<br/>
                     anxiety, depression, or any other mental health<br/>
                      concern, we are here to help you navigate your<br/>
                       journey towards healing and self-discovery. <br/>
                       <br/>

                      Take the first step towards a brighter tomorrow<br/>
                       by exploring our range of services tailored to<br/>
                        meet your unique needs. Your mental well-being<br/>
                         matters, and we're here to support you on your<br/>
                          path to a healthier, happier life. Welcome to a<br/>
                           place where healing begins.
                  
                  </p>
                  <button className="txt-blue">About Us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mental_health;
