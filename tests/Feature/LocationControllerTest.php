<?php

namespace Tests\Feature;

use App\Enums\LocationStatus;
use App\Models\Location;

test('The Location index page returns the Locations', function () {
    // Quick test, update later to check for pagination?

    Location::factory(3)->create();

    $this->get('api/locations')->assertOk();
});

test('A Location can be persisted to the database', function () {
    expect(Location::query()->count())->toBe(0);

    $data = [
        'name' => fake()->streetName,
        'description' => fake()->paragraph,
        'status' => fake()->randomElement(LocationStatus::values()),
        'date_start' => now()->format('Y-m-d'),
        'date_end' => now()->addMonth()->format('Y-m-d'),
    ];

    $this->post('api/locations', $data)->assertOk();

    $this->assertDatabaseHas('locations', $data);
});
