import React, { useState } from 'react'
import { Twitter,LogOut, Share2, RefreshCw, Home, Save } from 'react-feather'
import Loader from 'react-loader-spinner'
import PropTypes from 'prop-types'

export default function CustomButton({text,func,extraClassName,icon,rounded,size,isUpdating}) {

    const [isClicked,click] = useState(false)

    let className = 'flex items-center font-baloo outline-none border border-solid border-purple-600 px-6 xl:px-8 text-white gradient hover:opacity-90'
    
    rounded ? className += ' rounded-lg' : className += ' rounded-full'

    const components = {
        twitter : Twitter,
        logout : LogOut,
        share : Share2,
        update : RefreshCw,
        home : Home,
        save : Save,
    }
    // #6b46c1
    const TagName = components[icon]
    const Loading = () => <Loader type='TailSpin' height={size} width={size} color='white' />
    const Icon = () => <TagName size={size} />

    return (
        <button onClick={() => {
            click(true)
            func()
        }} className={className + ' ' + extraClassName}>
            <span className='mr-4' style={{lineHeight:0}}>
                {
                    isUpdating === undefined ? isClicked ? <Loading /> : <Icon />
                    : isUpdating ? <Loading /> : <Icon />
                }
            </span>
            <span>{text}</span>
        </button>
    )
}

CustomButton.propTypes = {
    text : PropTypes.string.isRequired,
    func : PropTypes.func,
    extraClassName : PropTypes.string,
    icon : PropTypes.oneOf(['twitter','logout','share','update','home','save']).isRequired,
    rounded : PropTypes.bool,
    size : PropTypes.number.isRequired
}