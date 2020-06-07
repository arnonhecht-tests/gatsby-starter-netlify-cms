import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, widgetFor, getAsset }) => {
  
  const data = entry.getIn(['data']).toJS()
  
  return (
    <AboutPageTemplate
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
      circleimage={getAsset(data.circleimage)}
    />
  )
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
