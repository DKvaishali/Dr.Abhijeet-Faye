import React, { useState, useEffect } from 'react';
import { FaAngleRight } from "react-icons/fa";

const questionsAndAnswers = [
  { question: "What is a Payment Gateway?", 
  answer: "A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses. Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players.Payment gateways play a vital role in the online transaction process,which is the realisation of value, and hence are seen as an important pillar of ecommerce." },
  { question: "Do I need to pay to Instapay even when there is no transaction going on in my business?",
   answer: "No, you do not need to pay Instapay where there is no transaction happening. With one of the lowest transaction charges in the industry, pay only when you get paid!" },
  { question: "What platforms does Instapay payment gateway support?",
   answer: "Instapay helps you accept online payments from customers across Desktop, Mobile web, Android & iOS globally." },
  { question: "Does Instapay provide international payments support?", 
  answer: "Yes, Instapay provides support for International transactions. We support all major international cards and 92 currencies including USD, EUR, GBP, SGD, AED." },
  { question: "Is there any setup fee or annual maintenance fee that I need to pay regularly?",
   answer: "We do not charge for the setup and annual maintainance. You only pay for the plan that you are opting to." },
  // Add more questions and answers here
];

const FAQ = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % questionsAndAnswers.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
}, []);

  return (
    <div className='mt-5  justify-content-center container'>
      <h1 className='faq-heading'><span className='txt-blue'>Frequently Asked </span>Questions</h1>
<div className="faq-container mt-5">
            <ul className="questions">
                {questionsAndAnswers.map((item, index) => (
                    <li
                       
                    key={index}
                        className={`question ${index === currentIndex ? 'active' : ''}`}
                    >
                        {item.question}<i><FaAngleRight/></i>
                        </li>
                ))}
            </ul>
            <div className="answers">
                {questionsAndAnswers.map((item, index) => (
                    <div
                        key={index}
                        className={`answer ${index === currentIndex ? 'active' : ''}`}
                    >
                      <h5>{item.question}</h5>
                        {item.answer}
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default FAQ
