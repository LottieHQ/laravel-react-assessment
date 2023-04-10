import React from 'react'

function NewLocationForm({ alert, location, onChange, onSubmit }) {
  return (
    <form className="new-location-container" onSubmit={onSubmit}>
      <h3>New location</h3>
      <input onChange={onChange} value={location.name} type="text" placeholder="Name" name="name"/>
      <input onChange={onChange} value={location.description} type="text" placeholder="Description" name="description"/>
      <select value={location.status} onChange={onChange} placeholder="Status" name="status">
        <option disabled value="">Please select a status</option>
        <option value="open">open</option>
        <option value="closed">closed</option>
      </select>
      <div className="date-picker-container">
        <div className="date-and-label">
          <p>Start date</p>
          <input onChange={onChange} value={location.date_start} type="date" name="date_start"/>
        </div>
        <div className="date-and-label">
          <p>End date</p>
          <input onChange={onChange} value={location.date_end} type="date" name="date_end"/>
        </div>
      </div>
      <button 
        type="submit"
      >
        Create
      </button>
      {
        alert ? <div>{alert}</div> : null
      }
    </form>
  )
}

export default NewLocationForm