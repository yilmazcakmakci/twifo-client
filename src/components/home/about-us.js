import React, { useContext } from 'react'
import { AppContext } from '../../context'

const laptop = 'https://res.cloudinary.com/valkyrja/image/upload/c_scale,w_498/v1586297230/landing/twifo-app-example.png'

export default function AboutUs() {

    const { texts } = useContext(AppContext)

    return (
        <div id='about-us' className='pt-24 max-w-screen-xl mx-auto'>
            <div className='lg:flex lg:flex-row-reverse'>
                <div className="lg:w-1/2 px-8 sm:px-16 xl:pr-40">
                    <span className='text-xl text-gradient font-baloo'>  {texts.sections.what} </span>
                    <hr className='hr mb-12' />
                    <span className='font-baloo'>
                        { texts.description}
                    </span>
                </div>
                <div className="mt-10 lg:mt-0 lg:w-1/2">
                    <img src={laptop} className='mx-auto' alt=""/>
                </div>
            </div>
        </div>
    )
}