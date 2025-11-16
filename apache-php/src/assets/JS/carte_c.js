new Vue({
    el: '#app',

    data: {
        objetRecupere: false,
        objet : '',     
        puff_photo: 'https://imgs.search.brave.com/zSctb-Uph-vbjd0EF760eFELmeyJM4SldqgjYdOr3-A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZWxpcXVpZGFuZGNv/LmNvbS8zNzUyMi1o/b21lX2RlZmF1bHQv/cGFzdGVxdWUtcGVj/aGUtbWFuZ3VlLmpw/Zw', 
        photos_inventaire : [],
    },

    mounted() {
        this.initMap();
    },  

    methods: {
        ajouter_inventaire() {
        if (this.objetRecupere === true) {
            this.photos_inventaire.push(this.puff_photo);
            this.objetRecupere = false; 
            console.log(this.photos_inventaire)
            }
        },

        initMap() {
            let Sevranbedotte = [2.53483373, 48.9360525];
            let rueRogerSalengro = [2.5355004489383908, 48.94264317994083];

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
            el.style.backgroundColor = 'white';
            el.style.padding = '10px 10px';
            el.style.borderRadius = '8px';
            el.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)';
            el.style.fontSize = '18px';
            el.style.width = '350px';  
            el.style.height = 'auto';
            el.style.overflow = 'auto';
            el.style.display = 'flex';              
            el.style.flexDirection = 'column';      
            el.style.justifyContent = 'center';    
            el.style.alignItems = 'center';       
            el.style.textAlign = 'center';          
            el.style.lineHeight = '1.5';  

            let texte = document.createElement('div');
            texte.innerText = "Bienvenue à Sevran ! Maintenant tu dois réussir à partir (c'est un peu trop dangeureux pour toi).";
            el.appendChild(texte);

            let bouton = document.createElement('button');
            bouton.innerText = "Suivant";
            bouton.style.marginTop = '10px';
            bouton.style.padding = '4px 10px';
            bouton.style.fontSize = '16px';
            el.appendChild(bouton);

            let popup = new ol.Overlay({
                element: el,
                positioning: 'bottom-center',
                offset: [0, -15],
            });
            map.addOverlay(popup);
            popup.setPosition(ol.proj.fromLonLat(Sevranbedotte));

            bouton.addEventListener('click', () => {
                texte.innerText = "La porte de la gare est fermée, il faut que tu récupères la clé. J'ai entendu dire qu'un guetteur avait des informations à la rue Salengro, va voir !";
                popup.setPosition(ol.proj.fromLonLat(Sevranbedotte));
                bouton.addEventListener('click', () => {popup.setPosition(undefined)})
            });

        
            let image = new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat(rueRogerSalengro))
            });

            image.setStyle(new ol.style.Style({
                image: new ol.style.Icon({
                    src: 'https://imgs.search.brave.com/zSctb-Uph-vbjd0EF760eFELmeyJM4SldqgjYdOr3-A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZWxpcXVpZGFuZGNv/LmNvbS8zNzUyMi1o/b21lX2RlZmF1bHQv/cGFzdGVxdWUtcGVj/aGUtbWFuZ3VlLmpw/Zw',
                    scale : 0.2
                })
            }));

            let imageLayer = new ol.layer.Vector({
                source: new ol.source.Vector({
                    features: [image]
        
                })
            });

            map.addLayer(imageLayer);

            imageLayer.setVisible(false); 

            map.getView().on('change:resolution', function () {
            let zoom = map.getView().getZoom();

            if (zoom >= 9) {
                imageLayer.setVisible(true);
            } else {
                imageLayer.setVisible(false);
            }
            });

            let vm = this;

            map.on('click', function (evt) {
            map.forEachFeatureAtPixel(evt.pixel, function(feature, layer) {
                if (layer === imageLayer) { 
                    bouton.innerText = "Ajouter à l'inventaire";
                     texte.innerText = "Puffman : tu veux une puff ?";
                     popup.setPosition(ol.proj.fromLonLat(rueRogerSalengro));
                     bouton.addEventListener('click', () => {
                        popup.setPosition(undefined);
                        vm.objetRecupere = true;
                        vm.objet = 'puff';
                        vm.ajouter_inventaire();
                     })
                }
                 });
            });


            //Pour nous aider a trouver les coordonnées d'un point 
        //     map.on('click', function (evt) {
        //     let coord = evt.coordinate;

        //     let lonLat = ol.proj.toLonLat(coord);

        //     console.log('Coordonnées carte :', coord);
        //     console.log('Longitude / Latitude :', lonLat);
        // });

            
        }
    }
});
