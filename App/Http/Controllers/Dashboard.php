<?php

namespace App\Http\Controllers;

//use Illuminate\Http\Request;
use Inertia\Inertia;
class Dashboard extends Controller
{
    public function showHome(){

        return Inertia::render('Token');
    }
    public function formToken(){

        return Inertia::render('Token');
    }

    public function listToken(){

        return Inertia::render('ListToken');
    }

    public function publicValidate(){

        return Inertia::render('PublicValidate');
    }



    public function users(){

        return Inertia::render('Users');
    }
    public function teste(){

        return Inertia::render('Teste');
    }

    public function getProfile()
    {
        return Inertia::render('Profile');
    }

}
