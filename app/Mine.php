<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mine extends Model
{
    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    protected $casts = [
        'phones' => 'json'
    ];
//    protected $appends = [
//        'distance'
//    ];
//
//    public function getDistanceAttribute()
//    {
//        return '448 км.';
//    }

    public function getLatitudeAttribute( $value )
    {
        return (float)$value;
    }

    public function getLongitudeAttribute( $value )
    {
        return (float)$value;
    }

    public function distances()
    {
        return $this->hasMany(MineDistance::class);
    }

    public function region()
    {
        return $this->belongsTo(Region::class);
    }

    public function type()
    {
        return $this->belongsTo(CoilObjectType::class);
    }
}