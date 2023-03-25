<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\API\LocationPostRequest;
use App\Http\Requests\API\LocationPutRequest;
use App\Http\Resources\API\LocationResource;
use App\Models\Location;

use Illuminate\Http\Request; //Needs changing?
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Query\Builder;

class LocationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return LocationResource::collection(Location::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(LocationPostRequest $request)
    {
        $data = $request->all();
        $location = Location::create($data);
        return new LocationResource($location);
    }

    /**
     * Display the specified resource.
     */
    public function show(Location $location)
    {
        return new LocationResource($location);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(LocationPutRequest $request, Location $location)
    {
        $data = $request->all();
        $location->update($data);
        return new LocationResource($location);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Location $location)
    {
        $location->delete();
        return response(null, 204);
    }

    public function search(Request $request)
    {        
        $status = $request ->get('status');
        $location_name = $request ->get('location_name');
        $from = $request ->get('from');
        $until = $request ->get('until');

        //Update this to filter by all if/when used?
        $location = DB::table('location')
            ->when($status, function (Builder $query, string $status) {
                $query->where('status', '=', $status);
            })
            ->when($location_name, function (Builder $query, string $location_name) {
                $query->where('location_name', 'like', '%'.$location_name.'%');
            })
            ->when($from, function (Builder $query, string $from) {
                $query->where('date_start', '>=', date($from));
            })
            ->when($until, function (Builder $query, string $until) {
                $query->where('date_start', '<=', date($until));
            });
        return $location->get();
    }
}