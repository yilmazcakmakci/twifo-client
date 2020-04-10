import React from 'react'

export default function IconCont(props) {
    return (
        <span className='self-end p-2 rounded-full text-xs mr-4' style={{backgroundColor:'rgba(0,0,0,0.5)',lineHeight:0}}> 
            <a href={props.to} target='_blank' rel="noopener noreferrer">
                {props.children}
            </a>
        </span>
    )
}

// TODO : link daha üstte olmalı