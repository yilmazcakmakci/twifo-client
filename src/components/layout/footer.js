import React, { useContext } from 'react'
import { Linkedin, GitHub } from 'react-feather'
import IconCont from './icon-container'
import TR from '../../assets/turkey.png'
import UK from '../../assets/uk.png'
import { AppContext } from '../../context'
import { Tooltip } from 'antd'
import { useLocation } from 'react-router-dom'

const size = 16

export default function Footer() {

    const { texts,changeLanguage,lang } = useContext(AppContext)
    
    const { pathname } = useLocation()    
    const px = pathname === '/app' ? 'xl:px-16' : 'xl:px-32'

    return (
        <div className='bg-gray-800 text-gray-300 mt-32'> 
            <div className={'max-w-screen-xl px-8 sm:px-16 py-4 md:flex justify-between mx-auto ' + px}>
                <div className='lg:w-1/2 font-baloo'>
                    <span> {texts.footer.dev} </span>
                    <div className='flex mt-2'>
                        <IconCont to='https://www.linkedin.com/in/yilmazcakmakci/'>
                            <Linkedin size={size} color='white' className='' />
                        </IconCont>
                        <IconCont to='https://www.github.com/yilmazcakmakci'>
                            <GitHub size={size} color='white' />
                        </IconCont> 
                    </div>
                </div>
                <div className='lg:w-1/2 flex flex-col items-end'>
                    {/* <div className='flex mt-2'>
                        <IconCont to='#'>
                            <Twitter size={size} color='white' className='' />
                        </IconCont>
                        <IconCont to='#'>
                            <Instagram size={size} color='white' />
                        </IconCont> 
                    </div> */}
                    <Tooltip title={texts.footer.change}>
                        <img className='cursor-pointer' onClick={changeLanguage} src={lang ? TR : UK} alt=""/>
                    </Tooltip>
                    <div className='font-sans text-xs mt-2'>
                        <a className='text-gray-400 hover:underline border-r border-gray-500 px-2' href="#user"> {texts.footer.user} </a>
                        <a className='text-gray-400 hover:underline border-r border-gray-500 px-2' href="#privacy"> {texts.footer.privacy} </a>
                        <span className='pl-2 text-gray-500'>© 2020 · {texts.footer.copyright} </span>
                    </div>
                </div>
            </div>
        </div>
    )
}