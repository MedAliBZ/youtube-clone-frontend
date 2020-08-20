import React, { useEffect,useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import './navbar.css'
import Avatar from '@material-ui/core/Avatar';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import {Link} from 'react-router-dom'




export default function Navbar() {
    const [txt, settxt] = useState('')

    useEffect(() => {
        document.querySelector('.search_text').addEventListener("keydown", (e) => {
            if (e.key === 'Enter') {
                e.preventDefault()
                window.location.href = `/search/${txt}`;
            }
        })
    })

    return (
        <div className='header'>
            <div className='header_menu'>
                <IconButton className='bouton'><MenuIcon /></IconButton>
                <Link to='/'><img className='header_logo' alt="youtube logo" src='/youtube.png' /></Link>
            </div>
            <div className='header_search'>
                <input className='search_text' type='text' placeholder='Search' onChange={(e)=>settxt(e.target.value)}></input>
                <Link className="search_button" to={{pathname:`/search/${txt}`}}><SearchIcon /></Link>
            </div>
            <div className='header_profile'>

                <IconButton><VideoCallIcon /></IconButton>
                <IconButton><AppsIcon /></IconButton>
                <IconButton><NotificationsIcon /></IconButton>

                <IconButton><Avatar className='header_avatar' alt="Avatar" src="https://yt3.ggpht.com/-gfJfUx9M8nY/AAAAAAAAAAI/AAAAAAAAAAA/mRdpJxDvw-I/s108-c-k-c0x00ffffff-no-rj-mo/photo.jpg" />
                </IconButton>
            </div>
        </div>
    );
}