<?php

namespace Tests\Feature;

use App\Models\Location;

test('api_can_store_location_data', function () {
    $this->withoutExceptionHandling();

    $location = Location::factory()->create();
    $location = $location->toArray();

    // I've changed the below from 'location_name' and 'location_description' to simply 'name' and 'description'
    // Also added a status field.
    $this->requestData['name'] = $location['name'];
    $this->requestData['description'] = $location['description'];
    $this->requestData['date_start'] = $location['date_start'];
    $this->requestData['date_end'] = $location['date_end'];
    $this->requestData['status'] = $location['status'];

    $this->json('POST', route('api.locations.store'), $this->requestData)->assertSuccessful();

    $this->assertDatabaseHas('locations', [
        'name' => $this->requestData['name'],
        'description' => $this->requestData['description'],
        'date_start' => $this->requestData['date_start'],
        'date_end' => $this->requestData['date_end'],
        'status' => $this->requestData['status'],
        'id' => $location['id'],
    ]);
});

