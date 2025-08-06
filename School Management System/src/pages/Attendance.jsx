import React from "react";
import { CiSearch } from "react-icons/ci";
import AttendancesData from "../data/Attendance.json"
import Button from "../components/Button";

const Attendance = () => {


  return (
    <div className="m-4 space-y-5">
      <section className="border rounded-2xl border-[#EAECF0] p-5 space-y-5">
        <h3 className="text-lg font-semibold">Attendance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* User Type Dropdown */}
          <select
            className="border border-gray-400 rounded-sm p-2 w-full"
          >
            <option value="">Select User Type</option>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            <option value="Admin">Admin</option>
          </select>

          {/* Class Dropdown */}
          <select
            className="border border-gray-400 rounded-sm p-2 w-full"
          >
            <option value="">Select Class</option>

          </select>

          {/* Student Dropdown */}
          <select
            className="border border-gray-400 rounded-sm p-2 w-full"
          >
            <option value="">Select Student</option>

          </select>

          {/* Month Dropdown */}
          <select

            className="border border-gray-400 rounded-sm p-2 w-full"

          >
            <option value="">Select Month</option>

          </select>
        </div>

        <div className="flex gap-5">
          <Button
            text={"Load Data"}
            className={"bg-nav text-white px-10 py-2 rounded-lg"}
          />
          <Button
            text={"Reset"}
            className={"bg-white text-black border border-[#D0D5DD] px-10 py-2 rounded-lg"}

          />
        </div>
      </section>

      {/* Attendance Table */}
      <section className="border rounded-2xl border-[#EAECF0] p-5 space-y-5 ">
        <div>
          <div className="flex justify-between items-center" >
            <h3 className="text-lg font-semibold">Attendance Records</h3>

            <div className="relative flex gap-3">
              <input
                className="border border-gray-400 rounded-sm px-9 py-2 max-w-[603px]"
                type="search"
                placeholder="Search"
              />
              <div className="absolute left-4 top-3">
                <CiSearch className="w-5 h-5" />
              </div>
              <Button
                text={"Save"}
                className={"bg-nav text-white px-10 py-2 rounded-lg"}
              />
            </div>
          </div>
        </div>
        <div>
          {/* Table Header with Month Controls */}
          <div className="flex flex-col items-end">
            <div className="">
              <div className=" border border-gray-200 text-center px-[371px] py-3">
                <span className="mr-2 text-sm font-medium text-gray-600">Month</span>
              </div>
              <div className="border border-t-0 border-b-0 border-gray-200 text-center px-[371px] py-3">
                <span className="text-blue-800 font-medium">September 2023</span>
              </div>
            </div>
          </div>


          <div className="flex border border-gray-200 shadow-sm">
            {/* Fixed Student Names Column */}
            <div className="">
              <table className="border-r border-gray-200">
                <thead className="border-b border-gray-200">
                  <tr>
                    <th className="w-48 px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                  </tr>
                </thead>
                <tbody className=" divide-y divide-gray-200">
                  {AttendancesData.attendance_records.map((student) => (
                    <tr key={student.student_id} className="">
                      <td className="w-48 px-3 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900">
                        {student.student_name}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Attendance Table */}
            <div className="overflow-x-auto ">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="">
                  <tr>
                    {Array.from({ length: 30 }, (_, i) => {
                      const day = (i + 1).toString().padStart(2, '0');
                      return (
                        <th key={day} className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {day}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {AttendancesData.attendance_records.map((student) => {
                    return (
                      <tr key={student.student_id} className="hover:bg-gray-50">
                        {Object.entries(student.monthly_attendance["September-2023"]).map(([day, status]) => (
                          <td
                            key={`${student.student_id}-${day}`}
                            className="px-2 py-4 whitespace-nowrap text-sm text-center"
                          >
                            {status !== 'weekend' && (
                              <div className="flex items-center justify-center">
                                <label className="inline-flex items-center">
                                  <input
                                    type="checkbox"
                                    className="form-checkbox h-4 w-4 text-green-600 transition duration-150 ease-in-out"
                                    checked={status === 'present'}
                                  />
                                </label>
                              </div>
                            )}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Attendance;
