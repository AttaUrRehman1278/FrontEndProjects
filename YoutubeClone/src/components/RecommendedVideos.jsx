import React from 'react'
import "./RecommendedVideos.css"
import VideoCard from './VideoCard'

function RecommendedVideos() {
    return (
        <div className='recommendedVideos'>
            <h3>Recommended</h3>
            <VideoCard />
        </div>
    )
}

export default RecommendedVideos
