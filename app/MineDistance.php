<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MineDistance extends Model
{
    public $table = 'mine_distances';
    public $timestamps = false;
    protected $fillable = [
        'name',
        'mine_id',
        'distance'
    ];
    
}
