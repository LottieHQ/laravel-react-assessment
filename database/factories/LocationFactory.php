<?php

namespace Database\Factories;

use App\Enums\LocationStatus;
use App\Models\Location;
use Illuminate\Database\Eloquent\Factories\Factory;
use DateInterval;

/**
 * @extends Factory<Location>
 */
class LocationFactory extends Factory
{
    protected $model = Location::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $start_date = fake()->dateTimeThisYear();

        $end_date = clone $start_date;
        $end_date->add(new DateInterval('P3M'));

        return [
            'name' => fake()->streetName,
            'description' => fake()->paragraph,
            'status' => fake()->randomElement(LocationStatus::values()),
            'date_start' => $start_date->format('Y-m-d'),
            'date_end' => $end_date->format('Y-m-d'),
        ];
    }
}
