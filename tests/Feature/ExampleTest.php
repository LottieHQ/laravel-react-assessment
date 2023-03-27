<?php

namespace Tests\Feature;

test('Root URL returns a 200', function () {
    $this->get('/')->assertRedirectToRoute('api.locations.index');
});
