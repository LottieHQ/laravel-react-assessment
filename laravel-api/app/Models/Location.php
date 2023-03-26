<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    use HasFactory;

    protected $fillable = ['date_start', 'date_end', 'location_name', 'location_description', 'status'];

    public function scopeFilter($query, $filters)
    {
        return $filters->apply($query);
    }
}