import React, { useContext } from 'react'
import CustomButton from '../layout/custom-button'
import { signInWithTwitter } from '../../utils/functions'
import { AppContext } from '../../context'

const landingImage = 'https://res.cloudinary.com/valkyrja/image/upload/v1585325594/landing/landing.png'

export default function Landing() {

    const { texts } = useContext(AppContext)

    return (
        <div className='gradient'>
            <div className='max-w-screen-xl px-8 sm:px-16 xl:px-32 py-4 mx-auto text-left lg:text-left lg:flex'>
                <div className='lg:w-3/5 m-auto'>
                    <div className='lg:max-w-xs'>
                        <span className='text-2xl font-baloo text-white'> {texts.title} </span>
                        <CustomButton text={texts.buttons.hero} color='white' size={24} func={signInWithTwitter} extraClassName='py-4 mt-4 text-base lg:mx-0' icon='twitter' />
                    </div>
                </div>
                <div className='lg:w-2/5 py-12'>
                    <img src={landingImage} className='mx-auto' alt="" />
                </div>
            </div>
        </div>
    )
}