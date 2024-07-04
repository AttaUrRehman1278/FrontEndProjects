import React, { useState } from 'react'
import "./Header.css"
import { Menu, VideoCall } from '@mui/icons-material'
import { Search } from '@mui/icons-material'
import { Mic } from '@mui/icons-material'
import { NotificationsSharp, AccountCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'

function Header() {
    const [inputSearch, setInputSearch] = useState("")
    return (
        <div className="header">
            <div className="header_left">
                <Menu className='header_menubar' />
                <Link to='/'>
                    <img
                        className='header__logo'
                        src="https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-white-png.png" alt="" />
                </Link>
            </div>
            <div className="header_middle">
                <div className="header_input">
                    <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" className='text_search' type="text" />
                    <Link to={`/search/${inputSearch}`}>
                        <Search className='search_btn' />
                    </Link>
                </div>
                <div>
                    <Mic className='mic' />
                </div>
            </div>
            <div className="header_right">
                <VideoCall className='header_right_icon' />
                <NotificationsSharp className='header_right_icon' />
                <AccountCircle className='header_right_icon' />
            </div>
        </div>
    )
}

export default Header
