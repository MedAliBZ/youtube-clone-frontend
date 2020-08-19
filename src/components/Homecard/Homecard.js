import React from 'react'
import './Homecard.css'

export default function Homecard({thumbnail,title,artist}) {
    return (
        <div className='home_image'>
            <img src={thumbnail}/>
            <div className='card_info'>
            <span className='Home_card_title'>{title}</span>
            <br/>
            <span className='Home_card_artist_title'>{artist}</span>
            </div>
        </div>
    )
}
