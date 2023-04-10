<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;

use App\Models\Location;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Location>
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
    $start = now()->subDays(rand(1, 30));
    $end = $start->addDays(rand(1,30));

    return [
      'name' => fake()->name(),
      'description' => fake()->paragraph(),
      'status' => Arr::random(Location::STATUSES),
      'date_start' => $start,
      'date_end' => $end,
    ];
  }
}
