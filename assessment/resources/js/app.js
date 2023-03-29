import './bootstrap';

// Firstly the route to '/' would be changed to this file, so that any frontend React code would display on the homepage

// I would fetch the data from the DB either using the JS fetch() method, e.g

const fetchData = () => {
    return fetch("http://localhost:8080/api/locations")
        .then((response) => response.json())
}

// or using Axios to make a request, e.g

return axios.get("http://localhost:8080/api/locations")
    .then((response) => response.data);
}

// I would then map() each item from the table to a list in the frontend, e.g

<div>
    {data.map(((item) => (
        <div key={item.id} className="locations">
            <h3>{item.location_name} - {item.id}</h3>
            <p>{item.date_start}</p>
            <p>{item.date_end}</p>
            <p>{item.status}</p>
            <p>{item.location_description}</p>
        </div>
    )))};
</div>

// To create a searchable form, I would create a form component that uses axios to again fetch the data.
// I could then give axios some parameters (such as a searchQuery) which could query an endpoint and return the results in a mapped list
