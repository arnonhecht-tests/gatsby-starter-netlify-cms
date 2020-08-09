import React, { useState, useEffect }  from 'react'
import { useLocation } from '@reach/router';
import { Link } from 'gatsby'
import {withResizeDetector} from 'react-resize-detector';

import navigationService from '../services/navigationService';

import './SiteNavigation.scss';


const SiteNavigation =  () => {
  const [linksMap, setLinksMap] = useState([]);

  useEffect(() => {
    const linksMap = navigationService.getNavigationMap(typeof window !== 'undefined' && window);
    setLinksMap(linksMap);
  }, []);

  const location = useLocation();
  const routeArray = location.pathname.split('/').filter(a => !!a );
  const currentPage = routeArray[0];

  return (
    <div className="site-navigation display-flex flex-row flex-justify-space-between">
        {
          linksMap.map(l => (
            <div key={l.name}>
              <Link to={`/${l.linkTarget}`} className={(currentPage === l.linkTarget ? 'selected' : '') + ` ${l.linkTarget}`}>
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
  )
}

export default withResizeDetector(SiteNavigation);
