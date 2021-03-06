import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Link } from 'gatsby'

import Layout from '../components/Layout'
import InnerPageLayout from '../components/InnerPageLayout'
import Content, { HTMLContent } from '../components/Content'

import linksService, {DOING} from '../services/linksService'
import pageDataMediatorService from '../services/pageDataMediatorService'

export const DoingPageEventTemplate = ({ subtitle, content, navImage, mobileNavImage, contentComponent, location }) => {
  const PageContent = contentComponent || Content
  
  const innerNavList = linksService.getTopLevelLinksObj()[DOING].innerNavList;
  const pageDataFetcher = pageDataMediatorService.getPageDataFetcher(navImage, mobileNavImage);
  const eventNavMap = linksService.getTopLevelLinksObj()[DOING].innerNavTabNavigationList;

  const routeArray = (location || {pathname: "/dummypath"}).pathname.split('/').filter(a => !!a );
  const currentPage = routeArray[0];
  const currentInnerPage = routeArray[1];
  const currentTab = routeArray[2];

  return (
    <InnerPageLayout pageDataFetcher={pageDataFetcher} navMenu={innerNavList} location={location}>
      <div className="display-flex flex-column">
        {
          subtitle ? (
            <div className="content event-subtitle">
              <h3>{subtitle}</h3>
            </div>
          ) : null
        }
        <div className="event-submenu display-flex flex-column">
          {
              eventNavMap.map(l => (
                <Link
                  to={`/${currentPage}/${currentInnerPage}/${l.linkTarget}`} 
                  path={`/${currentPage}/${currentInnerPage}/${l.linkTarget}`} 
                  className={(currentPage === l.linkTarget ? 'selected' : '') + ` ${l.linkTarget}`}
                  key={l.linkTarget}
                >
                  <span className={`link-text ${currentTab === l.linkTarget ? 'selected' : ''} `}>
                    {l.text}
                  </span>
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
  subtitle: string,
  content: string,
  navImage: oneOfType([object, string]),
  mobileNavImage: oneOfType([object, string]),
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
        subtitle={post.frontmatter.subtitle}
        content={post.html}
        navImage={post.frontmatter.navimage}
        mobileNavImage={post.frontmatter.mobilenavimage}
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
        subtitle
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
        mobilenavimage {
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

