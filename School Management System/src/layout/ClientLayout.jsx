import React from 'react'
import { Outlet } from 'react-router'
import SideNav from '../components/SideNav'
import TopNav from '../components/TopNav'


const ClientLayout = () => {
    return (

        <div className="grid grid-cols-5 grid-rows-[60px,1fr]">
            <div className="row-span-5">
                <SideNav />
            </div>
            <div className="col-start-2 col-span-4">
                <TopNav />
            </div>
            <div className="col-start-2 col-span-4 row-span-4 ">
                <Outlet />
            </div>
        </div>

    )
}

export default ClientLayout