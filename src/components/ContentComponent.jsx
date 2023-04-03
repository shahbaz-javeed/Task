import React from 'react'
import ContentButtonSection from './ContentButtomSection'
import ContentTopSection from './ContentTopSection'

const ContentComponent = () => {
  return (
    <section className='Content_Container'>
        <div className="heading_Container">
          <h3 className='heading'>You Current Have 3 Requests</h3>
        </div>
        <div className="flex">
        <ContentTopSection/>
        <ContentButtonSection/>
        </div>
    </section>
  )
}

export default ContentComponent