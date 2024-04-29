<?php

use App\Http\Controllers\Dashboard;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TokenController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

use Inertia\Inertia;

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

Route::get("/t", function(){
    return view('tempform');

});

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/', function(){
    return redirect('login');
});

Route::get('/exemplo', function(){
    return Inertia::render('ValidatePage');
});

Route::get('certificate/{verify}', function(){
    return Inertia::render('ValidatePage');
});

Route::prefix('dashboard')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Token');
    })->name('dashboard');
    Route::get('/formToken', [Dashboard::class, 'formToken'])->name('formToken');
    Route::get('/listToken', [Dashboard::class, 'listToken'])->name('listToken');
    Route::get('/users', 'Dashboard@users')->name('users')->middleware(['verified']);
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::middleware('auth')->group(function ()
{
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Route::resource('tokens', TokenController::class);
// Route::patch('tokens', [TokenController::class, 'update']);
Route::get('certificate/{verify}', [TokenController::class, 'publicShow'])->name('certificate.show');
Route::post('certificate/{verify}', [TokenController::class, 'publicValidate'])->name('certificate.validate');
Route::post('tokens', [TokenController::class, 'store'])->name('tokens');
Route::post('tokens', [TokenController::class, 'index'])->name('index');
Route::get('tokens', [TokenController::class, 'getindex'])->name('render');
Route::patch('tokens', [TokenController::class, 'getindex'])->name('getindex');
Route::post('tokens', [TokenController::class, 'store']) ->name('token');
Route::get('/tokens/{fileName}', [TokenController::class, 'downloadFile']);




require __DIR__.'/auth.php';
