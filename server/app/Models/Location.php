<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
  use HasFactory;

  protected $casts = [
    'created_at' => 'datetime:Y-m-d H:i:s',
    'updated_at' => 'datetime:Y-m-d H:i:s',
    'date_start' => 'date:Y-m-d',
    'date_end' => 'date:Y-m-d',
  ];

  const OPEN = 'open';
  const CLOSED = 'closed';

  const STATUSES = [
    self::OPEN,
    self::CLOSED,
  ];

}
