import React, { useContext } from 'react'
import NavLink from './nav-link'
import { Link, useLocation } from 'react-router-dom'
import { AppContext } from '../../context'

const logo = 'https://res.cloudinary.com/valkyrja/image/upload/v1575289829/landing/Twifo-logo_pekcrc.png'
//const logo = 'https://res.cloudinary.com/valkyrja/image/upload/v1585348945/twifo-logo-beta.png'


export default function Navbar() {
    
    const { texts } = useContext(AppContext)

    const links = [{link:'/#about-us',text:texts.sections.what},{link:'/#features',text:texts.sections.features},{link:'#contact',text:texts.sections.contact}]
    
    const { pathname } = useLocation()
    
    const px = pathname === '/app' ? 'xl:px-16' : 'xl:px-32'

    return (
            <div className='fixed w-full z-10 bg-white shadow'>
                    <div className={'px-8 sm:px-16 py-2 flex justify-between items-center max-w-screen-xl mx-auto ' + px}>
                        <Link to="/">
                            <img src={logo} alt="Twifo Logo" width='70' />
                        </Link>

                        <div className='hidden lg:block'>
                            {
                                links.map( (link,index) => <NavLink key={index} link={link.link} text={link.text} color={link.color} />)
                            }
                        </div>
                    </div>
            </div>
        )
    }