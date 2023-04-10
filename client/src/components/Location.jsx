import React from 'react'

function Location({ location }) {
  return (
    <div 
      className="location"
     >
      <div>{location.name}</div>
      <div>{location.description}</div>
      <div className={`${location.status === 'open' ? 'open': 'closed'}`}>{location.status}</div>
      <div className="location-dates">
        <div className="location-date-and-label">
          <div>Start date:</div><div>{location.date_start}</div>
        </div>
        <div className="location-date-and-label">
          <div>End date:</div><div>{location.date_end}</div>
        </div>
      </div>
    </div>
  )
}

export default Location