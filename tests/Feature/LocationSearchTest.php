<?php

use App\Models\Location;
use Inertia\Testing\AssertableInertia as Assert;

test('Locations can be filtered by date range', function () {
   $this->markTestIncomplete('TODO');
});

test('Locations can be filtered by status', function () {
    Location::factory(2)->create(['status' => 'Open']);
    Location::factory()->create(['status' => 'Closed']);

    // Open Locations
    $this->get('api/locations?status=Open')
        ->assertInertia(fn (Assert $page) => $page
            ->component('Location/Index')
            ->has('locations.data', 2, fn (Assert $page) => $page->where('status', 'Open')->etc())
            ->etc()
        );

    // Closed Locations
    $this->get('api/locations?status=Closed')
        ->assertInertia(fn (Assert $page) => $page
            ->component('Location/Index')
            ->has('locations.data', 1, fn (Assert $page) => $page->where('status', 'Closed')->etc())
            ->etc()
        );
});

test('Locations can be filtered by location_name', function () {
    Location::factory()->create(['name' => 'test']);
    Location::factory()->create(['name' => 'testing']);
    Location::factory()->create(['name' => 'unknown']);

    $this->get('api/locations?name=test')
        ->assertInertia(fn (Assert $page) => $page
            ->component('Location/Index')
            ->has('locations.data', 2)
            ->etc()
        );
});
