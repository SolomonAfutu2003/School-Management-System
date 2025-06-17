import React from 'react'

const Button = ({ icon, text, className,onClick }) => {
    return (
        <button className={className} onClick={onClick}>
            {icon} 
            {text}
        </button>
    )
}

export default Button