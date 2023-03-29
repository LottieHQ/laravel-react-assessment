<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Location;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class LocationController extends Controller
{
    /**
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        // Display a list of locations
        $locations = Location::all();
        return response()->json($locations);
    }

    public function store(Request $request)
    {
        $request->validate([
            'date_start' => 'required|date',
            'date_end' => 'required|date',
            'status' => 'required|in:open,closed',
            'location_name' => 'required|string',
            'location_description' => 'required|string',
        ]);

        $newLocation = new Location([
            'date_start' => $request->get('date_start'),
            'date_end' => $request->get('date_end'),
            'status' => $request->get('status'),
            'location_name' => $request->get('location_name'),
            'location_description' => $request->get('location_description'),
        ]);

        $newLocation->save();

        return response()->json($newLocation);
    }

    public function update(Request $request, $location)
    {
        $locations = Location::findOrFail($location);

        $request->validate([
            'date_start' => 'required|date',
            'date_end' => 'required|date',
            'status' => 'required|in:open,closed',
            'location_name' => 'required|string',
            'location_description' => 'required|string',
        ]);

        $locations->date_start = $request->get('date_start');
        $locations->date_end = $request->get('date_end');
        $locations->status = $request->get('status');
        $locations->location_name = $request->get('location_name');
        $locations->location_description = $request->get('location_description');

        $locations->save();

        return response()->json($locations);
    }
}
