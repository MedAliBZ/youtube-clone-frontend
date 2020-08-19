import React,{useEffect,useState,setState} from 'react'
import './SearchContent.css'
import TuneIcon from '@material-ui/icons/Tune';
import Card from '../card/Card'


export default function Search({ q }) {
    const [data, setData] = useState()

    useEffect(() => {
        q?fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${q}&key=AIzaSyC5p7VOGavBJL0TWW2z8xePrFsGCGwXoiI&maxResults=25`)
            .then(res => { return res.json() })
            .then(data => setData(data.items))
            .catch(err => console.log(err)):console.log("you must write something")
    }, [q])

    return (
        <div className='search'>
            
            <div className="filter">
                <TuneIcon className="filter_icon" />
                <p>FILTER</p>
            </div>
            {data?data.map((el,i)=><Card key={i} thumbnail={el.snippet.thumbnails.medium.url} title={el.snippet.title} channelTitle={el.snippet.channelTitle} description={el.snippet.description}/>):null}
            
        </div>
    )
}
