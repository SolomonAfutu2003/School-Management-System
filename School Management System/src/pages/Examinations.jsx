import React, { useState } from 'react'
import LinksBtn from '../components/LinksBtn'
import Button from '../components/Button'
import { FaArrowLeft } from "react-icons/fa";
import { HiOutlinePlus } from "react-icons/hi2";
import { IoIosClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

const Examinations = () => {
  const [show, setShow] = useState(false)
  const [reorderMenu, setReorderMenu] = useState(false)
  const questions = ["", "", "", ""];

  return (
    <div className='m-4 space-y-5'>
    <section className='flex justify-between'>
      <LinksBtn to="/my-subjects" text={"Back"} className={"text-base text-gray-600 font-medium flex gap-2 items-center"} icon={<FaArrowLeft className=' w-5 h-5' />} />
      <Button text={"Post Examinations"} className={"bg-nav text-white px-10 py-2 rounded-lg"} />
    </section>

    <section className='space-y-7'>
      <h3>Post Quiz</h3>
      <form onSubmit={(e) => e.preventDefault()} action="" className='space-y-5'>
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
          <Button onClick={() => setShow(prev => !prev)} icon={<HiOutlinePlus className='w-3.5 h-3.5' />} text={"Add..."} className={"flex gap-1 justify-end text-nav items-center w-[451px] font-semibold"} />
          {show &&
            <div className='w-60 bg-white absolute left-[736px] top-[678px] shadow-lg shadow-black'>
              <div className="flex flex-col justify-between">
                <Button text={"Image"} className={"py-3 px-4 text-left text-gray-600"} />
                <hr />
                <Button text={"Add possible answer"} className={"py-3 px-4 text-left text-gray-600"} />
              </div>
            </div>}
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
          <Button icon={<HiOutlinePlus className='w-3.5 h-3.5' />} text={"Add..."} className={"flex gap-1 justify-end text-nav items-center font-semibold"} />
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
          <Button icon={<HiOutlinePlus className='w-3.5 h-3.5' />} text={"Add..."} className={"flex gap-1 justify-end items-center text-nav w-[451px] font-semibold"} />
        </section>

      </form>
      <section className='flex justify-end gap-3'>
        <Button text={"Reorder Questions"} onClick={() => setReorderMenu(prev => !prev)} />
        <Button onClick={() => setShow(prev => !prev)} icon={<HiOutlinePlus className='w-5 h-5' />} text={"New Question"} className={"flex gap-1 items-center border border-nav rounded-sm px-10 py-2 text-nav font-semibold"} />
        {show &&
          <div className='w-60 h-36 bg-white absolute right-36 top-[1488px] shadow-lg shadow-black'>
            <div className="flex flex-col justify-between">
              <Button text={"Fill in"} className={"py-3 px-4 text-left text-gray-600"} />
              <hr className='border border-gray-300' />
              <Button text={"Answer One"} className={"py-3 px-4 text-left text-gray-600"} />
              <hr className='border border-gray-300' />
              <Button text={"Multiple Answer"} className={"py-3 px-4 text-left text-gray-600"} />
            </div>
          </div>}
        <Button text={"Post Examinations"} className={"bg-nav text-white px-10 py-2 rounded-sm"} />
      </section>

    </section>

    {reorderMenu &&
        <div className="fixed inset-0 bg-[#0000005e] z-10 flex justify-center items-center">
          <section>
            <div className="space-y-5 bg-white p-5 max-w-[520px] h-fit rounded shadow-lg">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold">Reorder Questions</h4>
                <Button icon={<IoIosClose className="text-nav w-6 h-6 bg-gray-300 rounded-full cursor-pointer" />} onClick={()=> setReorderMenu(false)} />
              </div>

              <hr className='border border-gray-300' />

              {/* Questions List */}
              <div>
                <ol className="space-y-5">
                  {questions.map((q, index) => (
                    <li className="w-full" key={index}>
                      <div className="flex justify-between items-center gap-2 pl-2">
                        <h3>{index + 1}.</h3>
                        <input
                          type="text"
                          placeholder="What is force?"
                          className="w-96 border border-gray-300 rounded px-3 py-2"
                        />
                        <IoMenu className="w-5 h-5 text-gray-600" />
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 justify-end">
                <Button
                  text="Cancel"
                  className="bg-white text-gray-600 px-10 py-2 border border-gray-300 rounded-sm"
                />
                <Button
                  text="Post Quiz"
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

export default Examinations