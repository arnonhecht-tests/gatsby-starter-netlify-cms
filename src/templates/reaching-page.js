import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import InnerPageLayout from '../components/InnerPageLayout'
import Content, { HTMLContent } from '../components/Content'

export const ReachingPageTemplate = ({ content, teamimage, contentComponent }) => {
  const PageContent = contentComponent || Content

  const beingNavigation = [
    {text: "Wht If culture", linkTarget: 'culture'},
    {text: "Hi story ", linkTarget: 'about-us'},
    {text: "Get involved", linkTarget: 'participate'},
    {text: "Retreats", linkTarget: 'retreats'},
  ];
  // console.log(`content: ${JSON.stringify(content)}`)

  return (
    <InnerPageLayout navImage={teamimage} navMenu={beingNavigation}>
      <div className="display-flex flex-row">
        <PageContent className="content flex-1" content={content} />
      </div>
    </InnerPageLayout>
  )
}

const {string, object, bool, oneOfType, func} = PropTypes;
ReachingPageTemplate.propTypes = {
  title: string.isRequired,
  content: string,
  teamimage: oneOfType([object, string]),
  contentComponent: func,
}

const ReachingPage = ({ data }) => {
  const { markdownRemark: post } = data
  
  return (
    <Layout>
      <ReachingPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        teamimage={post.frontmatter.teamimage}
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
        teamimage {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`
