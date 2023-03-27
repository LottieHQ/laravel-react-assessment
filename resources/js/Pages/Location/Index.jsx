import {Head} from '@inertiajs/react'
import {CalendarIcon, InformationCircleIcon} from '@heroicons/react/24/outline'
import Layout from '../../Layout'
import Heading from '../../Components/Heading'
import Pagination from "../../Components/Pagination";
import SearchForm from "../../Components/SearchForm";
import EmptyState from "../../Components/EmptyState";

export default function Index({locations}) {
    return (
        <Layout>
            <Head title="Locations"/>

            <Heading url='/api/locations' title='Locations' subtitle='View and search for locations.'/>
            <SearchForm/>

            {
                locations.data.length ? (
                    <>
                        <div className="overflow-hidden bg-white sm:rounded-md mt-5">
                            <ul role="list" className="divide-y divide-gray-200">
                                {locations.data.map((location) => (
                                    <li key={location.id} className='shadow border mb-4 rounded-md'>
                                        <a href="#" className="block hover:bg-gray-50">
                                            <div className="px-4 py-4 sm:px-6">
                                                <div className="flex items-center justify-between">
                                                    <p className="truncate text-lg font-medium text-indigo-600">{location.name}</p>

                                                    <div className="ml-2 flex flex-shrink-0">
                                                        <p className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${location.status === 'Open' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                                            {location.status}
                                                        </p>

                                                        <div className="ml-3 flex flex-shrink-0">
                                                            <CalendarIcon
                                                                className="ml-3 h-5 w-5 flex-shrink-0 text-gray-400"
                                                                aria-hidden="true"/>
                                                            <p className='px-2 text-xs leading-5'>
                                                                {location.date_start} - {location.date_end}
                                                            </p>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="mt-3 sm:flex sm:justify-between">
                                                    <div className="sm:flex">
                                                        <p className="mt-2 flex items-center text-xs text-gray-500 sm:mt-0">
                                                            <InformationCircleIcon
                                                                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                                                aria-hidden="true"/>
                                                            {location.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Pagination paginator={locations} />
                    </>
                ) : <EmptyState resource='Locations'/>
            }
        </Layout>
    )
}
