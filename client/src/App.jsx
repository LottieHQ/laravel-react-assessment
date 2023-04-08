import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    async function fetchLocations() {
      let response = await fetch("http://127.0.0.1:8000/api/locations");
      let result = await response.json()
      setLocations(result)
    }

    fetchLocations()
  }, [])

  return (
    <div className="screen">
      {locations.map((location) => (
        <div 
          className="location"
          key={`location-key-${location.id}`}
        >
          <h3>{location.name}</h3>
          <h4>{location.description}</h4>
          <h4>{location.status}</h4>
          <h5>{location.date_start}</h5>
          <h5>{location.date_end}</h5>

        </div>
      ))}

    </div>
  )
}

export default App
