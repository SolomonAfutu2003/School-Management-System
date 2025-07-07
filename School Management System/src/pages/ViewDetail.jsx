import React from 'react'
import classes from "../data/Classes.json"
import { useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import LinksBtn from '../components/LinksBtn';

const ViewDetail = () => {
  const { id } = useParams();
  const classData = classes.find((cls) => cls.id === parseInt(id));

  if (!classData) {
    return <div className="p-4">Class not found</div>;
  }

  return (
    <div className="m-4 space-y-5">
      {/* Back button */}
      <section className='flex'>
        <LinksBtn
          to="/my-classes"
          text="Back"
          className="text-base text-gray-600 font-medium flex gap-2 items-center"
          icon={<FaArrowLeft className='w-5 h-5' />}
        />
      </section>

      {/* Class Info */}
      <h2>CLASS INFO</h2>
      <hr className="my-4 border-gray-300" />

      <div className='grid grid-cols-5 gap-5'>
        <div>
          <h2 className="text-sm font-bold">CLASS NAME</h2>
          <p>{classData.name}</p>
        </div>
        <div>
          <h2 className="text-sm font-bold">Teachers</h2>
          <p>{classData.teachers.map(t => t.name).join(", ")}</p>
        </div>
      </div>

      {/* Students List */}
      <section className='border rounded-2xl border-[#EAECF0] p-5 space-y-5'>
        <h3 className="mt-4 font-semibold">Students - {classData.name}</h3>

        <div className='p-5 bg-[#F1F4F9]'>
          <ul className='grid grid-cols-12 gap-4 font-semibold'>
            <li className='col-span-2'>Name</li>
            <li className='col-span-2'>ID</li>
            <li className='col-span-2'>Class name</li>
            <li className='col-span-2'>Gender</li>
            <li className='col-span-2'>Guardian Name</li>
            <li className='col-span-2'>Phone</li>
          </ul>
        </div>

        {classData.students.map((s, index) => (
          <div key={index}>
            <ul className='grid grid-cols-12 gap-4 text-[17px] p-5'>
              <li className='col-span-2'>{s.name}</li>
              <li className='col-span-2'>{s.id}</li>
              <li className='col-span-2'>{classData.name}</li>
              <li className='col-span-2'>{s.gender}</li>
              <li className='col-span-2'>{s.guardianName}</li>
              <li className='col-span-2'>{s.phoneNumber}</li>
            </ul>
            <hr className='border-gray-300' />
          </div>
        ))}
      </section>
    </div>
  );
}

export default ViewDetail;
