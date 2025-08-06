import React, { useState } from 'react';
import Button from '../components/Button';
import LinkBtn from "../components/LinksBtn";
import classes from "../data/Classes.json";
import { CiSearch } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
import { IoCalendarOutline, IoEyeOutline } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import { FiPlus } from "react-icons/fi";

const MyClasses = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [search, setSearch] = useState("");

  return (
    <div className='m-4 space-y-5'>
      {/* Top Section */}
      <section className='flex justify-between items-center'>
        <div className='flex gap-3 items-center'>
          <div className='relative'>
            <input
              className='border border-gray-400 rounded-sm px-9 py-2 w-[603px]'
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search'
            />
            <div className='absolute left-4 top-3'>
              <CiSearch className='w-5 h-5' />
            </div>
          </div>
          <VscSettings className='w-10 h-10 p-2 rotate-90 rounded-sm border border-gray-400' />
        </div>
        <Button
          icon={<IoCalendarOutline className='w-5 h-5' />}
          text={"View Timetable"}
          className={"bg-nav text-white px-3 py-2 rounded-lg flex items-center gap-1"}
        />
      </section>

      {/* Classes List */}
      <section className='border rounded-2xl border-[#EAECF0] p-5 space-y-5'>
        <h3 className='text-[#2D2D31] text-2xl font-bold'>Classes</h3>

        {/* Header Row */}
        <div className='p-5 bg-[#F1F4F9]'>
          <ul className='grid grid-cols-8 gap-4'>
            <li className='col-span-2 text-[#242525] font-bold'>Name</li>
            <li className='col-span-2 text-[#242525] font-bold'>Number of Pupils</li>
            <li className='col-span-2 text-[#242525] font-bold'>Teachers</li>
            <li className='col-start-8 text-[#242525] font-bold'>Action</li>
          </ul>
        </div>

        {/* Class Data Rows */}
        {classes.classes.map((cls) => (
          <div key={cls.class_id}>
            <ul className='grid grid-cols-8 gap-4 text-[17px] p-5'>
              <li className='col-span-2'>{cls.name}</li>
              <li className='col-span-2'>{cls.student_count}</li>
              <li className='col-span-2'>{cls.homeroom_teacher}</li>
              <li className='col-start-8 relative'>
                <Button
                  icon={<SlOptionsVertical />}
                  onClick={() =>
                    setActiveDropdown((prev) => (prev === cls.class_id ? null : cls.class_id))
                  }
                />
                {activeDropdown === cls.class_id && (
                  <div className='w-60 bg-white absolute right-0 z-20 shadow-2xl shadow-[#10182886]'>
                    <div className="flex flex-col justify-between">
                      <LinkBtn
                        to={`/view-profile/${cls.class_id}`}
                        icon={<IoEyeOutline className='w-5 h-5' />}
                        text={"View Detail"}
                        className={"py-3 px-4 text-left text-gray-600 flex items-center gap-2"}
                      />
                      <hr className='border border-gray-300' />
                      <Button
                        icon={<FiPlus className='w-5 h-5' />}
                        text={"Add student"}
                        className={"py-3 px-4 text-left text-gray-600 flex items-center gap-2"}
                      />
                    </div>
                  </div>
                )}
              </li>
            </ul>
            <hr className='border-gray-300' />
          </div>
        ))}

        {/* Pagination Placeholder */}
        <section className='flex justify-end py-3'>
          <div className='flex gap-3'>
            <Button text={"Previous"} className={"border border-gray-400 py-2 px-4 rounded-lg"} />
            <Button text={"Next"} className={"border border-gray-400 py-2 px-4 rounded-lg"} />
          </div>
        </section>
      </section>
    </div>
  );
};

export default MyClasses;
