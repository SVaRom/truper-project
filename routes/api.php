<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PassportAuthController;
use App\Http\Controllers\SucursalesController;
use App\Http\Controllers\EmpleadosController;
use App\Http\Controllers\ProductosController;
use App\Http\Controllers\CompraUserController;
use App\Http\Controllers\TieneSucursalController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register', [PassportAuthController::class, 'register']);
Route::post('login', [PassportAuthController::class, 'login']);
Route::post('changePassword', [PassportAuthController::class, 'update']);
Route::post('deleteUser', [PassportAuthController::class, 'destroy']);
Route::post('searchSuc', [SucursalesController::class, 'index']);
Route::post('addSuc', [SucursalesController::class, 'create']);
Route::post('showEmp', [SucursalesController::class, 'show']);
Route::post('changeSuc', [SucursalesController::class, 'update']);
Route::post('deleteSuc', [SucursalesController::class, 'destroy']);
Route::post('showProd', [ProductosController::class, 'index']);
Route::post('addProd', [ProductosController::class, 'create']);
Route::post('changeProd', [ProductosController::class, 'update']);
Route::post('deleteProd', [ProductosController::class, 'destroy']);
Route::post('showEmps', [EmpleadosController::class, 'index']);
Route::post('addEmp', [EmpleadosController::class, 'create']);
Route::post('loginEmp', [EmpleadosController::class, 'store']);
Route::post('deleteEmp', [EmpleadosController::class, 'destroy']);
Route::post('searchProd', [TieneSucursalController::class, 'index']);
Route::post('addTieneSuc', [TieneSucursalController::class, 'create']);
Route::post('deleteTieneSuc', [TieneSucursalController::class, 'destroy']);
Route::post('showCompra', [CompraUserController::class, 'index']);
Route::post('addCompra', [CompraUserController::class, 'create']);
Route::post('deleteCompra', [CompraUserController::class, 'destroy']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
