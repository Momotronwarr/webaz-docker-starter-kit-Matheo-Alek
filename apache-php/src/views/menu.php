<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projet Sevran</title>
    <link rel="stylesheet" href="assets\CSS\Menu.css">    
</head>
<body>
    <div id="titre">
        <p>Sevran 2</p>
    </div>

    <div id="intro"> 
        <p>Bienvenue sur le jeu de Sevran !</p>
    </div>
    <div id="texte">
        <p>(on modifiera apres on mettera un vrai texte)</p>
    </div>

    <div id ="Pseudo">
        <form action="/" method="POST">
            <label>Entrez votre pseudo :</label>
            <input type="text" name="pseudo" required value="<?php echo htmlspecialchars($_SESSION['pseudo'] ?? ''); ?>">
            <button type="submit">ok</button>
        </form>
    </div>

    <div id = "questions"> 
        <p>Etes-vous prêt(e) à affronter les mecs de Sevran ?</p>
        <p>Etes-vous prêt(e) à vous prendre des "Ça vient d'où chef ?</p>
    </div>
    
    <form action="/prez_musical" method="POST">
        <button type="submit" title="Présentation musical">▶️ Présentation de Sevran​</button>
    </form>
    
</body>
</html>

