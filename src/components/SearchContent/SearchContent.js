import React, { useEffect, useState } from 'react'
import './SearchContent.css'
import TuneIcon from '@material-ui/icons/Tune';
import VideoCard from '../card/VideoCard'
import ChannelCard from '../card/ChannelCard'
import { api } from './api'
import DownloadButton from './downloadButton';
import Filter from './filter/Filter';


export default function Search({ q }) {
    const [data, setData] = useState()
    const [filtr, setFiltr] = useState("relevance")
    const [togl, setTogl] = useState()


    const toggle =()=>{
        setTogl(!togl)
    }

    const filtering = (str)=>{
        setFiltr(str)
    }

    useEffect(() => {
        q ? fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${q}&key=${api[1]}&maxResults=25&order=${filtr}`)
            .then(res => { return res.json() })
            .then(data => setData(data?.items))
            .catch(err => {console.log(err); }) : console.log("you must write something")
    }, [q,filtr])

    useEffect(() => {
        console.log(filtr)
    }, [filtr])

    return (
        <div className='search'>
            <div style={{display:'flex',flexDirection:'column'}}>
            <div className="filter">
                <TuneIcon className="filter_icon" onClick={toggle}/>
                <p onClick={toggle}>FILTER</p>
            </div>
            {togl?<Filter filterUsed={filtr} handleChange={filtering}/>:null}
            </div>
            {data ?
                data.map((el, i) => el.id.kind == 'youtube#channel' ? <a key={i} target='_blank' rel="noopener noreferrer" href={'https://www.youtube.com/channel/' + el.id.channelId}><ChannelCard thumbnail={el.snippet.thumbnails.medium.url} title={el.snippet.title} channelTitle={el.snippet.channelTitle} description={el.snippet.description} /></a> :
                    <div key={i} className='download'><a target='_blank' rel="noopener noreferrer" href={'https://www.youtube.com/watch?v=' + el.id.videoId}><VideoCard kind={el.id.kind} thumbnail={el.snippet.thumbnails.medium.url} title={el.snippet.title} channelTitle={el.snippet.channelTitle} description={el.snippet.description} /></a><DownloadButton videoId={el.id.videoId}/></div>)
                : null}
        </div>
    )
}
