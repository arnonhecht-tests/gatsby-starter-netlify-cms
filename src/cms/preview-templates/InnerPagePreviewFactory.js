import React from 'react'
import PropTypes from 'prop-types'

/*
This is a factory that receives PageTemplate and returns a Preview of an InnerPage.
It exists to minimze code duplication and consolidate InnerPages structure.
*/

const InnerPagePreviewFactory = (PageTemplate) => {
  const InnerPagePreview = ({ entry, widgetFor }) => {
    const data = entry.getIn(['data']).toJS()
    
    return (
      <PageTemplate
        title={entry.getIn(['data', 'title'])}
        content={widgetFor('body')}
        navImage={data.navimage}
      />
    )
  }
  
  
  const { shape, func } = PropTypes;
  InnerPagePreview.propTypes = {
    entry: shape({
      getIn: func,
    }),
    widgetFor: func,
  }

  return InnerPagePreview;
}

export default InnerPagePreviewFactory;
