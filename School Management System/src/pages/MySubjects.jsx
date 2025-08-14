import React, { useState, useRef, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { LuClipboardPenLine } from "react-icons/lu";
import { LuClipboardList } from "react-icons/lu";
import { BsPatchQuestion } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { SlOptionsVertical } from "react-icons/sl";
import { IoEyeOutline } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import Exams from "../data/Exam.json"
import LinksBtn from '../components/LinksBtn';
import Button from '../components/Button';


const MySubjects = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const [viewMode, setViewMode] = useState("list")

  const calculateEndTime = (date, startTime, durationMinutes) => {
    const [hours, minutes] = startTime.split(':').map(Number);
    const startDate = new Date(date);
    startDate.setHours(hours, minutes);

    const endDate = new Date(startDate.getTime() + durationMinutes * 60000);
    return endDate.toISOString().split('.')[0];
  };

  // Color coding by exam type
  const getExamColor = (examType) => {
    const colors = {
      'Final': '#EF4444',
      'Midterm': '#3B82F6',
      'Quiz': '#10B981',
      'Practical': '#F59E0B'
    };
    return colors[examType] || '#9CA3AF';
  };

 useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className='m-4 flex flex-col gap-4'>
      <section className='border border-[#EAECF0] rounded-2xl flex flex-col gap-3 p-8'>
        <h1 className='text-[#242525] text-2xl font-bold'>Post New ...</h1>
        <div className='grid grid-cols-3 gap-5'>
          <LinksBtn
            className='text-[#242525] text-base font-medium font-text group border border-[#D0D5DD] hover:bg-[#ECE5FF] hover:border-nav hover:text-nav flex items-center gap-3 rounded-2xl px-5 py-4 '
            text={"ASSIGNMENTS"}
            icon={<LuClipboardPenLine className='w-10 h-10 rounded-full p-2 bg-nav-text text-nav group-hover:text-white group-hover:bg-nav' />}
            to="/assignment"
          />

          <LinksBtn
            className='text-[#242525] text-base font-medium font-text group border border-[#D0D5DD] hover:bg-[#ECE5FF] hover:border-nav hover:text-nav flex items-center gap-3 rounded-2xl px-5 py-4 '
            text={"QUIZ"}
            icon={<LuClipboardList className='w-10 h-10 rounded-full p-2 bg-nav-text text-nav group-hover:text-white group-hover:bg-nav' />}
            to="/quiz"
          />

          <LinksBtn
            className='text-[#242525] text-base font-medium font-text group border border-[#D0D5DD] hover:bg-[#ECE5FF] hover:border-nav hover:text-nav flex items-center gap-3 rounded-2xl px-5 py-4 '
            text={"EXAMINATIONS"}
            icon={<BsPatchQuestion className='w-10 h-10 rounded-full p-2 bg-nav-text text-nav group-hover:text-white group-hover:bg-nav' />}
            to="/examination"
          />
        </div>
      </section>

      <section className='border rounded-2xl border-[#EAECF0] space-y-5'>
        <div className='flex justify-between p-5'>
          <h1 className='text-[#242525] text-2xl font-bold'>All Exam Schedule</h1>
          <div className='flex gap-3'>
            <Button
              className={'group w-10 h-10 p-2 border border-[#E7E7E7] hover:border-nav cursor-pointer rounded-md'}
              onClick={() => setViewMode("list")}
              icon={<HiMenu className='w-6 h-6 text-gray-400 group-hover:text-nav' />}
            />

            <Button
              className={'group w-10 h-10 p-2 border border-[#E7E7E7] hover:border-nav cursor-pointer rounded-md'}
              onClick={() => setViewMode("calendar")}
              icon={<HiMiniSquares2X2 className='w-6 h-6 text-gray-400 group-hover:text-nav' />}
            />
          </div>
        </div>



        <div>
          {viewMode === "list" ? (
            <div className='pr-5'>
              <table className="w-full">
                <thead>
                  <tr className="text-[#242525] font-bold">
                    <th scope="col" className="px-6 py-4 text-left bg-[#F1F4F9] rounded-l-lg ">Subject Name</th>
                    <th scope="col" className="px-6 py-4 text-left bg-[#F1F4F9]">Exam Type</th>
                    <th scope="col" className="px-6 py-4 text-left bg-[#F1F4F9]">Date & time</th>
                    <th scope="col" className="px-6 py-4 text-left bg-[#F1F4F9]">Duration</th>
                    <th scope="col" className="px-6 py-4 text-left bg-[#F1F4F9]">Classes</th>
                    <th scope="col" className="px-6 py-4 text-left bg-[#F1F4F9] rounded-r-lg">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Exams.exams.map((exam) => (
                    <tr className="border-b border-gray-200 hover:bg-gray-50" key={exam.id}>
                      <td className="px-6 py-4 text-gray-900 text-sm font-semibold">{exam.subject}</td>
                      <td className="px-6 py-4 text-gray-900 text-sm">{exam.examType}</td>
                      <td className="px-6 py-4 text-gray-900 text-sm">{exam.date} | {exam.startTime}</td>
                      <td className="px-6 py-4 text-gray-900 text-sm">{exam.duration}</td>
                      <td className="px-6 py-4 text-gray-900 text-sm">{exam.classes}</td>
                      <td className="px-6 py-4 text-gray-900 relative" ref={dropdownRef}>
                        <Button
                          icon={<SlOptionsVertical />}
                          onClick={() =>
                            setActiveDropdown((prev) => (prev === exam.id ? null : exam.id))
                          }
                        />
                        {activeDropdown === exam.id && (
                          <div className='w-60 bg-white absolute right-0 z-20 rounded-lg shadow-lg shadow-[#1018283B]'>
                            <div className="flex flex-col justify-between">
                              <LinksBtn
                                to={`/view-detail/${exam.id}`}
                                icon={<FiEdit className='w-[15px] h-[15px]' />}
                                text={"Edit Exam"}
                                className={"py-3 px-4 text-gray-600 flex items-center gap-2"}
                              />
                              <hr className=' text-[#F0F0F0]' />
                              <Button
                                icon={<IoMdClose className='w-[15px] h-[15px]' />}
                                text={"Delete"}
                                className={"py-3 px-4 text-red-600 flex items-center gap-2"}
                              />
                            </div>
                          </div>
                        )}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className='flex justify-end  items-center gap-10 px-5 py-4.5'>
                <div className='flex gap-3'>
                  <Button text={"Previous"} className={"border text-base font-bold text-gray-700 border-gray-400 py-2 px-4 rounded-lg"} />
                  <Button text={"Next"} className={"border text-base font-bold text-gray-700 border-gray-400 py-2 px-4 rounded-lg"} />
                </div>
                <span className={"text-sm font-medium text-gray-700"}>Result 1 of 10</span>
              </div>
            </div>
          )
            :
            <div className='p-5'>
              <FullCalendar
                plugins={[timeGridPlugin, dayGridPlugin]}
                height={600}
                events={Exams.exams.map(exam => ({
                  title: `${exam.subject} (${exam.examType})`,
                  start: `${exam.date}T${exam.startTime}`,
                  end: calculateEndTime(exam.date, exam.startTime, exam.duration),
                  color: getExamColor(exam.examType),
                  extendedProps: {
                    classes: exam.classes.join(', '),
                    duration: `${Math.floor(exam.duration / 60)}h ${exam.duration % 60}m`
                  }
                }))}
              />
            </div>
          }
        </div>
      </section>
    </div>
  )
}

export default MySubjects