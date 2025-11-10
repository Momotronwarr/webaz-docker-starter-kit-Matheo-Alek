<?php

declare(strict_types=1);

require_once 'flight/Flight.php';
// require 'flight/autoload.php';

Flight::route('/', function() {
    Flight::render('menu');
});

Flight::route('/prez_musical', function() {
    Flight::render('prez_musical');
});

Flight::route('/prez_map', function() {
    Flight::render('prez_map');
});

Flight::route('/prez_personnalite', function() {
    $triche = false;
    Flight::render('prez_personnalite', ['triche' => $triche]);
});

Flight::start();

