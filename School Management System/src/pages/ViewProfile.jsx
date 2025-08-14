import React, { useState, useRef, useEffect } from 'react'
import { useParams } from "react-router-dom";
import classesData from "../data/Classes.json"
import { FaArrowLeft } from "react-icons/fa";
import LinksBtn from '../components/LinksBtn';
import Button from '../components/Button';
import { FiEdit } from "react-icons/fi";
import { SlOptionsVertical } from "react-icons/sl";
import { IoEyeOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Profile from "../assets/images/e5009c87a1c6691336f8e40ae3133dd6b70357d7.jpg"
import StudentsData from "../data/Students.json";

const ViewProfile = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRefs = useRef({});
  const { id } = useParams();
  const classData = classesData.classes.find((cls) => cls.class_id === id);

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

  if (!classData) {
    return <div className="p-4">Class not found</div>;
  }

  return (
    <div className="m-4 space-y-5">
      <section className='flex justify-between items-center'>
        <LinksBtn
          to="/my-classes"
          text="Back"
          className="text-base text-gray-600 font-medium flex gap-2 items-center"
          icon={<FaArrowLeft className='w-5 h-5' />}
        />
      </section>

      <div className=" space-y-4">
        <h2 className="text-2xl font-bold">CLASS INFO</h2>
        <hr className="my-4 border-gray-300" />
        <div className="grid grid-cols-5 gap-4">
          <div>
            <h3 className="text-sm font-normal text-gray-400">CLASS NAME</h3>
            <p className="text-lg font-medium font-text text-nav underline">{classData.name}</p>
          </div>
          <div>
            <h3 className="text-sm font-normal text-gray-400">CLASS MASTER</h3>
            <p className="text-lg font-medium font-text text-nav underline">{classData.homeroom_teacher}</p>
          </div>
          <div>
            <h3 className="text-sm font-normal text-gray-400">ENGLISH TEACHER</h3>
            <p className="text-lg font-medium font-text text-nav underline">{classData.homeroom_teacher}</p>
          </div>
          <div>
            <h3 className="text-sm font-normal text-gray-400">MATHEMATICS TEACHER</h3>
            <p className="text-lg font-medium font-text text-nav underline">{classData.homeroom_teacher}</p>
          </div>
          <div>
            <h3 className="text-sm font-normal text-gray-400">SOCIAL STUDIES TEACHER</h3>
            <p className="text-lg font-medium font-text text-nav underline">{classData.homeroom_teacher}</p>
          </div>
          <div>
            <h3 className="text-sm font-normal text-gray-400">RME TEACHER</h3>
            <p className="text-lg font-medium font-text text-nav underline">{classData.homeroom_teacher}</p>
          </div>
          <div>
            <h3 className="text-sm font-normal text-gray-400">TWI TEACHER</h3>
            <p className="text-lg font-medium font-text text-nav underline">{classData.homeroom_teacher}</p>
          </div>
          <div>
            <h3 className="text-sm font-normal text-gray-400">GA TEACHER</h3>
            <p className="text-lg font-medium font-text text-nav underline">{classData.homeroom_teacher}</p>
          </div>
          <div>
            <h3 className="text-sm font-normal text-gray-400">PRE-TECH TEACHER</h3>
            <p className="text-lg font-medium font-text text-nav underline">{classData.homeroom_teacher}</p>
          </div>
          <div>
            <h3 className="text-sm font-normal text-gray-400">HOME-ECONOMICS TEACHER</h3>
            <p className="text-lg font-medium font-text text-nav underline">{classData.homeroom_teacher}</p>
          </div>
          <div>
            <h3 className="text-sm font-normal text-gray-400">VISUAL ART TEACHER</h3>
            <p className="text-lg font-medium font-text text-nav underline">{classData.homeroom_teacher}</p>
          </div>
          <div>
            <h3 className="text-sm font-normal text-gray-400">FRENCH TEACHER</h3>
            <p className="text-lg font-medium font-text text-nav underline">{classData.homeroom_teacher}</p>
          </div>
        </div>
      </div>

      <section className='border rounded-2xl border-[#EAECF0] pr-5 space-y-5'>
        <div className='p-5'> <h3 className='text-2xl font-semibold'>Students - {classData.name}</h3></div>

        <table className="w-full">
          <thead>
            <tr className="text-[#242525] font-bold">
              <th scope="col" className="px-6 py-4 text-left bg-[#F1F4F9] rounded-l-lg ">Student Name</th>
              <th scope="col" className="px-2 py-4 text-left bg-[#F1F4F9]">ID</th>
              <th scope="col" className="px-2 py-4 text-left bg-[#F1F4F9]">Class</th>
              <th scope="col" className="px-2 py-4 text-left bg-[#F1F4F9]">Gender</th>
              <th scope="col" className="px-3 py-4 text-left bg-[#F1F4F9]">Guardian Name</th>
              <th scope="col" className="px-3 py-4 text-left bg-[#F1F4F9]">Guardian Phone</th>
              <th scope="col" className="px-2 py-4 text-left bg-[#F1F4F9] rounded-r-lg">Action</th>
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
                <td className="px-2 py-4 text-gray-900 text-sm">{student.student_id}</td>
                <td className="px-2 py-4 text-gray-900 text-sm">{student.class}</td>
                <td className="px-2 py-4 text-gray-900 text-sm">{student.gender}</td>
                <td className="px-3 py-4 text-gray-900 text-sm">{student.parent_guardian.name}</td>
                <td className="px-3 py-4 text-gray-900 text-sm">{student.phone}</td>
                <td className="px-2 py-4 text-gray-900 relative" ref={(el) => (dropdownRefs.current[student.student_id] = el)}>
                  <Button
                    icon={<SlOptionsVertical />}
                    onClick={() =>
                      setActiveDropdown((prev) => (prev === student.student_id ? null : student.student_id))
                    }
                  />
                  {activeDropdown === student.student_id && (
                    <div className='w-60 bg-white absolute right-0 z-20 rounded-lg shadow-lg shadow-[#1018283B]'>
                      <div className="flex flex-col justify-between">
                        <LinksBtn
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
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
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
      </section>
    </div>
  )
}

export default ViewProfile