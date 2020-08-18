import React from 'react'
import './Search.css'
import TuneIcon from '@material-ui/icons/Tune';
import Card from '../card/Card'


export default function Search() {
    return (
        <div className='search'>
            <div className="filter">
                <TuneIcon className="filter_icon"/> 
                <p>FILTER</p>
            </div>
            <Card/>
        </div>
    )
}
