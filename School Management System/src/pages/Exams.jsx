import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { FiEdit } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { SlOptionsVertical } from "react-icons/sl";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import Exams from "../data/Exam.json"
// import LinksBtn from '../components/LinksBtn';
import Button from '../components/Button';


const MySubjects = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [reorderMenu, setReorderMenu] = useState(false)
  const [viewMode, setViewMode] = useState("list")
  // const questions = ["", "", "", ""];

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
        <h3 className="text-lg font-semibold">Create Exam</h3>
        <div className="grid grid-cols-3  gap-5">
          {/* User Type Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700">SUBJECT</label>
            <select
              className="border border-gray-400 rounded-sm p-2 w-full"
            >
              <option value="">Select subject</option>
              {Exams.exams.map((exam) => (
                <option key={exam.id} value={exam.subject}>
                  {exam.subject}
                </option>
              ))}

            </select>
          </div>

          {/* Class Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700">EXAM TYPE</label>
            <select
              className="border border-gray-400 rounded-sm p-2 w-full"
            >
              <option value="">Select exam type</option>
              {Exams.exams.map((exam) => (
                <option key={exam.id} value={exam.examType}>
                  {exam.examType}
                </option>
              ))}
            </select>
          </div>

          {/* Student Dropdown */}
          <div>
            <label htmlFor="start-date" className="block text-sm font-medium text-gray-700">START DATE & TIME</label>
            <input
              id="start-date"
              name="startDate"
              type="date"
              className="border border-gray-400 rounded-sm p-2 w-full"
              placeholder="Select start date and time"
            />
          </div>

          {/* Month Dropdown */}
          <div>
            <label htmlFor="end-date" className="block text-sm font-medium text-gray-700">END DATE & TIME</label>
            <input
              id="end-date"
              name="endDate"
              type="date"
              className="border border-gray-400 rounded-sm p-2 w-full"
              placeholder="Select end date and time"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">SELECT CLASS</label>
            <select
              className="border border-gray-400 rounded-sm p-2 w-full"
            >
              <option value="">Select class</option>

            </select>
          </div>
        </div>

        <div className="flex flex-row-reverse gap-5">
          <Button
            text={"Create"}
            className={"bg-nav text-white px-10 py-2 rounded-lg"}
          />
          <Button
            text={"Reset"}
            className={"bg-white text-black border border-[#D0D5DD] px-10 py-2 rounded-lg"}
          />
        </div>
      </section>

      <section className='border rounded-2xl border-[#EAECF0] p-5 space-y-5'>
        <div className='flex justify-between'>
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



        <div className='divide-y divide-[#9797973D]'>
          {viewMode === "list" ? (
            <>
              <div className='p-5 bg-[#F1F4F9]'>
                <ul className='grid grid-cols-14 gap-4 '>
                  <li className='col-span-3 text-[#242525] font-bold'>Subject Name</li>
                  <li className='col-span-2 text-[#242525] font-bold'>Exam Type</li>
                  <li className='col-span-3 text-[#242525] font-bold'>Date & time</li>
                  <li className='col-span-2 text-[#242525] font-bold'>Duration</li>
                  <li className='col-span-2 text-[#242525] font-bold'>Classes</li>
                  <li className='col-start-14 text-[#242525] font-bold'>Action</li>
                </ul>
              </div>

              {Exams.exams.map((exam) => (
                <ul className='grid grid-cols-14 gap-4 text-[17px] p-5' key={exam.id}>
                  <li className='col-span-3 text-[#242525] font-semibold'>
                    {exam.subject}
                  </li>
                  <li className='col-span-2 text-[#242525] font-normal'>{exam.examType}</li>
                  <li className='col-span-3 text-[#242525] font-normal'>{exam.date} | {exam.startTime}</li>
                  <li className='col-span-2 text-[#242525] font-normal'>{exam.duration}</li>
                  <li className='col-span-2 text-[#242525] font-normal'>{exam.classes}</li>
                  <li className='col-start-14 relative'>
                    <Button
                      icon={<SlOptionsVertical />}
                      onClick={() =>
                        setActiveDropdown((prev) => (prev === exam.id ? null : exam.id))
                      }
                    />
                    {activeDropdown === exam.id && (
                      <div className='w-60 bg-white absolute right-0 z-20 shadow-md shadow-black'>
                        <div className="flex">
                          <Button
                            onClick={() => {
                              setActiveDropdown(null);
                              setReorderMenu(prev => !prev)
                            }}
                            icon={<FiEdit className='w-5 h-5' />}
                            text={"Edit Detail"}
                            className={"py-3 px-4 text-left text-gray-600 flex items-center gap-2"}
                          />
                          <hr className='border border-gray-300' />
                        </div>
                      </div>
                    )}
                  </li>
                </ul>
              ))}
            </>
          )
            :
            <div>
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
      {reorderMenu &&
        <div className="fixed inset-0 bg-[#0000005e] z-10 flex justify-center items-center">
          <section>
            <div className="space-y-5 bg-white p-5 w-[464px] h-fit rounded shadow-lg">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold">Edit Exam</h4>
                <Button icon={<IoIosClose className="text-nav w-6 h-6 bg-gray-300 rounded-full cursor-pointer" />} onClick={() => setReorderMenu(false)} />
              </div>

              <hr className='border border-gray-300' />

              {/* Questions List */}
              <div>
                <ol className="space-y-5">
                  <div className="grid grid-rows-1 gap-5">
                    {/* User Type Dropdown */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">SUBJECT</label>
                      <select
                        className="border border-gray-400 rounded-sm p-2 w-full"
                      >
                        <option value="">Select subject</option>
                        {Exams.exams.map((exam) => (
                          <option key={exam.id} value={exam.subject}>
                            {exam.subject}
                          </option>
                        ))}

                      </select>
                    </div>

                    {/* Class Dropdown */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">EXAM TYPE</label>
                      <select
                        className="border border-gray-400 rounded-sm p-2 w-full"
                      >
                        <option value="">Select exam type</option>
                        {Exams.exams.map((exam) => (
                          <option key={exam.id} value={exam.examType}>
                            {exam.examType}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Student Dropdown */}
                    <div>
                      <label htmlFor="start-date" className="block text-sm font-medium text-gray-700">START DATE & TIME</label>
                      <input
                        id="start-date"
                        name="startDate"
                        type="date"
                        className="border border-gray-400 rounded-sm p-2 w-full"
                        placeholder="Select start date and time"
                      />
                    </div>

                    {/* Month Dropdown */}
                    <div>
                      <label htmlFor="end-date" className="block text-sm font-medium text-gray-700">END DATE & TIME</label>
                      <input
                        id="end-date"
                        name="endDate"
                        type="date"
                        className="border border-gray-400 rounded-sm p-2 w-full"
                        placeholder="Select end date and time"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">SELECT CLASS</label>
                      <select
                        className="border border-gray-400 rounded-sm p-2 w-full"
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
                  className="bg-nav text-white px-10 py-2 rounded-sm"
                />
              </div>
            </div>
          </section>
        </div>
      }
    </div>
  )
}

export default MySubjects