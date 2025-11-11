<?php

declare(strict_types=1);

require_once 'flight/Flight.php';
// require 'flight/autoload.php';

Flight::route('/', function() {
    Flight::render('menu');
});


Flight::route('/carte', function() {
    Flight::render('carte');
});

Flight::start();