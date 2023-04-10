import React from 'react'

// EXTRA::Ideally would have re-used the component NewLocationForm for DRY'er code
function Filters({filters, onChange, onClick, onClear}) {
  return (
    <form className="filter-container">
      <h3>Filters</h3>
      <input onChange={onChange} value={filters.name} placeholder="Name" type="text" name="name" />
      <select value={filters.status} onChange={onChange} placeholder="Status" name="status">
        <option disabled value="">Please select a status</option>
        <option value="open">open</option>
        <option value="closed">closed</option>
      </select>
      <div className="date-picker-container">
        <div className="date-and-label">
          <p>Start date</p>
          <input onChange={onChange} value={filters.to} type="date" name="to"/>
        </div>
        <div className="date-and-label">
          <p>End date</p>
          <input onChange={onChange} value={filters.from} type="date" name="from"/>
        </div>
      </div>
      
      <button onClick={onClick}>Filter</button>
      <button onClick={onClear}>Clear</button>
    </form>
  )
}

export default Filters