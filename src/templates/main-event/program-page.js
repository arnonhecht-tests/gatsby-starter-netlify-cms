import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import { HTMLContent } from '../../components/Content'
import ContentPageTemplate from '../../components/ContentPageTemplate'


const ProgramPage = ({ data }) => {
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

ProgramPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ProgramPage


export const ProgramsPageQuery = graphql`
  query ProgramPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
