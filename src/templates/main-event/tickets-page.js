import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import { HTMLContent } from '../../components/Content'
import ContentPageTemplate from '../../components/ContentPageTemplate'


const TicketsPage = ({ data }) => {
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

TicketsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TicketsPage


export const TicketsPageQuery = graphql`
  query TicketsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
