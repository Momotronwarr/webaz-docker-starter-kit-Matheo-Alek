<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>carte</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
    <link rel="stylesheet" href="\assets\CSS\carte.css">
    <link rel="stylesheet" href="https://unpkg.com/ol/ol.css">
    <script src="https://unpkg.com/ol/dist/ol.js"></script>
</head>
<body>
    <div id="app">
        <div id="chrono" aria-live="polite">00:00</div>
        <div id="map" class="map"></div>
        <div id = "inventaire">
            <div v-for="(photo, index) in photos_inventaire" :id="'image' + (index + 1)">
                <img :src="photo" @click="afficher_description(photo)" >
            </div>
        </div>
    </div>
    <script src="\assets\JS\carte.js"></script>
</body>
</html>