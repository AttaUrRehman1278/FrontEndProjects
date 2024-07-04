import React from 'react'
import "./SearchLatestVideos.css"
import { MoreVert } from '@mui/icons-material'
import { CheckCircle } from '@mui/icons-material'
import { Square } from '@mui/icons-material'

const SearchLatestVideos = ({ channel, thumbnail, title, views, time, avatar, description }) => {
    return (
        <div className='search_latest_videos'>
            <div className="show_latest_videos">
                <div className="latest_videos_thumbnail">
                    <img src={thumbnail} alt="" className="video_thumbnail" />
                </div>
                <div className="latest_videos_details">
                    <div className="video_title">
                        <h3>{title}</h3>
                        <MoreVert />
                    </div>
                    <div className="video_views">
                        <p>{views}K views <Square className='square'/> {time} days ago</p>
                    </div>
                    <div className='channel_name'>
                        <img src={avatar} alt="" />
                        <span>{channel}</span>
                        <CheckCircle className='verified' />
                    </div>
                <p className='video_description'>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default SearchLatestVideos
