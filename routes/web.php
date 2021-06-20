<?php

use App\Mail\CnrEmail;
use App\Mail\SubscribeDemandEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;

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
//Auth::routes();

Route::get( '/auth/register', 'API\UsersController@register')->name('register-view');
Route::post('/auth/register', 'API\UsersController@store');

Auth::routes();
Route::get( 'auth/login', 'Auth\LoginController@index');
Route::post( '/login', 'Auth\LoginController@authenticate')->name('login');

Route::get( '/recovery', function(){
    return view( 'password_recovery' );
} );

Route::get( '/mail', function(){
    \Mail::send('mails.template.cnr_mail',[], function ($message){
        $message->from('spam@yamitec.com')
                ->to('mail@gmail.com')
                ->subject('Assunto do e-mail');
    });
} );
Route::post('recovery', "Api\AccountController@checkEmail");

Route::get( '/profile', function(){
    return view( 'admin.profile.index' );
} )->name('profile')->middleware(['auth']);

// DASHBOARD
Route::get('/dashboard', 'DashboardController@index')->name('dashboard')->middleware(['auth']);

Route::get( '/my', function(){
    return view( 'admin.profile.index' );
} )->name('my')->middleware(['auth']);

Route::get('/', 'HomeController@index')->name('home');

Route::get('envio/', function() {
    $provider = new stdClass;

    $provider->firstname = "Markus";
    $provider->email = "markus.rodrigues7@gmail.com";

    //Mail::send(new CnrEmail($provider));
    return new CnrEmail($provider);
});

Route::get('/subscribe-mail', function() {
    $provider = new stdClass;

    $provider->firstname = "Markus";
    $provider->email = "markus.rodrigues7@gmail.com";

    //Mail::send(new CnrEmail($provider));
    return new SubscribeDemandEmail($provider);
});