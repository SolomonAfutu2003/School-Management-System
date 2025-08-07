import React,{useState} from 'react'
import { useParams } from "react-router-dom";
import classesData from "../data/Classes.json"
import { FaArrowLeft } from "react-icons/fa";
import LinksBtn from '../components/LinksBtn';
import Button from '../components/Button';
import { FiEdit } from "react-icons/fi";
import { SlOptionsVertical } from "react-icons/sl";
import { IoEyeOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import StudentsData from "../data/Students.json";

const ViewProfile = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const { id } = useParams();
    const classData = classesData.classes.find((cls) => cls.class_id === id);

    if (!classData) {
        return <div className="p-4">Class not found</div>;
    }
    
   

    return (
        <div className="m-4 space-y-5">
            <section className='flex justify-between items-center'>
                <LinksBtn
                    to="/my-classes"
                    text="Back"
                    className="text-base text-gray-600 font-medium flex gap-2 items-center"
                    icon={<FaArrowLeft className='w-5 h-5' />}
                />
            </section>

            <div className=" space-y-4">
                <h2 className="text-2xl font-bold">CLASS INFO</h2>
                <hr className="my-4 border-gray-300" />
                <div className="grid grid-cols-5 gap-4">
                    <div>
                        <h3 className="text-sm font-normal text-gray-400">CLASS NAME</h3>
                        <p className="text-lg font-medium font-text text-nav underline">{classData.name}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-normal text-gray-400">CLASS MASTER</h3>
                        <p className="text-lg font-medium font-text text-nav underline">{classData.homeroom_teacher}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-normal text-gray-400">ENGLISH TEACHER</h3>
                        <p className="text-lg font-medium font-text text-nav underline">{classData.homeroom_teacher}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-normal text-gray-400">MATHEMATICS TEACHER</h3>
                        <p className="text-lg font-medium font-text text-nav underline">{classData.homeroom_teacher}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-normal text-gray-400">SOCIAL STUDIES TEACHER</h3>
                        <p className="text-lg font-medium font-text text-nav underline">{classData.homeroom_teacher}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-normal text-gray-400">RME TEACHER</h3>
                        <p className="text-lg font-medium font-text text-nav underline">{classData.homeroom_teacher}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-normal text-gray-400">TWI TEACHER</h3>
                        <p className="text-lg font-medium font-text text-nav underline">{classData.homeroom_teacher}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-normal text-gray-400">GA TEACHER</h3>
                        <p className="text-lg font-medium font-text text-nav underline">{classData.homeroom_teacher}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-normal text-gray-400">PRE-TECH TEACHER</h3>
                        <p className="text-lg font-medium font-text text-nav underline">{classData.homeroom_teacher}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-normal text-gray-400">HOME-ECONOMICS TEACHER</h3>
                        <p className="text-lg font-medium font-text text-nav underline">{classData.homeroom_teacher}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-normal text-gray-400">VISUAL ART TEACHER</h3>
                        <p className="text-lg font-medium font-text text-nav underline">{classData.homeroom_teacher}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-normal text-gray-400">FRENCH TEACHER</h3>
                        <p className="text-lg font-medium font-text text-nav underline">{classData.homeroom_teacher}</p>
                    </div>
                </div>
            </div>

            <section className='border rounded-2xl border-[#EAECF0] p-5 space-y-5'>
        <h3 className='text-2xl font-semibold'>Students - {classData.name}</h3>

        {/* Header Row */}
        <div className='p-5 bg-[#F1F4F9]'>
          <ul className='grid grid-cols-16 gap-4'>
            <li className='col-span-3'>Student Name</li>
            <li className='col-span-2'>ID</li>
            <li className='col-span-2'>Class</li>
            <li className='col-span-2'>Gender</li>
            <li className='col-span-3'>Guardian Name</li>
            <li className='col-span-3'>Guardian Phone</li>
            <li className='col-start-16'>Action</li>
          </ul>
        </div>

        {StudentsData.students.map((student) => (
          <div key={student.student_id}>
            <ul className='grid grid-cols-16 gap-4 text-[15px] p-2'>
              <li className='col-span-3'>{student.first_name} {student.last_name}</li>
              <li className='col-span-2'>{student.student_id}</li>
              <li className='col-span-2'>{student.class}</li>
              <li className='col-span-2'>{student.gender}</li>
              <li className='col-span-3'>{student.parent_guardian.name}</li>
              <li className='col-span-3'>{student.phone}</li>
              <li className='col-start-16 relative'>
                <Button
                  icon={<SlOptionsVertical />}
                  onClick={() =>
                    setActiveDropdown((prev) => (prev === student.student_id ? null : student.student_id))
                  }
                />
                {activeDropdown === student.student_id && (
                  <div className='w-60 bg-white absolute right-0 z-20 shadow-lg shadow-black'>
                    <div className="flex flex-col justify-between">
                      <LinkBtn
                        to={`/view-detail/${student.student_id}`}
                        icon={<IoEyeOutline className='w-5 h-5' />}
                        text={"View Detail"}
                        className={"py-3 px-4 text-left text-gray-600 flex items-center gap-2"}
                      />
                      <hr className='border border-gray-300' />
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
        </div>
    )
}

export default ViewProfile