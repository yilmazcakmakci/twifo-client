import React from 'react'
import CustomButton from './layout/custom-button'

export default function Error404() {
    return (
        <div className='md:flex md:flex-row-reverse justify-center items-center pt-32 px-8 md:px-20 mx-auto max-w-4xl'>
            <div className='md:w-1/2'>
                <img className='mx-auto' src="https://res.cloudinary.com/valkyrja/image/upload/v1568235922/landing/404.png" alt=""/>
            </div>
            <div className='md:w-1/2 md:px-6 font-baloo mt-8 md:m-0 flex flex-col items-center md:block text-center md:text-left'>
                <h3 className='text-xl text-gradient'>Üzgünüz! Aradığınız sayfayı bulamadık.</h3>
                <p>Sayfa silinmiş, taşınmış veya hiç oluşturulmamış olabilir.</p>
                <CustomButton text='Anasayfa' icon='home' size={24} extraClassName='py-2' func={()=> window.location.href = '/'} />             
            </div>
        </div>
    )
}