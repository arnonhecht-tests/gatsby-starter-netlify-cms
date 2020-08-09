import React from 'react'
import PropTypes from 'prop-types'
import { BeingPageTemplate } from '../../templates/being-page'

const ReachingPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  console.log(`ReachingPagePreview entry: ${JSON.stringify(entry)}`)
  
  return (
    <BeingPageTemplate
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
    />
  )
}

const { shape, func } = PropTypes;
ReachingPagePreview.propTypes = {
  entry: shape({
    getIn: func,
  }),
  widgetFor: func,
}

export default ReachingPagePreview
