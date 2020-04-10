import React, { useContext } from 'react'
import { AppContext } from '../../context'

export default function Features() {

    const { texts } = useContext(AppContext)

    return (
        <div className='max-w-screen-xl sm:px-8 xl:px-32 mx-auto pt-24' id='features'>
            <p className='text-3xl text-gradient font-baloo text-center'> {texts.sections.features} </p>
            <div className='mx-auto flex justify-around' style={{flexFlow:'wrap'}}>
            {
                texts.features.map( (feature, index) => (
                    <div key={index} className='w-full md:w-9/20 xl:w-3/10 px-8 py-4 m-4 border border-solid rounded-lg gradient'>
                        <p className='text-right m-0 font-baloo text-xs text-gray-400'> {feature.complete ? texts.done : texts.soon} </p>
                        <div className='flex items-center'>
                            <img src={feature.icon} alt=""/>
                            <div className='pl-6 py-2'>
                                <h5 className='text-white font-baloo text-xl '> {feature.title} </h5>
                                <span className='text-gray-400'> {feature.text} </span>
                            </div>
                        </div>
                    </div> 
                ))
            }
            </div>
        </div> 
    )
}