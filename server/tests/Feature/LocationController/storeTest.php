<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

use App\Models\Location;


class storeTest extends TestCase
{
  protected $requestData = [
    'name' => 'test name',
    'description' => 'test description',
    'status' => 'open',
    'date_start' => "2023-04-11",
    'date_end' => "2023-04-15",
  ];

  // HELPERS START

  protected function assertLocationCreated($location, $data = []): void
  {
    $this->assertDatabaseHas('locations', array_merge([
      'name' => $this->requestData['name'],
      'description' => $this->requestData['description'],
      'status' => $this->requestData['status'],
      'date_start' => $this->requestData['date_start'],
      'date_end' => $this->requestData['date_end'],
      'id' => $location->id,
    ], $data)); 
  }

  // HELPERS END

  /**
   * @test
   */
  public function api_can_store_location_data(): void
  {
    $this->withoutExceptionHandling();
    $location = Location::factory()->create();
    $this->requestData['name'] = $location->name; 
    $this->requestData['description'] = $location->description; 
    $this->requestData['status'] = $location->status; 
    $this->requestData['date_start'] = $location->date_start; 
    $this->requestData['date_end'] = $location->date_end;
    // EXTRA:: Ideally would have the test pick up the url via the route() method
    //$this->json('POST', route('api.location.store'), $this->requestData)->assertSuccessful();
    $this->json('POST', '/api/locations', $this->requestData)->assertSuccessful(); 

    $this->assertLocationCreated($location); 
  }
}
