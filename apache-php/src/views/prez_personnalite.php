<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Présentation Sevran</title>
    <link rel="stylesheet" href="assets\CSS\introduction.css">
</head>
<body>
    <div id ="titre">
        <p><strong>Iconne de Sevran</strong></p>
    </div>

    

    <div id = "images2">
        
        <p><Img src=assets/images/Pascal_Sevran.webp alt = "Pascal Sevran" width="500" heigth="250"></p>
        
        <p><Img src=assets/images/kaaris.webp alt = "Pascal Sevran" width="500" heigth="250"></p>
    </div>
    
    <div id = "texte3">
        <p><strong>Pascal Sevran</strong></p>
        <p><strong>Kaaris</strong></p>
        <p>Jean-Claude Jouhaud, dit Pascal Sevran, est un animateur, producteur de télévision, parolier, chanteur et écrivain français, né le 16 octobre 1945 à Paris 12e et mort le 9 mai 2008 à l'hôpital du Cluzeau à Limoges.</p>
        <p>Kaaris, de son vrai nom Armand Gnakouri Okou, est un rappeur, parolier, producteur et acteur français, né le 30 janvier 1980 à Abidjan en Côte d’Ivoire. En 2013, il publie Or noir produit par Therapy Music. L'album connaît un tel succès que l'artiste le réédite, et est aujourd'hui considéré comme un classique du rap français. Il est considéré comme le rappeur ayant popularisé la trap en France.</p>
    </div>
    
    <div id="app">
        <div id = "boutons">
         
            <form action="/prez_map" method="POST">
                <button type="submit" title="Présentation de la ville">​Précédent</button>
            </form>

            <form action="/carte" method="get">
                <button type="submit" title="Map">Doro Party ?! (Traduction : Prêt à découvrir Sevran ?!)</button>
                <input id="triche" v-model="triche" type="checkbox"> 
                <label for="triche">Mode des tricheurs (Pour les Looser 👎​) </label>
                <label for="triche">{{message_triche}}</label>
                 
                
            </form>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <script src= "../assets/JS/introduction.js"></script> 
</body>
</html>