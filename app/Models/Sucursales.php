<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sucursales extends Model
{
    use HasFactory;
    protected $fillable=[
        'name',
        'address',
    ];
    public function empleados(){
        return $this->hasMany(Empleados::class);
    }
    public function tieneSucursal(){
        return $this->hasMany(TieneSucursal::class);
    }
}
