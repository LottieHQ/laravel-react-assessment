<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\LocationController;

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

Route::group(["prefix" => "locations"], function () {
    // GET /locations: show all articles
    Route::get("", [LocationController::class, "index"]);

    Route::get("/search", [LocationController::class, "search"]);

    // POST /articles: create a new article
    Route::post("", [LocationController::class, "store"])->name('api.locations.store')->middleware('auth:api');

    Route::group(["prefix" => "{location}"], function () {
        // GET /locations/8: show the article
        Route::get("", [LocationController::class, "show"]);

        // PUT /articles/8: update the article
        Route::put("", [LocationController::class, "update"])->middleware('auth:api');

        // DELETE /articles/8: delete the article
        Route::delete("", [LocationController::class, "destroy"])->middleware('auth:api');
    });
});