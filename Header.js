import React from 'react'
import { MenuRounded, SearchRounded, NotificationsRounded, VideoCall, AppsSharp } from '@material-ui/icons'
import './Header.css'
import { Avatar } from '@material-ui/core'

export const Header = () => {
  return (
    <div className='header'>
      <div className='header_left'>  
      <MenuRounded />
      <img
       className='header_logo' 
       src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgSYRNpHDTPl4eBOJoRmp3BfiioikybpkXsg&usqp=CAU' 
       alt='logo' 
      />
      </div>
      <form className='input'>
        <input className='input_field' type='text' placeholder='Search...'/>
        <SearchRounded className='search_icon' />
      </form>
      <div className='icons'>
        <VideoCall className='subicon' />
        <AppsSharp className='subicon' />
        <NotificationsRounded className='subicon' />
        <Avatar className='avatar' src='https://th.bing.com/th/id/OIP.slYYWdoL4i_2edrHz3DDTwHaEK?w=270&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' alt='image' />
      </div>

    </div>
  )
}

export default Header
