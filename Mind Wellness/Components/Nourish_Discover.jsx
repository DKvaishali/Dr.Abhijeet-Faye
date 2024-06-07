import React from "react";
import '../Asset/CSS/MindWellness.css';
import NavBarMind from "./NavBarMind";
import { Link } from 'react-router-dom';
import HeartPatient from '../Asset/Images/Group 69.png';

const Nourish_Discover = () => {
  return (
    <div>
      <div className="Home-Page-Mind container-fluid">
        <div className="Home-page-first">
        
          <div className="About-mind-page ">
         
            <div className="row">
              <div className="col-6">
                <h3 className="Homeabout-first">
                Empowering <span>Minds, <br/>
                Transforming Lives: Your<br/>
                 Journey to</span> Wellness<br/>
                  Starts Here
                  </h3>
                
                <p className="para">
                  we believe in the power of holistic wellness to <br />
                  promote mental and emotional health.{" "}
                </p>
                <Link to="/Mind_Appointment">
                  <button className=" text-white know-btn">
                    Make An Appointment
                  </button>
                </Link>
              </div>
              <div className="col-6">
                <div className="heart">
                  <img src={HeartPatient} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nourish_Discover;
