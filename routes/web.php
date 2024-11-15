<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// * ROUTES EXAMPLES
// ? simple page route
// Route::inertia('/', 'Home');
// ? calling a page with GET
// Route::get('/', function () {
//     return Inertia::render('Home');
// });
// ? sending props[] to the page
Route::get('/', function () {
    return Inertia::render('Home', ['title' => 'Homepage', 'desc' => 'This is the homepage']);
});

Route::get('/about', function () {
    return Inertia::render('About', ['title' => 'About', 'desc' => 'This is the about page']);
});