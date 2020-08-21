import React from 'react'
import "./Filter.css"
import { FilterData } from './FilterData'

export default function Filter({filterUsed,handleChange}) {
    return (
        <div className='whole_filter'>
            <div>
                <span className='filter_tri'>SORT BY</span>
            </div>
            <div style={{display:'flex',flexDirection:'column',marginTop:'2%'}}>
                {FilterData.map((el, i) =>filterUsed===el? <span onClick={()=>handleChange(el)} style={{color:'#949494',margin:'1%',cursor:'pointer'}} key={i}><b>{el}</b></span>:<span onClick={()=>handleChange(el)} style={{color:'#949494',margin:'1%',cursor:'pointer'}} key={i}>{el}</span>)}
            </div>
        </div>
    )
}
