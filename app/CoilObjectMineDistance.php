<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CoilObjectMineDistance extends Model
{
    public $timestamps = false;
    protected $fillable = [
        'coil_object_id',
        'mine_id',
        'distance'
    ];

    public function mine()
    {
        return $this->belongsTo(Mine::class);
    }
}
