import React, { useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_USER_DATA } from '../../queries'
import { Lock } from 'react-feather'
import Property from '../layout/property'
import CustomButton from '../layout/custom-button'
import { Skeleton } from 'antd'
import params from '../../utils/dummyData'
import { AppContext } from '../../context'

export default function Profile({screenShot,show}) {

    const { texts } = useContext(AppContext)

    const { loading,error,data} = useQuery(GET_USER_DATA, {
        variables : JSON.parse(sessionStorage.getItem('Session'))
    })

    if(loading) return <Skeleton className='min-h-screen' loading active avatar paragraph={{ rows: 5 }} />
    if(error) return <div>Giriş Yapmalısın</div>

    const { name,screen_name,followers_count,friends_count,statuses_count,profile_image_url_https } = data.user

    const fields = [{name:texts.profile.follower,count:followers_count},{name:texts.profile.following,count:friends_count},{name:texts.profile.tweets,count:statuses_count}]

    return (
        <React.Fragment>
            <div className='flex justify-between items-center'>
                <div>
                    {texts.profile.hello}, <br />
                    <span className='flex items-center'>
                        <b> {name} </b> { data.user.protected ? <Lock size={16} className='inline-flex ml-2' /> : null }
                    </span>
                    <a className='text-gray-500' href={'https://twitter.com/'+screen_name} target='_blank' rel='noopener noreferrer'><i className='text-xs'> {'@'+screen_name} </i></a>
                </div>
                <div>
                    <img src={profile_image_url_https} className='rounded-full' style={{maxWidth:'inherit'}} alt=""/>
                </div>
            </div>
            <hr className='my-8' />
            <Property properties={fields} />
            <div className='mt-8 line-clamp'>{data.user.description}</div>
            {
                !show && (
                    <CustomButton isUpdating={false} text={texts.buttons.save} func={screenShot} size={24} extraClassName='w-full justify-center py-2 mt-4 hidden lg:flex' icon='save' />
                )
            }
        </React.Fragment>
    )
}