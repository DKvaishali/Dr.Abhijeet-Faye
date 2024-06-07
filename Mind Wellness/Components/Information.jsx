import React from 'react';
import { data } from './data';
import Infor_Accordian from './Infor_Accordian';

const Information = () => {
  return (
    <div>
       <div className='Information justify-content-center  mt-5 '>
     <h1 className='text-center txt-blue'>Information</h1>
     <div className="dropdown-list">
            {data.map(item => (
                <Infor_Accordian key={item.id} item={item} />
            ))}
        </div>
        </div>
    </div>
  )
}

export default Information
