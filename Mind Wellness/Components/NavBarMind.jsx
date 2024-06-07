import React from 'react';
import '../Asset/CSS/MindWellness.css';
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';

const NavBarMind = () => {
  return (
    <div>
      <nav className='nav-scrolled  '>
      <div className='container-fluid mt-0'>
      
      <div className='navMind-top d-flex flex-row-reverse'>
        <p className='p-2 ms-5 ps-5  text-white'><i className='me-2'><IoCall /></i>Call us : +91 12345 67890</p>
        <p className='pt-2 text-white '><i className='me-2'><MdEmail /></i>Email</p>
       </div>
       </div>
       
      <nav className=' navbar  mt-2 navbar-expand-lg bg-transparent navbar-light'>
      
        <div className='container'>
        <Link to='#' className='navbar-brand'></Link>
        <button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#menu'>
            <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='menu'>
            <ul className='navbar-nav mind-nav me-5 text-center gap-md-2 '>
                <li className='nav-item_mind' > <Link to='/Mind_Home' activeClass='active' spy={true} smooth={true} offset={-100} duration={500} className='nav-link  text-black'>Home</Link></li>
                <li className='nav-item_mind' ><Link to='/Mind_Home'   className='nav-link text-black'>Gallery</Link></li>
                <li className='nav-item_mind' ><Link to='/Mind_About'   className='nav-link text-black'>About</Link></li>
                <li className='nav-item_mind'>
                <Link href='/Mind_Services'className='nav-link text-black'>Services <i className='ms-2' ><IoIosArrowDown /></i> 
                <span className="dropdown-content">
        <Link to="/Mind_Services">Management Of</Link>
        <Link to="/Mind_Services">Therapies</Link>
        <Link to="/Mind_Services">Assessments</Link>
      </span>
                </Link></li>
                <li className='nav-item_mind' ><Link to='/Mind_Information'   className='nav-link text-black'>Information</Link></li>
           
           
       
        <form class="d-flex float-right">
<button class="cont_mind ms-5 me-0"><Link to='/Mind_ContactUs'>Contact</Link></button>
       
      </form>
      </ul>
      </div>
        </div>
      </nav>

           </nav>    
    </div>
  )
}

export default NavBarMind
