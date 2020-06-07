import React from 'react'
import PropTypes from 'prop-types'


const Header = ({ title, subheading, image }) => (
  <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="page-header has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            lineHeight: '1',
            padding: '0.25em',
            textAlign: 'center',
          }}
        >
          {title} 
        </h1>
        <h3
          className="page-header has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            lineHeight: '1',
            padding: '0.25em',
            textAlign: 'center',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
)

const {string, oneOfType, object } = PropTypes;
Header.propTypes = {
  title: string,
  subheading: string,
  image: oneOfType([object, string]),
}


export default Header
