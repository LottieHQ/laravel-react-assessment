<?php

namespace Tests\Unit;

use App\Models\Location;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PHPUnit\Framework\TestCase;

class LocationTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic test example.
     */
    public function test_that_true_is_true(): void
    {
        $this->assertTrue(true);
    }

    public function api_can_store_location_data()
    {
        $this->withoutExceptionHandling();
        $location = Location::factory()->create();

        $this->requestData['name'] = $location->name;
        $this->requestData['description'] = $location->description;
        $this->requestData['date_start'] = $location->date_start;
        $this->requestData['date_end'] = $location->date_end;

        $this->json('POST', route('api.location.store'), $this->requestData)->assertSuccessful();
        $this->assertLocationCreated($location);
    }

    protected function assertLocationCreated($location, $data = [ ])
    {
        $this->assertDatabaseHas('location', array_merge([
            'name' => $this->requestData['name'],
            'description' => $this->requestData['description'],
            'date_start' => $this->requestData['date_start'],
            'date_end' => $this->requestData['date_end'],
            'location_id' => $location->id,
        ], $data)); }
}
