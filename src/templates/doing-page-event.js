import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Link } from 'gatsby'

import Layout from '../components/Layout'
import InnerPageLayout from '../components/InnerPageLayout'
import Content, { HTMLContent } from '../components/Content'

import navigationService from '../services/navigationService';

export const DoingPageEventTemplate = ({ content, navImage, contentComponent, location }) => {
  const PageContent = contentComponent || Content

  const navigationMap = navigationService.getDoingNavMap();
  
  const eventNavMap = navigationService.getDoingEventNavMap();

  const routeArray = (location || {pathname: "/dummypath"}).pathname.split('/').filter(a => !!a );
  const currentPage = routeArray[0];
  const currentInnerPage = routeArray[1];
  const currentTab = routeArray[2];

  return (
    <InnerPageLayout navImage={navImage} navMenu={navigationMap} location={location}>
      <div className="display-flex flex-column">
        <div className="event-submenu display-flex flex-row flex-justify-end ">
          {
              eventNavMap.map(l => (
                <Link
                  to={`/${currentPage}/${currentInnerPage}/${l.linkTarget}`} 
                  path={`/${currentPage}/${currentInnerPage}/${l.linkTarget}`} 
                  className={(currentPage === l.linkTarget ? 'selected' : '') + ` ${l.linkTarget}`}
                  key={l.linkTarget}
                >
                  <div className={`link-text ${currentTab === l.linkTarget ? 'selected' : ''} `}>
                    {l.text}
                  </div>
                </Link>
              ))
            }
        </div>
        <PageContent className="content flex-1" content={content} />
      </div>
    </InnerPageLayout>
  )
}

const {string, object, oneOfType, func} = PropTypes;
DoingPageEventTemplate.propTypes = {
  title: string.isRequired,
  content: string,
  navImage: oneOfType([object, string]),
  contentComponent: func,
}

const DoingPageEvent = ({ data, location }) => {
  const { markdownRemark: post } = data
  
  return (
    <Layout>
      <DoingPageEventTemplate
        location={location}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        navImage={post.frontmatter.navimage}
      />
    </Layout>
  )
}

DoingPageEvent.propTypes = {
  data: PropTypes.object.isRequired,
}

export default DoingPageEvent;


export const DoingPageEventQuery = graphql`
  query DoingPageEvent($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        navimage {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

