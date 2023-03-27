<?php

namespace App\Http\Controllers;

use App\Http\Requests\LocationRequest;
use App\Models\Location;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class LocationController extends Controller
{
    /**
     * Returns a paginated instance of the Locations.
     */
    public function index(): InertiaResponse
    {
        $locations = Location::query();

        // Filter by Date Range
        $start_date = Request::query('start');
        $end_date = Request::query('end');

        $locations->when($start_date, fn (Builder $query) => $query->whereDate('date_start', '<=', $start_date));
        $locations->when($end_date, fn (Builder $query) => $query->whereDate('date_end', '>=', $end_date));

        // Filter by Status
        $status = Request::query('status');
        $locations->when($status, fn (Builder $query) => $query->where('status', $status));

        // Filter by Location Name
        $name = Request::query('name');
        $locations->when($name, fn (Builder $query) => $query->whereRaw('LOWER(name) LIKE LOWER(?)', "%$name%"));

        return Inertia::render('Location/Index', [
            'locations' => $locations->paginate(10)->withQueryString(),
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
