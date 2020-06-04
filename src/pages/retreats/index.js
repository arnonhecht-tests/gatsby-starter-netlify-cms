import React from 'react'

import Layout from '../../components/Layout'
import RetreatsRoll from '../../components/RetreatsRoll'

export default class RetreatsIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/open-book.png')`,
          }}
        >
          <h1
            className="page-header has-text-weight-bold is-size-1"
          >
            Latest Updates
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <RetreatsRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
