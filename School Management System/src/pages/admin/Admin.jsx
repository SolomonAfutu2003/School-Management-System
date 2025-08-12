import React, { useState } from 'react';
import AdminData from "../../data/Admin.json";
import Button from '../../components/Button';
// import LinkBtn from "../../components/LinksBtn";
import { CiSearch } from "react-icons/ci";
import { SlOptionsVertical } from "react-icons/sl";
import { IoMdClose } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { VscSettings } from "react-icons/vsc";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Admin = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeFilterMenu, setActiveFilterMenu] = useState(null);
  const [selectedGender, setSelectedGender] = useState("");
  const [search, setSearch] = useState("");
  const [reorderMenu, setReorderMenu] = useState(false)



  return (
    <div className='m-4 space-y-5'>
      {/* Search Bar */}
      <section className='flex justify-between items-center'>
        <div className='flex gap-3 items-center'>
          <div className='relative'>
            <input
              className='border border-gray-400 rounded-sm px-9 py-2 w-[603px]'
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search'
            />
            <div className='absolute left-4 top-3'>
              <CiSearch className='w-5 h-5' />
            </div>
          </div>
          <div className='relative'>
            <VscSettings className='w-10 h-10 p-2 rotate-90 rounded-sm border border-gray-400' onClick={() => setActiveFilterMenu(prev => !prev)} />
            {activeFilterMenu && (
              <div className='border border-gray-400 bg-white w-64 h-[205px] absolute top-12 z-20 p-3 space-y-5'>
                <div>
                  <h3>Gender</h3>
                  <label className="flex items-center gap-2 cursor-pointer relative mb-2">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      className="peer hidden"
                      checked={selectedGender === "Male"}
                      onChange={() => setSelectedGender("Male")}
                    />
                    <div className="w-5 h-5 rounded-sm border-2 border-gray-400 relative peer-checked:border-nav flex items-center justify-center">
                    </div>
                    <FaCheck className='absolute text-nav w-3 h-3 left-1 right-1 hidden peer-checked:block' />
                    <span className="peer-checked:font-bold">Male</span>
                  </label>
                  <label className="flex items-center gap-2 relative cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      className="peer hidden"
                      checked={selectedGender === "Female"}
                      onChange={() => setSelectedGender("Female")}
                    />
                    <div className="w-5 h-5 rounded-sm border-2 border-gray-400 relative peer-checked:border-nav flex items-center justify-center">
                    </div>
                    <FaCheck className='absolute text-nav w-3 h-3 left-1 right-1 hidden peer-checked:block' />
                    <span className="peer-checked:font-bold">Female</span>
                  </label>
                </div>
                <hr className='bg-gray-400' />
                <div className='flex justify-between'>
                  <Button text={"Reset"}
                    className={"text-nav px-4 py-2 w-24 border border-nav rounded-md"}
                    onClick={() => {
                      setSelectedGender("");
                    }} />
                  <Button text={"Save"}
                    className={"bg-nav text-white px-4 py-2 w-24 rounded-md"} />
                </div>
              </div>
            )}
          </div>
        </div>
        <Button
          icon={<FiPlus className='w-5 h-5' />}
          onClick={() => setReorderMenu(true)}
          text={"Add Admin"}
          className={"bg-nav text-white px-3 py-2 rounded-lg flex items-center gap-1"} />
      </section>

      {/* Students Table */}
      <section className='border rounded-2xl border-[#EAECF0] p-5 space-y-5'>
        <h3 className='text-2xl font-semibold'>Admin</h3>

        {/* Header Row */}
        <div className='p-5 bg-[#F1F4F9]'>
          <ul className='grid grid-cols-11 gap-4'>
            <li className='col-span-2'>Name</li>
            <li className='col-span-3'>Email</li>
            <li className='col-span-4'>Permission</li>
            <li className='col-start-11'>Action</li>
          </ul>
        </div>

        {AdminData.administrators.map((admin) => (
          <div key={admin.admin_id}>
            <ul className='grid grid-cols-11 gap-4 text-[15px] p-2'>
              <li className='col-span-2'>{admin.first_name} {admin.last_name}</li>
              <li className='col-span-3'>{admin.email}</li>
              <li className='col-span-4'>{admin.permissions.join(" | ")}</li>
              <li className='col-start-11 relative'>
                <Button
                  icon={<SlOptionsVertical />}
                  onClick={() =>
                    setActiveDropdown((prev) => (prev === admin.admin_id ? null : admin.admin_id))
                  }
                />
                {activeDropdown === admin.admin_id && (
                  <div className='w-60 bg-white absolute right-0 z-20 shadow-lg shadow-black'>
                    <div className="flex flex-col justify-between">
                      <Button
                        icon={<FiEdit className='w-5 h-5' />}
                        text={"Edit Detail"}
                        className={"py-3 px-4 text-left text-gray-600 flex items-center gap-2"}
                      />
                      <hr className='border border-gray-300' />
                      <Button
                        icon={<IoMdClose className='w-5 h-5' />}
                        text={"Suspend"}
                        className={"py-3 px-4 text-left text-red-600 flex items-center gap-2"}
                      />
                    </div>
                  </div>
                )}
              </li>
            </ul>
            <hr className='border-gray-300' />
          </div>

        ))}
      </section>

      {reorderMenu &&
        <div className="fixed inset-0 bg-[#0000005e] z-10 flex justify-center items-center">
          <section>
            <div className="space-y-5 bg-white p-5 max-w-full h-fit rounded shadow-lg">

              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold">Add Admin</h4>
                <Button icon={<IoIosClose className="text-nav w-6 h-6 bg-gray-300 rounded-full cursor-pointer" />} onClick={() => setReorderMenu(false)} />
              </div>
              <hr className='border border-gray-300' />

              <div>
                <form className='space-y-4'>
                  <div className='grid grid-cols-3 gap-3'>
                    <div className='flex flex-col gap-2'>
                      <label htmlFor="firstName">First Name</label>
                      <input type="text" id='firstName' className='border border-gray-300 rounded-sm py-2 px-3' placeholder="Enter first name" />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label htmlFor="lastName">Last Name</label>
                      <input type="text" id='lastName' className='border border-gray-300 rounded-sm py-2 px-3' placeholder="Enter last name" />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label htmlFor="email">Email</label>
                      <input type="email" id='email' className='border border-gray-300 rounded-sm py-2 px-3' placeholder="Enter email" />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label htmlFor="password">Phone number</label>
                      <input type="password" id='password' className='border border-gray-300 rounded-sm py-2 px-3' placeholder="Enter phone" />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label htmlFor="confirmPassword">Role</label>
                      <select name="" id="" className='border border-gray-300 rounded-sm py-2 px-3'>
                        <option disabled selected value="">Select role</option>
                      </select>
                    </div>
                  </div>

                  <hr className='border-gray-300' />

                  <div className='grid grid-cols-3 gap-3'>
                    <div className='flex flex-col gap-2'>
                      <label htmlFor="firstName">First Name</label>
                      <input type="text" id='firstName' className='border border-gray-300 rounded-sm py-2 px-3' placeholder="Enter" />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label htmlFor="lastName">Last Name</label>
                      <input type="text" id='lastName' className='border border-gray-300 rounded-sm py-2 px-3' placeholder="Enter" />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label htmlFor="email">Email</label>
                      <input type="email" id='email' className='border border-gray-300 rounded-sm py-2 px-3' placeholder="Enter" />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label htmlFor="password">Phone</label>
                      <input type="password" id='password' className='border border-gray-300 rounded-sm py-2 px-3' placeholder="Enter" />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label htmlFor="confirmPassword">Role</label>
                      <input type="password" id='confirmPassword' className='border border-gray-300 rounded-sm py-2 px-3' placeholder="Enter" />
                    </div>
                  </div>
                </form>

              </div>

              <div className="flex gap-3 justify-between">
                <Button
                  text="Add another"
                  icon={<FiPlus className='w-5 h-5' />}
                  className="bg-white text-gray-600 flex items-center gap-2"
                />
                <Button
                  icon={<IoMdCheckmarkCircleOutline className='w-5 h-5' />}
                  text="Send invite"
                  className="bg-nav text-white px-10 py-2 flex items-center gap-2.5 rounded-sm"
                />
              </div>
            </div>
          </section>
        </div>
      }
    </div>
  );
};

export default Admin;


