<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\API\EventPostRequest;
use App\Http\Requests\API\EventPutRequest;
use App\Http\Resources\API\EventResource;
use App\Models\Event;

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
}