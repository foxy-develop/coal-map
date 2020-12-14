<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCoilObjectMineDistancesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('coil_object_mine_distances', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('coil_object_id')->index();
            $table->bigInteger('mine_id')->index();
            $table->string('distance');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('coil_object_mine_distances');
    }
}
