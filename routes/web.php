<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\userController;
use App\Http\Controllers\ProfileController;

Route::get('/', [userController::class, 'getProfile']);
Route::get('/profile', [ProfileController::class, 'show'])
->name('profile.show');