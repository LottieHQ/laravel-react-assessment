<?php

namespace App\Models;

use App\Enums\LocationStatus;
use Database\Factories\LocationFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:i:s',
        'updated_at' => 'datetime:Y-m-d H:i:s',
        'date_start' => 'date:Y-m-d',
        'date_end' => 'date:Y-m-d',
        'status' => LocationStatus::class,
    ];

    protected static function newFactory(): LocationFactory
    {
        return LocationFactory::new();
    }
}
