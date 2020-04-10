import React from 'react'
import { Heart, Moon, ThumbsUp, Hash, AlertTriangle, Users, } from 'react-feather'
import { sample } from 'lodash'

export default function Card({data}) {

    const styles = {
        backgroundColor: '#485461',
        background: `linear-gradient(315deg, rgba(72, 84, 97, 0.7) 0%, rgba(40, 49, 59, 0.8) 74%), url('${data.img}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    
    const components = {
        likepertweet: Heart,
        timeperiod: Moon,
        mention:Users,
        badwords:AlertTriangle,
        hashtag:Hash,
        favorites:ThumbsUp
    }

    const TagName = components[data.type]

    const randomDuration = ['100','200','300','400','500','600','700']
    const duration = sample(randomDuration)

    return (
        <div data-aos='fade-in' data-aos-duration={duration} data-aos-once="true" className='md:w-9/20 xl:w-3/10 w-full flex flex-col rounded-lg text-white px-6 py-4 my-4 font-baloo' style={styles}>
            <span className='self-end p-2 rounded-full text-xs' style={{backgroundColor:'rgba(0,0,0,0.5)',lineHeight:0}}> <TagName size='16' color='white' /> </span>
            <h1 className='text-2xl text-white'> {data.title !== undefined ? data.title : '😔'} </h1>
            <p className='text-xs'> {data.text || 'Bu alan için yeterli sayıda tweetiniz yok.'} </p>
        </div>
    )
}