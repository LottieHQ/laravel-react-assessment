<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\LocationRequest;
use App\Models\Location;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;

class LocationController extends Controller
{
    public function index(Request $request): Collection
    {
        return Location::all();
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:250',
            'description' => 'required|string',
            'status' => 'required',
            'date_start' => 'required|date',
            'date_end' => 'required|date',
        ]);

        if ($validator->fails()) {
            $messages = $validator->messages();
            $errors = $messages->all();

            return response()->json([
                'error' => $errors,
                'messages' => $messages,
            ]);
        }

        $location = new Location;

        $data = $location->create([
            'name' => $request['name'],
            'description' => $request['description'],
            'status' => $request['status'],
            'date_start' => $request['date_start'],
            'date_end' => $request['date_end'],
        ]);

        return Response::json($data, 200);
    }

    public function update(LocationRequest $request, Location $location)
    {
        //Validation would be in request
        $input = $request->all();

        $location->update($input);

    }

    public function delete(Request $request, Location $location)
    {
        $location->delete();

        return Response::json('success', 200);
    }

    public function filterLocations(Request $request)
    {
        $status = $request->status;

        $filters = Location::query()->when($status, function ($query) use ($status) {
            $query->where('status', $status);
        });

        return $filters->paginate(10);

    }
}
