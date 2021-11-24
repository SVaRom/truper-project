<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Empleados;
use App\Models\Sucursales;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;


class EmpleadosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Empleados::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $sucursal=Sucursales::where('name',$request->name_sucursal)->first();
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'lastname' => 'required|max:255',
            'address' => 'required|min:6',
            'email' => 'required|unique:empleados|max:255',
            'name_sucursal' => 'required|exists:sucursales,name'
        ]);

        if ($validator->fails()) {
            return $validator->errors();
        }

        $productos = Empleados::create([
            'name' => $request->name,
            'lastname' => $request->lastname,
            'address' => $request->address,
            'email' => $request->email,
            'sucursales_id' => $sucursal->id
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
        $empleados = Empleados::where('email',$request->email)->get();
        return $empleados;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $empleados = Empleados::where('email', $request->email)->delete();
    }
    public function showToken()
    {
        echo csrf_token();
    }
}
