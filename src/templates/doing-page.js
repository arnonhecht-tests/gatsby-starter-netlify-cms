import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import InnerPageLayout from '../components/InnerPageLayout'
import Content, { HTMLContent } from '../components/Content'

import linksService, {DOING} from '../services/linksService'
import pageDataMediatorService from '../services/pageDataMediatorService'

export const DoingPageTemplate = ({ content, navImage, mobileNavImage, contentComponent, location }) => {
  const PageContent = contentComponent || Content

  const innerNavList = linksService.getTopLevelLinksObj()[DOING].innerNavList;
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
DoingPageTemplate.propTypes = {
  title: string.isRequired,
  content: string,
  navImage: oneOfType([object, string]),
  mobileNavImage: oneOfType([object, string]),
  contentComponent: func,
}

const DoingPage = ({ data, location }) => {
  const { markdownRemark: post } = data
  
  return (
    <Layout>
      <DoingPageTemplate
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

DoingPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default DoingPage


export const DoingPageQuery = graphql`
  query DoingPage($id: String!) {
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

