import React, { useState, useRef, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { FiEdit } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { SlOptionsVertical } from "react-icons/sl";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import ExamsData from "../data/Exam.json"
// import LinksBtn from '../components/LinksBtn';
import Button from '../components/Button';
import LinksBtn from '../components/LinksBtn';


const Exams = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [reorderMenu, setReorderMenu] = useState(false)
  const [viewMode, setViewMode] = useState("list")
  const dropdownRefs = useRef({});
  // const questions = ["", "", "", ""];

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



  return (
    <div className='m-4 flex flex-col gap-4'>
      <section className="border rounded-2xl border-[#EAECF0] p-5 space-y-5">
        <h3 className="text-2xl font-bold">Create Exam</h3>
        <div className="grid grid-cols-3 gap-5">
          {/* User Type Dropdown */}
          <div className='flex flex-col gap-2'>
            <label className="text-sm font-medium text-[#667085]">SUBJECT</label>
            <select
              className="border border-[#D1D5DB] rounded-md p-2 w-full"
            >
              <option value="">Select subject</option>
              {ExamsData.exams.map((exam) => (
                <option key={exam.id} value={exam.subject}>
                  {exam.subject}
                </option>
              ))}

            </select>
          </div>

          {/* Class Dropdown */}
          <div className='flex flex-col gap-2'>
            <label className="text-sm font-medium text-[#667085]">EXAM TYPE</label>
            <select
              className="border border-[#D1D5DB] rounded-md p-2 w-full"
            >
              <option value="">Select exam type</option>
              {ExamsData.exams.map((exam) => (
                <option key={exam.id} value={exam.examType}>
                  {exam.examType}
                </option>
              ))}
            </select>
          </div>

          {/* Student Dropdown */}
          <div className='flex flex-col gap-2'>
            <label htmlFor="start-date" className="text-sm font-medium text-[#667085]">START DATE & TIME</label>
            <input
              id="start-date"
              name="startDate"
              type="date"
              className="border border-[#D1D5DB] rounded-md p-2 w-full"
              placeholder="Select start date and time"
            />
          </div>

          {/* Month Dropdown */}
          <div className='flex flex-col gap-2'>
            <label htmlFor="end-date" className="text-sm font-medium text-[#667085]">END DATE & TIME</label>
            <input
              id="end-date"
              name="endDate"
              type="date"
              className="border border-[#D1D5DB] rounded-md p-2 w-full"
              placeholder="Select end date and time"
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label className="text-sm font-medium text-[#667085]">SELECT CLASS</label>
            <select
              className="border border-[#D1D5DB] rounded-md p-2 w-full"
            >
              <option value="">Select class</option>

            </select>
          </div>
        </div>

        <div className="flex flex-row-reverse gap-5">
          <Button
            text={"Create"}
            className={"bg-[#6941C6] text-sm font-semibold text-white px-10 py-2 rounded-lg"}
          />
          <Button
            text={"Reset"}
            className={"bg-white text-sm font-semibold text-[#6941C6] border border-[#6941C6] px-10 py-2 rounded-lg"}
          />
        </div>
      </section>

      <section className='border rounded-2xl border-[#EAECF0] space-y-5'>
        <div className='flex justify-between p-5'>
          <h1 className='text-[#242525] text-2xl font-bold'>All Exam Schedule</h1>
          <div className='flex gap-3'>
            <Button
              className={'group w-10 h-10 p-2 border border-[#E7E7E7] hover:border-nav cursor-pointer rounded-sm'}
              onClick={() => setViewMode("list")}
              icon={<HiMenu className='w-6 h-6 text-gray-400 group-hover:text-nav' />}
            />

            <Button
              className={'group w-10 h-10 p-2 border border-[#E7E7E7] hover:border-nav cursor-pointer rounded-sm'}
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
                  {ExamsData.exams.map((exam) => (
                    <tr className="border-b border-gray-200 hover:bg-gray-50" key={exam.id}>
                      <td className="px-6 py-4 text-gray-900 text-sm font-semibold">{exam.subject}</td>
                      <td className="px-6 py-4 text-gray-900 text-sm font-normal font-text">{exam.examType}</td>
                      <td className="px-6 py-4 text-gray-900 text-sm font-normal font-text">{exam.date} | {exam.startTime}</td>
                      <td className="px-6 py-4 text-gray-900 text-sm font-normal font-text">{exam.duration}</td>
                      <td className="px-6 py-4 text-gray-900 text-sm font-normal font-text">{exam.classes}</td>
                      <td className="px-6 py-4 text-gray-900 relative" ref={(el) => (dropdownRefs.current[exam.id] = el)}>
                        <Button
                          icon={<SlOptionsVertical />}
                          onClick={() =>
                            setActiveDropdown((prev) => (prev === exam.id ? null : exam.id))
                          }
                        />
                        {activeDropdown === exam.id && (
                          <div className='w-60 bg-white absolute right-0 z-20 rounded-lg shadow-lg shadow-[#1018283B]'>
                            <div className="flex flex-col justify-between">
                              <Button
                                onClick={() => {
                                  setReorderMenu(prev => !prev)
                                  setActiveDropdown(null);
                                }}
                                icon={<FiEdit className='w-[15px] h-[15px]' />}
                                text={"Edit Exam"}
                                className={"py-3 px-4 text-gray-600 flex items-center gap-2"}
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
                events={ExamsData.exams.map(exam => ({
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
      {reorderMenu &&
        <div className="fixed inset-0 bg-[#0000005e] z-10 flex justify-center items-center">
          <section>
            <div className="space-y-5 bg-white p-5 w-[464px] h-fit rounded-[14px] shadow-lg">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold">Edit Exam</h4>
                <Button icon={<IoIosClose className='w-5 h-5' />} onClick={() => setReorderMenu(false)} className="text-[#475467] p-1 bg-[#EAECF0] rounded-full cursor-pointer" />
              </div>

              <hr className='border border-gray-300' />

              {/* Questions List */}
              <div>
                <ol className="space-y-5">
                  <div className="grid grid-rows-1 gap-5">
                    {/* User Type Dropdown */}
                    <div>
                      <label className="block text-sm font-medium text-[#667085]">SUBJECT</label>
                      <select
                        className="border border-[#D1D5DB] rounded-md p-2 w-full"
                      >
                        <option value="">Select subject</option>
                        {ExamsData.exams.map((exam) => (
                          <option key={exam.id} value={exam.subject}>
                            {exam.subject}
                          </option>
                        ))}

                      </select>
                    </div>

                    {/* Class Dropdown */}
                    <div>
                      <label className="block text-sm font-medium text-[#667085]">EXAM TYPE</label>
                      <select
                        className="border border-[#D1D5DB] rounded-md p-2 w-full"
                      >
                        <option value="">Select exam type</option>
                        {ExamsData.exams.map((exam) => (
                          <option key={exam.id} value={exam.examType}>
                            {exam.examType}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Student Dropdown */}
                    <div>
                      <label htmlFor="start-date" className="block text-sm font-medium text-[#667085]">START DATE & TIME</label>
                      <input
                        id="start-date"
                        name="startDate"
                        type="date"
                        className="border border-[#D1D5DB] rounded-md p-2 w-full"
                        placeholder="Select start date and time"
                      />
                    </div>

                    {/* Month Dropdown */}
                    <div>
                      <label htmlFor="end-date" className="block text-sm font-medium text-[#667085]">END DATE & TIME</label>
                      <input
                        id="end-date"
                        name="endDate"
                        type="date"
                        className="border border-[#D1D5DB] rounded-md p-2 w-full"
                        placeholder="Select end date and time"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#667085]">SELECT CLASS</label>
                      <select
                        className="border border-[#D1D5DB] rounded-md p-2 w-full"
                      >
                        <option value="">Select class</option>

                      </select>
                    </div>
                  </div>
                </ol>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 justify-end">
                <Button
                  text="Save"
                  className="bg-[#6941C6] text-white text-sm font-semibold px-10 py-2 rounded-lg"
                />
              </div>
            </div>
          </section>
        </div>
      }
    </div>
  )
}

export default Exams