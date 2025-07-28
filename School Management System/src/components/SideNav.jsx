import React from 'react'
import { Link } from 'react-router'
import { useAuth } from '../context/authContext'



const SideNav = () => {
    const { user } = useAuth()

    return (
        <div className='bg-nav sticky top-0  h-screen pt-8 text-left flex flex-col gap-3 px-4'>
            <h1 className='text-white text-3xl font-header font-bold'>LOGO</h1>

            <div>
                <ul className='text-nav-text flex flex-col gap-3 text-base font-semibold'>
                    <li>
                        <Link to="/">My Dashboard</Link>
                    </li>

                    {
                        user?.role === 'user' && (
                            <ul className='text-nav-text flex flex-col gap-3 text-base font-semibold'>
                                <li>
                                    <Link to="/my-subjects">My Subjects</Link>
                                </li>
                                <li>
                                    <Link to="/my-classes">My Classes</Link>
                                </li>
                                <li>
                                    <Link to="/exams">Exams</Link>
                                </li>
                                <li>
                                    <Link to="/my-students">My Students</Link>
                                </li>
                                <li>
                                    <Link to="/attendance">Attendance</Link>
                                </li>
                            </ul>
                        )
                    }
                    {
                        user?.role === 'admin' && (
                            <ul className='text-nav-text flex flex-col gap-3 text-base font-semibold'>
                                <li> <Link to="/admin/messaging-page" className="hover:text-yellow-400">Messaging</Link></li>
                                <li> <Link to="/admin/students" className="hover:text-yellow-400">Students</Link></li>
                                <li> <Link to="/admin/teachers" className="hover:text-yellow-400">Teachers</Link></li>
                                <li> <Link to="/admin/guardians" className="hover:text-yellow-400">Guardians</Link></li>
                                <li><Link to="/admin/admin-page" className="hover:text-yellow-400">Admin</Link></li>

                                <li> <Link to="/admin/classes" className="hover:text-yellow-400">Classes</Link></li>
                                <li> <Link to="/admin/subjects" className="hover:text-yellow-400">Subjects</Link></li>
                                <li> <Link to="/admin/assignments-and-quizzes" className="hover:text-yellow-400">Assignments and Quizzes</Link></li>
                                <li> <Link to="/admin/exams" className="hover:text-yellow-400">Exams</Link></li>
                                <li> <Link to="/admin/sms" className="hover:text-yellow-400">SMS</Link></li>
                                <li> <Link to="/admin/attendance">Attendance</Link></li>
                            </ul>
                        )
                    }

                </ul>
            </div>


        </div>
    )
}

export default SideNav