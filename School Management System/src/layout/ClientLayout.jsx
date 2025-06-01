import React from 'react'
import { Outlet } from 'react-router'
import SideNav from '../components/SideNav'
import TopNav from '../components/TopNav'


const ClientLayout = () => {
    return (
        <div className='flex bg-white'>
            <SideNav />
            <main className='w-full'>
                <TopNav />
                <Outlet />
            </main>
        </div>
    )
}

export default ClientLayout