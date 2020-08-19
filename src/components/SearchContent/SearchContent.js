import React, { useEffect, useState, setState } from 'react'
import './SearchContent.css'
import TuneIcon from '@material-ui/icons/Tune';
import VideoCard from '../card/VideoCard'
import ChannelCard from '../card/ChannelCard'


export default function Search({ q }) {
    const [data, setData] = useState()

    useEffect(() => {
        q ? fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${q}&key=AIzaSyCJ71ybRJ9Hi4fd_cse8WMjy6Ile9LFYl8&maxResults=25`)
            .then(res => { return res.json() })
            .then(data => setData(data.items))
            .catch(err => console.log(err)) : console.log("you must write something")
    }, [q])

    return (
        <div className='search'>
            <div className="filter">
                <TuneIcon className="filter_icon" />
                <p>FILTER</p>
            </div>
            {data ?
                data.map((el, i) => el.id.kind == 'youtube#channel' ? <a key={i} target='_blank' href={'https://www.youtube.com/channel/'+el.id.channelId}><ChannelCard thumbnail={el.snippet.thumbnails.medium.url} title={el.snippet.title} channelTitle={el.snippet.channelTitle} description={el.snippet.description} /></a>:
                <a key={i} target='_blank' href={'https://www.youtube.com/watch?v='+el.id.videoId}><VideoCard kind={el.id.kind} thumbnail={el.snippet.thumbnails.medium.url} title={el.snippet.title} channelTitle={el.snippet.channelTitle} description={el.snippet.description} /></a>) 
                    : null}

        </div>
    )
}
