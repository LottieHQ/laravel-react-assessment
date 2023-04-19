import { useState, useEffect } from 'react'
import Modal from "./Modal/Modal";
import './App.css'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'

const locations = [
    { name: 'New Site', description: 'Check out new industrial site', start_time: '12:30', end_time: '14:30',  status: 'Open' },
    { name: 'New Client X onboarding', description: 'onboard new client during this period', start_time: '15-04-2023', end_time: '20-04-2023',  status: 'Closed'},
    // More people...
]

export default function App() {
    // const [location, setLocation] = useState({})
    const [show, setShow] = useState(false);
    //
    // // GET with Axios
    // useEffect(() => {
    //     async function getLocationData() {
    //         let response = await fetch("http://127.0.0.1:8001/api/location");
    //         setLocation(response.data);
    //
    //         console.log(response);
    //     }
    // }, []);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [locations, setLocations] = useState([]);

    // GET with fetch API
    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(
                'http://127.0.0.1:8001/api/location'
            );
            const data = await response.json();
            console.log(data);
            setLocations(data);
        };
        fetchPost();
    }, []);


    return (
        <div className="max-w-7xl mt-16 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-3xl font-semibold leading-6 text-gray-900">Locations</h1>
                    <p className="mt-4 text-sm text-gray-700">
                        A list of all the locations you need to visit.
                    </p>
                </div>
            </div>

            <div className="flex justify-end mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <button onClick={() => setShow(true)}
                        type="button"
                        className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Add user
                </button>

                <Modal title="Create New Location" onClose={() => setShow(false)} show={show}>
                    <form action="#" method="POST" className="mx-auto">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div className="sm:col-span-2">
                                <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="company"
                                        id="company"
                                        autoComplete="organization"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Start Date
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="date"
                                        name="start-date"
                                        id="start-date"
                                        autoComplete="start-date"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                    End Date
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="date"
                                        name="end-date"
                                        id="end-date"
                                        autoComplete="end-date"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Description
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2 ">
                                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Status
                                </label>
                                <div className="flex items-center justify-center  space-x-4">
                                    <div className="mt-2.5 flex items-center justify-between space-x-2">
                                        <span>Open</span>
                                        <input
                                            type="radio"
                                        />
                                    </div>
                                    <div className="mt-2.5 flex items-center justify-between space-x-2">
                                        <span>Closed</span>
                                        <input
                                            type="radio"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </Modal>
            </div>

            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                        Name
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Description
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Start Date
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        End Date
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Status
                                    </th>
                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                {locations.map((person) => (
                                    <tr key={person.name} className="text-left">
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                            {person.name}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.description}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.date_start}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.date_end}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <span className={ person.status === 'open' ? 'capitalize text-green-800 bg-green-300 border border-green-500 px-4 py-2 rounded-md' : 'capitalize text-red-800 bg-red-300 border border-red-500 px-4 py-2 rounded-md' }>{person.status}</span>
                                        </td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                Edit<span className="sr-only">, {person.name}</span>
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



