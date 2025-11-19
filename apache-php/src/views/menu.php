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
    
    <?php
    $joueurs = [];
    if (isset($GLOBALS['link'])) {
        $res = @pg_query($GLOBALS['link'], "SELECT pseudo, score FROM tableau_des_scores ORDER BY score DESC LIMIT 5");
        if ($res) {
            $joueurs = pg_fetch_all($res) ?: [];
        }
    }
    ?>

    <?php if (!empty($joueurs)): ?>
        <h2>Tableau des Scores </h2>
        <table style="border-collapse:collapse; width:100%; max-width:800px;">
            <thead>
                <tr>
                    <th style="border:1px solid #ddd;padding:6px;">Pseudo</th>
                    <th style="border:1px solid #ddd;padding:6px;">Score</th>
                </tr>
            </thead>
            <tbody>
                <?php $i = 1; foreach ($joueurs as $row): ?>
                    <tr>
                        <td style="border:1px solid #ddd;padding:6px;"><?php echo htmlspecialchars($row['pseudo'] ?? ''); ?></td>
                        <td style="border:1px solid #ddd;padding:6px;"><?php echo htmlspecialchars($row['score'] ?? ''); ?></td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    <?php else: ?>
        <p>Aucun score à afficher pour le moment.</p>
    <?php endif; ?>

</body>
</html>

