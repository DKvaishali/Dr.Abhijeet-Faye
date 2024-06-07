import React from "react";
import '../Asset/CSS/MindWellness.css';
import CBT from '../Asset/Images/CBT.png';
import  Illness from '../Asset/Images/img-1.jpeg';
import depression from '../Asset/Images/depression.jpeg';
import despressions from '../Asset/Images/depression-2.jpeg';


const Our_Services = () => {
  return (
    <div>
      <div className="home-page-fourth mt-5 container-fluid">
        <h1 className=" text-center">
          Our <span className="txt-blue">Services</span>
        </h1>
        <div className="">
          {/*first row */}
          <div className="row mt-5 ps-5 ms-5">
            <div className="col-6  Services-column-row-two">
              <img src={CBT} alt="" />
              <h6>CBT for OCD</h6>
              <p>
                Cognitive Behavioral Therapy (CBT) for Obsessive-
                <br />
                Compulsive Disorder (OCD) is a structured and evidence-
                <br />
                based approach that targets the dysfunctional thoughts
                <br />
                and behaviors underlying OCD symptoms.{" "}
              </p>
            </div>
            <div className="col-6 Services-column-row-two">
              <img src={Illness} alt="" />
              <h6>Psychiatric Illness Issues</h6>
              <p>
                Child Psychology is the study of how children grow, learn,
                <br />
                and develop emotionally, socially, and cognitively from
                <br />
                infancy through adolescence. It explores the intricate
                <br />
                interplay between genetics, environment, and individual <br />
                experiences in shaping a child's behavior and mental well-
                <br />
                being.{" "}
              </p>
            </div>
          </div>
          {/*second row */}
          <div className="row ms-5 ps-5">
            <div className="col-6 Services-column-row-two">
              <img src={depression} alt="" />
              <h6>CBT for Anxiety AND Depression</h6>
              <p>
                Cognitive Behavioral Therapy (CBT) for Obsessive-
                <br />
                Compulsive Disorder (OCD) is a structured and evidence-
                <br />
                based approach that targets the dysfunctional thoughts
                <br />
                and behaviors underlying OCD symptoms.{" "}
              </p>
            </div>
            <div className="col-6 Services-column-row-two">
              <img src={despressions} alt="" />
              <h6>Psychiatric Illness Issues</h6>
              <p>
                Child Psychology is the study of how children grow, learn,
                <br />
                and develop emotionally, socially, and cognitively from
                <br />
                infancy through adolescence. It explores the intricate
                <br />
                interplay between genetics, environment, and individual <br />
                experiences in shaping a child's behavior and mental well-
                <br />
                being.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Our_Services;
