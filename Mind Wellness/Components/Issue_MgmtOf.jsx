import React from "react";
import '../Asset/CSS/MindWellness.css';
import { CiMedicalCross } from "react-icons/ci";

const Issue_MgmtOf = () => {
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
            <h6>Management of </h6>
            <ul className="Management-of">
              <li>Schizophrenia</li>
              <li>Depression</li>
              <li>Anxiety</li>
              <li>Obsessive compulsive disorder</li>
              <li>Phobias</li>
              <li>Addictions (substances, internet, others)</li>
              <li>Children’s psychological problems</li>
              <li>
                Geriatric mental health problems (dementia, depression, others)
              </li>
              <li>Sexual disorders</li>
              <li>Headache</li>
              <li>Epilepsy</li>
              <li>Sleep difficulties</li>
              <li>Mental retardation</li>
              <li>Autism, ADHD</li>
              <li>Marital problems</li>
              <li>Psychological problems in cancer</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Issue_MgmtOf;
