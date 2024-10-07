import React, { useState } from 'react'
import Search from '../../../Assets/Images/search.svg'
import Filter from '../../../Assets/Images/filter.svg'
import { Link } from 'react-router-dom';

const Permission = () => {

    const [toggleDrop, setToggleDrop] = useState(false);

    function handledrop() {
      setToggleDrop(!toggleDrop)
    }

    
  return (
    <div className='permisson-tab mt-[20px]'>
          <div className='flex justify-between flex-col xl:flex-row lg:flex-col lg:gap-[15px] md:flex-col gap-[15px] lg:gap-[0px]'>
        <div className='flex lg:gap-[20px] flex-col gap-[10px] lg:flex lg:flex-row'>
          <div className='searching-input relative'>
            <img src={Search} className='absolute left-2 top-3' />
            <input type="text" className='border rounded-md bg-[#F4F5F9] p-[8px] pl-[30px] w-[100%] lg:w-[225px] focus-visible:outline-none' placeholder='Search' />

          </div>

          <select className='border rounded-md bg-[#F4F5F9] p-[8px] lg:w-[240px] w-[100%] focus-visible:outline-none text-sm'>
            <option>All Departments</option>
          </select>

          <div className='flex gap-[10px] whitespace-nowrap justify-end items-center cursor-pointer'>
            <img src={Filter} className='w-[40px] h-[40px] bg-[#F4F5F9] rounded-full p-[10px]' />
            <h2 className='text-[14px] font-normal	'>More Filters</h2>
          </div>

        </div>
        <div className='flex gap-[15px] justify-between lg:justify-start'>
          <button className='border border-1 pl-3 pr-3 rounded-md pt-2 pb-2 text-sm'>Update Early Leaving Policy</button>
          
        </div>
      </div>


      <div className='w-[100%] flex rounded-md shadow overflow-scroll border border-1 mt-4 pl-3 pr-3'>
        <table className='table-section mt-4 w-full'>
          <thead className='border border-1 '>
            <th>#</th>
            <th>Name</th>
            <th>Job Title</th>
            <th>Role</th>
            

          </thead>
          <tbody>
            <td><input type='checkbox' className='border border-1 rounded-md '/></td>
            <td>Demo</td>
            <td>Demo</td>
            <td>Demo</td>
            
          </tbody>
        </table>
      </div>
    </div>
   
  )
}

export default Permission