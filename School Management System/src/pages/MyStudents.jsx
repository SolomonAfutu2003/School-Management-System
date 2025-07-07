import React, { useState } from 'react';
import classes from "../data/Classes.json";
import { CiSearch } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";

const MyStudents = () => {
  const [search, setSearch] = useState("");

  // Flatten students from all classes
  const allStudents = classes.flatMap(cls => cls.students || []);

  // Filter by name
  const searchData = allStudents.filter(student =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

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
          <VscSettings className='w-10 h-10 p-2 rotate-90 rounded-sm border border-gray-400' />
        </div>
      </section>

      {/* Students Table */}
      <section className='border rounded-2xl border-[#EAECF0] p-5 space-y-5'>
        <h3 className='text-2xl font-semibold'>Students</h3>

        {/* Header Row */}
        <div className='p-5 bg-[#F1F4F9]'>
          <ul className='grid grid-cols-10 gap-4'>
            <li className='col-span-2'>Name</li>
            <li className='col-span-2'>ID</li>
            <li className='col-span-2'>Gender</li>
            <li className='col-span-2'>Guardian</li>
            <li className='col-span-2'>Phone</li>
          </ul>
        </div>

        {/* Render Filtered Students */}
        {searchData.map((student) => (
         <div key={student.id}>
            <ul className='grid grid-cols-10 gap-4 text-[15px] p-2'>
              <li className='col-span-2'>{student.name}</li>
              <li className='col-span-2'>{student.id}</li>
              <li className='col-span-2'>{student.gender}</li>
              <li className='col-span-2'>{student.guardianName}</li>
              <li className='col-span-2'>{student.phoneNumber}</li>
            </ul>
             <hr className='border-gray-300' />
         </div>
        ))}
      </section>
    </div>
  );
};

export default MyStudents;
