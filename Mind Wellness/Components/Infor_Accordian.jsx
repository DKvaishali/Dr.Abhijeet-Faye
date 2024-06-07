import React,{useState} from 'react';
import Detail from './Detail';
import { data } from './data';
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const Infor_Accordian = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
  return (
   <div>
<div className="dropdown-item">
            <div className="dropdown-header" onClick={toggleDropdown}>
                <span>{item.title}</span>
                <span className="dropdown-arrow">{isOpen ? <FaChevronUp /> : <FaChevronDown/>}</span>
            </div>
            {isOpen && 
          
            <Detail description={item.description} />
            }
        </div>
    </div>
  )
}

export default Infor_Accordian
