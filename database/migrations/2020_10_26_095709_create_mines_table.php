<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMinesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mines', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->boolean('status')->default(0);
            $table->boolean('is_verified')->default(0);
            $table->string('owner')->nullable();
            $table->string('person')->nullable();
            $table->string('person_subtitle')->nullable();
            $table->string('address')->nullable();
            $table->string('latitude');
            $table->string('longitude');
            $table->string('coal_type')->nullable();
            $table->string('phones')->nullable();
            $table->boolean('railways')->default(false);
            $table->string('region_id');
            $table->string('rate')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mines');
    }
}
