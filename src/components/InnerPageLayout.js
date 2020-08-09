import React from 'react'
import {isMobileOnly} from 'react-device-detect';
import SiteNavigation from '../components/SiteNavigation'
import InnerPageNav from '../components/InnerPageNav'

import './InnerPageLayout.scss'

const InnerPageLayout = ({ children, navImage, navMenu }) => {
  return (
    <section className="inner-page-layout">
        <div className="display-flex flex-row">
          <div className="left-section flex-3">
              {
                isMobileOnly ? (
                  <>
                    <div>{children}</div>
                  </>
                ) : (
                  <>
                    <SiteNavigation></SiteNavigation>
                    <div className="inner-page-content">{children}</div>
                  </>
                )
              }
          </div>
          <div className="right-section flex-4">
            <InnerPageNav backgroundImage={navImage} navMenu={navMenu}></InnerPageNav>
          </div>

        </div>
      </section>
  );
}

export default InnerPageLayout
