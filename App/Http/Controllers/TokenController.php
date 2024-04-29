<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Http\Requests\StoreTokenRequest;
use App\Http\Requests\UpdateTokenRequest;
use App\Models\Token;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class TokenController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tokens = Token::all();
         //return response()->json($tokens);
        // return response()->json(['message' => 'Data not found'], 404);
    }






    public function getindex()
    {
        //$store_id = $this->getStoreId();
        // return $store_id;
        // return (Auth::user());
        $tokenslista = DB::table('tokens')->get();
        return $tokenslista;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Dashboard', []);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTokenRequest $request)
    {
        $document1 = $request->file('document')->store('public');
        $signature1 = $request->file('signature')->store('public');

        $document = basename($document1);
        $signature = basename($signature1);
        // dd($request->all(), $document, $signature);
        $token = Str::random(50, '0123456789abcdefghijklmnopqrstuvwxyz');

        //$document = $request->file('document')->store('documentos', 'public');
        //$signature = $request->file('signature')->store('documentos', 'public');



        $t = Token::create($request->except('document','signature') + [
            "document" =>  $document,
            "signature" =>  $signature,
            "token" => $token
        ]);

        // return[$request->all() + ["token" => $token]];
        /**$t = Token::create($request->except(
            [
                'document',
                'signature'
            ])
            +
            [
                "document" => $document,
                "signature" => $signature,
                "token" => $token,
            ]);*/
        //return $t;
        return Inertia::render('Token');
    }


    /**
     * Display the specified resource.
     */
    public function show(Token $token)
    {

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Token $token)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTokenRequest $request, Token $token)
    {
        //  dd($request->all());
        // return $request->id;
        $t = Token::find($request->id);
        $old = Token::find($request->id);

        if (!$t)
        {
            return response()->json(['message' => 'Data not found'], 404);
        }
        $document = $old->document;
        $signature = $old->signature;
        if ($request->hasFile('document'))

        {
             $document = $request->file('document')->store('public');
        }
        if ($request->hasFile('signature'))
        {
             $signature = $request->file('signature')->store('public');
        }

        $t->update($request->except(
            [
                'document',
                'signature'
            ]
            )
            +
            [
                'document' => $document,
                'signature' => $signature,
            ]
        );
        // return $request->all();
        $t = Token::find($request->id);
        return response()->json([
            "old" => $old,
            "new" =>$t
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Token $token)
    {
        //
    }


     public function publicShow(Token $token, $verify)
    {
        $data = DB::table('tokens')->where('token', "$verify")->get();
        if (count($data)==false)
        {
            return response()->json(['errors' => ['message' => 'Data not found']], 404);

        }

        /**return response()->json([
            'data' => [
                "id" => $data[0]->id,
                "token" => $data[0]->token,
            ]], 200);**/
            return Inertia::render('ValidatePage')->with('dataResponse', ['token' => $verify]);;




    }


    public function publicValidate(Token $token, $verify, Request $request)
    {

        $code = $request->code;
        $crc = $request->crc;
        $data = DB::table('tokens')
        ->where('token', "$verify")
        ->where('crc', $crc)
        ->where('code', $code)
        ->get();
        if (count($data)==false)
        {

            //return response()->json(['message' => 'Data not found'], 404);

            //return Inertia::render('ValidatePage');
            //return response()->json(['message' => 'Data not found'], 404);
            return Inertia::render('ValidatePage')->with('errors', ['field_name' => 'Dados inválidos. Tente novamente.'], 'dataResponse', ['token' => $verify],404);
        }
        /*return response()->json([
            'data' => $data
            ], 200);*/

        return Inertia::render('ConfirmationPage', ['data' => $data]);
    }

    public function downloadFile($fileName)
    {
    $filePath = Storage::path($fileName);
    return response()->download($filePath);
    }


}
