import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import InnerPageLayout from '../components/InnerPageLayout'
import Content, { HTMLContent } from '../components/Content'

import linksService, {REACHING} from '../services/linksService'
import pageDataMediatorService from '../services/pageDataMediatorService'

export const ReachingPageTemplate = ({ content, navImage, mobileNavImage, contentComponent, location }) => {
  const PageContent = contentComponent || Content
  
  const innerNavList = linksService.getTopLevelLinksObj()[REACHING].innerNavList;
  const pageDataFetcher = pageDataMediatorService.getPageDataFetcher(navImage, mobileNavImage);

  return (
    <InnerPageLayout pageDataFetcher={pageDataFetcher} navMenu={innerNavList} location={location} longLinkLines={true}>
      <div className="display-flex flex-row">
        <PageContent className="content flex-1" content={content} />
      </div>
    </InnerPageLayout>
  )
}

const {string, object, oneOfType, func} = PropTypes;
ReachingPageTemplate.propTypes = {
  title: string.isRequired,
  content: string,
  navImage: oneOfType([object, string]),
  mobileNavImage: oneOfType([object, string]),
  contentComponent: func,
}

const ReachingPage = ({ data, location }) => {
  const { markdownRemark: post } = data
  
  return (
    <Layout>
      <ReachingPageTemplate
        location={location} 
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        navImage={post.frontmatter.navimage}
        mobileNavImage={post.frontmatter.mobilenavimage}
      />
    </Layout>
  )
}

ReachingPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ReachingPage


export const ReachingPageQuery = graphql`
  query ReachingPage($id: String!) {
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
