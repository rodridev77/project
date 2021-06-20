<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */

    public function index()
    {
        //echo $_COOKIE['cart'];  
        //var_dump(isset($_COOKIE['cart']) && !empty($_COOKIE['cart']) || isset($_COOKIE['cart']) && json_decode($_COOKIE['cart']) !== null);
        //dd(json_decode($_COOKIE['cart'], true));
        //setcookie('cart', null,-1, '/');
        
        setcookie("cart", "", time()-3600);
        unset($_COOKIE['cart']);
        $cart = $_COOKIE['cart'] ?? [];
        return view('index', ['cart' => $cart]);
        //return view('home');
    }
}
