import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import withSizes from 'react-sizes'

import NavigationMap from '../components/NavigationMap'
import Layout from '../components/Layout'
import DesertVideo from '../components/DesertVideo'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

import deviceService from '../services/deviceService';
import linksService from '../services/linksService';

import './index-page.scss'; 

const IndexPageTemplateBare = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  reachingCard,
  doingCard,
  beingCard,
  dreamingCard,
  description,
  intro,
  smallScreen,
}) => (
  <div className="index-page">
    {
      smallScreen ? (
        <>
          <DesertVideo />
          <section className="section section--gradient">
            <div className="container">
              <div className="section">
                <div className="columns">
                  <div className="column is-10 is-offset-1">
                    <div className="content">
                      <div className="columns">
                        <div className="column is-12">
                          <hr />
                          <h6 className="header-text">
                            <p>WHT IF we tell you that in one ancient </p>
                            <p>exotic desert, a creative community</p>
                            <p> of change-makers is gathering </p>
                            <p>for 5 nights and days ?</p>
                            <p>WHT IF we ask you to close your eyes for </p>
                            <p>just one moment and visualize that place?</p>
                            <p>WHT IF this place exists?</p>
                            <p>The distance between you and that</p>
                            <p> place is up to your will, to ask - WHT IF</p>
                          </h6>
                          <hr />
                        </div>
                      </div>

                      <div className="links-list columns">
                        {
                          linksService.getTopLevelLinksListOrder2(reachingCard, doingCard, beingCard, dreamingCard)
                          .map(l => (
                            <Link className="column" to={l.link} key={l.id}>
                              <PreviewCompatibleImage imageInfo={l.img} />
                              <div className={`inner-pages-row-underline-display ${l.innerNavList.length > 3 ? 'long-link-lines' : ''}`}>
                                {l.innerNavList.map(inl => (
                                  <div key={inl.linkTarget}>{inl.text}</div>
                                ))}
                                {/* {l.innerNavList.slice(0,4).map(inl => (
                                  <div key={inl.linkTarget}>{inl.text}</div>
                                ))} */}
                              </div>
                            </Link>
                          ))
                        }
                      </div>

                      <hr className="mb-6" />

                      {/* <div className="columns">
                        <div className="column is-12 has-text-centered mt-6">
                          <Link className="btn" to="/main-event">
                            Go to Main Event
                          </Link>
                        </div>
                      </div> */}

                      {/* <div className="column is-12">
                        <h3 className="has-text-weight-semibold is-size-2">
                          Latest Updates
                        </h3>
                        <BlogRoll />
                        <div className="column is-12 has-text-centered">
                          <Link className="btn" to="/blog">
                            Read more
                          </Link>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <NavigationMap/>
      )
    }
  </div>
);

const IndexPageTemplate = withSizes(deviceService.getMapSizesToProps())(IndexPageTemplateBare)
export  {IndexPageTemplate}; 

const {oneOfType, object, string, shape, array} = PropTypes;
IndexPageTemplate.propTypes = {
  image: oneOfType([object, string]),
  title: string,
  heading: string,
  subheading: string,
  mainpitch: object,
  reachingCard: oneOfType([object, string]),
  doingCard: oneOfType([object, string]),
  beingCard: oneOfType([object, string]),
  dreamingCard: oneOfType([object, string]),
  description: string,
  intro: shape({
    blurbs: array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  console.log(JSON.stringify(frontmatter.heading))
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        reachingCard={frontmatter.reaching_card}
        doingCard={frontmatter.doing_card}
        beingCard={frontmatter.being_card}
        dreamingCard={frontmatter.dreaming_card}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: shape({
    markdownRemark: shape({
      frontmatter: object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reaching_card {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        doing_card {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        being_card {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        dreaming_card {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
