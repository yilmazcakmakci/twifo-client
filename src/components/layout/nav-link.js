import React from 'react'
import { NavHashLink } from 'react-router-hash-link'

export default function NavLink({link,text,color}) {
    
    let classNames = 'font-baloo py-2 px-4 last:pr-0 hover:text-gradient'

    color === 'purple' ? classNames += ' text-gradient' : classNames += ' text-gray-700'

    return (
        <NavHashLink className={classNames} to={link}>{text}</NavHashLink>
    )
}