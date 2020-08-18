import React from 'react'
import './Card.css'

export default function Card() {
    return (
        <div className='card'>
            <img className='card_image' src="https://i.ytimg.com/vi/YQHsXMglC9A/mqdefault.jpg"/>
            <div className='card_caption'>
                <p className='card_title'>Adele - Hello</p>
                <p className='card_artist'>Adele</p>
                <p className='card_description'>'Hello' is taken from the new album, 25, out November 20. http://adele.com Available now from iTunes http://smarturl.it/itunes25 Available now from Amazon ...</p>
            </div>
        </div>
    )
}
