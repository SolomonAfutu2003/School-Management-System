import React from "react";
import { CiSearch } from "react-icons/ci";
import AttendancesData from "../data/Attendance.json";
import Button from "../components/Button";

const Attendance = () => {
  const months = [
    { name: "January", days: 31 },
    { name: "February", days: 28 },
    { name: "March", days: 31 },
    { name: "April", days: 30 },
    { name: "May", days: 31 },
    { name: "June", days: 30 },
    { name: "July", days: 31 },
    { name: "August", days: 31 },
    { name: "September", days: 30 },
    { name: "October", days: 31 },
    { name: "November", days: 30 },
    { name: "December", days: 31 },
  ];

  const dayHeaders = months.map((month) => {
    return Array.from({ length: month.days }, (_, i) => i + 1);
  });

  return (
    <div className="m-4 space-y-5">
      {/* Filters */}
      <section className="border rounded-2xl border-[#EAECF0] p-5 space-y-5">
        <h3 className="text-lg font-semibold">Attendance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <select className="border border-gray-400 rounded-sm p-2 w-full">
            <option value="">Select User Type</option>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            <option value="Admin">Admin</option>
          </select>
          <select className="border border-gray-400 rounded-sm p-2 w-full">
            <option value="">Select Class</option>
          </select>
          <select className="border border-gray-400 rounded-sm p-2 w-full">
            <option value="">Select Student</option>
          </select>
          <select className="border border-gray-400 rounded-sm p-2 w-full">
            <option value="">Select Month</option>
          </select>
        </div>
        <div className="flex gap-5">
          <Button text="Load Data" className="bg-nav text-white px-10 py-2 rounded-lg" />
          <Button text="Reset" className="bg-white text-black border border-[#D0D5DD] px-10 py-2 rounded-lg" />
        </div>
      </section>

      {/* Attendance Table */}
      <section className="border rounded-2xl border-[#EAECF0] p-5 space-y-5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Attendance Records</h3>
          <div className="relative flex gap-3">
            <input
              className="border border-gray-400 rounded-sm px-9 py-2 max-w-[300px]"
              type="search"
              placeholder="Search"
            />
            <div className="absolute left-3 top-2.5">
              <CiSearch className="w-5 h-5" />
            </div>
            <Button text="Save" className="bg-nav text-white px-10 py-2 rounded-lg" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              {/* Month Headers */}
              <tr>
                <th className="sticky left-0 z-10 px-7"></th>
                {months.map((month, idx) => (
                  <th
                    key={idx}
                    colSpan={month.days}
                    className="border bg-gray-50 text-center px-7"
                  >
                    {month.name}
                  </th>
                ))}
              </tr>

              {/* Day Headers */}
              <tr>
                <th className="border bg-gray-50 sticky left-0 z-10 px-7">Name</th>
                {dayHeaders.flatMap((days, monthIndex) =>
                  days.map((day, dayIndex) => (
                    <th key={`${monthIndex}-${dayIndex}`} className="border text-xs text-center px-1">
                      {day}
                    </th>
                  ))
                )}
              </tr>
            </thead>

            <tbody>
              {AttendancesData.attendance_records.map((record) => (
                <tr key={record.student_id} className="hover:bg-gray-50">
                  <td  className="border px-2 py-1 sticky left-0 bg-white font-medium">
                    {record.student_name}
                  </td>
                  {dayHeaders.flatMap((days, monthIndex) =>
                    days.map((day, dayIndex) => (
                      <td key={`${record.student_id}-${monthIndex}-${dayIndex}`} className="border px-1 py-1 text-center">
                        <input type="checkbox" />
                      </td>
                    ))
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Attendance;
