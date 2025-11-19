<?php

declare(strict_types=1);

require_once 'flight/Flight.php';

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

$link = pg_connect("host='db' port=5432 dbname='mydb' user='postgres' password='postgres'");

Flight::route('/', function() {
    Flight::render('menu');
});

Flight::post('/', function() {
    $pseudo = trim($_POST['pseudo'] ?? $_POST['pseudo'] ?? '');
    if ($pseudo !== '') {
        $_SESSION['pseudo'] = $pseudo;
        Flight::redirect('/prez_musical');
    } else {
        Flight::redirect('/');
    }
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

// API pour récupérer les objets du jeu depuis la table objets_jeu
Flight::route('/api/objets', function() {
    global $link;

    $sql = 'SELECT id, nom, type_objet, description, image_url, coordonnees_lat, coordonnees_lon, zoom_minimal, est_ramassable FROM objets_jeu ORDER BY id';
    $res = @pg_query($link, $sql);
    $rows = $res ? pg_fetch_all($res) : [];
    Flight::json($rows ?: []);
});

Flight::route('/carte', function() {
    Flight::render('carte');
});

Flight::post('/fin_du_jeu', function() {
    $pseudo = $_SESSION['pseudo'] ?? null;
    $score = isset($_POST['score']) && is_numeric($_POST['score']) ? (int)$_POST['score'] : null;

    if ($pseudo) {
        pg_query($link, 'INSERT INTO tableau_des_scores (pseudo, score) VALUES ($1, $2)', array($pseudo, $score));
        unset($_SESSION['pseudo']);

        Flight::json(['status' => 'ok']);
    } else {
        Flight::json(['status' => 'error', 'message' => 'Aucun pseudo en session'], 400);
    }
});

Flight::start();

?>