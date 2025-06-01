import React from 'react'
import Button from '../../components/Button'
import { Link } from 'react-router'


const LoginPage = () => {
    return (
        <section className='h-screen flex bg-white'>
            {/* Background-image */}
            <div className='bg-[url("/Background.png")] bg-no-repeat bg-center bg-cover w-[50%]'>
            </div>

            {/* Login-section */}
            <div className='w-[50%] flex justify-center items-center'>
                <div className='flex flex-col items-center gap-5'>

                    {/* Logo */}

                    <h1 className='text-btn text-5xl font-header font-bold'>LOGO</h1>

                    {/* header-text */}
                    <div className='flex flex-col gap-3 text-center font-header'>
                        <h2 className='font-semibold text-display text-3xl'>Log in to your account</h2>
                        <p className='font-normal text-sub-display text-base'>Welcome back! Please enter your details.</p>
                    </div>
                    <form className='flex flex-col gap-5'>

                        {/* Email-input */}
                        <div className='flex flex-col'>
                            <label className='m-0'>Email</label>
                            <input className="border-2 focus:border-red-500 outline-0 rounded-sm py-2.5 px-3 w-full border-[#D1D5DB]" type="email" name="" id="" placeholder='Email' />
                        </div>

                        {/* Password-input */}
                        <div className='flex flex-col'>
                            <label>Password</label>
                            <input className="border-2 focus:border-red-500 outline-0 rounded-sm py-2.5 px-3 w-full border-[#D1D5DB]" type="password" name="" id="" placeholder='Password' />
                        </div>

                        <div className='flex justify-end text-btn'>
                            <Link to="/auth/forgot-password">
                                <span>Forgot Password</span>
                            </Link>
                        </div>

                        <Button text="Login" className="bg-btn py-5 px-4.5 w-90 rounded-sm text-white" />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default LoginPage