<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CompraUser;
use App\Models\Productos;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;


class CompraUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        $compraUser = DB::table('productos')->leftJoin('compra-user', 'productos.id', '=', 'compra-user.products_id')
        ->where('compra-user.user_id', '=', $user->id)
        ->get();
        return $compraUser;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $user=User::where('email', $request->email)->first();
        $producto=Productos::where('name',$request->name)->first();
        $validator = Validator::make($request->all(), [
            'email' => 'required|exists:users,email',
            'name' => 'required|exists:productos,name',
            'amount' => 'required|max:5'
        ]);

        if ($validator->fails()) {
            return $validator->errors();
        }

        $compraUser = CompraUser::create([
            'user_id' => $user->id,
            'products_id' => $producto->id,
            'amount' => $request->amount
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
        $compraUser = CompraUser::where('user_id', $request->user_id)->delete();
    }
    public function showToken()
    {
        echo csrf_token();
    }
}
