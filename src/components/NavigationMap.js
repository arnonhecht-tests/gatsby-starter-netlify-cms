import React from 'react'
import { Link } from 'gatsby'
import {withResizeDetector} from 'react-resize-detector';

import DesertVideo from '../components/DesertVideo';
import navigationService from '../services/navigationService';

import logo from '../img/whtif-logo.png';

import './NavigationMap.scss';

const svgLinkMap = [
  {
    polygonPoints: "711,422 708,422 453,28 710,28 711,422",
    linkTarget: "reaching",
    onHover: () => console.log('lalalala'),
  },{
    polygonPoints: "693,422 558,422 371,132 433,37 435,34 437,33 439,33 441,33 443,33 444,35 445,38 693,422",
    linkTarget: "doing",
    onHover: () => console.log('lalalala'),
  },{
    polygonPoints: "34,422 170,422 357,133 295,37 293,36 292,35 290,34 289,34 287,34 285,34 284,34 284,35 282,37 280,40 34,422",
    linkTarget: "being",
    onHover: () => console.log('lalalala'),
  },{
    polygonPoints: "20,422 12,422 9,26 274,27 20,422",
    linkTarget: "dreaming",
    onHover: () => console.log('lalalala'),
  },  
]



const NavigationMap = class extends React.Component {
  constructor(props) {
    super(props);

    const svgWidth = 720;
    const svgHeight = 450;
    const windowGlobal = typeof window !== 'undefined' && window;
    const {innerWidth, innerHeight} = windowGlobal;
    const scaleWidth = innerWidth / svgWidth;
    const scaleHeight = innerHeight / svgHeight;

    console.log(innerWidth)
    console.log(innerHeight)

    console.log(scaleWidth)
    console.log(scaleHeight)

    this.state = {
      linksMap: [],
      scaleWidth,
      scaleHeight,
    };
  }
  componentDidMount(){
    const linksMap = navigationService.getNavigationMap(typeof window !== 'undefined' && window)
    this.setState({linksMap});
  }

  render() {
    const {linksMap, scaleWidth, scaleHeight} = this.state;
    const scaleTransform = `scale(${scaleWidth}, ${scaleHeight}) `;

    return (
      <div className="navigation-map">
        <div className="video-map-container">
          <div className="image-map-container">
            <img src="./img/desert-video-img.png" />
            <DesertVideo />

            {/* <DesertMap /> */}
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  width="720" height="450">
              {
                svgLinkMap.map(l => (
                  <Link to={`/${l.linkTarget}`} key={l.linkTarget} onMouseEnter={l.onHover}>
                    <polygon points={l.polygonPoints} style={{transform: scaleTransform}}  />
                  </Link>
                ))
              }
              <polygon className="active-link" points="365,144 545,421 184,421 365,144" style={{transform: scaleTransform}} />
              {/* <a href="/reaching"><polygon points="711,422 708,422 453,28 710,28 711,422" /></a>
              <a href="/doing"><polygon points="693,422 558,422 371,132 433,37 435,34 437,33 439,33 441,33 443,33 444,35 445,38 693,422" /></a>
              <a href="/being"><polygon points="34,422 170,422 357,133 295,37 293,36 292,35 290,34 289,34 287,34 285,34 284,34 284,35 282,37 280,40 34,422" /></a>
              <a href="/dreaming"><polygon points="20,422 12,422 9,26 274,27 20,422" /></a> */}
            </svg>
            {/* <DesertMapLeft />
            <DesertMapCenterLeft />
            <DesertMapRight />
            <DesertMapCenterRight /> */}
            {/* <DesertMapCenterLeft /> */}
            {/* <svg src={DesertMapLeft} className="svg-map-segment" alt="whtif desert" /> */}
            {/* <svg src={DesertMapCenterLeft} className="svg-map-segment" alt="whtif desert" /> */}
            {/* <img src="./img/desert-video-img.png" useMap="#image-map" /> */}
            {/* <map name="image-map" className="image-map">
                <area style={{ backgroundColor: 'red' }} target="_top" alt="Reaching" title="Reaching" href="/reaching" coords="83,1691,1093,112,42,112,39,1691" shape="poly" />
                <area target="_top" alt="Doing" title="Doing" href="/doing" coords="136,1686,1136,150,1146,137,1159,137,1174,145,1184,153,1429,536,683,1688" shape="poly" />
                <area target="_top" alt="Being" title="Being" href="/being" coords="1815,114,2835,109,2841,1688,2823,1688" shape="poly" />
                <area target="_top" alt="Dreaming" title="Dreaming" href="/dreaming" coords="2769,1686,1780,153,1767,142,1752,142,1739,147,1729,158,1719,170,1485,534,2227,1686" shape="poly" />
            </map> */}
          </div>

          {/* <Link to="/" className="logo" title="Logo">
              <img src={logo} alt="wht if" />
          </Link> */}
          {/* {
            linksMap.map(l => (
              <Link to={`/${l.linkTarget}`} key={l.name} >
                <div className={`link-container display-flex justify-content-center ${l.isSelected ? 'is-selected' : ''}`} 
                  style={{top: l.top, left: l.left, minWidth: l.width }}
                >
                  <img src={l.src} style={{minWidth: l.width}} alt={l.text} />
                  <div className="line">
                    <div className="point"></div>
                  </div>
                  <div className="link-text">
                    {l.text}
                  </div>
                </div>
              </Link>
            ))
          } */}
        </div>
      </div>
    )
  }
}

export default withResizeDetector(NavigationMap)
