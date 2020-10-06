import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import InnerPageLayout from '../components/InnerPageLayout'
import Content, { HTMLContent } from '../components/Content'

import './info-page.scss'; 

import pageDataMediatorService from '../services/pageDataMediatorService'

export const TermsAndConditionsTemplate = ({ title, navImage, mobileNavImage, content, contentComponent, location }) => {
  const PageContent = contentComponent || Content


  const pageDataFetcher = pageDataMediatorService.getPageDataFetcher(navImage, mobileNavImage);
  
  return (
   <InnerPageLayout className="" pageDataFetcher={pageDataFetcher} navMenu={[]} location={location}>
    <div className="info-page display-flex flex-row">
      <PageContent className="content flex-1" content={content} />
    </div>
  </InnerPageLayout>
  )
}

const {string, object, oneOfType, func} = PropTypes;
TermsAndConditionsTemplate.propTypes = {
  title: string.isRequired,
  content: string,
  contentComponent: func,
  navImage: oneOfType([object, string]),
  mobileNavImage: oneOfType([object, string]),
}

const TermsAndConditions = ({ data, location }) => {
  const { markdownRemark: post } = data
  
  return (
    <Layout>
      <TermsAndConditionsTemplate
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

TermsAndConditions.propTypes = {
  data: PropTypes.object.isRequired,
  circleimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

export default TermsAndConditions


export const TermsAndConditionsQuery = graphql`
  query TermsAndConditions($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
