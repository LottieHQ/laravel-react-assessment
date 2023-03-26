<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\Concerns\InteractsWithExceptionHandling;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Location;
use App\Models\User;

class LocationTest extends TestCase
{
    use InteractsWithExceptionHandling;
    use RefreshDatabase;
    
    /** @test */
    public function api_can_store_location_data()
    {
        //Needed to add User to test so that Auth will pass
        $user = User::factory()->create();
        
        $this->withoutExceptionHandling();
        $location = Location::factory()->create(); 
        $this->requestData['location_name'] = $location->location_name; 
        $this->requestData['location_description'] = $location->location_description; 
        $this->requestData['date_start'] = $location->date_start; 
        $this->requestData['date_end'] = $location->date_end;
        $this->actingAs($user, 'api')->json('POST', route('api.locations.store'), $this->requestData) ->assertSuccessful();
        $this->assertLocationCreated($location); 
    }
    
    /** @test */
    protected function assertLocationCreated($location, $data = [ ])
   {
        $this->assertDatabaseHas('locations', array_merge([
            'location_name' => $this->requestData['location_name'], 
            'location_description' => $this->requestData['location_description'], 
            'date_start' => $this->requestData['date_start'],
            'date_end' => $this->requestData['date_end'],
            'location_id' => $location->id,
        ], $data)); 
    }
}