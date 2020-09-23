import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import InnerPageLayout from '../components/InnerPageLayout'
import Content, { HTMLContent } from '../components/Content'

export const BeingPageAboutUsTemplate = (props) => {
  const [currentStory, setCurrentStory] = useState('');
  const { content, prolog, nirStory, ifatStory, abdulStory, nirStoryPreview, ifatStoryPreview, abdulStoryPreview, navImage, contentComponent, location } = props;
  const PageContent = contentComponent || Content

  const navigationMap = [
    {text: "Wht If culture", linkTarget: 'culture'},
    {text: "History ", linkTarget: 'about-us'},
    {text: "Get involved", linkTarget: 'participate'},
  ];

  const storiesList = [
    {
      name: 'Nir',
      storyPreview: nirStoryPreview,
      story: nirStory
    },
    {
      name: 'Ifat',
      storyPreview: ifatStoryPreview,
      story: ifatStory,
    },
    {
      name: 'Abdul',
      storyPreview: abdulStoryPreview,
      story: abdulStory
    },
  ]

  const toggleSelectedStory = (story) => {
    setCurrentStory(story === currentStory ? '' : story);
  }


  return (
    <InnerPageLayout navImage={navImage} navMenu={navigationMap} location={location}>
      <div className="display-flex flex-column">
        <div className="page-section subpage-header">History</div>
        <div className="page-section">{prolog}</div>
        {
          storiesList.map(sl => (
            <div className="page-section story-dropdown" key={sl.name}>
              <div><b>{sl.name}</b>'s story</div>
              <div>{sl.story}</div>
              <div className="hollow-arrow-wrapper" onClick={() => toggleSelectedStory(sl.name)}>
                <div className="hollow-arrow down">
                  <div></div>
                </div>
              </div>
              {sl.name === currentStory ? (<div>{sl.story}</div>) : null}
            </div>
          ))
        }
        <PageContent className="content flex-1" content={content} />
      </div>
    </InnerPageLayout>
  )
}

const {string, object, oneOfType, func} = PropTypes;
BeingPageAboutUsTemplate.propTypes = {
  title: string.isRequired,
  prolog: string.isRequired,
  nirStoryPreview: string.isRequired,
  ifatStoryPreview: string.isRequired,
  abdulStoryPreview: string.isRequired,
  prolog: string.isRequired,
  nirStory: string.isRequired,
  ifatStory: string.isRequired,
  abdulStory: string.isRequired,
  content: string,
  navImage: oneOfType([object, string]),
  contentComponent: func,
}

const BeingPageAboutUs = ({ data, location }) => {
  const { markdownRemark: post } = data
  
  return (
    <Layout>
      <BeingPageAboutUsTemplate
        location={location}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        prolog={post.frontmatter.prolog}
        nirStoryPreview={post.frontmatter.nir_story_preview}
        ifatStoryPreview={post.frontmatter.ifat_story_preview}
        abdulStoryPreview={post.frontmatter.abdul_story_preview}
        nirStory={post.frontmatter.nir_story}
        ifatStory={post.frontmatter.ifat_story}
        abdulStory={post.frontmatter.abdul_story}
        content={post.html}
        navImage={post.frontmatter.navimage}
      />
    </Layout>
  )
}

BeingPageAboutUs.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BeingPageAboutUs


export const BeingPageAboutUsQuery = graphql`
  query BeingPageAboutUs($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        prolog
        nir_story_preview
        ifat_story_preview
        abdul_story_preview
        nir_story
        ifat_story
        abdul_story
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

