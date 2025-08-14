import React, { useState, useRef, useEffect } from 'react';
import Button from '../components/Button';
import LinkBtn from "../components/LinksBtn";
import Classes from "../data/Classes.json";
import Profile1 from "../assets/images/Image1.jpg"
import Profile2 from "../assets/images/Image2.jpg"
import Profile3 from "../assets/images/Image3.jpg"
import Profile4 from "../assets/images/Image4.jpg"
import Profile5 from "../assets/images/Image5.jpg"
import Profile6 from "../assets/images/Image6.jpg"
import Profile7 from "../assets/images/Image7.jpg"
import Profile8 from "../assets/images/Image8.jpg"
import Profile9 from "../assets/images/Image9.jpg"
import { CiSearch } from "react-icons/ci";
import { LuSettings2 } from "react-icons/lu";
import { IoCalendarOutline, IoEyeOutline } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import { FiPlus } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";

const MyClasses = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [search, setSearch] = useState("");
  const dropdownRefs = useRef({}); // store a ref for each row

  // click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      Object.keys(dropdownRefs.current).forEach((id) => {
        if (
          dropdownRefs.current[id] &&
          !dropdownRefs.current[id].contains(event.target)
        ) {
          if (activeDropdown === id) setActiveDropdown(null);
        }
      });
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  const ProfilePics = [Profile1, Profile2, Profile3, Profile4, Profile5, Profile6, Profile7, Profile8, Profile9]

  return (
    <div className='m-4 space-y-5' >
      {/* Top Section */}
      <section className='flex justify-between items-center'>
        <div className='flex gap-3 items-center w-[50%]'>
          <div className='relative w-full'>
            <input
              className='w-full border border-gray-400 rounded-xl pl-9 py-3 '
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search for class'
            />
            <div className='absolute left-4 top-4.5'>
              <CiSearch className='w-4 h-4' />
            </div>
          </div>
          <div className='py-[14.5px] px-[15.5px] rotate-90 rounded-xl border border-gray-400'>
            <LuSettings2 className='w-4 h-4.5' />
          </div>
        </div>
        <div className="w-[50%]">
          <div className='flex justify-end'>
            <LinkBtn
              to="/view-table"
              icon={<IoCalendarOutline className='w-5 h-5' />}
              text={"View Timetable"}
              className={"bg-[#6941C6] font-semibold text-white px-5 py-[9px] rounded-lg flex items-center gap-1"}
            />
          </div>
        </div>
      </section>

      {/* Classes List */}
      <section className='border rounded-2xl border-[#EAECF0] space-y-5'>
        <div className="p-5">
          <h3 className='text-[#2D2D31] text-2xl font-bold'>Classes</h3>
        </div>

        {/* Header Row */}
        <div className='pr-5' >
          <table className="w-full" >
            <thead>
              <tr className="text-[#242525] font-bold">
                <th scope="col" className="px-6 py-4 text-left bg-[#F1F4F9] rounded-l-lg ">Name</th>
                <th scope="col" className="px-6 py-4 text-left bg-[#F1F4F9]">Number of Pupils</th>
                <th scope="col" className="px-6 py-4 text-left bg-[#F1F4F9]">Teachers</th>
                <th scope="col" className="px-6 py-4 text-left bg-[#F1F4F9] rounded-r-lg">Action</th>
              </tr>
            </thead>
            <tbody>
              {Classes.classes.map((cls) => (
                <tr className="border-b border-gray-200 hover:bg-gray-50" key={cls.class_id}>
                  <td className="px-6 py-4 text-gray-900 text-sm font-semibold">{cls.name}</td>
                  <td className="px-6 py-4 text-gray-900 text-sm">{cls.student_count}</td>
                  <td className="px-6 py-4 text-gray-900 text-sm">
                    <div className='flex'>
                      {ProfilePics.map((profile, index) => (
                        <img key={index} className='w-8 h-8 -ml-2 rounded-full' src={profile} alt="" />
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-900 relative" ref={(el) => (dropdownRefs.current[cls.class_id] = el)}>
                    <Button
                      icon={<SlOptionsVertical />}
                      onClick={() =>
                        setActiveDropdown((prev) => (prev === cls.class_id ? null : cls.class_id))
                      }
                    />
                    {activeDropdown === cls.class_id && (
                      <div className='w-60 bg-white absolute right-0 z-20 rounded-lg shadow-lg shadow-[#1018283B]'>
                        <div className="flex flex-col justify-between">
                          <LinkBtn
                            to={`/view-profile/${cls.class_id}`}
                            icon={<IoEyeOutline className='w-[15px] h-[15px]' />}
                            text={"View Detail"}
                            className={"py-3 px-4 text-gray-800 flex items-center gap-2"}
                          />
                          <hr className=' text-[#F0F0F0]' />
                          <Button
                            icon={<FiPlus className='w-[15px] h-[15px]' />}
                            text={"Add Student"}
                            className={"py-3 px-4 text-gray-800 flex items-center gap-2"}
                          />
                        </div>
                      </div>
                    )}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Placeholder */}
        <section className='flex justify-end  px-5 py-4.5'>
          <div className='flex justify-end  items-center gap-10 px-5 py-4.5'>
            <div className='flex gap-3'>
              <Button text={"Previous"} className={"border text-base font-bold text-gray-700 border-gray-400 shadow-xs shadow-[#1018280D] py-2 px-4 rounded-lg"} />
              <Button text={"Next"} className={"border text-base font-bold text-gray-700 border-gray-400 shadow-xs shadow-[#1018280D] py-2 px-4 rounded-lg"} />
            </div>
            <span className={"text-sm font-medium text-gray-700"}>Result 1 of 10</span>
          </div>
        </section>
      </section>
    </div>
  );
};

export default MyClasses;
