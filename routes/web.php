<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'images' => asset('storage/7481714.jpg'),
        'bg' => asset('storage/Pixel Art background Violet theme nature.jpg')
    ]);
})->name('home');

Route::get('/gallery', function () {
    return Inertia::render('Gallery');
})->name('gallery');


Route::get('/creators', function () {
    return Inertia::render('Creators');
})->name('creators');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/fonts', function () {
    return Inertia::render('Fonts');
})->name('fonts');

Route::get('/ai', function () {
    return Inertia::render('AI');
})->name('ai');

Route::get('/works', function () {
    return Inertia::render('CreatorsWorks');
})->name('works');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
