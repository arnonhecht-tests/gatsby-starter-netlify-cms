import React from 'react'
import { Link } from 'gatsby'
import {withResizeDetector} from 'react-resize-detector';

import logo from '../../static/img/logo-thin.png';

import DesertVideo from '../components/DesertVideo';

import navigationService from '../services/navigationService';
import linksService, {REACHING, DOING, BEING, DREAMING} from '../services/linksService';

import './NavigationMap.scss';


let svgLinkMap = [
  {
    id: REACHING,
    polygonPoints: "20,422 12,422 9,26 274,27 20,422",
  },{
    id: DOING,
    polygonPoints: "34,422 170,422 357,133 295,37 293,36 292,35 290,34 289,34 287,34 285,34 284,34 284,35 282,37 280,40 34,422",
  },{
    id: BEING,
    polygonPoints: "693,422 558,422 371,132 433,37 435,34 437,33 439,33 441,33 443,33 444,35 445,38 693,422",
  },{
    id: DREAMING,
    polygonPoints: "711,422 708,422 453,28 710,28 711,422",
  },  
];


const getVideoElement = (elem) => elem ? elem.getElementsByTagName('video')[0] : {};

const linksServiceMap = linksService.getTopLevelLinksObj();
// console.log(`linksServiceMap: ${JSON.stringify(linksServiceMap)}`)

svgLinkMap = svgLinkMap.map(l => ({...l, ...linksServiceMap[l.id]}))
// console.log(`svgLinkMap: ${JSON.stringify(svgLinkMap)}`)

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
    const height = getVideoElement(this.videoContainingDiv).clientHeight;
    const width = getVideoElement(this.videoContainingDiv).clientWidth;
    const navMapHeight = (this.navMapDiv || {}).clientHeight || 0;
    const navMapWidth = (this.navMapDiv || {}).clientWidth || 0;
    console.log(`navMapHeight: ${navMapHeight} height: ${height} `)
    
    const topOffset = ((navMapHeight - height) / 2) || 0;
    const leftOffset = ((navMapWidth - width) / 2) || 0;
    console.log(`topOffset: ${topOffset}  `)

    return (
      <div className="navigation-map" ref={ (navMapDiv) => { this.navMapDiv = navMapDiv } }>
        <div className="video-map-container">
          <div className="image-map-container">
          <img src="./img/desert-image.png" className="dummy-img-for-size" />

            <div style={{ display: 'inline-block' }}  ref={ (videoContainingDiv) => { this.videoContainingDiv = videoContainingDiv } } >
              <DesertVideo />
            </div>
            {/* <DesertMap /> */}
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  width="720" height="450">
              {
                svgLinkMap.map(l => (
                  <Link to={`${l.link}`} key={l.id} className="link-container"
                    onMouseEnter={() => {l.isHovered = true; this.setState({});}}
                    onMouseLeave={() => {l.isHovered = false; this.setState({});}} >
                    <polygon points={l.polygonPoints} style={{transform: scaleTransform}}  />
                  </Link>
                ))
              }
	            <polygon className="unhovereable-mask" points="364,123 303,28 426,28 364,123" style={{transform: scaleTransform}} />
              <polygon className="unhovereable-mask" points="365,144 545,421 184,421 365,144" style={{transform: scaleTransform}} />

              <defs>
                <filter id="hue">
                  <feColorMatrix in="SourceGraphic"
                      type="hueRotate"
                      values="2" />
                </filter>
                <linearGradient id="GreenGradient" gradientTransform="rotate(90)">
                  <stop offset="10%" stopColor="transparent"></stop>
                  <stop offset="44%" stopColor="#4c8443"></stop>
                </linearGradient>
                <linearGradient id="RedGradient" gradientTransform="rotate(90)">
                  <stop offset="10%" stopColor="transparent"></stop>
                  <stop offset="44%" stopColor="#ad3433"></stop>
                </linearGradient>
                <linearGradient id="BlueGradient" gradientTransform="rotate(90)">
                  <stop offset="10%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="#1d264e"></stop>
                </linearGradient>
                <linearGradient id="PurpleGradient" gradientTransform="rotate(90)">
                  <stop offset="10%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="#4a3c7f"></stop>
                </linearGradient>
                <linearGradient id="MyGradient" gradientTransform="rotate(90)">
                  <stop offset="23%" stopColor="#FF6" />
                  <stop offset="94%" stopColor="#000000" />
                </linearGradient>
              </defs>
            </svg>
            <div className="link-description-container display-flex flex-justify-space-between">
              {
                svgLinkMap.map(l => (
                  <div className={`link-description ${l.isHovered ? 'is-hovered' : ''}`} key={l.text}>
                    <div className="link-description-text">
                      {l.text}
                    </div>
                    <div className="link-subpages-description-text">
                      {
                        (l.innerNavList || []).map(nLink => (<div key={nLink.text}>{nLink.text}</div>))
                      }
                    </div>
                  </div>
                ))
              }
            </div>  
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
          <div className="desert-objects" style={{height, width, top: topOffset, left: leftOffset}}>
            {
              linksMap.map(l => (
                <div className={`link-container display-flex justify-content-center ${l.isSelected ? 'is-selected' : ''}`} 
                  key={l.name}
                >
                  <img src={l.src} style={{minWidth: l.width}} alt={l.text} />
                  {/* <div className="line">
                    <div className="point"></div>
                  </div> */}
                  <div className="link-text">
                    {l.text}
                  </div>
                </div>
              ))
            }
          </div>
          <img src={logo} alt="WhtIf Logo" className="whtif-logo" />
        </div>
        <img src="./img/desert-image.png" className="bg-rescue" />
      </div>
    )
  }
}

export default withResizeDetector(NavigationMap)
