import React from 'react'

function NewLocationForm({ location, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input onChange={onChange} value={location.name} type="text" placeholder="Name" name="name"/>
      <input onChange={onChange} value={location.description} type="text" placeholder="Description" name="description"/>
      <select value={location.status} onChange={onChange} placeholder="Status" name="status">
        <option disabled value="">Please selecte a status</option>
        <option value="closed">closed</option>
        <option value="open">open</option>
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
    </form>
  )
}

export default NewLocationForm