import React from 'react'
import "./VideoCard.css"

function VideoCard({thumbnail, avatar, title, channel, views, timestamp}) {
    return (
        <div className='VideoCard'>
            <div className="VideoCard_flex">
            <img className='VideoCard_thumbnail' src={thumbnail} alt="" />
            <div className="VideoCard_text">
                <img className='VideoCard_avatar' src={avatar} alt="" />
                <h3 className="VideoCard_title">{title}</h3>
            </div>
            </div>
        </div>
    )
}

export default VideoCard
