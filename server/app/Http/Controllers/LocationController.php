<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

use Illuminate\Support\Facades\Log;

use Carbon\Carbon;
use App\Models\Location;

class LocationController extends Controller
{
  /**
   * Display a listing of the Locations.
   */
  public function index(Request $request)
  { 
    $name = $request->query('name');
    $status = $request->query('status');
    $from = $request->query('from');
    $to = $request->query('to');
    
    $locations = Location::when($name, fn ($query) => $query->where('name', $name))
      ->when($status, fn ($query) => $query->where('status', $status))
      ->when($from, function ($query, $from) {
        $query->where('date_start', '>=', date($from));
      })
      ->when($to, function ($query, $to) {
          $query->where('date_start', '<=', date($to));
      })
      ->get();
    return response()->json($locations, 200);
  }

  /**
   * Store a newly created Location in storage.
   */
  public function store(Request $request)
  {
    $validator = Validator::make($request->all(),[
      'name' => 'required|string', // EXTRA:: Limit name to 50 characters
      'description' => 'required|string',
      'status' => ['required', Rule::in(Location::STATUSES)],
      'date_start' => 'required|date', //EXTRA::Would be nice to validate date format 
      'date_end' => 'required|date', //EXTRA::Would be nice to validate date format. Specify that 'date_end' comes after 'date_start'
    ]);

    if ($validator->fails()) return response()->json($validator->errors()->first(), 400);

    $location = new Location;

    $result = $location->store(
      $request->name,
      $request->description,
      $request->status,
      Carbon::parse($request->date_start),
      Carbon::parse($request->date_end),
    );

    return response()->json($result, 200);
  }
}
