import React, { useState } from "react";
import classes from "../data/Classes.json";
import Button from "../components/Button";

const Attendance = () => {
  const [userType, setUserType] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [attendanceData, setAttendanceData] = useState([]);

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
    setSelectedClass("");
    setSelectedStudent("");
    setSelectedMonth("");
    setAttendanceData([]);
  };

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
    setSelectedStudent("");
    setSelectedMonth("");
    setAttendanceData([]);
  };

  const handleStudentChange = (e) => {
    setSelectedStudent(e.target.value);
    setSelectedMonth("");
    setAttendanceData([]);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
    setAttendanceData([]);
  };

  const handleLoadData = () => {
    const classData = classes.find((cls) => cls.name === selectedClass);
    const student = classData?.students.find(
      (s) => s.id === parseInt(selectedStudent)
    );
    const records = student?.attendance[selectedMonth] || [];
    setAttendanceData(records);
  };

  const handleReset = () => {
    setUserType("");
    setSelectedClass("");
    setSelectedStudent("");
    setSelectedMonth("");
    setAttendanceData([]);
  };

  const handleToggleStatus = (index) => {
    const updated = [...attendanceData];
    const current = updated[index];
    if (current.status === "Present") current.status = "Absent";
    else if (current.status === "Absent") current.status = "Late";
    else current.status = "Present";
    setAttendanceData(updated);
  };

  const selectedClassData = classes.find((cls) => cls.name === selectedClass);
  const selectedStudentData = selectedClassData?.students.find(
    (s) => s.id === parseInt(selectedStudent)
  );

  return (
    <div className="m-4 space-y-5">
      <section className="border rounded-2xl border-[#EAECF0] p-5 space-y-5">
        <h3 className="text-lg font-semibold">Attendance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* User Type Dropdown */}
          <select
            value={userType}
            onChange={handleUserTypeChange}
            className="border border-gray-400 rounded-sm p-2 w-full"
          >
            <option value="">Select User Type</option>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            <option value="Admin">Admin</option>
          </select>

          {/* Class Dropdown */}
          <select
            value={selectedClass}
            onChange={handleClassChange}
            className="border border-gray-400 rounded-sm p-2 w-full"
            disabled={!userType}
          >
            <option value="">Select Class</option>
            {classes.map((cls) => (
              <option key={cls.id} value={cls.name}>
                {cls.name}
              </option>
            ))}
          </select>

          {/* Student Dropdown */}
          <select
            value={selectedStudent}
            onChange={handleStudentChange}
            className="border border-gray-400 rounded-sm p-2 w-full"
            disabled={!selectedClass}
          >
            <option value="">Select Student</option>
            {selectedClassData?.students.map((student) => (
              <option key={student.id} value={student.id}>
                {student.name}
              </option>
            ))}
          </select>

          {/* Month Dropdown */}
          <select
            value={selectedMonth}
            onChange={handleMonthChange}
            className="border border-gray-400 rounded-sm p-2 w-full"
            disabled={!selectedStudent}
          >
            <option value="">Select Month</option>
            {selectedStudentData &&
              Object.keys(selectedStudentData.attendance).map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
          </select>
        </div>

        <div className="flex gap-5">
          <Button
            text={"Load Data"}
            className={"bg-nav text-white px-10 py-2 rounded-lg"}
            onClick={handleLoadData}
          />
          <Button
            text={"Reset"}
            className={"bg-white text-black border border-[#D0D5DD] px-10 py-2 rounded-lg"}
            onClick={handleReset}
          />
        </div>
      </section>

      {/* Attendance Table */}
      <section className="border rounded-2xl border-[#EAECF0] p-5 space-y-5">
      {attendanceData.length > 0 ? (
        <section className="border rounded-2xl border-[#EAECF0] p-5 space-y-5">
          <h2 className="text-xl font-bold">
            Attendance - {selectedStudentData?.name} ({selectedMonth})
          </h2>

          <div className="grid grid-cols-[150px_1fr] gap-2">
            <div className="font-semibold border p-2 bg-gray-100">Date</div>
            <div className="font-semibold border p-2 bg-gray-100">Status</div>

            {attendanceData.map((record, index) => (
              <React.Fragment key={`${selectedMonth}-${index}`}>
                <div className="border p-2">{record.date}</div>
                <div className="border p-2 flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={record.status === "Present"}
                    onChange={() => handleToggleStatus(index)}
                    className="w-4 h-4 accent-green-600 cursor-pointer"
                  />
                  <span className="text-sm">{record.status}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </section>
      ):(
        <h1>No Data</h1>
      )} 
      </section>
    </div>
  );
};

export default Attendance;
