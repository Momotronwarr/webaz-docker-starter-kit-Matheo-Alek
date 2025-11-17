new Vue({
    el: '#app',

    data: {
        objetRecupere: false,
        objet : '',     
        guetteur_photo : 'https://imgs.search.brave.com/fOoCwlWf4rMtU1AQr4eyma6yR2gvrPorYW4_97YwGb8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cGhvdG9zLXByZW1p/dW0vaG9tbWUtY2Fn/b3VsZS1yZXNzZW1i/bGUtZXRyYW5nZW1l/bnQtY2xvc2UtdXAt/cG9ydHJhaXQtaXNv/bGUtbXVyLWJsYW5j/XzMyOTA3MC01Nzku/anBnP3NlbXQ9YWlz/X2h5YnJpZA',
        puffman_photo : 'https://imgs.search.brave.com/P28Yq3qq2soGI_CnzpLl9QJX0kX-OeuByx85RsRqftU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bWMuYmUvZW4tbWFy/Y2hlL3NpdGVzL21j/LWVuLW1hcmNoZS9m/aWxlcy9zdHlsZXMv/aW1hZ2Vfc2xpZGVy/X3hsL3B1YmxpYy9p/bWFnZXMvMjAyNC0w/Ny8yMC0yMS1QdWZm/LShjKUJlbGdhaW1h/Z2UuanBnLndlYnA_/aXRvaz03Y0dZczRl/Nw',
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
            let Jean_Jaurès = [2.5160858532768344, 48.94067724969696];

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
                    src: this.guetteur_photo,
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

                        let image1 = new ol.Feature({
                        geometry: new ol.geom.Point(ol.proj.fromLonLat(Jean_Jaurès))
                        });

                        image1.setStyle(new ol.style.Style({
                            image: new ol.style.Icon({
                                src: this.puffman_photo,
                                scale : 0.2
                            })
                        }));

                        let imageLayer1 = new ol.layer.Vector({
                            source: new ol.source.Vector({
                                features: [image1]
                    
                            })
                        });

                        map.addLayer(imageLayer1);

                        imageLayer1.setVisible(false); 



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
                    bouton.innerText = "Suivant";
                     texte.innerText = "Guetteur : j'ai besoin d'une puff là j'suis en manque. Reviens quand t'en auras une";
                     popup.setPosition(ol.proj.fromLonLat(rueRogerSalengro));
                     bouton.addEventListener('click', () => {
                        // popup.setPosition(undefined);
                        

                        // image.getGeometry().setCoordinates(ol.proj.fromLonLat(Jean_Jaurès));
                        // image.setStyle(new ol.style.Style({
                        // image: new ol.style.Icon({
                        // src: vm.puffman_photo,
                        // scale: 0.2
                            // })
                        // }));

                    let zoom = map.getView().getZoom();

                    if (zoom >= 9) {
                        imageLayer1.setVisible(true);
                    } 
                    else {
                        imageLayer1.setVisible(false);
                    }
                    
                    
                        map.on('click', function (evt) {
                        map.forEachFeatureAtPixel(evt.pixel, function(feature, layer) {
                            if (layer === imageLayer1) { 
                                bouton.innerText = "Ajouter à l'inventaire";
                                texte.innerText = "Puffman : tu veux une puff ?";
                                popup.setPosition(ol.proj.fromLonLat(Jean_Jaurès));
                                bouton.addEventListener('click', () => {
                        
                                    bouton.innerText = "Payer 10€";
                                    texte.innerText = "Puffman : C'est 10 balles par contre ?";
                                    popup.setPosition(ol.proj.fromLonLat(Jean_Jaurès))
                                    bouton.addEventListener('click', () => {
                                        imageLayer1.setVisible(false),
                                        popup.setPosition(undefined);
                                        vm.objetRecupere = true;
                                        vm.objet = 'puff';
                                        vm.ajouter_inventaire();

                                    })
                                    });

                        } 

                    }); 
                }); 
                });

        } 

    }); 
}); 


        // Pour nous aider a trouver les coordonnées d'un point 
        //     map.on('click', function (evt) {
        //     let coord = evt.coordinate;
        //     let lonLat = ol.proj.toLonLat(coord);
        //     console.log('Longitude / Latitude :', lonLat);
        // });

            
        }
    }
});
