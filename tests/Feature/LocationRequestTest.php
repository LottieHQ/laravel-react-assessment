<?php

namespace Tests\Feature;

use App\Models\Location;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\LocationRequest;

beforeEach(function () {
   $this->data = Location::factory()->create()->toArray();
});

test('A name, description, status, date_start, and date_end are required', function () {
    $request = new LocationRequest();

    $validator = Validator::make([], $request->rules(), $request->messages(), $request->attributes());
    $errors = $validator->errors();

    $this->assertFalse($validator->passes());
    $this->assertEquals('A name is required', $errors->first('name'));
    $this->assertEquals('A description is required', $errors->first('description'));
    $this->assertEquals('A status is required', $errors->first('status'));
    $this->assertEquals('A start date is required', $errors->first('date_start'));
    $this->assertEquals('An end date is required', $errors->first('date_end'));
});

test('The status will not be accepted if not in the LocationStatus enum', function () {
    $this->data['status'] = 'fail';

    $this->post('api/locations', $this->data)->assertSessionHasErrors([
        'status' => 'The status provided is invalid'
    ]);
});
