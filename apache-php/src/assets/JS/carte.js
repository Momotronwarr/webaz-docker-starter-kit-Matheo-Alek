new Vue({
    el: '#app',
    mounted() {
        this.initMap();
    },
    methods: {
        initMap() {
            let Sevranbedotte = [2.53483373, 48.9360525];

            let map = new ol.Map({
                target: 'map',
                layers: [
                    new ol.layer.Tile({
                        source: new ol.source.OSM()
                    })
                ],
                view: new ol.View({
                    center: ol.proj.fromLonLat(Sevranbedotte),
                    zoom: 16
                })
            });

            // let marker = new ol.layer.Vector({
            // source: new ol.source.Vector({
            //     features: [
            //         new ol.Feature(new ol.geom.Point(ol.proj.fromLonLat(Sevranbedotte))),
            //     ],
            //     }),
            // });

            // map.addLayer(marker);


           
            let el = document.createElement('div');
            el.innerText = "Bienvenue à Sevran ! Maintenant tu dois réusir à partir (c'est un peu trop dangeureux pour toi). (clique sur le popup pour continuer)";
            el.style.backgroundColor = 'white';
            el.style.padding = '6px 10px';
            el.style.borderRadius = '8px';
            el.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)';
            el.style.fontSize = '18px';
            el.style.width = '350px';  
            el.style.height = '120px';
            el.style.overflow = 'auto';
            el.style.display = 'flex';              
            el.style.flexDirection = 'column';      
            el.style.justifyContent = 'center';    
            el.style.alignItems = 'center';       
            el.style.textAlign = 'center';          
            el.style.lineHeight = '1.5';  

            let popup = new ol.Overlay({
                element: el,
                positioning: 'bottom-center',
                offset: [0, -15],
            });

            map.addOverlay(popup);
            popup.setPosition(ol.proj.fromLonLat(Sevranbedotte));
    
            el.addEventListener('click', () => {
                popup.setPosition(undefined);
                el.innerText = "La porte de la gare est fermée, il faut que tu récupères la clé. J'ai entendu dire qu'un guetteur avait des informations, va le voir !";
                popup.setPosition(ol.proj.fromLonLat(Sevranbedotte));

                el.addEventListener('click', () => {
                popup.setPosition(undefined);  
            });
            });

        
        }
    }
});
