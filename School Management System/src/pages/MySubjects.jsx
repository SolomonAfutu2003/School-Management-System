import React, { useState } from 'react'
import { Link } from 'react-router'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { LuClipboardPenLine } from "react-icons/lu";
import list from "../assets/icons/solar--checklist-minimalistic-outline.svg"
import question from "../assets/icons/ph--seal-question-light.svg"
import menu from "../assets/icons/garden--menu-stroke-16.svg"
import square from "../assets/icons/Combined Shape.svg"
import Exams from "../data/Exam.json"


const MySubjects = () => {
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
  


  return (
    <div className='m-4 flex flex-col gap-4'>
      <section className='border border-[#EAECF0] rounded-2xl flex flex-col gap-3 p-8'>
        <h1>Post New...</h1>
        <div className='grid grid-cols-3 gap-5'>
          <button className='group border border-[#D0D5DD] hover:bg-[#ECE5FF] hover:border-nav flex items-center gap-3 rounded-2xl px-5 py-4'>
            <div className='w-10 h-10 rounded-full p-2 bg-nav-text text-nav group-hover:text-white group-hover:bg-nav'>
            <LuClipboardPenLine className='w-6 h-6'/>
            </div>
            <Link>Assignments</Link>
          </button>
          <button className='border border-[#D0D5DD] flex items-center gap-3 rounded-2xl px-5 py-4'>
            <div className='w-10 h-10 rounded-full p-2 bg-nav-text'>
              <img className='w-full' src={list} alt="" />
            </div>
            <Link>Quiz</Link>
          </button>
          <button className='border border-[#D0D5DD] flex items-center gap-3 rounded-2xl px-5 py-4'>
            <div className='w-10 h-10 rounded-full p-2 bg-nav-text'>
              <img className='w-full' src={question} alt="" />
            </div>
            <Link>Examinations</Link>
          </button>
        </div>
      </section>
      <section className='border border-[#EAECF0] p-5 space-y-5'>
        <div className='flex justify-between'>
          <h1>All Exam Schedule</h1>
          <div className='flex gap-3'>
            <button className='w-10 h-10 p-2 border border-[#E7E7E7] rounded-sm' onClick={() => setViewMode("list")}>
              <img className='w-6 h-6' src={menu} alt="" />
            </button>
            <button className='w-10 h-10 p-2 border border-[#E7E7E7] rounded-sm' onClick={() => setViewMode("calendar")}>
              <img className='w-6 h-6' src={square} alt="" />
            </button>
          </div>
        </div>
        <div className='p-5 bg-[#F1F4F9]'>
          <ul className='grid grid-cols-12 gap-4 '>
            <li className='col-span-3'>Subject Name</li>
            <li className='col-span-2'>Exam Type</li>
            <li className='col-span-3'>Date & time</li>
            <li className='col-span-2'>Duration</li>
            <li className='col-span-2'>Classes</li>
          </ul>
        </div>

        <div className='divide-y divide-[#9797973D]'>
          {
            viewMode === "list" ? (
              Exams.exams.map((exam) => (
                <ul className='grid grid-cols-12 gap-4 text-[17px] p-5' key={exam.id}>
                  <li className='col-span-3'>
                    {exam.subject}
                  </li>
                  <li className='col-span-2'>{exam.examType}</li>
                  <li className='col-span-3'>{exam.date}|{exam.startTime}</li>
                  <li className='col-span-2'>{exam.duration}</li>
                  <li className='col-span-2'>{exam.classes}</li>
                </ul>
              ))
            )
              :
              <div>
                <FullCalendar
                plugins={[timeGridPlugin,dayGridPlugin]}
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