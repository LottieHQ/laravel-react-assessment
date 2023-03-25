<?php

namespace App\Http\Resources\API;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EventResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "date_start" => $this->date_start,
            "date_end" => $this->date_end,
            "status" => $this->status,
            "location_name" => $this->location_name,
            "location_description" => $this->location_description,
        ];
    }
}