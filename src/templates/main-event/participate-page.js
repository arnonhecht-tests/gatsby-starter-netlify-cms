import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import { HTMLContent } from '../../components/Content'
import ContentPageTemplate from '../../components/ContentPageTemplate'


const MainEventParticipatePage = ({ data }) => {
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

MainEventParticipatePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default MainEventParticipatePage


export const MainEventParticipatePageQuery = graphql`
  query MainEventParticipatePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
