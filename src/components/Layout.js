import React from 'react'

import withSizes from 'react-sizes'
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'

// import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
// import {isMobileOnly} from 'react-device-detect';
import deviceService from '../services/deviceService'

const Layout = ({ children, smallScreen }) => {
  const { title, description } = useSiteMetadata();

  return (
    <div>
      <Helmet>
        <link href="//db.onlinewebfonts.com/c/a2518a14de7de124ac4770b88a5daaf4?family=Kohinoor-Book" rel="stylesheet" type="text/css"/>
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
        smallScreen ? (
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

export default withSizes(deviceService.getMapSizesToProps())(Layout)
