import React from 'react'
import LinksBtn from '../components/LinksBtn'
import Button from '../components/Button'
import { FaArrowLeft } from "react-icons/fa";
import { HiOutlinePlus } from "react-icons/hi2";


const Quiz = () => {
  return (
    <div className='m-4 space-y-5'>
      <section className='flex justify-between'>
        <LinksBtn to="/my-subjects" text={"Back"} className={"text-base text-gray-600 font-medium flex gap-2 items-center"} icon={<FaArrowLeft className=' w-5 h-5' />} />
        <Button text={"Post Assignment"} className={"bg-nav text-white px-10 py-2 rounded-lg"} />
      </section>

      <section className='space-y-5'>
        <h3>Post Quiz</h3>
        <form action="" className='space-y-5'>
          <section className='flex flex-col space-y-3'>
            <div className='flex flex-col'>
              <label htmlFor="">Question 1</label>
              <input className='border border-gray-300 outline-0 text-gray-700 p-3 rounded-sm' type="text" name="" id="" placeholder='Enter question' />
            </div>

            <div className='flex flex-col'>
              <label htmlFor="">Possible Answers</label>
              <div className='flex flex-col gap-3'>
                <input className='border border-gray-300 outline-0 w-[451px] text-gray-700 p-3 rounded-sm' type="text" name="" id="" placeholder='First Option' />
                <input className='border border-gray-300 outline-0 w-[451px] text-gray-700 p-3 rounded-sm' type="text" name="" id="" placeholder='Second Option' />
                <input className='border border-gray-300 outline-0 w-[451px] text-gray-700 p-3 rounded-sm' type="text" name="" id="" placeholder='Third Option' />
                <input className='border border-gray-300 outline-0 w-[451px] text-gray-700 p-3 rounded-sm' type="text" name="" id="" placeholder='Fourth Option' />
              </div>
            </div>

            <div className='flex flex-col'>
              <label htmlFor="">Select Answer</label>
              <select name="" id="" className='border border-gray-300 outline-0 w-[451px] text-gray-700 p-3 rounded-sm'>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
            <Button icon={<HiOutlinePlus className='w-3.5 h-3.5' />} text={"Add..."} className={"flex gap-1 justify-end items-center w-[451px]"} />
          </section>

<hr className='text-gray-300' />

          <section className='flex flex-col space-y-3'>
            <div className='flex flex-col'>
              <label htmlFor="">Question 2</label>
              <input className='border border-gray-300 outline-0 text-gray-700 p-3 rounded-sm' type="text" name="" id="" placeholder='Enter question' />
            </div>

            <div className='flex flex-col'>
              <label htmlFor="">Enter Answer</label>
              <input className='border border-gray-300 outline-0 text-gray-700 p-3 rounded-sm' type="text" name="" id="" placeholder='Enter answer' />
            </div>
            <Button icon={<HiOutlinePlus className='w-3.5 h-3.5' />} text={"Add..."} className={"flex gap-1 justify-end items-center"} />
          </section>

          <hr className='text-gray-300' />

          <section className='flex flex-col space-y-3'>
            <div className='flex flex-col'>
              <label htmlFor="">Question 1</label>
              <input className='border border-gray-300 outline-0 text-gray-700 p-3 rounded-sm' type="text" name="" id="" placeholder='Enter question' />
            </div>

            <div className='flex flex-col'>
              <label htmlFor="">Possible Answers</label>
              <div className='flex flex-col gap-3'>
                <input className='border border-gray-300 outline-0 w-[451px] text-gray-700 p-3 rounded-sm' type="text" name="" id="" placeholder='First Option' />
                <input className='border border-gray-300 outline-0 w-[451px] text-gray-700 p-3 rounded-sm' type="text" name="" id="" placeholder='Second Option' />
                <input className='border border-gray-300 outline-0 w-[451px] text-gray-700 p-3 rounded-sm' type="text" name="" id="" placeholder='Third Option' />
                <input className='border border-gray-300 outline-0 w-[451px] text-gray-700 p-3 rounded-sm' type="text" name="" id="" placeholder='Fourth Option' />
              </div>
            </div>

            <div className='flex flex-col'>
              <label htmlFor="">Select Answer</label>
              <select name="" id="" className='border border-gray-300 outline-0 w-[451px] text-gray-700 p-3 rounded-sm'>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
            <Button icon={<HiOutlinePlus className='w-3.5 h-3.5' />} text={"Add..."} className={"flex gap-1 justify-end items-center w-[451px]"} />
          </section>

        </form>

      </section>

    </div>
  )
}

export default Quiz