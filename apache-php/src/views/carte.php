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
        <div id="map" class="map"></div>
        <div id = "inventaire">
            <p>inventaire</p>
            <div v-for = "photo in photos_inventaire"><img :src="photo"></div>
        </div>
    </div>
    <script src="\assets\JS\carte.js"></script>

        
</body>
</html>