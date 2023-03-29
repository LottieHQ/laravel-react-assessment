<?php

namespace Tests\Feature;

use App\Models\Location;
use Faker\Factory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class LocationTest extends TestCase
{
    public function test_api_can_store_location_data()
    {
        $this->withoutExceptionHandling();
        $location = factory(Location::class)->create();
        $this->requestData['location_name'] = $location->location_name;
        $this->requestData['location_description'] = $location->location_description;
        $this->requestData['date_start'] = $location->date_start;
        $this->requestData['date_end'] = $location->date_end;
        $this->json('POST', route('api.location.store'), $this->requestData)->assertSuccessful();
        $this->test_assertLocationCreated($location);
    }

    public function test_assertLocationCreated($location, $data = [])
    {
        $this->assertDatabaseHas('locations', array_merge([
            'location_name' => $this->requestData['location_name'], 'location_description' => $this->requestData['location_description'], 'date_start' => $this->requestData['date_start'],
            'date_end' => $this->requestData['date_end'],
            'location_id' => $location->id,
        ], $data));
    }

}
