<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Fin du jeu</title>
	<link rel="stylesheet" href="assets\CSS\Menu.css">
	<link rel="stylesheet" href="assets\CSS\fin_du_jeu.css">
    <script src="\assets\JS\Fin_du_jeu.js"></script>
</head>
<body>
	<div class="container">
		<h1>Fin du jeu</h1>

		<?php $pseudo = $_SESSION['pseudo'] ?? null; ?>
		<?php $score = $_SESSION['score'] ?? null; ?>

		<?php if (!$pseudo): ?>
			<p>Aucun pseudo. <a href="/">Retour au menu</a></p>
		<?php else: ?>
			<p>Bravo d'avoir quitté Sevran, <strong><?php echo htmlspecialchars($pseudo); ?></strong>.</p>
			<p>Votre score :  <strong><?php echo htmlspecialchars($score); ?></strong>.</p>

			<div><button type="submit"><a href="/">Retour au menu</a></button></div>
		<?php endif; ?>
	</div>
</body>
</html>

