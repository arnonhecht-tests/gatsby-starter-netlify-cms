import React, { useState, useEffect }  from 'react'
import { Link } from 'gatsby'
import {withResizeDetector} from 'react-resize-detector';

import linksService from '../services/linksService';
import logo from '../../static/img/whtif-logo.svg';

import './SiteNavigation.scss';


const SiteNavigation =  () => {
  const [linksMap, setLinksMap] = useState([]);

  useEffect(() => {
    // const linksMap = navigationService.getNavigationMap(typeof window !== 'undefined' && window);
    const linksMap = linksService.getTopLevelLinksList((typeof window !== 'undefined') && window);
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
            <div key={l.id}>
              <Link to={`${l.link}`} className={(l.isSelected ? 'selected' : '') + ` ${l.id}`}>
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
