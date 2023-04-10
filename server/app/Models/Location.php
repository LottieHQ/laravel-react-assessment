<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Factories\Factory;
use Database\Factories\LocationFactory;
use Illuminate\Database\Eloquent\Model;


class Location extends Model
{
  use HasFactory;
  

  const OPEN = 'open';
  const CLOSED = 'closed';

  const STATUSES = [
    self::OPEN,
    self::CLOSED,
  ];

  protected static function newFactory(): Factory
  {
      return LocationFactory::new();
  }


  public function store($name, $description, $status, $date_start, $date_end) {
    $this->name = $name;
    $this->description = $description;
    $this->status = $status;
    $this->date_start = $date_start;
    $this->date_end = $date_end;
    $this->save();

    return $this;
  }

}
