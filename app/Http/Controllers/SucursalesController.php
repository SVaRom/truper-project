<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sucursales;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;


class SucursalesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return Sucursales::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'address' => 'required|max:255'
        ]);

        if ($validator->fails()) {
            return $validator->errors();
        }

        $sucursal = Sucursales::create([
            'name' => $request->name,
            'address' => $request->address
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $sucursal = DB::table('empleados')->leftJoin('sucursales', 'sucursales_id', '=', 'sucursales.id')
        ->where('sucursales.name', '=', $request->name)
        ->get();
        return $sucursal;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        Sucursales::where('name', $request->name)
            ->update(['address' => $request->address]);
    }
    public function showToken()
    {
        echo csrf_token();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $sucursal = Sucursales::where('name', $request->name)->delete();
    }
}
