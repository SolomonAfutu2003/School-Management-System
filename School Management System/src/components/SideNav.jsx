import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/authContext'
import { RiHome6Line } from "react-icons/ri";
import { LuBookOpenText } from "react-icons/lu";
import { PiUsersThree } from "react-icons/pi";
import { LuNotebookPen } from "react-icons/lu";
import { PiCertificate } from "react-icons/pi";
import { PiSealCheckBold } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";



const SideNav = () => {
    const { user } = useAuth()

    return (
        <div className='bg-nav sticky top-0  h-screen pt-8 text-left flex flex-col gap-3 px-4'>
            <h1 className='text-white text-3xl font-header font-bold'>LOGO</h1>
            <div>
                {
                    user?.role === 'user' && (
                        <ul className='text-nav-text flex flex-col gap-3 text-base font-semibold '>
                            <li className="flex items-center gap-2 hover:bg-white hover:text-nav rounded-md px-3 py-2">
                                <RiHome6Line className="w-6 h-6" />
                                <Link to="/">My Dashboard</Link>
                            </li>
                            <li className="flex items-center gap-2  hover:bg-white hover:text-nav rounded-md px-3 py-2">
                                <LuBookOpenText className="w-6 h-6" />
                                <Link to="/my-subjects">My Subjects</Link>
                            </li>
                            <li className="flex justify-between items-center gap-2  hover:bg-white hover:text-nav rounded-md px-3 py-2">
                               <div className="flex items-center gap-2">
                                    <PiUsersThree className="w-6 h-6" />
                                    <Link to="/my-classes">My Classes</Link>
                               </div>
                               <IoIosArrowDown />
                            </li>
                            <li className="flex justify-between items-center gap-2  hover:bg-white hover:text-nav rounded-md px-3 py-2">
                                <div className="flex items-center gap-2">
                                    <LuNotebookPen className="w-6 h-6" />
                                    <Link to="/exams">Exams</Link>
                                </div>
                                <IoIosArrowDown />
                            </li>
                            <li className="flex items-center gap-2  hover:bg-white hover:text-nav rounded-md px-3 py-2">
                                <PiCertificate className="w-6 h-6" />
                                <Link to="/my-students">My Students</Link>
                            </li>
                            <li className="flex items-center gap-2  hover:bg-white hover:text-nav rounded-md px-3 py-2">
                                <PiSealCheckBold className="w-6 h-6" />
                                <Link to="/attendance">Attendance</Link>
                            </li>
                        </ul>
                    )
                }
                {
                    user?.role === 'admin' && (
                        <ul className='text-nav-text flex flex-col gap-3 text-base font-semibold'>
                            <li className="flex items-center gap-2">
                                <Link to="/admin/dashboard">My Dashboard</Link>
                            </li>
                            <li className="flex items-center gap-2"> <Link to="/admin/messaging-page" className="hover:text-yellow-400">Messaging</Link></li>
                            <li className="flex items-center gap-2"> <Link to="/admin/students" className="hover:text-yellow-400">Students</Link></li>
                            <li className="flex items-center gap-2"> <Link to="/admin/teachers" className="hover:text-yellow-400">Teachers</Link></li>
                            <li className="flex items-center gap-2"> <Link to="/admin/guardians" className="hover:text-yellow-400">Guardians</Link></li>
                            <li className=""><Link to="/admin/admin-page" className="hover:text-yellow-400">Admin</Link></li>

                            <li className="flex items-center gap-2"> <Link to="/admin/classes" className="hover:text-yellow-400">Classes</Link></li>
                            <li className="flex items-center gap-2"> <Link to="/admin/subjects" className="hover:text-yellow-400">Subjects</Link></li>
                            <li className="flex items-center gap-2"> <Link to="/admin/assignments-and-quizzes" className="hover:text-yellow-400">Assignments and Quizzes</Link></li>
                            <li className="flex items-center gap-2"> <Link to="/admin/exams" className="hover:text-yellow-400">Exams</Link></li>
                            <li className="flex items-center gap-2"> <Link to="/admin/sms" className="hover:text-yellow-400">SMS</Link></li>
                            <li className="flex items-center gap-2"> <Link to="/admin/attendance">Attendance</Link></li>
                        </ul>
                    )
                }
            </div>
        </div>
    )
}

export default SideNav