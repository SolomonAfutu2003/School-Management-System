import React from 'react'
import { Link } from 'react-router-dom'

const LinksBtn = ({ text, className, icon, to }) => {
    return (
        <div>
            <Link to={to} className={className}>
                {icon}
                {text}
            </Link>
        </div>
    )
}

export default LinksBtn