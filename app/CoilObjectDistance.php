<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CoilObjectDistance extends Model
{
    public $timestamps = false;
    protected $fillable = [
        'destination_id',
        'distance'
    ];

    public function destination()
    {
        return $this->belongsTo(Destination::class);
    }
}
