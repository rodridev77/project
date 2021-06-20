<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class AreaController extends Controller
{
    //
    public function query(Request $request){
        Cache::put('ListAreas', \App\Models\Area::all(), 1440);
        $cache = array_map(function($item){
             if($item['name'] == "Maou"){
                return $item;
            }
        },Cache::get('ListAreas')->toArray());
        $cache = array_values(Cache::get('ListAreas')->filter(function($item) use($request){
            if(isset($request->q)){
                if(preg_match("/".strtolower($request->q)."/",strtolower($item->name)))
                    return $item;
            }else{
                return $item;
            }
        })->toArray());
        return response()->json($cache);
    }
}
