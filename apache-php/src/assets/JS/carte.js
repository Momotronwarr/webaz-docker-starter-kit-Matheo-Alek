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
                    center: ol.proj.fromLonLat([2.3522, 48.8566]), // Paris
                    zoom: 10
                })
            });
        }
    }
});