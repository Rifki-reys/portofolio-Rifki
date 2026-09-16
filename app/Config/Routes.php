<?php

use CodeIgniter\Router\RouteCollection;

/** @var RouteCollection $routes */
$routes->get('/', 'Home::index');

$routes->get('/admin', 'Admin::login');

$routes->post('/admin/auth', 'Admin::auth');

$routes->get('/admin/dashboard', 'Admin::dashboard');

$routes->get('/admin/logout', 'Admin::logout');

$routes->get('admin/about', 'Admin::about');
$routes->post('admin/about/update', 'Admin::updateAbout');


$routes->get('/admin/skills','Admin::skills');
$routes->post('/admin/skills/add','Admin::addSkill');
$routes->post('/admin/skills/edit/(:num)','Admin::editSkill/$1');
$routes->get('/admin/skills/delete/(:num)','Admin::deleteSkill/$1');
$routes->get('admin/skills', 'Admin::skills');

$routes->get('/admin/dashboard', 'Admin::dashboard');
$routes->get('/admin/projects', 'Admin::projects');
$routes->post('/admin/projects/add', 'Admin::addProject');
$routes->post('/admin/projects/edit/(:num)', 'Admin::editProject/$1');
$routes->get('/admin/projects/delete/(:num)', 'Admin::deleteProject/$1');


$routes->get('/admin/contact', 'Admin::contact');

$routes->post('/admin/projects/add','Admin::addProject');
