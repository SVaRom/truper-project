<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompraUser extends Model
{
    protected $table = 'compra-user';
    use HasFactory;
    protected $fillable=[
        'user_id',
        'products_id',
        'amount'
    ];
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function product(){
        return $this->belongsTo(Productos::class);
    }
}
