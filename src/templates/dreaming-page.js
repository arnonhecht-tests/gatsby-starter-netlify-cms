import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import InnerPageLayout from '../components/InnerPageLayout'
import Content, { HTMLContent } from '../components/Content'

import linksService, {DREAMING} from '../services/linksService'
import pageDataMediatorService from '../services/pageDataMediatorService'

export const DreamingPageTemplate = ({ content, navImage, mobileNavImage, contentComponent, location }) => {
  const PageContent = contentComponent || Content

  const innerNavList = linksService.getTopLevelLinksObj()[DREAMING].innerNavList;
  const pageDataFetcher = pageDataMediatorService.getPageDataFetcher(navImage, mobileNavImage);

  return (
    <InnerPageLayout pageDataFetcher={pageDataFetcher} navMenu={innerNavList} location={location}>
      <div className="display-flex flex-row">
        <PageContent className="content flex-1" content={content} />
      </div>
    </InnerPageLayout>
  )
}

const {string, object, oneOfType, func} = PropTypes;
DreamingPageTemplate.propTypes = {
  title: string.isRequired,
  content: string,
  navImage: oneOfType([object, string]),
  mobileNavImage: oneOfType([object, string]),
  contentComponent: func,
}

const DreamingPage = ({ data, location }) => {
  const { markdownRemark: post } = data
  
  return (
    <Layout>
      <DreamingPageTemplate
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

DreamingPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default DreamingPage


export const DreamingPageQuery = graphql`
  query DreamingPage($id: String!) {
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

