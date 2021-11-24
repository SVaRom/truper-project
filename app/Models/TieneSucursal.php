<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TieneSucursal extends Model
{
    protected $table = 'tiene-surcursal';
    use HasFactory;
    protected $fillable=[
        'sucursal_id',
        'products_id',
        'amount'
    ];
    public function sucursal(){
        return $this->belongsTo(Sucursales::class);
    }
    public function product(){
        return $this->belongsTo(Productos::class);
    }
}
