import React from 'react'
import { NavLink } from 'react-router-dom'
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
                            <li>
                                <NavLink className={({ isActive }) => `flex items-center gap-2 hover:bg-white hover:text-nav  rounded-md px-3 py-2  ${isActive ? "bg-white text-nav" : ""}`} to="/">
                                    <RiHome6Line className="w-6 h-6" />
                                    My Dashboard
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => `flex items-center gap-2 hover:bg-white hover:text-nav  rounded-md px-3 py-2  ${isActive ? "bg-white text-nav" : ""}`} to="/my-subjects">
                                    <LuBookOpenText className="w-6 h-6" />
                                    My Subjects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => `flex justify-between items-center gap-2  hover:bg-white hover:text-nav rounded-md px-3 py-2  ${isActive ? "bg-white text-nav" : ""}`} to="/my-classes">
                                    <div className="flex items-center gap-2">
                                        <PiUsersThree className="w-6 h-6" />
                                        My Classes
                                    </div>
                                    <IoIosArrowDown />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) =>`flex justify-between items-center gap-2 hover:bg-white hover:text-nav rounded-md px-3 py-2  ${isActive ? "bg-white text-nav" : ""}`} to="/exams">
                                    <div className="flex items-center gap-2">
                                        <LuNotebookPen className="w-6 h-6" />
                                        Exams
                                    </div>
                                    <IoIosArrowDown />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => `flex items-center gap-2 hover:bg-white hover:text-nav  rounded-md px-3 py-2  ${isActive ? "bg-white text-nav" : ""}`} to="/my-students">
                                    <PiCertificate className="w-6 h-6" />
                                    My Students
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => `flex items-center gap-2 hover:bg-white hover:text-nav  rounded-md px-3 py-2  ${isActive ? "bg-white text-nav" : ""}`} to="/attendance">
                                    <PiSealCheckBold className="w-6 h-6" />
                                    Attendance
                                </NavLink>
                            </li>
                        </ul>
                    )
                }
                {
                    user?.role === 'admin' && (
                        <ul className='text-nav-text flex flex-col gap-3 text-base font-semibold'>
                            <li className="flex items-center gap-2">
                                <NavLink to="/admin/dashboard">My Dashboard</NavLink>
                            </li>
                            <li className="flex items-center gap-2"> <NavLink to="/admin/messaging-page" className="hover:text-yellow-400">Messaging</NavLink></li>
                            <li className="flex items-center gap-2"> <NavLink to="/admin/students" className="hover:text-yellow-400">Students</NavLink></li>
                            <li className="flex items-center gap-2"> <NavLink to="/admin/teachers" className="hover:text-yellow-400">Teachers</NavLink></li>
                            <li className="flex items-center gap-2"> <NavLink to="/admin/guardians" className="hover:text-yellow-400">Guardians</NavLink></li>
                            <li className=""><NavLink to="/admin/admin-page" className="hover:text-yellow-400">Admin</NavLink></li>

                            <li className="flex items-center gap-2"> <NavLink to="/admin/classes" className="hover:text-yellow-400">Classes</NavLink></li>
                            <li className="flex items-center gap-2"> <NavLink to="/admin/subjects" className="hover:text-yellow-400">Subjects</NavLink></li>
                            <li className="flex items-center gap-2"> <NavLink to="/admin/assignments-and-quizzes" className="hover:text-yellow-400">Assignments and Quizzes</NavLink></li>
                            <li className="flex items-center gap-2"> <NavLink to="/admin/exams" className="hover:text-yellow-400">Exams</NavLink></li>
                            <li className="flex items-center gap-2"> <NavLink to="/admin/sms" className="hover:text-yellow-400">SMS</NavLink></li>
                            <li className="flex items-center gap-2"> <NavLink to="/admin/attendance">Attendance</NavLink></li>
                        </ul>
                    )
                }
            </div>
        </div>
    )
}

export default SideNav