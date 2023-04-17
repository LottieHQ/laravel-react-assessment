<?php

namespace Database\Factories;

use App\Models\Location;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Location>
 */
class LocationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'date_start' => fake()->date(),
            'date_end' => fake()->date(),
            'status' => 'status', //to make
            'location_name' => fake()->name(),
            'location_description' => fake()->paragraph(),
        ];
    }
}
