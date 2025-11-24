<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>carte</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
    <link rel="stylesheet" href="assets/CSS/carte.css">
    <link rel="stylesheet" href="https://unpkg.com/ol/ol.css">
    <script src="https://unpkg.com/ol/dist/ol.js"></script>
</head>
<body>
    <?php $score = $_SESSION['score'] ?? null; ?>
    <div id="app">
        <div id="chrono" aria-live="polite">00:00</div>
        <div id="score" aria-live="polite">score : <?php echo htmlspecialchars($score) ?></div>
        <div id="map" class="map"></div>
        <div id="inventaire">
            <label>
                <input id="triche" v-model="triche" type="checkbox" @change="Active_Triche">
                Triche
            </label>
            <div v-for="(photo, index) in photos_inventaire" :key="index">
                <img :src="photo" @click="afficher_description(photo)">
            </div>
        </div>
    </div>
    <script src="assets/JS/carte.js"></script>
</body>
</html>