import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import "./Search.css"
import { Tune } from '@mui/icons-material'

const Search = () => {
    return (
        <div className='search'>
            <Header />
            <div className="seacrh_page">
                <Sidebar className='sidebar' />
                <div className="search_videos">
                    <div className="search_videos_top">
                    <Tune/>
                    <h4>FILTER</h4>
                    </div>
                    <hr />
                    <div className="search_videos_main">
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Search
