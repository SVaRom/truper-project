<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Empleados extends Model
{
    use HasFactory;
    protected $fillable=[
        'name',
        'lastname',
        'address',
        'email',
        'sucursales_id'
    ];
    public function sucursales(){
        return $this->belongsTo(Sucursales::class);
    }
}
