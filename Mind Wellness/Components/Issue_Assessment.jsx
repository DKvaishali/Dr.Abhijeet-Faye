import React from "react";
import '../Asset/CSS/MindWellness.css';
import { CiMedicalCross } from "react-icons/ci";

const Issue_Assessment = () => {
  return (
    <div>
      <div className="common-issue container-fluid bg-white">
        <div className="row d-flex ">
          <div className="col-2 medical-cross">
            <i className="txt-blue fw-1000">
              <CiMedicalCross />
            </i>
          </div>
          <div className="col-8  pe-5 me-5 what-text">
            <h6>Assessments</h6>
            <ul className="Assesment">
              <li>EEG (Electro Encephalography)</li>
              <li>IQ tests</li>
              <li>ECT (Electro Convulsive therapy)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Issue_Assessment;
