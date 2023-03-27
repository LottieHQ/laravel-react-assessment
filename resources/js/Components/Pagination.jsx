export default function Pagination({ paginator }) {
    return (
        <nav
            className="flex items-center justify-between border-t border-gray-200 bg-white py-3"
            aria-label="Pagination"
        >
            <div className="hidden sm:block">
                <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">{ paginator.from }</span> to <span className="font-medium">{ paginator.to }</span> of{' '}
                    <span className="font-medium">{ paginator.total }</span> results
                </p>
            </div>
            <div className="flex flex-1 justify-between sm:justify-end">
                <a
                    href={ paginator.prev_page_url }
                    className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
                >Previous</a>

                <a
                    href={ paginator.next_page_url }
                    className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
                >Next</a>
            </div>
        </nav>
    )
}
