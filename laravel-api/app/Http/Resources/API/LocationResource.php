<?php

namespace App\Http\Resources\API;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class LocationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->location_id,
            "date_start" => $this->date_start,
            "date_end" => $this->date_end,
            "status" => $this->status,
            "location_name" => $this->location_name,
            "location_description" => $this->location_description,
        ];
    }
}