import React from 'react'
import LinksBtn from '../../components/LinksBtn'
import PasswordIcon from "../../assets/icons/Password icon.png"
import { FaArrowLeft } from "react-icons/fa";
import Button from '../../components/Button'

const SetNewPassword = () => {
  return (
    <div>
      <section className='h-screen flex justify-center bg-white'>
        <div className='flex flex-col justify-center font-header items-center gap-5'>

          <div className='flex flex-col items-center gap-2'>
            <img src={PasswordIcon} alt="" />
            <h1 className='text-3xl font-semibold'>Set new password</h1>
            <p className='text-base font-normal text-center'>Your new password must be different to previously used passwords.</p>
          </div>

          <div className='flex flex-col items-center '>
            <form className='flex flex-col gap-5'>
              <div className='flex flex-col gap-5'>
                <div>
                  <label htmlFor="Password">Password</label>
                  <input className="border-2 focus:border-red-500 outline-0 rounded-sm py-2.5 px-3 w-full border-[#D1D5DB]" type="password" name="" id="Password" />
                  <p>Must be at least 8 characters</p>
                </div>
                <div>
                  <label htmlFor="Password">Confirm Password</label>
                  <input className="border-2 focus:border-red-500 outline-0 rounded-sm py-2.5 px-3 w-full border-[#D1D5DB]" type="password" name="" id="Password" />
                </div>
              </div>
              <Button text="Reset Password" className="bg-btn py-5 px-4.5 w-90 rounded-sm text-base font-semibold text-white"  />
            </form>
            <LinksBtn text="Back to log in" to="/auth/login-page" className="text-gray-600 my-5 flex gap-2 items-center" icon={<FaArrowLeft className=' w-5 h-5' />} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default SetNewPassword