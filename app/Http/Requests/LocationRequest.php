<?php

namespace App\Http\Requests;

use App\Enums\LocationStatus;
use Illuminate\Contracts\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;

class LocationRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:65535',
            'status' => ['required', new Enum(LocationStatus::class)],
            'date_start' => 'required|date_format:Y-m-d',
            'date_end' => 'required|date_format:Y-m-d|after:date_start',
        ];
    }

    /**
     * Request attribute names
     * @return array
     */
    public function attributes(): array
    {
        return [
            'name' => 'Name',
            'description' => 'Description',
            'status' => 'Status',
            'date_start' => 'Start Date',
            'date_end' => 'End Date',
        ];
    }

    /**
     * Validation error messages.
     * @return array
     */
    public function messages(): array
    {
        return [
            'name.required' => 'A name is required',
            'name.max' => 'The name must not be longer than 255 characters',
            'description.required' => 'A description is required',
            'description.max' => 'The description must not be longer than 65,535 characters',
            'status.required' => 'A status is required',
            'status.Illuminate\Validation\Rules\Enum' => 'The status provided is invalid',
            'date_start.required' => 'A start date is required',
            'date_start.date_format' => 'The start date is in the wrong format',
            'date_end.required' => 'An end date is required',
            'date_end.date_format' => 'The end date is in the wrong format',
            'date_end.after' => 'The end date must be after the start date',
        ];
    }
}
