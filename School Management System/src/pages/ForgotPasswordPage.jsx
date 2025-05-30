import React from 'react'
import PasswordIcon from "../assets/icons/Featured icon.png"
import left from "../assets/icons/left-arrow Icon.png"
import Button from '../components/Button'

const ForgotPasswordPage = () => {
    return (
        <section className='h-screen flex justify-center bg-white'>
            <div className='flex flex-col justify-center font-header items-center gap-5'>

                <div className='flex flex-col items-center gap-2'>
                    <img src={PasswordIcon} alt="" />
                    <h1 className='text-3xl font-semibold'>Forgot Password?</h1>
                    <p className='text-base font-normal'>No worries, we'll send you reset instructions.</p>
                </div>

                <div className='flex flex-col items-center '>
                    <form className='flex flex-col gap-5'>
                        <div className='flex flex-col'>
                            <label htmlFor="">Email</label>
                            <input className="border-2 focus:border-red-500 outline-0 rounded-sm py-2.5 px-3 w-full border-[#D1D5DB]" type="email" name="" id="" />
                        </div>
                        <Button text="Reset Password" className='bg-btn py-5 px-4.5 w-90 rounded-sm text-white' />
                    </form>
                    <Button text="Back to log in" className="text-gray-600 my-5 flex gap-2 items-center" icon={left} />
                </div>
            </div>
        </section>
    )
}

export default ForgotPasswordPage