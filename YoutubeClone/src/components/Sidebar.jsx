import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import { HomeSharp } from '@mui/icons-material'
import { Whatshot } from '@mui/icons-material'
import { Subscriptions } from '@mui/icons-material'
import { VideoLibrary } from '@mui/icons-material'
import { OndemandVideo } from '@mui/icons-material'
import { History } from '@mui/icons-material'
import { WatchLater } from '@mui/icons-material'
import { ThumbUpAlt } from '@mui/icons-material'
import { ExpandMore } from '@mui/icons-material'

function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow selected Icon = {HomeSharp} title = "Home"/>
            <SidebarRow Icon = {Whatshot} title = "Trending"/>
            <SidebarRow Icon = {Subscriptions} title = "Subscription"/>
            <hr />
            <SidebarRow Icon = {VideoLibrary} title = "Library"/>
            <SidebarRow Icon = {History} title = "History"/>
            <SidebarRow Icon = {OndemandVideo} title = "Your Videos"/>
            <SidebarRow Icon = {WatchLater} title = "Watch Later"/>
            <SidebarRow Icon = {ThumbUpAlt} title = "Liked Videos"/>
            <SidebarRow Icon = {ExpandMore} title = "Show more"/>
            <hr />
        </div>
        
    )
}

export default Sidebar
