import React, { useState } from 'react'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const Day = () => {
    const [selected, setSelected] = useState();

    return (
       
            <DayPicker
                animate
                mode="single"
                selected={selected}
                onSelect={setSelected}
                classNames={{
                    caption: "relative flex justify-center items-center mb-4",
                    caption_label: "text-lg font-semibold text-gray-700",
                    month_caption:"flex justify-center items-center mb-4",
                
                    nav: "absolute top-0 inset-0 flex justify-between",
                    nav_button_previous: "text-gray-600 ",
                    nav_button_next: "text-gray-600",
                
                    weekday:"text-black font-bold",
                    day_button:'border border-gray-300 w-10 h-10 p-2 m-1 rounded-md hover:bg-indigo-100',
                    head_cell: "w-8 h-8 flex justify-center items-center ",
                
                    day_selected: "bg-indigo-500 text-white",
                    day_today: "border border-indigo-500",
                  }}
                modifiersClassNames={{
                    selected: 'text-black',
                    today: 'border border-indigo-500',
                }}
                className="text-sm"
            />
       
    )
}

export default Day