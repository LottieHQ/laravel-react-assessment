import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import {useForm} from '@inertiajs/react'

export default function SearchForm() {
    const {data, setData, get, processing} = useForm({
        name: '',
        status: '',
        start: '',
        end: '',
    })

    function submit(e) {
        console.log(data)
        e.preventDefault()
        get('/api/locations', {
            preserveState: true,
        })
    }

    return (
        <form onSubmit={submit} className="flex items-end flex-shrink-0 flex-col sm:flex-row">

            <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                    Name
                </label>
                <div>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={data.name}
                        onChange={e => setData('name', e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Location name..."
                    />
                </div>
            </div>

            <div className="ml-5">
                <label htmlFor="status" className="block text-sm font-medium leading-6 text-gray-900">Status</label>
                <select
                    id="status"
                    name="status"
                    className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                    onChange={e => setData('status', e.target.value)}
                >
                    <option value=''>All</option>
                    <option>Open</option>
                    <option>Closed</option>
                </select>
            </div>

            <div className="ml-5">
                <label htmlFor="start" className="block text-sm font-medium leading-6 text-gray-900">Start Date</label>
                <input
                    id="start"
                    name="start"
                    className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type="date"
                    onChange={e => setData('start', e.target.value)}
                />
            </div>

            <div className="ml-5">
                <label htmlFor="end" className="block text-sm font-medium leading-6 text-gray-900">End Date</label>
                <input
                    id="end"
                    name="end"
                    className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type="date"
                    onChange={e => setData('end', e.target.value)}
                />
            </div>

            <button
                type="submit"
                disabled={processing}
                className="ml-auto inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                <MagnifyingGlassIcon className="-ml-0.5 h-5 w-5" aria-hidden="true"/>
                Search
            </button>

        </form>
    )
}
