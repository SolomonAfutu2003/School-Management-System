import React from 'react'
import { Link } from 'react-router'
import Assignment from "../assets/icons/hugeicons--assignments.svg"
import list from "../assets/icons/solar--checklist-minimalistic-outline.svg"
import question from "../assets/icons/ph--seal-question-light.svg"
import Exams from "../data/Exam.json"

const MySubjects = () => {
  return (
    <div className='m-4 flex flex-col gap-4'>
      <section className='border border-[#EAECF0] rounded-2xl flex flex-col gap-3 p-8'>
        <h1>Post New...</h1>
        <div className='grid grid-cols-3 gap-5'>
          <button className='border border-nav flex items-center gap-3 rounded-2xl px-5 py-4'>
            <div className='w-10 h-10 rounded-full p-2 bg-amber-300'>
              <img className='w-full' src={Assignment} alt="" />
            </div>
            <Link>Assignments</Link>
          </button>
          <button className='border border-nav flex items-center gap-3 rounded-2xl px-5 py-4'>
            <div className='w-10 h-10 rounded-full p-2 bg-amber-300'>
              <img className='w-full' src={list} alt="" />
            </div>
            <Link>Quiz</Link>
          </button>
          <button className='border border-nav flex items-center gap-3 rounded-2xl px-5 py-4'>
            <div className='w-10 h-10 rounded-full p-2 bg-amber-300'>
              <img className='w-full' src={question} alt="" />
            </div>
            <Link>Examinations</Link>
          </button>
        </div>
      </section>
      <section className='border border-[#EAECF0] p-5'>
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
          {Exams.exams.map((exam) => (
            <ul className='grid grid-cols-12 gap-4 text-[17px] p-5' key={exam.id}>
              <li className='col-span-3'>
                {exam.subject}
              </li>
              <li className='col-span-2'>{exam.examType}</li>
              <li className='col-span-3'>{exam.date}|{exam.startTime}</li>
              <li className='col-span-2'>{exam.duration}</li>
              <li className='col-span-2'>{exam.classes}</li>
            </ul>
          ))}
        </div>
      </section>
    </div>
  )
}

export default MySubjects