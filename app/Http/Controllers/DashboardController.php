<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

use function PHPSTORM_META\map;

class DashboardController extends Controller
{
    public function __construct()
    {
    }

    public function index()
    {
        return view('admin.index');
    }
}