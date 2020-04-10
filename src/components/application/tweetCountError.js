import React from 'react'
import { AlertOctagon } from 'react-feather'
import CustomButton from '../layout/custom-button'

export default function TweetCountError({func}) {
    return (
        <div className='py-12 pl-8 pr-32 border border-purple-700 rounded'>
            <AlertOctagon size={32} color='purple' />
            <div className='my-4'>
                <span className='font-baloo text-xl block'>Yeterli Tweet Yok</span>
                <span className='font-baloo text-sm'>Tweetlerinizin analiz edilebilmesi için en az 5 tweet atmış olmanız gerekmektedir.</span>
            </div>
            <CustomButton func={func} text='Yenile' icon='update' size={24} extraClassName='py-2' />
        </div>
    )
}
