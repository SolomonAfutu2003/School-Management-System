import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import Notices from "../../data/Notice.json"
import LinksBtn from '../../components/LinksBtn';
import { CiSearch, CiStar } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
import Button from '../../components/Button';


const Notifications = () => {
  return (
    <div className="m-5 space-y-5">
         <section className='flex justify-between items-center'>
                <LinksBtn
                    to="/admin/students"
                    text="Back"
                    className="text-base text-gray-600 font-medium flex gap-2 items-center"
                    icon={<FaArrowLeft className='w-5 h-5' />}
                />
            </section>
         <section>
                <div className='bg-white border-2 border-[#EDDFFF] w-full space-y-4 py-5 rounded-lg'>
                    <div className='px-5'>
                        <h3>ALL NOTIFICATION</h3>
                    </div>
                    <div className='flex justify-between items-center px-5'>
                        <div className='flex gap-3 items-center'>
                            <div className='relative'>
                                <input
                                    className='border border-gray-300 rounded-sm pl-10 pr-20 py-2 '
                                    type="search"
                                    placeholder='Search for notice'
                                />
                                <div className='absolute left-4 top-3'>
                                    <CiSearch className='w-5 h-5' />
                                </div>
                            </div>
                        </div>
                        <VscSettings className='w-10 h-10 p-2 rotate-90 rounded-sm border border-gray-300' />
                    </div>
                    <div>
                        <ul className='space-y-4'>
                            {Notices.notices.map((notice) => (
                                <div key={notice.notice_id}>
                                    <li className='flex justify-between items-center space-y-4 p-5' >
                                        <div className='flex items-center gap-4'>
                                            <CiStar />
                                            <p className='font-bold'>{notice.assigned_teacher}</p>
                                            <p></p>
                                            <div className='w-full max-w-sm truncate text-[#202224]'>
                                                <p>{notice.content}</p>
                                            </div>
                                        </div>
                                        <span className='text-[#202224]'>{new Date(notice.due_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                    </li>
                                    <hr className='border-gray-300' />
                                </div>
                            ))}
                        </ul>
                    </div>
                    <div className='flex justify-end py-3 items-center gap-10 px-5'>
                        <div className='flex gap-3'>
                            <Button text={"Previous"} className={"border border-gray-400 py-2 px-4 rounded-lg"} />
                            <Button text={"Next"} className={"border border-gray-400 py-2 px-4 rounded-lg"} />
                        </div>
                        <span>Result 1 of 10</span>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Notifications