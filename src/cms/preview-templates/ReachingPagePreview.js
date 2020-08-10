// import React from 'react'
// import PropTypes from 'prop-types'
// import { ReachingPageTemplate } from '../../templates/reaching-page'

// const ReachingPagePreview = ({ entry, widgetFor }) => {
//   const data = entry.getIn(['data']).toJS()
//   console.log(`ReachingPagePreview entry: ${JSON.stringify(entry)}`)
  
//   return (
//     <ReachingPageTemplate
//       title={entry.getIn(['data', 'title'])}
//       content={widgetFor('body')}
//       navImage={data.navimage}
//     />
//   )
// }

// const { shape, func } = PropTypes;
// ReachingPagePreview.propTypes = {
//   entry: shape({
//     getIn: func,
//   }),
//   widgetFor: func,
// }

// export default ReachingPagePreview
