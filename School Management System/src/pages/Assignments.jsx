import React from 'react'
import LinksBtn from '../components/LinksBtn'
import { FaArrowLeft } from "react-icons/fa";
import { SlCloudUpload } from "react-icons/sl";
import Button from '../components/Button'

const Assignments = () => {
  return (
    <div className='m-4 space-y-5'>
      <section className='flex justify-between'>
        <LinksBtn text={"Back"} className={"text-gray-600 text-base font-medium flex gap-2 items-center"} icon={<FaArrowLeft className=' w-5 h-5' />} />
        <Button text={"Post Assignment"} className={"bg-nav text-nav-text px-10 py-2 rounded-lg"} />
      </section>

      <section>
        <h3>Post Assignment</h3>
        <form action="" className='space-y-5'>
          <div className='flex flex-col gap-5 border-b border-gray-400 py-5'>
            <div className='flex flex-col gap-1'>
              <label htmlFor="Title">Assignment Title</label>
              <input className='border border-gray-400 outline-0 text-gray-700 p-3 rounded-sm' type="text" name="assignment-title" id="Title" placeholder='Enter title of assignment' />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor="Details">Assignment instructions/ details</label>
              <textarea className='border border-gray-400 outline-0 text-gray-700 p-3 rounded-sm h-28' name="assignment-details" id="Details" placeholder='Enter assignment instructions/ details'></textarea>
            </div>
          </div>

          <div className='space-y-5'>
            <h3>File Upload</h3>
            <div className="flex">
              <div >
                <label className='flex flex-col justify-center items-center border border-gray-400 rounded-sm py-4 px-6' htmlFor="file-upload">
                  <SlCloudUpload className='w-10 h-10 rounded-full p-2 bg-nav-text text-nav' />
                  <p className='text-gray-700'><span className='text-btn'>Click to upload</span> or drag and drop</p>
                  <p className='text-gray-700'>SVG, PNG, JPG or GIF (max. 800x400px)</p>
                </label>
                <input className='hidden' type="file" name="" id="file-upload" />
              </div>

              <div>
                <div>
                  <div className="w-lg bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full animate-pulse" style={{ width: '50%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="w-lg bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full animate-pulse" style={{ width: '50%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

      </section>

    </div>
  )
}

export default Assignments