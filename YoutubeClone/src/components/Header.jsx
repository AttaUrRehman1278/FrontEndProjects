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
                <Menu />
                <img
                    className='header__logo'
                    src="https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png" alt="" />
            </div>
            <div className="header_middle">
                <div className="header_input">
                    <input placeholder="Search" className='text_search' type="text" />
                    <Search className='search_btn'/>
                </div>
            </div>
                <Mic className='mic'/>
            <div className="header_right">
                <VideoCall />
                <NotificationsSharp />
                <AccountCircle />
            </div>
        </div>
    )
}

export default Header