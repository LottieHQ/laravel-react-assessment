import { FaceFrownIcon } from "@heroicons/react/24/outline";

export default function EmptyState({ resource }) {
    return (
        <div className="text-center mt-20">
            <FaceFrownIcon aria-hidden='true' className='stroke-1 mx-auto h-12 w-12 text-gray-400'/>
            <h3 className="mt-2 text-sm font-semibold text-gray-900">No {resource} Found</h3>
            <p className="mt-1 text-sm text-gray-500">No {resource} could be found, please create one or adjust your search criteria.</p>
        </div>
    )
}
