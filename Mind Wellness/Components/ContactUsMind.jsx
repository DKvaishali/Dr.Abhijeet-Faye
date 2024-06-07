import React from "react";
import "../Asset/CSS/MindWellness.css";
import phone from "../Asset/Images/phone.png";
import email from "../Asset/Images/email.png";
import location from "../Asset/Images/location.png";

const ContactUsMind = () => {
  return (
    <div className="container-fluid">
      <div className="contactMind pt-4 pb-5">
        <h5 className="text-center font-bold txt-blue">Contact Us</h5>
        <div className="row">
          <div className="col-4 mt-5 contact_map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.07372680923!2d-74.31001987831881!3d40.69701731549497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1714383051743!5m2!1sen!2sin"
              width="580"
              height="490"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-6 me-0 ps-5 contact-detail">
            <div className="row mt-4">
              <div className="col-3 mt-5">
                <span className="back_img_icon mt-3">
                  <img src={phone} alt="phone" className="icon-img" />
                </span>
              </div>
              <div className="col-8 mt-4">
                <h6 className="">Phone</h6>
                <p className=" mb-0 pt-1">+91 232989 49878</p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-3 mt-5">
                <span className="back_img_icon mt-3">
                  <img src={email} alt="email" className="" />
                </span>
              </div>
              <div className="col-8 mt-4">
                <h6 className="">E-mail</h6>
                <p className="mb-0 pt-1">dr@gmail.com</p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-3 mt-5 ">
                <span className="back_img_icon">
                  <img src={location} alt="location" className="" />
                </span>
              </div>
              <div className="col-8 mt-4">
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
  );
};

export default ContactUsMind;
