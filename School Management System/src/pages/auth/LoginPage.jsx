import React, { useState } from 'react'
import Button from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/authContext'



const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const fakeUser = {
            email: 'user@example.com',
            password: 'user123',
            role: 'user',
          };

          const fakeAdmin = {
            email: 'admin@example.com',
            password: 'admin123',
            role: 'admin',
          };

          if (email === fakeAdmin.email && password === fakeAdmin.password) {
            login({ email, role: 'admin' });
            navigate('/');
          } else if (email === fakeUser.email && password === fakeUser.password) {
            login({ email, role: 'user' });
            navigate('/');
          } else {
            alert('Invalid credentials');
          }
    };

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
                    <form onSubmit={handleLogin} className='flex flex-col gap-5'>

                        {/* Email-input */}
                        <div className='flex flex-col'>
                            <label className='m-0'>Email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} className="border-2 focus:border-red-500 outline-0 rounded-sm py-2.5 px-3 w-full border-[#D1D5DB]" type="email" name="" id="" placeholder='Email' />
                        </div>

                        {/* Password-input */}
                        <div className='flex flex-col'>
                            <label>Password</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} className="border-2 focus:border-red-500 outline-0 rounded-sm py-2.5 px-3 w-full border-[#D1D5DB]" type="password" name="" id="" placeholder='Password' />
                        </div>

                        <div className='flex justify-end text-btn'>
                            <Link to="/auth/forgot-password">
                                <span>Forgot Password</span>
                            </Link>
                        </div>

                        <Button text="Login" className="bg-btn py-5 px-4.5 w-90 rounded-sm text-base font-semibold text-white" />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default LoginPage