<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

class PassportAuthController extends Controller
{
    public function register(Request $request){

        $this->validate($request,[
            'name'=>'required|min:4',
            'lastname'=>'required|min:4',
            'email'=>'required|email',
            'address'=>'required|min:10',
            'password'=>'required|min:8',
        ]);

        $user=User::create([
            'name'=>$request->name,
            'lastname'=>$request->lastname,
            'email'=>$request->email,
            'address'=>$request->address,
            'password'=>bcrypt($request->password)
        ]);
          
        $token=$user->createToken('LaravelAuthApp')->accessToken;
    
        return response()->json(['token'=>$token],200);
    }

    public function login(Request $request){

        $data=[
            'email'=>$request->email,
            'password'=>$request->password,
        ];

        if(auth()->attempt($data)){
            $token = auth()->user()->createToken('LaravelAuthApp')->accessToken;
            return response()->json(['token'=>$token],200);
        }else{
            return response()->json(['error'=>'Unauthorised'],401);
        }
    }
    public function destroy(Request $request)
    {
        $user = User::where('email', $request->email)->delete();
    }
    public function update(Request $request)
    {
        User::where('email', $request->email)
            ->update(['password' => bcrypt($request->newPassword)]);
    }
    
}
