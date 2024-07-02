import React from 'react'
import "./Header.css"
import { Menu, VideoCall } from '@mui/icons-material'
import { Search } from '@mui/icons-material'
import { Mic } from '@mui/icons-material'
import { NotificationsSharp, AccountCircle } from '@mui/icons-material'

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <Menu className='header_menubar'/>
                <img
                    className='header__logo'
                    src="https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-white-png.png" alt="" />
            </div>
            <div className="header_middle">
                <div className="header_input">
                    <input placeholder="Search" className='text_search' type="text" />
                    <Search className='search_btn' />
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
