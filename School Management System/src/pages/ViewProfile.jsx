import React from 'react'
import { useParams } from "react-router-dom";
import classes from "../data/Classes.json"
import { FaArrowLeft } from "react-icons/fa";
import LinksBtn from '../components/LinksBtn';

const ViewProfile = () => {
    const { id } = useParams();
    const studentId = parseInt(id);
    const classData = classes.find(cls =>
        (cls.students || []).some(student => student.id === studentId)
    );

    const student = classData?.students.find(s => s.id === studentId);

    if (!student) {
        return <p>Student not found.</p>;
    }

    return (
        <div className="m-4 space-y-5">
            <section className='flex'>
                <LinksBtn
                    to="/my-students"
                    text="Back"
                    className="text-base text-gray-600 font-medium flex gap-2 items-center"
                    icon={<FaArrowLeft className='w-5 h-5' />}
                />
            </section>

            <div className="p-6 space-y-4">
                <h2 className="text-2xl font-bold">Student Profile</h2>
                <p><strong>Name:</strong> {student.name}</p>
                <p><strong>Gender:</strong> {student.gender}</p>
                <p><strong>Guardian:</strong> {student.guardianName}</p>
                <p><strong>Phone:</strong> {student.phoneNumber}</p>
                <p><strong>Class:</strong> {classData.name}</p>
            </div>
        </div>
    )
}

export default ViewProfile