import React from 'react'

const Button = ({ icon, text, className,onClick }) => {
    return (
        <button className={className} onClick={onClick}>
            {text}
            {icon}
        </button>
    )
}

export default Button