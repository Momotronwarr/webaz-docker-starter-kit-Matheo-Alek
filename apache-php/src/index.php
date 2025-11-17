<?php

declare(strict_types=1);

require_once 'flight/Flight.php';

// $link = mysqli_connect('localhost/5432', 'postgres', 'postgres', 'mydb');

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

Flight::route('/test-db', function () {
    $host = 'db';
    $port = 5432;
    $dbname = 'mydb';
    $user = 'postgres';
    $pass = 'postgres';

    // Connexion BDD
    $link = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$pass");

    $sql = "SELECT * FROM points";
    $query = pg_query($link, $sql);
    $results = pg_fetch_all($query);
    Flight::json($results);
});

Flight::route('/carte', function() {
    Flight::render('carte');
});


Flight::start();

?>