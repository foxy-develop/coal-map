<?php

use Illuminate\Routing\Router;

Admin::routes();

Route::group([
    'prefix'        => config('admin.route.prefix'),
    'namespace'     => config('admin.route.namespace'),
    'middleware'    => config('admin.route.middleware'),
    'as'            => config('admin.route.prefix') . '.',
], function (Router $router) {

    $router->get('/', 'HomeController@index')->name('home');
    $router->resource('coil-objects', CoilObjectController::class);
    $router->resource('mines', MineController::class);
    $router->resource('destinations', DestinationController::class);
    $router->resource('coil-object-types', CoilObjectTypeController::class);
});
