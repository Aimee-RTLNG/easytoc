<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('types', function (Blueprint $table) {
            $table->bigIncrements('id')->unsigned();
            $table->string('name_fr', 100);
            $table->string('name_en', 100);
        });

        // Insert some stuff
        DB::table('types')->insert(
            array(
                'id' => '1',
                'name_fr' => 'formulaire',
                'name_en' => 'form',
            ), 
            array(
                'id' => '2',
                'name_fr' => 'tableau',
                'name_en' => 'table',
            ), 
            array(
                'id' => '3',
                'name_fr' => 'menu',
                'name_en' => 'menu',
            )
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('types');
    }
}
