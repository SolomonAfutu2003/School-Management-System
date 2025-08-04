import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from '../../components/Button';
import LinksBtn from '../../components/LinksBtn';
import { FaArrowLeft } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import Teachers from "../../data/Teachers.json";
import Students from "../../data/Students.json";

import Profile from "../../assets/images/e5009c87a1c6691336f8e40ae3133dd6b70357d7.jpg"

const EditDetail = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [type, setType] = useState("");

    const subjects = ["English", "Mathematics", "Physics", "Chemistry", "Biology", "History", "Geography", "Computer Science"
    ];
    const classes = ["JSS1", "JSS2", "JSS3", "SSS1", "SSS2", "SSS3"];


    useEffect(() => {
        const foundStudent = Students.students.find(s => s.student_id === id);
        const foundTeacher = Teachers.teachers.find(t => t.teacher_id === id);

        if (foundStudent) {
            setData(foundStudent);
            setType("student");
        } else if (foundTeacher) {
            setData(foundTeacher);
            setType("teacher");
        }
    }, [id]);

    if (!data) {
        return <div className="p-4">Loading...</div>;
    }

    return (
        <div className="m-5 space-y-5">
            <section className='flex justify-between items-center'>
                <LinksBtn
                    to={type === "teacher" ? "/admin/teachers" : "/admin/students"}
                    text="Back"
                    className="text-base text-gray-600 font-medium flex gap-2 items-center"
                    icon={<FaArrowLeft className='w-5 h-5' />}
                />
                <Button
                    text={"Save"}
                    className={"py-2 px-5 bg-nav text-white flex items-center gap-2 rounded-sm"}
                />
            </section>

            {type === "student" && (
                <section className='space-y-5'>
                    <div className='w-full'>
                        <h2 className="font-semibold">EDIT INFO</h2>
                        <hr className="my-4 border-gray-300" />
                        <div className='flex justify-between'>
                            <section>
                                <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
                                    <img className="w-full h-full object-cover" src={Profile} alt="Profile" />
                                </div>
                            </section>
                            <section className='grid grid-cols-4 gap-x-5 gap-y-4'>
                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">FIRST NAME</h2>
                                    <input defaultValue={data.first_name} className="border border-[#D1D5DB] px-2 py-1" type="text" name="" id="" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">LAST NAME</h2>
                                    <input defaultValue={data.last_name} className="border border-[#D1D5DB] px-2 py-1" type="text" name="" id="" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">OTHER NAME(S)</h2>
                                    <input defaultValue={data.other_name} className="border border-[#D1D5DB] px-2 py-1" type="text" name="" id="" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">ID</h2>
                                    <input defaultValue={data.student_id} className="border border-[#D1D5DB] px-2 py-1" type="text" name="" id="" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">ADDRESS</h2>
                                    <input defaultValue={data.address} className="border border-[#D1D5DB] px-2 py-1" type="text" name="" id="" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">GENDER</h2>
                                    <input defaultValue={data.gender} className="border border-[#D1D5DB] px-2 py-1" type="text" name="" id="" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">CLASS</h2>
                                    <input defaultValue={data.class} className="border border-[#D1D5DB] px-2 py-1" type="text" name="" id="" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">DATE OF BIRTH</h2>
                                    <input defaultValue={data.date_of_birth} className="border border-[#D1D5DB] px-2 py-1" type="date" name="" id="" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">RELIGION</h2>
                                    <input defaultValue={data.religion} className="border border-[#D1D5DB] px-2 py-1" type="text" name="" id="" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">ADMISSION DATE</h2>
                                    <input defaultValue={data.enrollment_date} className="border border-[#D1D5DB] px-2 py-1" type="date" name="" id="" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">HEIGHT (CM)</h2>
                                    <input className="border border-[#D1D5DB] px-2 py-1" type="number" name="" id="" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">WEIGHT (KG)</h2>
                                    <input className="border border-[#D1D5DB] px-2 py-1" type="number" name="" id="" />
                                </div>
                            </section>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between'>
                            <h2 className="font-semibold">GUARDING 1 INFO</h2>
                            <Button
                                text={"Add another guardian"}
                                icon={<FiPlus className='w-5 h-5 text-nav' />}
                                className={"py-2 px-5 text-nav flex items-center gap-2 rounded-sm"}
                            />
                        </div>
                        <hr className="my-4 border-gray-300" />
                        <div className='flex justify-between '>
                            <section className='flex flex-row items-start'>
                                <div className='w-[150px] h-[150px] rounded-full overflow-hidden'>
                                    <img className='w-full h-full object-cover' src={Profile} alt="" />
                                </div>
                            </section>
                            <section className='grid grid-cols-4 gap-x-5 gap-y-4'>
                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">FIRST NAME</h2>
                                    <input defaultValue={data.parent_guardian.name.split(" ")[0]} className="border border-[#D1D5DB] px-2 py-1" type="text" name="" id="" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">LAST NAME</h2>
                                    <input defaultValue={data.parent_guardian.name.split(" ")[1]} className="border border-[#D1D5DB] px-2 py-1" type="text" name="" id="" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">OTHER NAME(S)</h2>
                                    <input defaultValue={data.parent_guardian.other_name} className="border border-[#D1D5DB] px-2 py-1" type="text" name="" id="" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">RELATION</h2>
                                    <input defaultValue={data.parent_guardian.relationship} className="border border-[#D1D5DB] px-2 py-1" type="text" name="" id="" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">PHONE NUMBER</h2>
                                    <input defaultValue={data.parent_guardian.phone} className="border border-[#D1D5DB] px-2 py-1" type="text" name="" id="" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">EMAIL ADDRESS</h2>
                                    <input defaultValue={data.parent_guardian.email} className="border border-[#D1D5DB] px-2 py-1" type="text" name="" id="" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">RELIGION</h2>
                                    <input defaultValue={data.enrollment_date} className="border border-[#D1D5DB] px-2 py-1" type="text" name="" id="" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">ADDRESS</h2>
                                    <input defaultValue={data.address} className="border border-[#D1D5DB] px-2 py-1" type="text" name="" id="" />
                                </div>
                            </section>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between'>
                            <h2 className="font-semibold">GUARDING 2 INFO</h2>
                            <Button
                                text={"Add another guardian"}
                                icon={<FiPlus className='w-5 h-5 text-nav' />}
                                className={"py-2 px-5 text-nav flex items-center gap-2 rounded-sm"}
                            />
                        </div>
                        <hr className="my-4 border-gray-300" />
                        <div className='flex justify-between '>
                            <section className='flex flex-row items-start'>
                                <div className='w-[150px] h-[150px] rounded-full overflow-hidden'>
                                    <img className='w-full h-full object-cover' src={Profile} alt="" />
                                </div>
                            </section>
                            <section className='grid grid-cols-4 gap-x-5 gap-y-4'>
                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">FIRST NAME</h2>
                                    <input defaultValue={data.parent_guardian.name.split(" ")[0]} className="border border-[#D1D5DB] px-2 py-1" type="text" name="" id="" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">LAST NAME</h2>
                                    <input defaultValue={data.parent_guardian.name.split(" ")[1]} className="border border-[#D1D5DB] px-2 py-1" type="text" name="" id="" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">OTHER NAME(S)</h2>
                                    <input defaultValue={data.parent_guardian.other_name} className="border border-[#D1D5DB] px-2 py-1" type="text" name="" id="" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">RELATION</h2>
                                    <input defaultValue={data.parent_guardian.relationship} className="border border-[#D1D5DB] px-2 py-1" type="text" name="" id="" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">PHONE NUMBER</h2>
                                    <input defaultValue={data.parent_guardian.phone} className="border border-[#D1D5DB] px-2 py-1" type="text" name="" id="" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">EMAIL ADDRESS</h2>
                                    <input defaultValue={data.parent_guardian.email} className="border border-[#D1D5DB] px-2 py-1" type="text" name="" id="" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">RELIGION</h2>
                                    <input defaultValue={data.enrollment_date} className="border border-[#D1D5DB] px-2 py-1" type="text" name="" id="" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">ADDRESS</h2>
                                    <input defaultValue={data.address} className="border border-[#D1D5DB] px-2 py-1" type="text" name="" id="" />
                                </div>
                            </section>
                        </div>
                    </div>
                </section>)}

            {type === "teacher" && (
                <section className='space-y-5'>
                    <div className='w-full'>
                        <h2 className="font-semibold">EDIT INFO</h2>
                        <hr className="my-4 border-gray-300" />
                        <div className='flex justify-between'>
                            <section>
                                <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
                                    <img className="w-full h-full object-cover" src={Profile} alt="Profile" />
                                </div>
                            </section>
                            <section className='grid grid-cols-4 gap-x-5 gap-y-4'>
                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">FIRST NAME</h2>
                                    <input defaultValue={data.first_name} className="border border-[#D1D5DB] px-2 py-1" type="text" name="" id="" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">LAST NAME</h2>
                                    <input defaultValue={data.last_name} className="border border-[#D1D5DB] px-2 py-1" type="text" name="" id="" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">OTHER NAME(S)</h2>
                                    <input defaultValue={data.other_name} className="border border-[#D1D5DB] px-2 py-1" type="text" name="" id="" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">ID</h2>
                                    <input defaultValue={data.teacher_id} className="border border-[#D1D5DB] px-2 py-1" type="text" name="" id="" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">ADDRESS</h2>
                                    <input defaultValue={data.address} className="border border-[#D1D5DB] px-2 py-1" type="text" name="" id="" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">GENDER</h2>
                                    <input defaultValue={data.gender} className="border border-[#D1D5DB] px-2 py-1" type="text" name="" id="" />
                                </div>

                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">DATE OF BIRTH</h2>
                                    <input defaultValue={data.date_of_birth} className="border border-[#D1D5DB] px-2 py-1" type="date" name="" id="" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">RELIGION</h2>
                                    <input className="border border-[#D1D5DB] px-2 py-1" type="text" name="" id="" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">ADMISSION DATE</h2>
                                    <input defaultValue={data.admission_date} className="border border-[#D1D5DB] px-2 py-1" type="date" name="" id="" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">CLASS</h2>
                                    <select className="border border-[#D1D5DB] px-2 py-1" name="" id="">
                                        {classes.map((className, index) => (
                                            <option key={index} value={className}>{className}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <h2 className="text-sm font-normal text-gray-400">SUBJECTS</h2>
                                    <select className="border border-[#D1D5DB] px-2 py-1" name="" id="">
                                        {subjects.map((subject, index) => (
                                            <option key={index} value={subject}>{subject}</option>
                                        ))}
                                    </select>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>)}

        </div>
    )
}

export default EditDetail