import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './ChannelCard.css'


export default function ChannelCard({thumbnail,title,channelTitle,description}) {
    return (
        <div className='channelcard'>
        <div className='image_container'>
        <Avatar className='channelcard_channel_image' alt="Channel image" src={thumbnail}/>
        </div>
        <div className='channelcard_caption'>
            <p className='channelcard_title'>{title}</p>
            <p className='channelcard_artist'>{channelTitle}</p>
            <p className='channelcard_description'>{description}</p>
        </div>
        <div className='button_container'>
        <button className="subscribe_button">Subscribe</button>
        </div>
    </div>
    )
}
