<?php

namespace App\Http\Controllers;

use App\Http\Requests\LocationRequest;
use App\Models\Location;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Request;

class LocationController extends Controller
{
    /**
     * Returns a paginated instance of the Locations.
     */
    public function index(): JsonResponse
    {
        $locations = Location::query();

        // Filter by Date Range
        // TODO - Add validation i.e. end date must not be sooner than start date.
        $start_date = Request::query('start_date');
        $end_date = Request::query('end_date');

        $locations->when($start_date && $end_date, function (Builder $query) use ($start_date, $end_date) {
           $query->whereDate('start_date', '>=', $start_date)
               ->whereDate('end_date', '<=', $end_date);
        });

        // Filter by Status
        $status = Request::query('status');
        $locations->when($status, fn (Builder $query) => $query->where('status', $status));

        // Filter by Location Name
        $name = Request::query('name');
        $locations->when($name, fn (Builder $query) => $query->whereRaw('LOWER(name) LIKE LOWER(?)', "%$name%"));

        return $this->respondOk([
            'locations' => $locations->paginate(),
        ]);
    }

    /**
     * Store a new Location in the database.
     */
    public function store(LocationRequest $request): JsonResponse
    {
        $validated = $request->safe()->toArray();

        $location = Location::query()->create($validated);

        return $this->respondOk([
            'location' => $location,
        ]);
    }
}
