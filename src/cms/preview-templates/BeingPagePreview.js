import React from 'react'
import PropTypes from 'prop-types'
import { BeingPageTemplate } from '../../templates/being-page'

const BeingPagePreview = ({ entry, widgetFor, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  console.log(`entry: ${JSON.stringify(entry)}`)
  
  return (
    <BeingPageTemplate
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
      circleimage={getAsset(data.circleimage)}
    />
  )
}


const { shape, func } = PropTypes;
BeingPagePreview.propTypes = {
  entry: shape({
    getIn: func,
  }),
  widgetFor: func,
}

export default BeingPagePreview;
