import React from 'react'

const Button = ({ text, className, icon }) => {
    return (
        <div>
            <button className={`flex justify-center text-base font-semibold ${className}`}>
                {icon && <img className="w-5 h-5" src={icon} alt="" />}
                {text}
            </button>
        </div>
    )
}

export default Button