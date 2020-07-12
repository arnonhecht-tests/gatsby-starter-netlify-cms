import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import ContentPageTemplate from '../components/ContentPageTemplate'
// import ThreeJS from '../components/ThreeJS'
import ThreeTest2 from '../components/ThreeTest2'


const ParticipatePage = ({ data }) => {
  const { markdownRemark: post } = data
  
  return (
    <Layout>
      <ThreeTest2 />
      {/* <ThreeJS /> */}
      {/* <ContentPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      /> */}
    </Layout>
  )
}

ParticipatePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ParticipatePage


export const ParticipatePageQuery = graphql`
  query ParticipatePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
