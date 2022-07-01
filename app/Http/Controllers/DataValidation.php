<?php

namespace App\Http\Controllers;
use App\Http\Requests\UserDataStoreRequest;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class DataValidation extends Controller
{

    public function datastore(Request $request){

        $validator = Validator::make($request->all(), [
            'email' => 'required|unique:users|max:255',
            'name' => 'required',
        ]);

        if ($validator->fails()) {
            return redirect('post/create')
                        ->withErrors($validator)
                        ->withInput();
        }
    }

    public function store(UserDataStoreRequest $request)
    {

        $validator = $request->validated();

        if ($validator->fails()) {
            return redirect('validetortest')
                        ->withErrors($validator)
                        ->withInput();
        }
    }
}
