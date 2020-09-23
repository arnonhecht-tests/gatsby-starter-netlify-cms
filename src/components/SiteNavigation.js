import React, { useState, useEffect }  from 'react'
import { Link } from 'gatsby'
import {withResizeDetector} from 'react-resize-detector';

import navigationService from '../services/navigationService';
import logo from '../../static/img/whtif-logo.svg';

import './SiteNavigation.scss';


const SiteNavigation =  () => {
  const [linksMap, setLinksMap] = useState([]);

  useEffect(() => {
    const linksMap = navigationService.getNavigationMap(typeof window !== 'undefined' && window);
    setLinksMap(linksMap);
  }, []);


  return (
    <div className="site-navigation display-flex flex-row">
      <Link to='/' className="logo-section">
        <img src={logo} alt="whtif logo" />
      </Link>
      <div className="flex-1 display-flex flex-row flex-justify-space-between">
        {
          linksMap.map(l => (
            <div key={l.name}>
              <Link to={`/${l.linkTarget}`} className={(l.isSelected ? 'selected' : '') + ` ${l.name}`}>
                <div className="link-container display-flex justify-content-center">
                  <div className="line">
                    <div className="point"></div>
                  </div>
                  <div className="link-text">
                    {l.text}
                  </div>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default withResizeDetector(SiteNavigation);
