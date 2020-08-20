import React,{useState} from 'react'
import './Homepage.css'
import Homecard from '../Homecard/Homecard'
import {data} from './homedata'

export default function Homepage() {
    const [hdata, setHdata] = useState(data)
    return (
        <div className="home">
            {hdata.map((el,i)=><a className="lien" target='_blank' rel="noopener noreferrer" key={i} href={'https://www.youtube.com/watch?v='+el.videoId}><Homecard thumbnail={el.thumbnail} title={el.title} artist={el.artist}/></a>) }
            
        </div>
    )
}
