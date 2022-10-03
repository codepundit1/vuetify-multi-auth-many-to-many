<?php

use App\Http\Controllers as Controllers;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome');

require __DIR__ . '/auth.php';

Route::get('/dashboard', [Controllers\HomeController::class, 'dashboard'])->middleware('auth')->name('dashboard');

Route::group(['middleware' => ['auth', 'permit:admin,super-admin']], function () {
    Route::resource('/users', Controllers\UserController::class);
    Route::post('/users/{user}/restore', [Controllers\UserController::class, 'restore'])->name('users.restore');
    Route::delete('/users/{user}/delete', [Controllers\UserController::class, 'forceDelete'])->name('users.force.delete')->can('force-delete');
    Route::get('/users/{user}/assign-roles', [Controllers\UserController::class, 'assignRolesForm'])->name('users.assign.roles.form');
    Route::post('/users/{user}/assign-roles', [Controllers\UserController::class, 'assignRoles'])->name('users.assign.roles');

    Route::resource('/roles', Controllers\RoleController::class)->except('show');
    Route::post('/role/{role}/restore', [Controllers\RoleController::class, 'restore'])->name('roles.restore');
    Route::delete('/role/{role}/delete', [Controllers\RoleController::class, 'forceDelete'])->name('roles.force.delete')->can('force-delete');
    Route::get('/roles/{role}/assign-permissions', [Controllers\RoleController::class, 'assignPermissionsForm'])->name('roles.assign.permissions.form');
    Route::post('/roles/{role}/assign-permissions', [Controllers\RoleController::class, 'assignPermissions'])->name('roles.assign.permissions');

    Route::resource('/permissions', Controllers\PermissionController::class)->except('show');
    Route::post('/permissions/{permission}/restore', [Controllers\PermissionController::class, 'restore'])->name('permissions.restore');
    Route::delete('/permissions/{permission}/delete', [Controllers\PermissionController::class, 'forceDelete'])->name('permissions.force.delete')->can('force-delete');


    Route::resource('/projects', Controllers\ProjectController::class);
    Route::post('/projects/{project}/restore', [Controllers\ProjectController::class, 'restore'])->name('projects.restore');
    Route::delete('/projects/{project}/delete', [Controllers\ProjectController::class, 'forceDelete'])->name('projects.force.delete')->can('force-delete');
    Route::get('/projects/{project}/assign-clients', [Controllers\ProjectController::class, 'assignClientsForm'])->name('projects.assign.clients.form');
    Route::post('/projects/{project}/assign-clients', [Controllers\ProjectController::class, 'assignClients'])->name('projects.assign.clients');

    Route::resource('/clients', Controllers\ClientController::class);
    Route::post('/client/{client}/restore', [Controllers\ClientController::class, 'restore'])->name('clients.restore');
    Route::delete('/client/{client}/delete', [Controllers\ClientController::class, 'forceDelete'])->name('clients.force.delete')->can('force-delete');
    Route::get('/clients/{client}/assign-projects', [Controllers\ClientController::class, 'assignProjectsForm'])->name('clients.assign.projects.form');
    Route::post('/clients/{client}/assign-projects', [Controllers\ClientController::class, 'assignProjects'])->name('clients.assign.projects');
});
