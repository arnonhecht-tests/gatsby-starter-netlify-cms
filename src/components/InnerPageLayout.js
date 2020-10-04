import React from 'react'
import withSizes from 'react-sizes'
import { Link } from 'gatsby'

// import {isMobileOnly} from 'react-device-detect';
import SiteNavigation from '../components/SiteNavigation'
import InnerPageNav from '../components/InnerPageNav'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

import deviceService from '../services/deviceService'

import './InnerPageLayout.scss'

const getChildrenElement = (children) => (
  <div className="inner-page-content-container">
    <div className="inner-page-content">
      {children}
    </div>
  </div>
)

const InnerPageLayout = ({ children, pageDataFetcher, navMenu, location, smallScreen, longLinkLines = false }) => {

  const routeArray = (location || {pathname: "/dummypath"}).pathname.split('/').filter(a => !!a );
  const currentPage = routeArray[0];
  const currentInnerPage = routeArray[1];

  return (
    <section className="inner-page-layout">
      {
        smallScreen ? (
          <div className="display-flex flex-column">
            <div className={`navigation-section`}>
              <PreviewCompatibleImage imageInfo={pageDataFetcher.getNavImage(smallScreen)} />
              <div className={`inner-pages-row-underline-display  ${longLinkLines ? 'long-link-lines' : ''}`}>
                {
                  navMenu.map(l => (
                    <Link
                      to={`/${currentPage}/${l.linkTarget}`} 
                      path={`/${currentPage}/${l.linkTarget}`} 
                      className={(currentPage === l.linkTarget ? 'selected' : '') + ` ${l.linkTarget}`}
                      key={l.linkTarget}
                    >
                      <div className="link-container display-flex">
                        <div className="line">
                          <div className="point"></div>
                        </div>
                        <div className={`link-text ${l.linkTarget.includes(currentInnerPage) ? 'selected' : ''} `}>
                          {l.text}
                        </div>
                      </div>
                    </Link>
                  ))
                }
              </div>
            </div>

            {getChildrenElement(children)}
          </div>
        ) : (
          <div className="display-flex flex-row">
            <div className="left-section flex-3 display-flex flex-column">
              {location && <SiteNavigation location={location}></SiteNavigation>}
              {getChildrenElement(children)}
            </div>
            <div className="right-section flex-4">
              <InnerPageNav backgroundImage={pageDataFetcher.getNavImage(smallScreen)} navMenu={navMenu} location={location}></InnerPageNav>
            </div>
          </div>
        )
      }
      </section>
  );
}

export default withSizes(deviceService.getMapSizesToProps())(InnerPageLayout);
