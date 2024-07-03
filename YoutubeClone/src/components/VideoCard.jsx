import React from 'react'
import "./VideoCard.css"

function VideoCard({ thumbnail, avatar, title, channel, views, timestamp }) {
    return (
        <div className='VideoCard'>
            <div className="VideoCard_flex">
                <img className='VideoCard_thumbnail' src={thumbnail} alt="" />
                <div className="VideoCard_text">
                    <img className='VideoCard_avatar' src={avatar} alt="" />
                    <div className="VideoCard_detail">
                        <h3 className="VideoCard_title">{title}</h3>
                        <p>{channel}</p>
                        <p>{views} views . {timestamp} days ago</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
