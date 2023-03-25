<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Location>
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
        $statuses = ['open', 'closed'];
        return [
            'date_start' => fake()->date('Y-m-d'),
            'date_end' => fake()->date('Y-m-d'),
            'location_name' => fake()->word(),
            'location_description' => fake()->sentence(),
            'status' => $statuses[array_rand($statuses)],
        ];
    }
}