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
                            </ul>
                        )
                    }
                </ul>
            </div>
            {
                user?.role === 'admin' && (
                    <>
                        <li>
                            <Link to="/admin/admin-page" className="hover:text-yellow-400">Manage Users</Link>
                        </li>
                        {/* <li>
                            <NavLink to="/admin/" className="hover:text-yellow-400">Reports</NavLink>
                        </li> */}
                    </>
                )
            }
        </div>
    )
}

export default SideNav