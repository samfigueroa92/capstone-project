import React from 'react'
import { useLocation } from 'react-router-dom'

import "./NoRequest.css"

const NoRequests = ({dashboardFilter}) => {
    let {pathname} = useLocation()
    let reviewPath = pathname.includes('reviews')

  return (
    <div className={reviewPath || dashboardFilter === 'reviews' ? "ZeroRequests Length": "ZeroRequests" }>
      <img
        src="https://static.thenounproject.com/png/4147383-200.png"
        alt="pending-icon"
      />
      <div className="ZeroRequests_content_header">No Results</div>
    </div>
  )
}

export default NoRequests