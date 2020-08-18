import React from 'react'
import './Card.css'

export default function Card({thumbnail,title,channelTitle,description}) {
    return (
        <div className='card'>
            <img className='card_image' src={thumbnail}/>
            <div className='card_caption'>
                <p className='card_title'>{title}</p>
                <p className='card_artist'>{channelTitle}</p>
                <p className='card_description'>{description}</p>
            </div>
        </div>
    )
}
