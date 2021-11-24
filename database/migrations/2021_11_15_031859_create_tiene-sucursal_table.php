<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTieneSucursalTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tiene-surcursal', function (Blueprint $table) {
            $table->foreignId('sucursal_id')->references('id')->on('sucursales')->onDelete('cascade');
            $table->foreignId('products_id')->references('id')->on('productos')->onDelete('cascade');
            $table->string('amount');
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
        Schema::dropIfExists('compra-user');
    }
}
