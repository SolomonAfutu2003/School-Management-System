import React from 'react'
import LinksBtn from '../components/LinksBtn'
import { FaArrowLeft } from "react-icons/fa";
import { SlCloudUpload } from "react-icons/sl";
import { CiFileOn } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";
import { FaCircleCheck } from "react-icons/fa6";
import Subjects from "../data/Subjects.json"
import Button from '../components/Button'

const Assignments = () => {
  return (
    <div className='m-4 space-y-5'>
      <section className='flex justify-between'>
        <LinksBtn to="/my-subjects" text={"Back"} className={"border-0 text-base text-gray-600 font-medium flex gap-2 items-center"} icon={<FaArrowLeft className=' w-5 h-5' />} />
        <Button text={"Post Assignment"} className={"bg-nav text-white px-10 py-2 rounded-lg"} />
      </section>

      <section>
        <form action="" className='space-y-5'>
          <h3 className='text-[#202224] text-2xl font-bold'>Post Assignment</h3>
          <section className='flex flex-col gap-5'>
            <div className='flex flex-col gap-1'>
              <label htmlFor="Title" className="text-[#667085]">ASSIGNMENT TITLE</label>
              <input className='border border-gray-300 outline-0 text-gray-700 p-3 rounded-lg' type="text" name="assignment-title" id="Title" placeholder='Enter title of assignment' />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor="Details" className="text-[#667085]">ASSIGNMENT INSTRUCTIONS/ DETAILS</label>
              <textarea className='border border-gray-300 outline-0 text-gray-700 p-3 rounded-lg h-28' name="assignment-details" id="Details" placeholder='Enter assignment instructions/ details'></textarea>
            </div>
          </section>
          <hr className='text-gray-300' />

          <section className='space-y-5 '>
            <h3 className='text-[#202224] text-xl font-bold'>File Upload</h3>
            <div className="flex justify-between w-full">
              <div className='w-[50%] pr-3'>
                <label className='flex flex-col justify-center items-center border border-gray-300 rounded-lg py-4 px-6' htmlFor="file-upload">
                  <SlCloudUpload className='w-10 h-10 rounded-full p-2 bg-nav-text text-nav' />
                  <p className='text-gray-700'><span className='text-btn'>Click to upload</span> or drag and drop</p>
                  <p className='text-gray-700'>SVG, PNG, JPG or GIF (max. 800x400px)</p>
                </label>
                <input className='hidden' type="file" name="" id="file-upload" />
              </div>

              <div className='h-50 w-0.5 bg-gray-300'></div>

              <div className='w-[50%] flex flex-col gap-1 pl-3'>
                <section className='border border-gray-300 hover:border-[#7F56D9] rounded-lg flex gap-4 p-4'>
                  <div>
                    <div className=' text-nav rounded-full bg-nav-text p-2'>
                      <CiFileOn className='w-4 h-4' />
                    </div>
                  </div>
                  <div className='w-full space-y-2'>
                    <div>
                      <div className='flex justify-between'>
                        <span className='text-[#344054] text-sm'>Assignment 1.pdf</span>
                        <FaCircleCheck className='w-4 h-4 text-nav' />
                      </div>
                      <span className="text-[#475467] text-sm">200 KB</span>
                    </div>
                    <div className=" bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full animate-pulse" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                </section>

                <section className='border border-gray-300 hover:border-[#7F56D9] rounded-lg flex gap-4 p-4'>
                  <div>
                    <div className=' text-nav rounded-full bg-nav-text p-2'>
                      <CiFileOn className='w-4 h-4' />
                    </div>
                  </div>
                  <div className='space-y-2 w-full'>
                    <div>
                      <div className='flex justify-between'>
                        <span className='text-[#344054] text-sm'>Assignment 1.pdf</span>
                        <FaCircleCheck className='w-4 h-4 text-nav' />
                      </div>
                      <span className="text-[#475467] text-sm">200 KB</span>
                    </div>
                    <div className=" bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full animate-pulse" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>

          <hr className='text-gray-300' />

          <section className='space-y-3'>
          <h3 className='text-[#202224] text-xl font-bold'>Assignment Info</h3>
            <div>
              <div className='grid grid-cols-3 gap-3'>
                <div className='flex flex-col gap-1'>
                  <label htmlFor="" className="text-[#667085] text-sm">SUBJECT</label>
                  <select className='border border-gray-300 rounded-lg py-2.5 px-3'>
                    <option value=""  disabled selected>Select a subject</option>
                    {Subjects.map((sub) => (
                      <option key={sub.id} value={sub.id}>
                        {sub.name}
                      </option>
                    )
                    )}
                  </select>
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor="" className="text-[#667085] text-sm">END DATE & TIME</label>
                  <input className='border border-gray-300 rounded-lg py-2.5 px-3' type="date" name="" id="" />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor="" className="text-[#667085] text-sm">START DATE & TIME</label>
                  <input className='border border-gray-300 rounded-lg py-2.5 px-3' type="date" name="" id="" />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor="" className="text-[#667085] text-sm">SUBJECT</label>
                  <input className='border border-gray-300 rounded-lg py-2.5 px-3' type="date" name="" id="" />
                </div>
              </div>
              <div></div>
            </div>
          </section>

          <section className='flex gap-6 justify-end'>
            <Button text={"Reset"} className={"border border-nav py-2 px-10 text-nav rounded-sm text-sm font-semibold"} />
            <Button text={"Post Assignment"} className={"py-2 px-10 bg-nav text-white rounded-sm text-sm font-semibold"} />
          </section>

        </form>

      </section>

    </div>
  )
}

export default Assignments