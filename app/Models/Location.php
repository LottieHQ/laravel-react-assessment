<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    use HasFactory;

    protected $fillable = [
        'date_start',
        'date_end',
        'status',
        'location_name',
        'location_description'
    ];

    protected $casts = [
        'date_start' => 'date:Y-m-d',
        'date_end' => 'date:Y-m-d',
    ];

    const STATUSES = [
        'open' => 'Open',
        'closed' => 'Closed'
    ];
}
