import React from "react";
import "../Asset/CSS/MindWellness.css";
import phone from "../Asset/Images/phone.png";
import email from "../Asset/Images/email.png";
import location from "../Asset/Images/location.png";

const Appointment = () => {
  return (
    <div>
      <div className="bg-sky">
        <div className="Make-an-appointment justify-content-center ">
          <h1 className="text-center txt-blue">Make an Appointment</h1>
          <div className=" Appointment-box">
            <div className="Appointment-field">
              <form>
                <label className="pt-name">Patient Name</label>
                <input type="text" className="pt-text" />

                <label className="pt-age">Patient Age</label>
                <input type="text" className="pt-text-age" />
                <label className="pt-number">Mobile Number</label>
                <input type="tel" className="pt-text-number" />

                <label className="pt-time">Select Time Slot</label>
                <input type="text" className="pt-text-time" />
                <button className="Book text-white fs-5">Book Slot</button>
              </form>
            </div>
          </div>
          <div className="">
            <div className="ms-5 ps-5 appoint-contact-detail">
              <div className=" row  ms-5 mt-4">
                <div className="col-1 mt-5 ps-5 ">
                  <span className="back_img_icon mt-3">
                    <img src={phone} alt="location" className="icon-img" />
                  </span>
                </div>
                <div className="col-3 mt-5 ps-5 pe-2">
                  <h6 className="">Phone</h6>
                  <p className=" mb-0 pt-1">+91 232989 49878</p>
                </div>

                <div className="col-1 mt-5 ps-5 ">
                  <span className="back_img_icon mt-3">
                    <img src={email} alt="location" className="" />
                  </span>
                </div>
                <div className="col-3 mt-5 ps-5 pe-2">
                  <h6 className="">E-mail</h6>
                  <p className="mb-0 pt-1">dr@gmail.com</p>
                </div>

                <div className="col-1 mt-5 ps-5 ">
                  <span className="back_img_icon">
                    <img src={location} alt="location" className="" />
                  </span>
                </div>
                <div className="col-3 mt-5 ps-5 pe-2">
                  <h6 className="">Address</h6>
                  <p className="">
                    198 West 21th Street, <br />
                    Suite 721 New York NY 10016
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
