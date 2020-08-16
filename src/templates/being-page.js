import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import InnerPageLayout from '../components/InnerPageLayout'
import Content, { HTMLContent } from '../components/Content'

export const BeingPageTemplate = ({ content, navImage, contentComponent, location }) => {
  const PageContent = contentComponent || Content

  const navigationMap = [
    {text: "Wht If culture", linkTarget: 'culture'},
    {text: "History ", linkTarget: 'about-us'},
    {text: "Get involved", linkTarget: 'participate'},
  ];

  return (
    <InnerPageLayout navImage={navImage} navMenu={navigationMap} location={location}>
      <div className="display-flex flex-row">
        <PageContent className="content flex-1" content={content} />
      </div>
    </InnerPageLayout>
  )
}

const {string, object, oneOfType, func} = PropTypes;
BeingPageTemplate.propTypes = {
  title: string.isRequired,
  content: string,
  navImage: oneOfType([object, string]),
  contentComponent: func,
}

const BeingPage = ({ data, location }) => {
  const { markdownRemark: post } = data
  
  return (
    <Layout>
      <BeingPageTemplate
        location={location}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        navImage={post.frontmatter.navimage}
      />
    </Layout>
  )
}

BeingPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BeingPage


export const BeingPageQuery = graphql`
  query BeingPage($id: String!) {
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

