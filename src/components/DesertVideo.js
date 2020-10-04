
import React from 'react';
import desertVideo from '../../static/img/desert-video-hd.mp4';

const DesertVideo = () => {

 return (
  <video autoPlay muted loop id="myVideo" className="desert-video" >
   <source src={desertVideo} type="video/mp4"></source>
 </video>
 );
}

export default DesertVideo;
