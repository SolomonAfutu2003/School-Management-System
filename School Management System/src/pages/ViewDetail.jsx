import React from 'react';
import Students from "../data/Students.json";
import Profile from "../assets/images/e5009c87a1c6691336f8e40ae3133dd6b70357d7.jpg"
import { useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
import { CiStar } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
// import Button from '../components/Button';
import LinksBtn from '../components/LinksBtn';



const ViewDetail = () => {
  const { id } = useParams();

  const studentData = Students.students.find((student) => student.student_id === id);

  if (!studentData) {
    return <div className="p-4">No student or teacher found with this ID</div>;
  }

  return (
    <div className="m-5 space-y-10">
      <section className='flex justify-between items-center'>
        <LinksBtn
          to={"/my-students"}
          text="Back"
          className="text-base text-gray-600 font-medium flex gap-2 items-center"
          icon={<FaArrowLeft className='w-5 h-5' />}
        />
        <LinksBtn
          icon={<FiEdit className='w-5 h-5' />}
          to={`/attendance`}
          text={"Edit Attendance"}
          className={"py-2 px-5 text-left bg-nav text-white flex items-center gap-2 rounded-sm"}
        />
      </section >




      <section className='space-y-5'>
        <div>
          <h2 className="font-semibold">STUDENT INFO</h2>
          <hr className="my-4 border-gray-300" />
          <div className='flex justify-between items-center'>
            <section>
              <div className="w-[200px] h-[200px] rounded-full overflow-hidden">
                <img className="w-full h-full object-cover" src={Profile} alt="Profile" />
              </div>
            </section>
            <section className='grid grid-cols-5 gap-4 px-8'>
              <div>
                <h2 className="text-sm font-normal text-gray-400">FIRST NAME</h2>
                <p className="text-lg font-medium font-text">{studentData.first_name}</p>
              </div>
              <div>
                <h2 className="text-sm font-normal text-gray-400">LAST NAME</h2>
                <p className="text-lg font-medium font-text">{studentData.last_name}</p>
              </div>
              <div>
                <h2 className="text-sm font-normal text-gray-400">OTHER NAME(S)</h2>
                <p className="text-lg font-medium font-text">{studentData.other_names ? studentData.other_names : "None"}</p>
              </div>
              <div>
                <h2 className="text-sm font-normal text-gray-400">ID</h2>
                <p className="text-lg font-medium font-text">{studentData.student_id}</p>
              </div>
              <div>
                <h2 className="text-sm font-normal text-gray-400">ADDRESS</h2>
                <p className="text-lg font-medium font-text">{studentData.address}</p>
              </div>
              <div>
                <h2 className="text-sm font-normal text-gray-400">GENDER</h2>
                <p className="text-lg font-medium font-text">{studentData.gender}</p>
              </div>
              <div>
                <h2 className="text-sm font-normal text-gray-400">CLASS</h2>
                <p className="text-lg font-medium font-text">{studentData.class}</p>
              </div>
              <div>
                <h2 className="text-sm font-normal text-gray-400">DATE OF BIRTH</h2>
                <p className="text-lg font-medium font-text">{studentData.date_of_birth}</p>
              </div>
              <div>
                <h2 className="text-sm font-normal text-gray-400">RELIGION</h2>
                <p className="text-lg font-medium font-text">{studentData.religion ? studentData.religion : "None"}</p>
              </div>
              <div>
                <h2 className="text-sm font-normal text-gray-400">ADMISSION DATE</h2>
                <p className="text-lg font-medium font-text">{studentData.enrollment_date}</p>
              </div>
              <div>
                <h2 className="text-sm font-normal text-gray-400">ATTENDANCE</h2>
                <p className="text-lg font-medium font-text">{studentData.enrollment_date}</p>
              </div>
              <div>
                <h2 className="text-sm font-normal text-gray-400">HEIGHT (CM)</h2>
                <p className="text-lg font-medium font-text">{studentData.height ? studentData.height : "_"}</p>
              </div>
              <div>
                <h2 className="text-sm font-normal text-gray-400">WEIGHT (KG)</h2>
                <p className="text-lg font-medium font-text">{studentData.weight ? studentData.weight : "_"}</p>
              </div>
              <div>
                <h2 className="text-sm font-normal text-gray-400">REPORT CARD</h2>
                <LinksBtn
                  to={"#"}
                  text={"View"}
                  className={"text-lg font-text text-nav border-b border-nav font-medium"}
                />
              </div>
            </section>
          </div>
        </div>
        <div>
          <h2 className="font-semibold">GUARDING 1 INFO</h2>
          <hr className="my-4 border-gray-300" />
          <div className='flex justify-between '>
            <section className='flex flex-row items-start'>
              <div className='w-20 h-20 rounded-full overflow-hidden'>
                <img className='w-full h-full object-cover' src={Profile} alt="" />
              </div>
            </section>
            <section className='grid grid-cols-6 gap-4 px-10'>
              <div>
                <h2 className="text-sm font-normal text-gray-400">FIRST NAME</h2>
                <p className="text-lg font-medium font-text">{studentData.parent_guardian.name.split(" ")[0]}</p>
              </div>
              <div>
                <h2 className="text-sm font-normal text-gray-400">LAST NAME</h2>
                <p className="text-lg font-medium font-text">{studentData.parent_guardian.name.split(" ")[1]}</p>
              </div>
              <div>
                <h2 className="text-sm font-normal text-gray-400">OTHER NAME(S)</h2>
                <p className="text-lg font-medium font-text">{studentData.other_names ? studentData.other_names : "None"}</p>
              </div>
              <div>
                <h2 className="text-sm font-normal text-gray-400">RELATION</h2>
                <p className="text-lg font-medium font-text">{studentData.parent_guardian.relationship}</p>
              </div>
              <div>
                <h2 className="text-sm font-normal text-gray-400">PHONE NUMBER</h2>
                <p className="text-lg font-medium font-text">{studentData.parent_guardian.phone}</p>
              </div>
              <div>
                <h2 className="text-sm font-normal text-gray-400">EMAIL ADDRESS</h2>
                <p className="text-lg font-medium font-text">{studentData.parent_guardian.email}</p>
              </div>
              <div>
                <h2 className="text-sm font-normal text-gray-400">RELIGION</h2>
                <p className="text-lg font-medium font-text">{studentData.religion ? studentData.religion : "None"}</p>
              </div>
              <div>
                <h2 className="text-sm font-normal text-gray-400">ADMISSION DATE</h2>
                <p className="text-lg font-medium font-text">{studentData.enrollment_date}</p>
              </div>
              <div>
                <h2 className="text-sm font-normal text-gray-400">ADDRESS</h2>
                <p className="text-lg font-medium font-text">{studentData.address}</p>
              </div>
            </section>
          </div>
        </div>
        <div>
          <h2 className="font-semibold">GUARDING 2 INFO</h2>
          <hr className="my-4 border-gray-300" />
          <div className='flex justify-between '>
            <section className='flex flex-row items-start'>
              <div className='w-20 h-20 rounded-full overflow-hidden'>
                <img className='w-full h-full object-cover' src={Profile} alt="" />
              </div>
            </section>
            <section className='grid grid-cols-6 gap-4 px-10'>
              <div>
                <h2 className="text-sm font-normal text-gray-400">FIRST NAME</h2>
                <p className="text-lg font-medium font-text">{studentData.parent_guardian.name.split(" ")[0]}</p>
              </div>
              <div>
                <h2 className="text-sm font-normal text-gray-400">LAST NAME</h2>
                <p className="text-lg font-medium font-text">{studentData.parent_guardian.name.split(" ")[1]}</p>
              </div>
              <div>
                <h2 className="text-sm font-normal text-gray-400">OTHER NAME(S)</h2>
                <p className="text-lg font-medium font-text">{studentData.other_names ? studentData.other_names : "None"}</p>
              </div>
              <div>
                <h2 className="text-sm font-normal text-gray-400">RELATION</h2>
                <p className="text-lg font-medium font-text">{studentData.parent_guardian.relationship}</p>
              </div>
              <div>
                <h2 className="text-sm font-normal text-gray-400">PHONE NUMBER</h2>
                <p className="text-lg font-medium font-text">{studentData.parent_guardian.phone}</p>
              </div>
              <div>
                <h2 className="text-sm font-normal text-gray-400">EMAIL ADDRESS</h2>
                <p className="text-lg font-medium font-text">{studentData.parent_guardian.email}</p>
              </div>
              <div>
                <h2 className="text-sm font-normal text-gray-400">RELIGION</h2>
                <p className="text-lg font-medium font-text">{studentData.religion ? studentData.religion : "None"}</p>
              </div>
              <div>
                <h2 className="text-sm font-normal text-gray-400">ADMISSION DATE</h2>
                <p className="text-lg font-medium font-text">{studentData.enrollment_date}</p>
              </div>
              <div>
                <h2 className="text-sm font-normal text-gray-400">ADDRESS</h2>
                <p className="text-lg font-medium font-text">{studentData.address}</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewDetail;
