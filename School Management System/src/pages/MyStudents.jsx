import React, { useState } from 'react';
import StudentsData from "../data/Students.json";
import Button from '../components/Button';
import LinkBtn from "../components/LinksBtn";
import Profile from "../assets/images/e5009c87a1c6691336f8e40ae3133dd6b70357d7.jpg"
import { CiSearch } from "react-icons/ci";
import { SlOptionsVertical } from "react-icons/sl";
import { IoEyeOutline } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { VscSettings } from "react-icons/vsc";

const MyStudents = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeFilterMenu, setActiveFilterMenu] = useState(null);
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [search, setSearch] = useState("");



  return (
    <div className='m-4 space-y-5'>
      {/* Search Bar */}
      <section className='flex justify-between items-center'>
        <div className='flex gap-3 items-center'>
          <div className='relative'>
            <input
              className='border border-[#EAEBF0] rounded-lg px-9 py-2 w-[603px]'
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search with name or id'
            />
            <div className='absolute left-4 top-3'>
              <CiSearch className='w-5 h-5' />
            </div>
          </div>
          <div className='relative'>
            <VscSettings className='w-10 h-10 text-[#494A50] p-2 rotate-90 rounded-lg border border-[#EAEBF0]' onClick={() => setActiveFilterMenu(prev => !prev)} />
            {activeFilterMenu && (
              <div className='border border-gray-400 bg-white w-64 h-80 absolute top-12 z-20 p-3 space-y-5'>
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
                <div>
                  <h3>Class</h3>
                  <select
                    className="border border-gray-400 rounded-sm p-2 w-full"
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                  >
                    <option value="">All Classes</option>
                    {StudentsData.students.map((student) => (
                      <option key={student.student_id} value={student.class}>
                        {student.class}
                      </option>
                    ))}
                  </select>
                </div>
                <hr className='bg-gray-400' />
                <div className='flex justify-between'>
                  <Button text={"Reset"}
                    className={"text-nav px-4 py-2 w-24 border border-nav rounded-md"}
                    onClick={() => {
                      setSelectedGender("");
                      setSelectedClass("");
                    }} />
                  <Button text={"Save"}
                    className={"bg-nav text-white px-4 py-2 w-24 rounded-md"} />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Students Table */}
      <section className='border rounded-2xl border-[#EAECF0] space-y-5'>
        <h3 className='text-2xl p-5 font-bold'>Students</h3>

        <div className='pr-5'>
          <table className="w-full">
            <thead>
              <tr className="text-[#242525] font-bold">
                <th className="px-6 py-4 text-left bg-[#F1F4F9] rounded-l-lg">Student Name</th>
                <th className="px-6 py-4 text-left bg-[#F1F4F9]">ID</th>
                <th className="px-6 py-4 text-left bg-[#F1F4F9]">Class</th>
                <th className="px-6 py-4 text-left bg-[#F1F4F9]">Gender</th>
                <th className="px-6 py-4 text-left bg-[#F1F4F9]">Guardian Name</th>
                <th className="px-6 py-4 text-left bg-[#F1F4F9]">Guardian Phone</th>
                <th className="px-6 py-4 text-left bg-[#F1F4F9] rounded-r-lg">Action</th>
              </tr>
            </thead>
            <tbody>
              {StudentsData.students.map((student) => (
                <tr className="border-b border-gray-200 hover:bg-gray-50" key={student.student_id}>
                  <td className="px-6 py-4 text-gray-900 text-sm font-semibold">
                  <div className='flex gap-2 items-center'>
                    <img className='w-7 h-7 rounded-full' src={Profile} alt="" />
                    {student.first_name} {student.last_name}
                  </div>
                  </td>
                  <td className="px-6 py-4 text-gray-900 text-sm font-normal font-text">{student.student_id}</td>
                  <td className="px-6 py-4 text-gray-900 text-sm font-normal font-text">{student.class}</td>
                  <td className="px-6 py-4 text-gray-900 text-sm font-normal font-text">{student.gender}</td>
                  <td className="px-6 py-4 text-gray-900 text-sm font-normal font-text">{student.parent_guardian.name}</td>
                  <td className="px-6 py-4 text-gray-900 text-sm font-normal font-text">{student.phone}</td>
                  <td className="px-6 py-4 text-gray-900 relative">
                    <Button
                      icon={<SlOptionsVertical />}
                      onClick={() =>
                        setActiveDropdown((prev) => (prev === student.student_id ? null : student.student_id))
                      }
                    />
                    {activeDropdown === student.student_id && (
                      <div className='w-60 bg-white absolute right-0 z-20 rounded-lg shadow-lg shadow-[#1018283B]'>
                        <div className="flex flex-col justify-between">
                          <LinkBtn
                            to={`/view-detail/${student.student_id}`}
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
                          <hr className='border border-gray-300' />
                          <Button
                            icon={<IoMdClose className='w-5 h-5' />}
                            text={"Suspend"}
                            className={"py-3 px-4 text-left text-red-600 flex items-center gap-2"}
                          />
                        </div>
                      </div>)}
                  </td>
                </tr>))}
            </tbody>
          </table>
          <section className='flex justify-end  px-5 py-4.5'>
            <div className='flex justify-end  items-center gap-10 px-5 py-4.5'>
              <div className='flex gap-3'>
                <Button text={"Previous"} className={"border text-base font-bold text-gray-700 border-gray-400 shadow-xs shadow-[#1018280D] py-2 px-4 rounded-lg"} />
                <Button text={"Next"} className={"border text-base font-bold text-gray-700 border-gray-400 shadow-xs shadow-[#1018280D] py-2 px-4 rounded-lg"} />
              </div>
              <span className={"text-sm font-medium text-gray-700"}>Result 1 of 10</span>
            </div>
          </section>
        </div>
      </section>
    </div >
  );
};

export default MyStudents;
