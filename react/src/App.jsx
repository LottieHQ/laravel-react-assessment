import { useState, useEffect } from 'react'
import Modal from "./Modal/Modal";
import './App.css'

const locations = [
    { name: 'New Site', description: 'Check out new industrial site', start_time: '12:30', end_time: '14:30',  status: 'Open' },
    { name: 'New Client X onboarding', description: 'onboard new client during this period', start_time: '15-04-2023', end_time: '20-04-2023',  status: 'Closed'},
    // More people...
]

export default function App() {
    const [location, setLocation] = useState({})
    const [show, setShow] = useState(false);

    useEffect(() => {
        async function getLocationData() {
            let response = await fetch("http://127.0.0.1:8002/api/");
        }
    }, [])

    return (
        <div className="card">
            <div className="section-1">
                <div className="">
                    <h1>Location</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        {/*A list of all the users in your account including their name, title, email and role.*/}
                    </p>
                </div>
                <div className="button">
                    <button
                        type="button" onClick={() => setShow(true)}
                    >
                        Add Location
                    </button>

                    <Modal title="Create New Location" onClose={() => setShow(false)} show={show}>
                       <div className="modalName">
                           <label htmlFor="Name">
                               Name
                           </label>
                           <input type="text"/>
                       </div>

                        <div className="modalDates">
                            <label htmlFor="Name">Start Date</label>
                            <input type="date"/>

                            <label htmlFor="Name">End Date</label>
                            <input type="date"/>
                        </div>

                        <div className="modalStatus">
                            <h4>Status</h4>
                            <label htmlFor="Name">Open</label>
                            <input type="radio" id="html" name="fav_language" value="HTML" />
                            <label htmlFor="Name">Closed</label>
                            <input type="radio" id="html" name="fav_language" value="HTML" />
                        </div>
                    </Modal>
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="outer-table overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                            <table className="styled-table">
                                <thead>
                                <tr>
                                    <th scope="col" >
                                        Name
                                    </th>
                                    <th scope="col">
                                        Description
                                    </th>
                                    <th scope="col">
                                        Start Date
                                    </th>
                                    <th scope="col">
                                        End Date
                                    </th>
                                    <th>
                                        Status
                                    </th>
                                    <th scope="col">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                {locations.map((location) => (
                                    <tr key={location.name}>
                                        <td>{location.name}</td>
                                        <td>{location.description}</td>
                                        <td>{location.start_time}</td>
                                        <td>{location.end_time}</td>
                                        <td><span className={location.status === 'Open' ? 'status1' : 'status2'}>{location.status}</span></td>
                                        <td>
                                            <a href="#">
                                                Edit
                                            </a>
                                            <a href="#" >
                                                Delete
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



