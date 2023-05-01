import React from 'react'
import './Sidebar.css'
import Siderow from './Siderow'
import { ExpandMoreOutlined, HistorySharp, HomeSharp, OndemandVideo, SubscriptionsSharp, ThumbUpAltOutlined, VideoLibrarySharp, WatchLaterSharp, WhatshotSharp } from '@material-ui/icons'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Siderow selected Icon={HomeSharp} title="Home" />
        <Siderow Icon={WhatshotSharp} title="Trending" />
        <Siderow Icon={SubscriptionsSharp} title="Subscriptions" />
        <hr />
        <Siderow Icon={HistorySharp} title="History" />
        <Siderow Icon={VideoLibrarySharp} title="Library" />
        <Siderow Icon={OndemandVideo} title="Your videos" />
        <Siderow Icon={WatchLaterSharp} title="Watch later" />
        <Siderow Icon={ThumbUpAltOutlined} title="Liked videos" />
        <Siderow Icon={ExpandMoreOutlined} title="Show more" />
        <hr />
    </div>
  )
}

export default Sidebar
