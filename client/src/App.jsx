import { useState, useEffect } from 'react'
import './App.css';
import { API_URL } from './api/config';
import { getLocations } from './api/getLocations';
import { createLocation } from './api/createLocation';
import NewLocationForm from './components/NewLocationForm';
import Location from './components/Location';
import Filters from './components/Filters';

const INITIAL_FORM = {
  name: "",
  description: "",
  status: "",
  date_start: "",
  date_end: "",
};

const INITIAL_FILTERS = {
  name: "",
  status: "",
  to: "",
  from: "",
}

function App() {
  // EXTRA:: Given extra time I would use a third party state managment library such as Redux or Zustand
  // Likely Redux since I have experience with it
  // ContextProvider would also be a native solution
  // Redux would allow me to remove any prop drilling, but for the size of this project I determined it was acceptable
  const [locations, setLocations] = useState([])
  const [newLocation, setNewLocation] = useState({
    name: "",
    description: "",
    status: "",
    date_start: "",
    date_end: "",
  });
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [alert, setAlert] = useState("");
  const [load, setLoad] = useState(true);

  // HANDLE METHODS START

  async function handleSubmit(event){
    event.preventDefault();
    const [success, result] = await createLocation(newLocation);

    // EXTRA:: Ideally the 'alert' would clear after short period of time
    setAlert(result);

    if (success) {
      setNewLocation(INITIAL_FORM);
      setLoad(true); // TODO:: add to existing state instead?
    }
  }

  // EXTRA:: This method should also handle when an <input /> element is of type checkbox

  const handleChange = event => {
    const { name, value } = event.target;
    setNewLocation(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFilterChange = event => {
    const { name, value } = event.target;
    setFilters(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmitFilters = () => {
    fetchLocations();
  }

  // EXTRA:: Another example of where Redux could have cleaned up the reloading of data
  const handleClearFilters = () => {
    setFilters(INITIAL_FILTERS);
    setLoad(true);
  }
  
  // HANDLE METHODS END

  async function fetchLocations() {
    // EXTRA:: Would be ideal to only attach query strings key:value when the value is not empty/null
    const locations = await getLocations(new URLSearchParams(filters));
    setLocations(locations);
  }


  // EXTRA:: Similar to the point at the beginning of this file, redux would make handling reload of states much cleaner
  useEffect(() => {

    if (load) fetchLocations()

    return () => {
      setLoad(false);
    }
  }, [load]);


  return (
    <div className="screen">

      <div className="create-location-container">
        Create New Location!
        <NewLocationForm 
          location={newLocation} 
          onChange={handleChange} 
          onSubmit={handleSubmit}
        />
    
        <div className="alert-container">
          {
            alert ? <div>{alert}</div> : null 
          }
        </div>

      </div>
      <Filters 
        filters={filters} 
        onChange={handleFilterChange} 
        onClick={handleSubmitFilters}
        onClear={handleClearFilters}
      />

      <div className="locations-container">
        {locations.map((location) => (
          <Location
             //EXTRA:: Would be more appropriate to use a package such as 'uuid' for unique keys
            key={`location-key-${location.id}`}
            location={location}/>
        ))}
      </div>

    </div>
  )
}

export default App
