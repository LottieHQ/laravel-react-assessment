import {GlobeEuropeAfricaIcon} from "@heroicons/react/24/outline";
import {Link} from "@inertiajs/react";

export default function Heading({url, title, subtitle}) {
    return (
        <div className="mb-5 flex items-end">
            <Link href={url} className='mr-3'>
                <GlobeEuropeAfricaIcon
                    className="stroke-1 m-auto h-16 w-16 text-white p-2 bg-slate-600 rounded-md"
                    aria-hidden="true"/>
            </Link>
            <div>
                <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
                <p className="text-sm font-medium text-gray-500">{subtitle}</p>
            </div>
        </div>
    )
}
