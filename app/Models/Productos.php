<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Productos extends Model
{
    use HasFactory;
    protected $fillable=[
        'name',
        'category',
        'price',
        'amount',
    ];
    public function compraUser(){
        return $this->hasMany(CompraUser::class);
    }
    public function tieneSucursal(){
        return $this->hasMany(TieneSucursal::class);
    }
}
