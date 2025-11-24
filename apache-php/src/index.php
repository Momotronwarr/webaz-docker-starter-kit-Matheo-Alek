<?php

declare(strict_types=1);

require_once 'flight/Flight.php';

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

$link = pg_connect("host='db' port=5432 dbname='mydb' user='postgres' password='postgres'");
Flight::set('bd', $link);

Flight::route('/', function() {
    Flight::render('menu');
});

Flight::post('/', function() {
    $pseudo = trim($_POST['pseudo'] ?? $_POST['pseudo'] ?? '');
    if ($pseudo !== '') {
        $_SESSION['pseudo'] = $pseudo;
        $_SESSION['score'] = 10000;
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


Flight::route('/api/assets', function() {
    $bd = Flight::get('bd');

    $sql = 'SELECT nom, description, image_url, geom FROM assets_jeu ORDER BY id';
    $res = @pg_query($bd, $sql);
    $rows = $res ? pg_fetch_all($res) : [];

    if (!$res) {
        Flight::json(['error' => pg_last_error($bd)], 500);
        return;
    }

    Flight::json($rows ?: []);
});


Flight::post('/c_score', function() {
    if (session_status() === PHP_SESSION_NONE) session_start();
    if (!isset($_SESSION['score'])) {
        $_SESSION['score'] = 0;
    }
    $_SESSION['score'] = max(0, ((int)$_SESSION['score']) - 100);

    Flight::json(['score' => $_SESSION['score']]);
});

Flight::route('/carte', function() {
    Flight::render('carte');
});

Flight::route('/fin_du_jeu', function() {
    Flight::render('fin_du_jeu');
});

Flight::post('/fin_du_jeu', function() {
    $bd = Flight::get('bd');

    $pseudo = $_SESSION['pseudo'] ?? null;
    $score = $_SESSION['score'] ?? null;

    if (!$pseudo) {
        Flight::json(['status' => 'error', 'message' => 'Aucun pseudo en session'], 400);
        return;
    }

    if (!$bd) {
        Flight::json(['status' => 'error', 'message' => 'Pas de connexion à la base de données'], 500);
        return;
    }

    $sql = "INSERT INTO tableau_des_scores (pseudo, score) VALUES ('".$pseudo."', ".$score.")";
    $res = @pg_query($bd, $sql);

    if ($res) {
        unset($_SESSION['pseudo']);
        Flight::json(['status' => 'ok']);
    } else {
        Flight::json(['status' => 'error', 'message' => 'Insertion dans la base de donnée échouée: ' . (pg_last_error($bd) ?: 'unknown')], 500);
    }
});



Flight::start();

?>