import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import "./Search.css"
import SearchChannel from './SearchChannel'
import { Tune } from '@mui/icons-material'
import SearchLatestVideos from './SearchLatestVideos'

const Search = ({channel}) => {
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
                        <h3>Latest From {channel}</h3>
                        <SearchLatestVideos
                            channel = "Clever Programmer"
                            avatar="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2149887185/settings_images/omK8wfuSQmisBrlSPGTl_f6aebd5b-c5da-4f35-a2fc-54f3eaab2cdd.png"
                            description="You can find awesome programming lessons here!"
                            views={344}
                            time={23}
                            thumbnail="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4BKpwFiEA39radG-Vo77ygHaEK%26pid%3DApi&f=1&ipt=78c3f8b837586b3db8f5f9039b2f5b3c7c03e95d2c6477d147386533b58567e2&ipo=imageshttps://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4BKpwFiEA39radG-Vo77ygHaEK%26pid%3DApi&f=1&ipt=78c3f8b837586b3db8f5f9039b2f5b3c7c03e95d2c6477d147386533b58567e2&ipo=images"
                            title = "Don't use chatgpt ! Use this instead"
                        />
                        <SearchLatestVideos
                            channel = "Clever Programmer"
                            avatar="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2149887185/settings_images/omK8wfuSQmisBrlSPGTl_f6aebd5b-c5da-4f35-a2fc-54f3eaab2cdd.png"
                            description="You can find awesome programming lessons here!"
                            views={344}
                            time={23}
                            thumbnail="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4BKpwFiEA39radG-Vo77ygHaEK%26pid%3DApi&f=1&ipt=78c3f8b837586b3db8f5f9039b2f5b3c7c03e95d2c6477d147386533b58567e2&ipo=imageshttps://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4BKpwFiEA39radG-Vo77ygHaEK%26pid%3DApi&f=1&ipt=78c3f8b837586b3db8f5f9039b2f5b3c7c03e95d2c6477d147386533b58567e2&ipo=images"
                            title = "Don't use chatgpt ! Use this instead"
                        />
                        <SearchLatestVideos
                            channel = "Clever Programmer"
                            avatar="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2149887185/settings_images/omK8wfuSQmisBrlSPGTl_f6aebd5b-c5da-4f35-a2fc-54f3eaab2cdd.png"
                            description="You can find awesome programming lessons here!"
                            views={344}
                            time={23}
                            thumbnail="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4BKpwFiEA39radG-Vo77ygHaEK%26pid%3DApi&f=1&ipt=78c3f8b837586b3db8f5f9039b2f5b3c7c03e95d2c6477d147386533b58567e2&ipo=imageshttps://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4BKpwFiEA39radG-Vo77ygHaEK%26pid%3DApi&f=1&ipt=78c3f8b837586b3db8f5f9039b2f5b3c7c03e95d2c6477d147386533b58567e2&ipo=images"
                            title = "Don't use chatgpt ! Use this instead"
                        />
                        <SearchLatestVideos
                            channel = "Clever Programmer"
                            avatar="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2149887185/settings_images/omK8wfuSQmisBrlSPGTl_f6aebd5b-c5da-4f35-a2fc-54f3eaab2cdd.png"
                            description="You can find awesome programming lessons here!"
                            views={344}
                            time={23}
                            thumbnail="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4BKpwFiEA39radG-Vo77ygHaEK%26pid%3DApi&f=1&ipt=78c3f8b837586b3db8f5f9039b2f5b3c7c03e95d2c6477d147386533b58567e2&ipo=imageshttps://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4BKpwFiEA39radG-Vo77ygHaEK%26pid%3DApi&f=1&ipt=78c3f8b837586b3db8f5f9039b2f5b3c7c03e95d2c6477d147386533b58567e2&ipo=images"
                            title = "Don't use chatgpt ! Use this instead"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Search
