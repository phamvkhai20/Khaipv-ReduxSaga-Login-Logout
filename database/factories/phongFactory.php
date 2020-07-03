<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Phong;
use Faker\Generator as Faker;

$factory->define(Phong::class, function (Faker $faker) {
    return [
        'ten_phong' => $faker->name,
        'ma_code_phong' => $faker->unique(true)->numberBetween(100,900),
        'chuyen_nganh_id' => $faker->unique(true)->numberBetween(1, 5),
        'giao_vien_id' => $faker->unique(true)->numberBetween(1,9),
        'hoc_ki_id'  => $faker->unique(true)->numberBetween(6,7),
    ];
});
