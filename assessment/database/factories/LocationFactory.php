<?php

namespace Database\Factories;

use App\Models\Location;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Location>
 */
class LocationFactory extends Factory
{
    // Factory corresponding Model
    protected $model = Location::class;

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
            'status' => fake()->randomElement(['open', 'closed']),
            'location_name' => fake()->word(),
            'location_description' => fake()->sentence(4)
        ];
    }
}
