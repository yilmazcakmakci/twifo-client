import React from 'react'


function numFormatter(num) {
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(0) + 'K'; // convert to K for number from > 1000 < 1 million 
    }else if(num > 1000000){
        return (num/1000000).toFixed(0) + 'M'; // convert to M for number from > 1 million 
    }else if(num < 900){
        return num; // if value < 1000, nothing to do
    }
}

export default function Property({properties}) {
    return (
        <div className='flex justify-between' style={{flexFlow:'wrap'}}>
            {
                properties.map( (property, index) => (
                    <div className='mb-4 basis-auto lg:basis-50' key={index}>
                        <div className='text-sm mb-1'>{property.name}</div>
                        <div className='border-l-2 border-purple-700 font-bold pl-2'>{numFormatter(property.count)}</div>
                    </div>
                ))
            }
        </div>
    )
}