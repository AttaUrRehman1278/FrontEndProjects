import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import "./Search.css"
import SearchChannel from './SearchChannel'
import { Tune } from '@mui/icons-material'
import SearchLatestVideos from './SearchLatestVideos'

const Search = () => {
    return (
        <div className='search'>
            <Header />
            <div className="seacrh_page">
                <Sidebar className='sidebar' />
                <div className="search_videos">
                    <div className="search_videos_top">
                        <Tune />
                        <h4>Filters</h4>
                    </div>
                    <div className="search_videos_main">
                        <SearchChannel 
                            avatar="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2149887185/settings_images/omK8wfuSQmisBrlSPGTl_f6aebd5b-c5da-4f35-a2fc-54f3eaab2cdd.png"
                            channel = "Clever Programmer"
                            subs = {1.31}
                            description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to"
                        />
                        <hr />
                        <SearchLatestVideos
                            channel = "Clever Programmer"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Search
