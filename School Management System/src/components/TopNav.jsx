import React from 'react'
// import Notification from "../assets/icons/Notification icon.png"
import { IoMdNotificationsOutline } from "react-icons/io";
import Profile from "../assets/images/67da9fddd372b1b5b44ffef41eed6ceb810ddf8a.jpg"
import { IoIosArrowDown } from "react-icons/io";
import Button from './Button';


const TopNav = () => {
    return (
        <div className='bg-white border-b border-[#F2F4F7] px-28 py-5'>
            <div className='flex justify-end items-center gap-5'>
                <Button icon={<IoMdNotificationsOutline className='w-5 h-5' />} className={"bg-gray-200 text-gray-500 rounded-full p-2.5"} />
                <div className='flex gap-11 items-center' >
                    <div className='flex items-center gap-3'>
                        <img className='w-10 h-10 rounded-full' src={Profile} alt="" />
                        <div className='font-text'>
                            <h3 className='text-sm font-semibold text-main-text'>Phil Sam</h3>
                            <p className='text-xs text-main-text-light'>phail@gmail.com</p>
                        </div>
                    </div>
                    <IoIosArrowDown />
                </div>
            </div>
        </div>
    )
}

export default TopNav