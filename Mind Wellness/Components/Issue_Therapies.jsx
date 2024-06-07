import React from 'react';
import '../Asset/CSS/MindWellness.css';
import { CiMedicalCross } from "react-icons/ci";

const Issue_Therapies = () => {
  return (
    <div>
             <div className="common-issue  container-fluid bg-white">
            <div className="row d-flex ">
              <div className="col-2 medical-cross">
                <i className="txt-blue fw-1000">
                  <CiMedicalCross />
                </i>
              </div>
              <div className="col-8  pe-5 me-5 what-text">
                <h6>Therapies</h6>
                <ul className="Therapies">
               <li>Behavioural therapies</li>
                <li>Rational Emotive Behavior Therapy (REBT)</li>
                <li>Cognitive Behavior Therapy (CBT)</li>
                <li>Couple therapy</li>
                <li>Relaxation therapy</li>
                <li>Marital/Premarital counselling</li>
                <li>Carrier counselling</li>
                <li>Stress management</li>

                  
                </ul>
              </div>
            </div>
          </div>   
    </div>
  )
}

export default Issue_Therapies
