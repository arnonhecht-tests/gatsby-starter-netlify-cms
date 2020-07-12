import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import MainEventNavbar from '../components/MainEventNavbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import {isMobileOnly} from 'react-device-detect';

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();

  const windowGlobal = typeof window !== 'undefined' && window

  // a bit hackish - should consider different site
  const isMainEventSite = windowGlobal && windowGlobal.location.href.includes('main-event');

  return (
    <div className={isMainEventSite ? `event-site` : ''}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      {
        isMobileOnly ? (
          <>
            <Navbar />
            <div>{children}</div>
          </>
        ) : (
          <>

            <div>{children}</div>
          </>
        )
      }
    </div>
  )
}

export default TemplateWrapper
