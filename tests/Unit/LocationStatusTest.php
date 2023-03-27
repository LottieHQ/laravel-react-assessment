<?php

namespace Tests\Feature;

use App\Enums\LocationStatus;

test('LocationStatus returns the expected values', function () {
    $this->assertEquals('Open', LocationStatus::OPEN->value);
    $this->assertEquals('Closed', LocationStatus::CLOSED->value);
});

test('LocationStatus array returns the expected values', function () {
    $values = LocationStatus::values();

    $this->assertEquals('Open', $values[0]);
    $this->assertEquals('Closed', $values[1]);
});
