import React from 'react'
import { Link } from 'gatsby'
import {withResizeDetector} from 'react-resize-detector';

// import github from '../img/github-icon.svg'
// import logo from '../img/logo.svg'
import logo from '../img/whtif-logo.png';
import desertVideo from '../../static/img/desert-video.mp4';
import oasis from "../../static/img/oasis.png" 
import children from "../../static/img/children.png" 
import pyramids from "../../static/img/pyramids.png" 
import camels from "../../static/img/camels.png" 

import './NavigationMap.scss';


const NavigationMap = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linksMap: [],
    };
  }
  componentDidMount(){

    const windowGlobal = typeof window !== 'undefined' && window;
    const winWidth = windowGlobal.innerWidth;
    const winHeight = windowGlobal.innerHeight;
    const numLinks = 5;
    const startPoint = 65;
    const middleGap = 100;
    const gutter = (winWidth / numLinks) - 165;

    const linksMap = [
      {
        src: oasis,
        top: winHeight / 2 - 189,
        left: startPoint,
        height: 100,
        width: 100,
        name: "main-event",
        text: "Reaching",
        linkTarget: 'main-event',
      },
      {
        src: camels,
        top: winHeight / 2 - 147,
        left: startPoint + gutter * 2 - 50,
        height: 100,
        width: 100,
        name: "retreats",
        text: "Doing",
        linkTarget: 'retreats',
      },
      {
        src: pyramids,
        top: winHeight / 2 - 148,
        left: startPoint + gutter * 3  + middleGap * 3 ,
        height: '150px',
        width: 150,
        name: "culture",
        text: "Being",
        linkTarget: 'participate',
      },
      {
        src: children,
        top: winHeight / 2 - 193,
        left: startPoint + gutter * 4 + middleGap * 3,
        height: 100,
        width: 100,
        name: "dreaming",
        text: "Dreaming",
        linkTarget: 'about',
      },
    ];

    let commulativeWidth = 0
    for (let i=0; i<linksMap.length-1; i++) {
      commulativeWidth += linksMap[i].width;
      linksMap[i+1].left += commulativeWidth;
    }


    this.setState({linksMap});
  }

  render() {
    const {linksMap} = this.state;

    return (
      <div className="navigation-map">
        <div className="video-map-container">
          <video autoPlay muted loop id="myVideo" >
            <source src={desertVideo} type="video/mp4"></source>
          </video>
          <Link to="/" className="logo" title="Logo">
              <img src={logo} alt="wht if" />
          </Link>
          {
            linksMap.map(l => (
              <Link to={`/${l.linkTarget}`} key={l.name} >
                <div className="link-container display-flex justify-content-center" style={{top: l.top, left: l.left, minWidth: l.width }}>
                  <img src={l.src} style={{minWidth: l.width}} />
                  <div className="line">
                    <div className="point"></div>
                  </div>
                  <div className="link-text">
                    {l.text}
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    )
  }
}

export default withResizeDetector(NavigationMap)
