<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NguoiDung extends Model
{
    protected $table = "nguoi_dung";
    protected $fillable = [
        'ten_nguoi_dung'
    ];
}
