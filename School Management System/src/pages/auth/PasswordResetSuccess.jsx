import React from 'react'
import Button from '../../components/Button'
import Success from "../../assets/icons/Success icon.png"

const PasswordResetSuccess = () => {
  return (
    <div>
      <section className='h-screen flex justify-center bg-white'>
        <div className='flex flex-col justify-center font-header items-center gap-5'>

          <div className='flex flex-col items-center gap-2'>
            <img src={Success} alt="" />
            <h1 className='text-3xl text-display font-semibold'>Password reset</h1>
            <p className='text-base text-sub-display font-medium'>Your password has been successfully reset.</p>
            <p className='text-base text-sub-display font-medium'>Click below to log in magically. </p>
          </div>
          <Button text="Back to login" className='bg-btn py-5 px-4.5 w-90 rounded-sm text-white' />
        </div>
      </section>
    </div>
  )
}

export default PasswordResetSuccess