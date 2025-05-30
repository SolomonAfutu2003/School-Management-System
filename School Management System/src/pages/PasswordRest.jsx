import React from 'react'
import Button from '../components/Button'
import EmailIcon from "../assets/icons/Email icon.png"
import left from "../assets/icons/left-arrow Icon.png"


const PasswordRest = () => {
  return (
    <div>
      <section className='h-screen flex justify-center bg-white'>
        <div className='flex flex-col justify-center font-header items-center gap-5'>

          <div className='flex flex-col items-center gap-2'>
            <img src={EmailIcon} alt="" />
            <h1 className='text-3xl text-display font-semibold'>Check your email</h1>
            <p className='text-base text-sub-display font-medium'>We sent a password reset link to </p>
            <span className='text-base text-sub-display font-medium'>mymail@gmail.com</span>
          </div>

          <div className='flex flex-col items-center gap-4'>
            <Button text="Open email app" className='bg-btn py-5 px-4.5 w-90 rounded-sm text-white' />
            <p className='text-base text-sub-display font-normal'>Didn't receive the email? <span className='text-btn font-semibold'>Click to resend</span></p>
            <Button text="Back to log in" className="text-sub-display my-5 flex gap-2 items-center" icon={left} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default PasswordRest