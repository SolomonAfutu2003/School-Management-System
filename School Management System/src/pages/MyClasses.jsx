import React, { useState } from 'react'
import Button from '../components/Button'
import LinkBtn from "../components/LinksBtn"
import classes from "../data/Classes.json"
import { CiSearch } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
import { IoCalendarOutline } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import { IoEyeOutline } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";

const MyClasses = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [search, setSearch] = useState("")

  const searchData = classes.filter(
    (cls) => cls.name.toLowerCase().includes(search.toLowerCase())
  )


  return (
    <div className='m-4 space-y-5'>
      <section className='flex justify-between items-center'>
        <div className='flex gap-3 items-center'>
          <div className='relative'>
            <input className='border border-gray-400 rounded-sm px-9 py-2 w-[603px]' type="search" value={search} onChange={(e) => setSearch(e.target.value)} name="" id="" placeholder='Search' />
            <div className=' left-4 top-3 absolute'>
              <CiSearch className='w-5 h-5' />
            </div>
          </div>
          <VscSettings className='w-10 h-10 p-2 rotate-90 rounded-sm border border-gray-400' />
        </div>
        <Button icon={<IoCalendarOutline className='w-5 h-5' />} text={"View Timetable"} className={"bg-nav text-white px-3 py-2 rounded-lg flex items-center gap-1"} />
      </section>
      
      <section className='border rounded-2xl border-[#EAECF0] p-5 space-y-5'>
        <h3>Classes</h3>
        <div className='p-5 bg-[#F1F4F9]'>
          <ul className='grid grid-cols-8 gap-4 '>
            <li className='col-span-2'>Name</li>
            <li className='col-span-2'>Number of Pupils</li>
            <li className='col-span-2'>Teachers</li>
            <li className='col-start-8'>Action</li>
          </ul>
        </div>
        {
          searchData.map((cls) => (
            <div key={cls.id}>
              <ul className='grid grid-cols-8 gap-4 text-[17px] p-5' >
                <li className='col-span-2'>{
                  searchData.length > 0 ? cls.name : classes.name
                }</li>
                <li className='col-span-2'>{
                  searchData.length > 0 ? cls.studentCount : classes.studentCount
                }</li>
                <li className='col-span-2'>{
                  searchData.length > 0 ? cls.teachers.map((t) => t.name).join(", ") : classes.teachers.map((t) => t.name).join(", ")
                }</li>
                <li className='col-start-8 relative'>
                  <Button icon={<SlOptionsVertical />} onClick={() => setActiveDropdown(prev => (prev === cls.id ? null : cls.id))} />
                  {activeDropdown === cls.id &&
                    (<div className='w-60 bg-white absolute right-0 z-20 shadow-lg shadow-black'>
                      <div className="flex flex-col justify-between">
                      <LinkBtn to={`/view-detail/${cls.id}`} icon={<IoEyeOutline className='w-5 h-5' />} text={"View Detail"} className={"py-3 px-4 text-left text-gray-600 flex items-center gap-2"} />
                        <hr className='border border-gray-300' />
                        <Button icon={<FiPlus className='w-5 h-5' />} text={"Add student"} className={"py-3 px-4 text-left text-gray-600 flex items-center gap-2"} />
                      </div>
                    </div>)
                  }
                </li>
              </ul>
              <hr className='border-gray-300' />
            </div>
          ))
        }

        {classes.map((cls) => (
          <div key={cls.id}>
            <ul className='grid grid-cols-8 gap-4 text-[17px] p-5' >
              <li className='col-span-2'>{cls.name}</li>
              <li className='col-span-2'>{cls.studentCount}</li>
              <li className='col-span-2'>{cls.teachers.map((t) => t.name).join(", ")}</li>
              <li className='col-start-8 relative'>
                <Button icon={<SlOptionsVertical />} onClick={() => setActiveDropdown(prev => (prev === cls.id ? null : cls.id))} />
                {activeDropdown === cls.id &&
                  (<div className='w-60 bg-white absolute right-0 z-20 shadow-lg shadow-black'>
                    <div className="flex flex-col justify-between">
                      <LinkBtn to={`/view-detail/${cls.id}`} icon={<IoEyeOutline className='w-5 h-5' />} text={"View Detail"} className={"py-3 px-4 text-left text-gray-600 flex items-center gap-2"} />
                      <hr className='border border-gray-300' />
                      <Button icon={<FiPlus className='w-5 h-5' />} text={"Add student"} className={"py-3 px-4 text-left text-gray-600 flex items-center gap-2"} />
                    </div>
                  </div>)
                }
              </li>
            </ul>
            <hr className='border-gray-300' />
          </div>
        ))}
        <section className='flex justify-end py-3'>
          <div className='flex gap-3'>
            <Button text={"Previous"} className={"border border-gray-400 py-2 px-4 rounded-lg"} />
            <Button text={"Next"} className={"border border-gray-400 py-2 px-4 rounded-lg"} />
            <Button text={"Previous"} className={"border border-gray-400 py-2 px-4 rounded-lg"} />
          </div>
        </section>
      </section>
    </div>
  )
}

export default MyClasses