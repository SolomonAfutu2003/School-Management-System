import React from 'react'
import Notification from "../assets/icons/Notification icon.png"

const TopNav = () => {
    return (
        <div className='bg-white border-b border-[#F2F4F7] px-28 py-5'>
            <div className='flex justify-end items-center gap-5'>
                <button><img src={Notification} alt="" /></button>
                <div className='flex items-center gap-3'>
                    <img className='w-10 h-10' src={Notification} alt="" />
                    <div className='font-text'>
                        <h3 className='text-sm font-semibold text-main-text'>Phil Sam</h3>
                        <p className='text-xs text-main-text-light'>phail@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNav