<?php

use App\Models\Location;

test('Locations can be filtered by date range', function () {
   $this->markTestIncomplete('TODO');
});

test('Locations can be filtered by status', function () {
    Location::factory(2)->create(['status' => 'Open']);
    Location::factory()->create(['status' => 'Closed']);

    // Open Locations
    $response = $this->get('api/locations?status=Open')->json();
    $open_locations = $response['locations']['data'];
    $this->assertCount(2, $open_locations);

    foreach ($open_locations as $open_location) {
        $this->assertEquals('Open', $open_location['status']);
    }

    // Closed Locations
    $response = $this->get('api/locations?status=Closed')->json();
    $open_locations = $response['locations']['data'];
    $this->assertCount(1, $open_locations);

    foreach ($open_locations as $open_location) {
        $this->assertEquals('Closed', $open_location['status']);
    }
});

test('Locations can be filtered by location_name', function () {
    Location::factory()->create(['name' => 'test']);
    Location::factory()->create(['name' => 'testing']);
    Location::factory()->create(['name' => 'unknown']);

    $response = $this->get('api/locations?name=test');
    $locations = $response['locations']['data'];

    $this->assertCount(2, $locations);
});
