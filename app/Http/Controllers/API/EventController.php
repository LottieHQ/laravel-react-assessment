<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\API\EventPostRequest;
use App\Http\Requests\API\EventPutRequest;
use App\Http\Resources\API\EventResource;
use App\Models\Event;

use Illuminate\Http\Request; //Needs changing?
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Query\Builder;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return EventResource::collection(Event::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(EventPostRequest $request)
    {
        $data = $request->all();
        $event = Event::create($data);
        return new EventResource($event);
    }

    /**
     * Display the specified resource.
     */
    public function show(Event $event)
    {
        return new EventResource($event);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(EventPutRequest $request, Event $event)
    {
        $data = $request->all();
        $event->update($data);
        return new EventResource($event);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Event $event)
    {
        $event->delete();
        return response(null, 204);
    }

    public function search(Request $request)
    {        
        $status = $request ->get('status');
        $location_name = $request ->get('location_name');
        $from = $request ->get('from');
        $until = $request ->get('until');

        //Update this to filter by all if/when used?
        $event = DB::table('events')
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
        return $event->get();
    }
}