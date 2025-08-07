import React, { useState } from 'react';
import GuardiansData from "../../data/Guardians.json";
import Button from '../../components/Button';
import LinkBtn from "../../components/LinksBtn";
import { CiSearch } from "react-icons/ci";
import { SlOptionsVertical } from "react-icons/sl";
import { IoEyeOutline } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
// import { IoMdClose } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { VscSettings } from "react-icons/vsc";

const Guardians = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeFilterMenu, setActiveFilterMenu] = useState(null);
  const [selectedGender, setSelectedGender] = useState("");
  const [search, setSearch] = useState("");



  return (
    <div className='m-4 space-y-5'>
      {/* Search Bar */}
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
          <div className='relative'>
            <VscSettings className='w-10 h-10 p-2 rotate-90 rounded-sm border border-gray-400' onClick={() => setActiveFilterMenu(prev => !prev)} />
            {activeFilterMenu && (
              <div className='border border-gray-400 bg-white w-64 h-[205px] absolute top-12 z-20 p-3 space-y-5'>
                <div>
                  <h3>Gender</h3>
                  <label className="flex items-center gap-2 cursor-pointer relative mb-2">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      className="peer hidden"
                      checked={selectedGender === "Male"}
                      onChange={() => setSelectedGender("Male")}
                    />
                    <div className="w-5 h-5 rounded-sm border-2 border-gray-400 relative peer-checked:border-nav flex items-center justify-center">
                    </div>
                    <FaCheck className='absolute text-nav w-3 h-3 left-1 right-1 hidden peer-checked:block' />
                    <span className="peer-checked:font-bold">Male</span>
                  </label>
                  <label className="flex items-center gap-2 relative cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      className="peer hidden"
                      checked={selectedGender === "Female"}
                      onChange={() => setSelectedGender("Female")}
                    />
                    <div className="w-5 h-5 rounded-sm border-2 border-gray-400 relative peer-checked:border-nav flex items-center justify-center">
                    </div>
                    <FaCheck className='absolute text-nav w-3 h-3 left-1 right-1 hidden peer-checked:block' />
                    <span className="peer-checked:font-bold">Female</span>
                  </label>
                </div>
                <hr className='bg-gray-400' />
                <div className='flex justify-between'>
                  <Button text={"Reset"}
                    className={"text-nav px-4 py-2 w-24 border border-nav rounded-md"}
                    onClick={() => {
                      setSelectedGender("");
                    }} />
                  <Button text={"Save"}
                    className={"bg-nav text-white px-4 py-2 w-24 rounded-md"} />
                </div>
              </div>
            )}
          </div>
        </div>
        <Button icon={<FiPlus className='w-5 h-5' />}
          text={"Add Teacher"}
          className={"bg-nav text-white px-3 py-2 rounded-lg flex items-center gap-1"} />
      </section>

      {/* Students Table */}
      <section className='border rounded-2xl border-[#EAECF0] p-5 space-y-5'>
        <h3 className='text-2xl font-semibold'>Parents</h3>

        {/* Header Row */}
        <div className='p-5 bg-[#F1F4F9]'>
          <ul className='grid grid-cols-12 gap-4'>
            <li className='col-span-2'>Student Name</li> 
            <li className='col-span-2'>Number</li>
            <li className='col-span-2'>Ward Name</li>
            <li className='col-span-1'>Ward ID</li>
            <li className='col-span-1'>Gender</li>
            <li className='col-span-1'>Class</li>
            <li className='col-start-12'>Action</li>
          </ul>
        </div>

        {GuardiansData.guardians.map((guardian) => (
          <div key={guardian.teacher_id}>
            <ul className='grid grid-cols-12 gap-4 text-[15px] p-2'>
              <li className='col-span-2'>{guardian.students.map((student)=> student.first_name)} {guardian.students.map((student)=> student.last_name)}</li>
              <li className='col-span-2'>{guardian.phone}</li>
              <li className='col-span-2'>{guardian.first_name} {guardian.last_name}</li>
              <li className='col-span-1'>{guardian.guardian_id}</li>
              <li className='col-span-1'>{guardian.gender}</li>
              <li className='col-span-1'>{guardian.students.map((student)=> student.class)}</li>
              <li className='col-start-12 relative'>
                <Button
                  icon={<SlOptionsVertical />}
                  onClick={() =>
                    setActiveDropdown((prev) => (prev === guardian.guardian_id ? null : guardian.guardian_id))
                  }
                />
                {activeDropdown === guardian.guardian_id && (
                  <div className='w-60 bg-white absolute right-0 z-20 shadow-lg shadow-black'>
                    <div className="flex flex-col justify-between">
                      <LinkBtn
                        to={`/admin/view-profile/${guardian.guardian_id}`}
                        icon={<IoEyeOutline className='w-5 h-5' />}
                        text={"View Detail"}
                        className={"py-3 px-4 text-left text-gray-600 flex items-center gap-2"}
                      />
                      <hr className='border border-gray-300' />
                      <Button
                        icon={<FiEdit className='w-5 h-5' />}
                        text={"Edit Detail"}
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
      </section>
    </div>
  );
};

export default Guardians;
