import './App.css'

const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    // More people...
]

export default function App() {
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
                        type="button"
                    >
                        Add Location
                    </button>
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
                                        Title
                                    </th>
                                    <th scope="col">
                                        Email
                                    </th>
                                    <th scope="col">
                                        Role
                                    </th>
                                    <th scope="col">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                {people.map((person) => (
                                    <tr key={person.email}>
                                        <td>{person.name}</td>
                                        <td>{person.title}</td>
                                        <td>{person.email}</td>
                                        <td>{person.role}</td>
                                        <td>
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



