import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import ContentPageTemplate from '../components/ContentPageTemplate'


const ParticipatePage = ({ data }) => {
  const { markdownRemark: post } = data
  
  return (
    <Layout>
      <ContentPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
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
