import React from 'react'

function Filters({filters, onChange, onClick, onClear}) {
  return (
    <div className="filter-container">
      <h3>Filters</h3>
      <input onChange={onChange} value={filters.name} type="text" name="name" />
      <select value={filters.status} onChange={onChange} placeholder="Status" name="status">
        <option disabled value="">Please select a status</option>
        <option value="open">open</option>
        <option value="closed">closed</option>
      </select>
      <input onChange={onChange} value={filters.to} type="date" name="to"/>
      <input onChange={onChange} value={filters.from} type="date" name="from"/>
      <button onClick={onClick}>Filter</button>
      <button onClick={onClear}>Clear</button>
    </div>
  )
}

export default Filters