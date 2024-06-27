import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import { HomeSharp } from '@mui/icons-material'
import { Whatshot } from '@mui/icons-material'
import { Subscriptions } from '@mui/icons-material'

function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow Icon = {HomeSharp} title = "Home"/>
            <SidebarRow Icon = {Whatshot} title = "Trending"/>
            <SidebarRow Icon = {Subscriptions} title = "Subscription"/>
        </div>
    )
}

export default Sidebar
