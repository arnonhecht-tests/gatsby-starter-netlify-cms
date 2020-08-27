import React from 'react'
import { Link } from 'gatsby'
import {withResizeDetector} from 'react-resize-detector';

import DesertVideo from '../components/DesertVideo';
import navigationService from '../services/navigationService';

import logo from '../img/whtif-logo.png';

import './NavigationMap.scss';


const NavigationMap = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linksMap: [],
    };
  }
  componentDidMount(){
    const linksMap = navigationService.getNavigationMap(typeof window !== 'undefined' && window)
    this.setState({linksMap});
  }

  render() {
    const {linksMap} = this.state;

    return (
      <div className="navigation-map">
        <div className="video-map-container">
          <DesertVideo />
          <Link to="/" className="logo" title="Logo">
              <img src={logo} alt="wht if" />
          </Link>
          {
            linksMap.map(l => (
              <Link to={`/${l.linkTarget}`} key={l.name} >
                <div className="link-container display-flex justify-content-center" style={{top: l.top, left: l.left, minWidth: l.width }}>
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
          }
        </div>
      </div>
    )
  }
}

export default withResizeDetector(NavigationMap)
