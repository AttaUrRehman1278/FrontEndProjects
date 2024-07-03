import React from 'react'
import "./SearchChannel.css"
import { CheckCircle } from '@mui/icons-material'

const SearchChannel = ({ avatar, channel, subs, description }) => {
    return (
        <div className='search_channel_details'>
            <div className="search_channel">
                <img className='avatar' src={avatar} alt="" />
                <div className="channel_details">
                    <div className="channel_name">
                        <h4>{channel}</h4>
                        <CheckCircle className='verified' />
                    </div>
                    <div className="channel_desc">
                        <p>@{channel} . {subs}M subscribers</p>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
            <button className='subscription_btn'>Subscribe</button>
        </div>
    )
}

export default SearchChannel
