import React from "react";
import "../Asset/CSS/MindWellness.css";
import { FaFacebook } from "react-icons/fa";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import phone from "../Asset/Images/phone.png";
import email from "../Asset/Images/email.png";
import location from "../Asset/Images/location.png";
import logo from "../Asset/Images/contact-logo.png";

const Contact_detail = () => {
  const top = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="contact-page-mind">
        <div className="container-fluid">
          <div className="container-sm">
            <div className="row justify-content-center">
              <div className="col-2 justify-content-center">
                <span className="">
                  <img
                    src={logo}
                    alt="logo"
                    className="logo img-fluid w-auto h-auto"
                  />
                </span>
                <div className="follow-us ps-5">
                  <p className="mt-5">Follow Us:</p>
                  <div className="icons text-center d-flex gap-3">
                    <i className="txt-blue facebook">
                      <FaFacebook />
                    </i>
                    <i className="txt-blue insta">
                      <BsInstagram />
                    </i>
                  </div>
                </div>
              </div>
              <div className="col-3 contact-services ps-5">
                <h5>Services</h5>

                <li>
                  Management of Mental illness
                  <i className="right-arrow">
                    <RiArrowRightSLine />
                  </i>
                </li>
                <li className="pt-3">
                  Therapies
                  <i className="right-arrow">
                    <RiArrowRightSLine />
                  </i>
                </li>
                <li className="pt-3">
                  Assessments
                  <i className="right-arrow">
                    <RiArrowRightSLine />
                  </i>
                </li>
              </div>
              <div className="col-2">
                <h5>About Us</h5>
              </div>
              <div className="col-3 justify-content-center">
                <h5>Contact Us</h5>
                <div className="col justify-content-center contact_Mind">
                  <div className="row pt-2">
                    <div className="col-2">
                      <span className="">
                        <img src={location} alt="location" className="" />
                      </span>
                    </div>
                    <div className="col-10">
                      <h6 className="">Address</h6>
                      <p className="">
                        198 West 21th Street,
                        <br />
                        Suite 721 New York NY 10016
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2">
                      <span className="">
                        <img src={phone} alt="phone" className="icon-img" />
                      </span>
                    </div>
                    <div className="col-9">
                      <h6 className="">Phone</h6>
                      <p className=" ">+91 232989 49878</p>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-2">
                      <span className="">
                        <img src={email} alt="email" className="" />
                      </span>
                    </div>
                    <div className="col-9 ">
                      <h6 className="">E-mail</h6>
                      <p className="">dr@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1 mb-5">
                <i onClick={top} className="up-arrow ">
                  <FaRegArrowAltCircleUp />
                </i>
              </div>
            </div>
          </div>

          <div className="footer">
            <div className="hr "></div>
            <hr className="text-center mb-0 ps-5 me-0" />
            <p className="text-center mb-5">
              Design & Developed by RAK Softech PVT. LTD.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_detail;
