import React, { useState, useEffect }  from 'react'
import PropTypes from 'prop-types'
import { useLocation } from '@reach/router';
import {withResizeDetector} from 'react-resize-detector';

import { Link } from 'gatsby'
import Img from 'gatsby-image'

import logo from '../../static/img/whtif-logo.svg';

import './InnerPageNav.scss';

const imageStyle = {};
const s1 = {fill: 'none', stroke: '#ff0000', strokeWidth: 1, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 4, strokeOpacity: 1, strokeDasharray: '2, 1', strokeDashoffset: 0,}

const InnerPageNav =  ({backgroundImage, navMenu}) => {
  const [linksMap, setLinksMap] = useState([]);

  useEffect(() => {
    setLinksMap(navMenu);
  }, []);

  const location = useLocation();
  const routeArray = location.pathname.split('/').filter(a => !!a );
  const currentPage = routeArray[0];
  const currentInnerPage = routeArray[1];

  return (
    <div className="inner-page-nav display-flex flex-column">
      <div className="image-section">
        <Img style={imageStyle} fluid={backgroundImage.image.childImageSharp.fluid} alt="Wht If Circle" /> 
      </div>
      <Link to='/'>
        <div className="logo-section">
          <img src={logo} alt="whtif logo" />
        </div>
      </Link>
      
      {/* <svg width="100" height="100">
        <defs>
          <clipPath id="myClip" transform="translate(0.000000,528.000000) scale(0.05,-0.05)">
            <path d="M4363 6878 c-12 -13 -580 -885 -1264 -1938 -683 -1053 -1487 -2293
            -1787 -2755 -300 -462 -549 -841 -553 -843 -5 -2 -9 -8 -9 -14 0 -12 -181
            -292 -192 -296 -4 -2 -8 -8 -8 -13 0 -7 -179 -289 -259 -408 -19 -28 -66 -101
            -123 -191 -20 -30 -61 -94 -92 -142 -31 -48 -56 -96 -56 -107 0 -10 9 -29 19
            -42 l19 -24 5557 0 5557 0 19 24 c10 13 19 31 19 40 0 16 -53 105 -154 261
            -24 36 -69 106 -101 155 -32 50 -77 119 -100 155 -23 36 -68 106 -100 155 -32
            50 -77 119 -100 155 -24 36 -77 117 -118 180 -41 63 -113 175 -161 248 -47 73
            -86 137 -86 142 0 4 -4 10 -8 12 -11 4 -412 624 -412 636 0 6 -4 12 -9 14 -4
            2 -675 1031 -1491 2288 -815 1257 -1491 2295 -1503 2308 -25 26 -57 28 -86 5
            -11 -10 -277 -413 -590 -896 -313 -483 -573 -878 -576 -878 -3 0 -263 395
            -576 878 -313 483 -579 886 -590 896 -29 23 -61 21 -86 -5z m106 -514 c17 -10
            197 -279 509 -759 l483 -744 -1093 -1683 c-600 -926 -1257 -1937 -1458 -2248
            l-367 -565 -1013 -3 c-895 -2 -1016 0 -1037 13 -13 9 -23 20 -23 26 0 6 339
            533 754 1172 414 639 1281 1974 1925 2967 768 1185 1180 1811 1198 1822 35 22
            87 23 122 2z m2435 -26 c19 -18 220 -321 448 -673 228 -352 1088 -1678 1911
            -2947 823 -1269 1497 -2311 1497 -2317 0 -6 -10 -17 -23 -26 -21 -13 -142 -15
            -1037 -13 l-1013 3 -1459 2248 -1459 2248 477 735 c262 404 488 744 502 754
            17 14 40 20 73 20 42 0 54 -5 83 -32z m77 -3818 c1016 -1566 1353 -2092 1354
            -2115 l0 -30 -2720 0 -2720 0 0 30 c1 23 339 551 1360 2123 747 1151 1362
            2089 1366 2085 3 -4 616 -946 1360 -2093z"  />
          </clipPath>
        </defs>
      </svg> */}

      <div className="nav-pane display-flex flex-column align-items-end">
        {
          linksMap.map(l => (
            <div key={l.linkTarget}>
              <Link to={`/${currentPage}/${l.linkTarget}`} className={(currentPage === l.linkTarget ? 'selected' : '') + ` ${l.linkTarget}`}>
                <div className="link-container display-flex justify-content-center">
                  <div className="line">
                    <div className="point"></div>
                  </div>
                  <div className={`link-text ${currentInnerPage === l.linkTarget ? 'selected' : ''} `}>
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


const {object, string, oneOfType} = PropTypes;
InnerPageNav.propTypes = {
  backgroundImage: oneOfType([object, string]),
}

export default withResizeDetector(InnerPageNav);
