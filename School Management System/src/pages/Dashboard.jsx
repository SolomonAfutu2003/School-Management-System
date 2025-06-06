import React, { useEffect, useState } from 'react'
import quotes from "../data/Quotes.json"
import Class from "../data/ClassData.json"
import { Chart as ChartJs } from "chart.js/auto"
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import { Pie, Line } from "react-chartjs-2"




const Dashboard = () => {
    const [randomQuote, setRandomQuote] = useState(quotes.quotes[0])

    const events = [
        {
            title: 'Math Exam',
            start: '2023-12-15T09:00:00',
            end: '2023-12-15T11:00:00',
            color: '#7E3AF2' // Purple
        },
        {
            title: 'Parent-Teacher Meeting',
            start: '2023-12-20T14:00:00',
            end: '2023-12-20T15:30:00',
            color: '#10B981' // Green
        }
    ];

    const genderData = {
        labels: ['Male', 'Female'],
        datasets: [{
            data: [Class.classData.genderBreakdown.male, Class.classData.genderBreakdown.female],
            backgroundColor: ['#9E77ED', '#F79009'],
            borderWidth: 1,
        }]
    };

    const scoreDate = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Math Scores',
                data: [65, 59, 80, 81, 56, 72],
                borderColor: '#7E3AF2',
                backgroundColor: 'rgba(126, 58, 242, 0.1)',
                tension: 0.3,
                pointBackgroundColor: '#7E3AF2',
                pointRadius: 5,
                pointHoverRadius: 7
            },
            {
                label: 'Science Scores',
                data: [45, 75, 60, 72, 65, 68],
                borderColor: '#F79009',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                tension: 0.3
            }
        ]

    }

    useEffect(() => {
        setInterval(() => {
            const quoteIndex = Math.floor(Math.random() * quotes.quotes.length);
            setRandomQuote(quotes.quotes[quoteIndex])
        }, 6000);
    }, [])

    return (
        <div className='m-4 flex flex-col gap-9'>
            <section className='bg-[#FBF9FF] border-2 border-[#EDDFFF] flex items-center rounded-lg px-10 py-5'>
                <div className='flex flex-col'>
                    <h2 className='text-sm font-bold text-nav'>"{randomQuote.text}"</h2>
                    <h3 className='text-sm font-normal text-nav'>- {randomQuote.author}</h3>
                </div>
            </section>

            <section className='grid grid-cols-3 gap-6'>
                <div className='bg-white  border-2 border-[#EDDFFF] px-4 py-5'>
                    {Class.classData.totalStudents}
                </div>
                <div className='bg-white border-2 border-[#EDDFFF]  px-4 py-5'>
                    {Class.classData.className}
                </div>
                <div className='bg-white border-2 border-[#EDDFFF] px-4 py-5'>H</div>
            </section>

            <section className='grid grid-cols-4 gap-6'>
                <div className='bg-white border-2 border-[#EDDFFF] col-span-3'>
                    <Line
                        data={scoreDate}
                        options={{
                            plugins: {
                                legend: {
                                    display: false,
                                    labels: {
                                        align: "start",
                                        color: '#6B7280',
                                        font: {
                                            family: 'Inter',
                                            size: 14,
                                        },
                                        padding: 20,
                                        usePointStyle: false
                                    }
                                }
                            }
                        }}
                    />
                </div>
                <div className='bg-white border-2 border-[#EDDFFF] flex items-center'>
                    <div className='w-full'>
                        <Pie
                            data={genderData}
                            options={{
                                responsive: true,
                                maintainAspectRatio: true,
                                plugins: {
                                    legend: {
                                        position: 'bottom',
                                        labels: {
                                            align: "start",
                                            color: '#6B7280',
                                            font: {
                                                family: 'Inter',
                                                size: 14,
                                            },
                                            padding: 20,
                                            pointStyle: " circle",
                                            usePointStyle: true
                                        }
                                    },
                                    tooltip: {
                                        callbacks: {
                                            title: () => '',
                                            label: (context) => context.raw
                                        },
                                        displayColors: false,
                                        backgroundColor: '#FCFCFC',
                                        bodyColor: '#344054',
                                        caretSize: 5,
                                        position: 'average',
                                        caretPosition: 'top',
                                        yAlign: 'bottom',
                                        xAlign: 'center',
                                        padding: {
                                            "x": 20,
                                            "y": 5
                                        },
                                        bodyFont: {
                                            size: 14,
                                            weight: 'bold'
                                        },

                                    }
                                }
                            }} />
                    </div>
                </div>
            </section>

            <section className='grid grid-cols-3 gap-8'>
                <div className='bg-white border-2 border-[#EDDFFF] p-5'>
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        dayHeaderFormat={{ weekday: 'short' }}
                        dayHeaderClassNames="text-sm font-medium"
                        dayMaxEvents={3} // Limits visible events per day
                        weekends={false} // Hide weekends
                        headerToolbar={{
                            left: 'prev',
                            center: 'title',
                            right: 'next',

                        }}
                        height={500}  // Fixed height in pixels
                        events={events}
                        editable={true}
                        selectable={true}
                        eventClick={(info) => alert(`Event: ${info.event.title}`)}
                        dateClick={(info) => console.log('Date clicked', info.dateStr)}
                    />
                </div>
                <div className='bg-white border-2 border-[#EDDFFF] col-span-2'>W</div>
            </section>
        </div>
    )
}

export default Dashboard