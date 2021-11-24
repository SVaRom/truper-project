<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SucursalesController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::view('/LoginForm','welcome');
Route::view('/Register','welcome');
Route::view('/changePass','welcome');
Route::view('/DeleteUser','welcome');
Route::get('/tokem', [SucursalesController::class, 'showToken']);


