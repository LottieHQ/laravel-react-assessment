<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\LocationRequest;
use App\Models\Location;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;

class LocationController extends Controller
{
    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request)
    {
        return Response::json(Location::all(), 200);
    }

    public function create()
    {
        //
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:250',
            'description' => 'required|string|max:500',
            'status' => 'required|in:open,closed',
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

    /**
     * @param LocationRequest $request
     * @param Location $location
     * @return void
     */
    public function update(LocationRequest $request, Location $location)
    {
        //Validation would be in request
        $input = $request->all();

        $location->update($input);

        //new instance & return response.
    }

    /**
     * @param Request $request
     * @param Location $location
     * @return JsonResponse
     */
    public function delete(Request $request, Location $location)
    {
        $location->delete();

        return Response::json('success', 200);
    }

    /**
     * @param Request $request
     * @return LengthAwarePaginator
     */
    public function filterLocations(Request $request)
    {
        $status = $request->status;

        $filters = Location::query()->when($status, function ($query) use ($status) {
            $query->where('status', $status);
        });

        return $filters->paginate(10);
    }
}
