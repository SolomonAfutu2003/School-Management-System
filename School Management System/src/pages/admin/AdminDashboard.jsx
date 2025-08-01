import React, { useEffect, useState } from 'react'
import quotes from "../../data/Quotes.json"
import { PiCertificate } from "react-icons/pi";
import { IoMdArrowRoundDown, IoMdArrowRoundUp } from "react-icons/io";
import { LuChartLine } from "react-icons/lu";
import { PiUsersThree } from "react-icons/pi";
import { RiDownloadCloud2Line } from "react-icons/ri";
import { SlOptionsVertical } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
import { CiStar } from "react-icons/ci";
import { TbTie } from "react-icons/tb";
import { BsPersonHeart } from "react-icons/bs";
import Button from '../../components/Button';
import LinksBtn from "../../components/LinksBtn"
import Grades from "../../data/Grades.json"
import Students from "../../data/Students.json"
import Events from "../../data/Event.json"
import Notices from "../../data/Notice.json"

import { Chart as ChartJs } from "chart.js/auto"


import { Pie, Line } from "react-chartjs-2"
import Day from '../../components/Day';





const AdminDashboard = () => {
    const [randomQuote, setRandomQuote] = useState(quotes.quotes[0])

    const subjectColors = {
        "Mathematics": "#3e95cd",
        "Science": "#8e5ea2",
        "English": "#3cba9f",
        "History": "#ff6384",
        "Physical Education": "#ffcd56"
    };

    const borderColors = [
        'border-l-green-400',
        'border-l-blue-300',
        'border-l-amber-400'
    ];

    const studentsData = Students.students;

    // Step 2: Count Male and Female
    const genderCounts = studentsData.reduce(
        (acc, student) => {
            acc[student.gender] = (acc[student.gender] || 0) + 1;
            return acc;
        },
        { Male: 0, Female: 0 }
    );

    const chartData = {
        labels: Grades.grade_series[0].data.map(item => item.period),
        datasets: Grades.grade_series.map(subject => ({
            label: subject.subject,
            data: subject.data.map(item => item.average),
            borderColor: subjectColors[subject.subject] || "#cccccc",
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderWidth: 3,
            tension: 0.3,
            pointRadius: 5,
            pointHoverRadius: 7
        }))
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: (context) => `${context.dataset.label}: ${context.raw}%`
                }
            }
        },
        scales: {
            y: {
                min: 70,
                max: 95,
                ticks: {
                    callback: (value) => `${value}%`
                }
            }
        },
        maintainAspectRatio: false,
        layout: {
            padding: {
                top: 40,
                bottom: 40,
                left: 20,
                right: 20
            }
        }
    };

    const pieData = {
        labels: ["Male", "Female"],
        datasets: [{
            label: "Gender Distribution",
            data: [genderCounts.Male, genderCounts.Female],
            backgroundColor: ["#F79009", "#9E77ED"],
        }]
    }

    const pieOptions = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                align: 'center',
                labels: {
                    color: '#6B7280',
                    font: {
                        family: 'Hind Siliguri',
                        weight: 'bold',
                        size: 12,
                    },
                    padding: 20,
                    pointStyle: "circle",
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
        },
        layout: {
            padding: {
                top: 20,
                bottom: 20,
                left: 30,
                right: 30
            }
        }
    }


    useEffect(() => {
        setInterval(() => {
            const quoteIndex = Math.floor(Math.random() * quotes.quotes.length);
            setRandomQuote(quotes.quotes[quoteIndex])
        }, 6000);
    }, [])

    return (
        <div className='m-4 flex flex-col gap-9'>
            <section className='bg-[#F4EBFF] border-2 border-[#EDDFFF] flex items-center rounded-lg px-10 py-5'>
                <div className='flex flex-col'>
                    <h2 className='text-sm font-bold text-nav'>"{randomQuote.text}"</h2>
                    <h3 className='text-sm font-normal text-nav'>- {randomQuote.author}</h3>
                </div>
            </section>

            <section className='grid grid-cols-5 gap-6'>
                <div className='bg-white flex justify-between items-center border-2 border-[#EDDFFF] px-4 py-5 rounded-lg'>
                    <div className='bg-[#F4EBFF] p-3 rounded-full'>
                        <PiCertificate className='w-5 h-5 text-nav' />
                    </div>
                    <div className='flex flex-col items-end'>
                        <h3 className='text-xs text-[#848199] font-medium font-text'>STUDENTS</h3>
                        <div className='flex justify-center items-center gap-1'>
                            <div className='px-3 py-2 bg-[#D1FADF] rounded-lg'>
                                <IoMdArrowRoundUp className='w-2.5 h-2.5 text-[#027A48]' />
                            </div>
                            <span className='text-[28px]'>50</span>
                        </div>
                    </div>
                </div>
                <div className='bg-white flex justify-between items-center border-2 border-[#EDDFFF]  px-4 py-5 rounded-lg'>
                    <div className='bg-[#F4EBFF] p-3 rounded-full'>
                        <TbTie className='w-5 h-5 text-nav' />
                    </div>
                    <div className='flex flex-col items-end'>
                        <h3 className='text-xs text-[#848199] font-medium font-text'>STUFF</h3>
                        <div className='flex justify-center items-center gap-1'>
                            <div className='px-3 py-2 bg-[#FECDCA] rounded-lg'>
                                <IoMdArrowRoundDown className='w-2.5 h-2.5 text-[#B42318]' />
                            </div>
                            <span className='text-[28px]'>50</span>
                        </div>
                    </div>
                </div>
                <div className='bg-white flex justify-between items-center border-2 border-[#EDDFFF]  px-4 py-5 rounded-lg'>
                    <div className='bg-[#F4EBFF] p-3 rounded-full'>
                        <PiUsersThree className='w-5 h-5 text-nav' />
                    </div>
                    <div className='flex flex-col items-end'>
                        <h3 className='text-xs text-[#848199] font-medium font-text'>CLASSES</h3>
                        <div className='flex justify-center items-center gap-1'>
                            <span className='text-[28px]'>50</span>
                        </div>
                    </div>
                </div>
                <div className='bg-white flex justify-between items-center border-2 border-[#EDDFFF]  px-4 py-5 rounded-lg'>
                    <div className='bg-[#F4EBFF] p-3 rounded-full'>
                        <BsPersonHeart className='w-5 h-5 text-nav' />
                    </div>
                    <div className='flex flex-col items-end'>
                        <h3 className='text-xs text-[#848199] font-medium font-text'>PARENTS</h3>
                        <div className='flex justify-center items-center gap-1'>
                            <span className='text-[28px]'>50</span>
                        </div>
                    </div>
                </div>
                <div className='bg-white flex justify-between items-center border-2 border-[#EDDFFF] px-4 py-5 rounded-lg'>
                    <div className='bg-[#F4EBFF] p-2 rounded-full'>
                        <LuChartLine className='w-5 h-5 text-nav' />
                    </div>
                    <div className='flex flex-col items-end'>
                        <h3 className='text-xs text-[#848199] font-medium font-text'>PERCENTAGE PASSES</h3>
                        <div className='flex justify-center items-center gap-1'>
                            <div className='px-3 py-2 bg-[#D1FADF] rounded-lg'>
                                <IoMdArrowRoundUp className='w-2.5 h-2.5 text-[#027A48]' />
                            </div>
                            <span className='text-[28px]'>50%</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className='grid grid-cols-4 gap-6'>
                <div className='bg-white border-2 border-[#EDDFFF] col-span-3 rounded-lg'>
                    <div className='flex justify-between items-center px-6 py-5'>
                        <h3>GRADE DISTRIBUTION</h3>
                        <div className='flex gap-5'>
                            <Button text={"Export"} icon={<RiDownloadCloud2Line />} className={"flex flex-row-reverse bg-[#EAECF0] p-2 rounded-sm items-center gap-2 justify-center"} />
                            <Button icon={<SlOptionsVertical />} />
                        </div>
                    </div>
                    <hr className='border-gray-300' />
                    <div className='h-[290px]'>
                        <Line
                            data={chartData}
                            options={chartOptions}
                        />
                    </div>
                </div>
                <div className='bg-white border-2 border-[#EDDFFF] rounded-lg'>
                    <div className='flex justify-between items-center px-6 py-5'>
                        <h3>SEX</h3>
                        <div className='flex gap-5'>
                            <Button text={"Export"} icon={<RiDownloadCloud2Line />} className={"flex flex-row-reverse bg-[#EAECF0] p-2 rounded-sm items-center gap-2 justify-center"} />
                        </div>
                    </div>
                    <div className='h-70'>
                        <Pie
                            data={pieData}
                            options={pieOptions} />
                    </div>
                </div>
            </section>

            <section className='flex gap-8'>
                <div className='bg-white border-2 border-[#EDDFFF] p-3 rounded-lg'>
                    <div className='space-y-3'>
                        <Day />
                        <div className="flex gap-3">
                            <div className='flex items-center'>
                                <GoDotFill className="text-amber-400" />
                                <p className='text-gray-400 text-sm'>Exam</p>
                            </div>
                            <div className='flex items-center'>
                                <GoDotFill className="text-green-400" />
                                <p className='text-gray-400 text-sm'>Program</p>
                            </div>
                            <div className='flex items-center'>
                                <GoDotFill className="text-blue-300" />
                                <p className='text-gray-400 text-sm'>Vacation</p>
                            </div>
                        </div>
                        <hr className='border-gray-300' />
                        <div className='space-y-4'>
                            <h3>Upcoming Events</h3>
                            <div>
                                <ul className='space-y-4'>
                                    {Events.events.map((e, index) => {
                                        const colorClass = borderColors[index % borderColors.length];
                                        return (
                                            <li key={e.event_id} className={`flex flex-col pl-4 border-l-2 ${colorClass}`} >
                                                <p>{e.title}</p>
                                                <p> {e.date}</p>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white border-2 border-[#EDDFFF] w-full space-y-4 py-5 rounded-lg'>
                    <div className='flex justify-between items-center px-5'>
                        <h3>NOTICE BOARD</h3>
                        <LinksBtn text={"See all"} icon={<FaArrowRight />} className={"flex flex-row-reverse justify-center items-center gap-2 text-nav"} />
                    </div>
                    <div className='flex justify-between items-center px-5'>
                        <div className='flex gap-3 items-center'>
                            <div className='relative'>
                                <input
                                    className='border border-gray-300 rounded-sm pl-10 pr-20 py-2 '
                                    type="search"
                                    placeholder='Search for notice'
                                />
                                <div className='absolute left-4 top-3'>
                                    <CiSearch className='w-5 h-5' />
                                </div>
                            </div>
                        </div>
                        <VscSettings className='w-10 h-10 p-2 rotate-90 rounded-sm border border-gray-300' />
                    </div>
                    <div>
                        <ul className='space-y-4'>
                            {Notices.notices.map((notice) => (
                                <div key={notice.notice_id}>
                                    <li className='flex justify-between items-center space-y-4 p-5' >
                                        <CiStar />
                                        <p className='font-bold'>{notice.assigned_teacher}</p>
                                        <p></p>
                                        <div className='w-64 truncate overflow-hidden whitespace-nowrap text-[#202224]'>
                                            <p>{notice.content}</p>
                                        </div>
                                        <span className='text-[#202224]'>{new Date(notice.due_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                    </li>
                                    <hr className='border-gray-300' />
                                </div>
                            ))}
                        </ul>
                    </div>
                    <div className='flex justify-end py-3 items-center gap-10 px-5'>
                        <div className='flex gap-3'>
                            <Button text={"Previous"} className={"border border-gray-400 py-2 px-4 rounded-lg"} />
                            <Button text={"Next"} className={"border border-gray-400 py-2 px-4 rounded-lg"} />
                        </div>
                        <span>Result 1 of 10</span>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default AdminDashboard