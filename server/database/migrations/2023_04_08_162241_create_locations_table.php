<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   */
  public function up(): void
  {
   
    Schema::create('locations', function (Blueprint $table) {
      $table->id();
      $table->string('name');  // EXTRA::Maybe we should limit length of name/description
      $table->string('description');
      $table->string('status'); // EXTRA::This could be an enum
      $table->datetime('date_start');
      $table->datetime('date_end');

      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('locations');
  }
};
