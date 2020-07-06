<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/login', function () {
    return view('auth');
});
Route::get('/signup', function () {
    return view('auth');
});
Route::get('/resetpassword', function () {
    return view('auth');
});
Route::get('auth/forgotpassword', function () {
    return view('auth');
});
Route::get('/admin', function () {
    return view('ap-client');
});
//student router
Route::group(['prefix' => 'student'], function () {
    Route::get('/', function () {
        return view('student-client');
    });
    Route::get('/danh-sach-cac-nhom-da-chot', function () {
        return view('student-client');
    });
    Route::get('/danh-sach-cac-nhom-da-tao', function () {
        return view('student-client');
    });
    Route::get('/tao-nhom', function () {
        return view('student-client');
    });
    Route::get('/vao-nhom-co-san', function () {
        return view('student-client');
    });
    Route::get('/nhom-cua-sinh-vien', function () {
        return view('student-client');
    });
});

//Phong dao tao
Route::group(['prefix' => 'phong-dao-tao'], function () {
    Route::get('/', function () {
        return view('ap-client');
    });
    Route::get('/danh-sach-sinh-vien-chua-co-nhom', function () {
        return view('ap-client');
    });
    Route::get('/danh-sach-cac-nhom-da-chot', function () {
        return view('ap-client');
    });
    Route::get('/hien-thi-chia-nhom-va-hoan-thien', function () {
        return view('ap-client');
    });
    Route::get('/chia-nhom-va-hoan-thien', function () {
        return view('ap-client');
    });
    Route::get('/mo-danh-sach-dang-ky', function () {
        return view('ap-client');
    });
});



