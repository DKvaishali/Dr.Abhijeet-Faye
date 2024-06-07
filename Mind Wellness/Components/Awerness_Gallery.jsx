import React from 'react';
import '../Asset/CSS/MindWellness.css';
import { FaPlay } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";

const Awerness_Gallery = () => {
  return (
    <div>
             <div className="awerness-gallary justify-content-center mb-5">
          <div className="container-fluid">
          <h1 className='text-center pb-5'>Awerness<span className='txt-blue'>Gallery</span></h1>
          <div className="row mt-5">
            <div className="col-6 awerness-gallary-video-one ">
            <i className=' play-circle'><FaRegCircle /></i>
              <i className='fs-1 play-button'><FaPlay /></i>
               
            </div>
            <div className="col-6 awerness-gallary-text-one">
              <p>Dr. Faye's video on mind wellness explores the vital role of<br/>
               mindfulness in promoting mental well-being. With a blend <br/>
               of science and compassion, he guides viewers to cultivate<br/>
                awareness of their thoughts and emotions, empowering<br/> 
                them to navigate life with clarity and resilience. Dr. Faye's<br/>
                 insights inspire a deeper understanding of the mind-body <br/>
                connection and the transformative potential of<br/>
               mindfulness practices for enduring mental health.</p>
            </div>
          </div>
            {/*Second row */}
            <div className="row mt-5">
            <div className="col-6 awerness-gallary-text-two">
              <p>Dr. Faye's video on mind wellness explores the vital role of<br/>
               mindfulness in promoting mental well-being. With a blend <br/>
               of science and compassion, he guides viewers to cultivate<br/>
                awareness of their thoughts and emotions, empowering<br/> 
                them to navigate life with clarity and resilience. Dr. Faye's<br/>
                 insights inspire a deeper understanding of the mind-body <br/>
                connection and the transformative potential of<br/>
               mindfulness practices for enduring mental health.</p>
            </div>
            <div className="col-6 awerness-gallary-video-two ">
            <i className=' play-circle'><FaRegCircle /></i>
              <i className='fs-1 play-button'><FaPlay /></i>
               
            </div>

          </div>
  
        </div>

        </div> 
    </div>
  )
}

export default Awerness_Gallery
