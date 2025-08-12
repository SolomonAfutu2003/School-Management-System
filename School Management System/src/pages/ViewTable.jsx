import React from 'react'
import Exams from "../data/Exam.json"
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import Button from '../components/Button';
import LinksBtn from '../components/LinksBtn';
import { FaArrowLeft } from "react-icons/fa";

const ViewTable = () => {
    const calculateEndTime = (date, startTime, durationMinutes) => {
        const [hours, minutes] = startTime.split(':').map(Number);
        const startDate = new Date(date);
        startDate.setHours(hours, minutes);

        const endDate = new Date(startDate.getTime() + durationMinutes * 60000);
        return endDate.toISOString().split('.')[0];
    };

    // Color coding by exam type
    const getExamColor = (examType) => {
        const colors = {
            'Final': '#EF4444',
            'Midterm': '#3B82F6',
            'Quiz': '#10B981',
            'Practical': '#F59E0B'
        };
        return colors[examType] || '#9CA3AF';
    };

    return (
        <div className='m-4 space-y-5'>
            <section className='flex justify-between items-center'>
                <LinksBtn
                    to={"/my-classes"}
                    text="Back"
                    className="text-base text-gray-600 font-medium flex gap-2 items-center"
                    icon={<FaArrowLeft className='w-5 h-5' />}
                />
                <Button
                    text={"Save"}
                    className={"py-2 px-5 text-left bg-nav text-white flex items-center gap-2 rounded-sm"}
                />
            </section >

            <FullCalendar
                plugins={[timeGridPlugin, dayGridPlugin]}
                height={600}
                events={Exams.exams.map(exam => ({
                    title: `${exam.subject} (${exam.examType})`,
                    start: `${exam.date}T${exam.startTime}`,
                    end: calculateEndTime(exam.date, exam.startTime, exam.duration),
                    color: getExamColor(exam.examType),
                    extendedProps: {
                        classes: exam.classes.join(', '),
                        duration: `${Math.floor(exam.duration / 60)}h ${exam.duration % 60}m`
                    }
                }))}
            />
        </div>
    )
}

export default ViewTable