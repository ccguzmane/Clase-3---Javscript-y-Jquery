<?php


Route::get('/', function()
{
	return View::make('hello');
});

Route::get('/prueba', function()
{
	return View::make('prueba');
});

Route::controller('personal','PersonalController');

Route::get('/test', function()
{
	return View::make('ejemplo');
});