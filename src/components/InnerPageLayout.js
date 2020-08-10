import React from 'react'
import {isMobileOnly} from 'react-device-detect';
import SiteNavigation from '../components/SiteNavigation'
import InnerPageNav from '../components/InnerPageNav'

import './InnerPageLayout.scss'

const InnerPageLayout = ({ children, navImage, navMenu, location }) => {
  return (
    <section className="inner-page-layout">
        <div className="display-flex flex-row">
          <div className="left-section flex-3 display-flex flex-column">
              {
                isMobileOnly ? (
                  <>
                    <div>{children}</div>
                  </>
                ) : (
                  <>
                    {location && <SiteNavigation location={location}></SiteNavigation>}
                    <div className="inner-page-content">{children}</div>
                  </>
                )
              }
          </div>
          <div className="right-section flex-4">
            <InnerPageNav backgroundImage={navImage} navMenu={navMenu} location={location}></InnerPageNav>
          </div>

        </div>
      </section>
  );
}

export default InnerPageLayout
