new Vue({
    el: '#app',
    mounted() {
        this.initMap();
    },
    methods: {
        initMap() {
            const map = new ol.Map({
                target: 'map',
                layers: [
                    new ol.layer.Tile({
                        source: new ol.source.OSM()
                    })
                ],
                view: new ol.View({
                    center: ol.proj.fromLonLat([2.53333, 48.93333]), // Sevran
                    zoom: 15
                })
            });
        }
    }
});