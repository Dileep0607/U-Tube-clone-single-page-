import { Avatar } from '@material-ui/core'
import React from 'react'
import './VideoCard.css';

const VideoCard = ({image,title,channel,timestamp,channelImage,views}) => {
  return (
    <div className='video_card'>
      <img src={image} alt='' />
      <div className='video_info'>
        <Avatar className='video_logo' src={channelImage} alt={channel} />
        <div className='video_text'>
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>{views}.{timestamp}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
