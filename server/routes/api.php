<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\LocationController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// EXTRA:: With extra time I would group routes by LocationController: https://laravel.com/docs/10.x/routing#route-group-controllers
// EXTRA:: With extra time I would write a middleware that allowed only users with a given permission to access the 'locations' route
    // This middleware would also likely log to a 'locations.log' channel any users that were denied access
Route::apiResource('locations', LocationController::class);