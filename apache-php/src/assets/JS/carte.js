new Vue({
    el: '#app',

    data: {
        objet_recupere : '',     
        code_gare_photo : 'https://imgs.search.brave.com/fXVPepuYffpevKQAspACjbTJHA7FGflcu1r_9R1-xpg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YXJy/aW9yc2RpdmluZS5j/b20vY2RuL3Nob3Av/YXJ0aWNsZXMvMTIz/NC1udW1iZXItcGF0/dGVybi1pbnRlcnBy/ZXRhdGlvbl8xMDI0/eDEwMjQuanBnP3Y9/MTcxOTM5MDU5Mw',
        gare_sevran : 'https://imgs.search.brave.com/vldMYz3y2EV-SizLXaHHX18rCs_qhJYianKf0WENruU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9maWxl/cy5zdHJ1Y3R1cmFl/Lm5ldC9maWxlcy8z/NTBoaWdoL3dpa2lw/ZWRpYS9zZXZyYW5f/Z2FyZV9kZV9zZXZy/YW5fYmVhdWRvdHRl/c18wMS5qcGc',
        guetteur_photo : 'https://imgs.search.brave.com/fOoCwlWf4rMtU1AQr4eyma6yR2gvrPorYW4_97YwGb8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cGhvdG9zLXByZW1p/dW0vaG9tbWUtY2Fn/b3VsZS1yZXNzZW1i/bGUtZXRyYW5nZW1l/bnQtY2xvc2UtdXAt/cG9ydHJhaXQtaXNv/bGUtbXVyLWJsYW5j/XzMyOTA3MC01Nzku/anBnP3NlbXQ9YWlz/X2h5YnJpZA',
        puffman_photo : 'https://imgs.search.brave.com/P28Yq3qq2soGI_CnzpLl9QJX0kX-OeuByx85RsRqftU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bWMuYmUvZW4tbWFy/Y2hlL3NpdGVzL21j/LWVuLW1hcmNoZS9m/aWxlcy9zdHlsZXMv/aW1hZ2Vfc2xpZGVy/X3hsL3B1YmxpYy9p/bWFnZXMvMjAyNC0w/Ny8yMC0yMS1QdWZm/LShjKUJlbGdhaW1h/Z2UuanBnLndlYnA_/aXRvaz03Y0dZczRl/Nw',
        puff_photo: 'https://imgs.search.brave.com/zSctb-Uph-vbjd0EF760eFELmeyJM4SldqgjYdOr3-A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZWxpcXVpZGFuZGNv/LmNvbS8zNzUyMi1o/b21lX2RlZmF1bHQv/cGFzdGVxdWUtcGVj/aGUtbWFuZ3VlLmpw/Zw', 
        neuf2i : 'https://imgs.search.brave.com/B7x0vdMf2NaY_24CvAqGPiw4mYq969ToXCHkWkb6rHU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzExL2Vj/L2U3LzExZWNlN2Uy/NDg0OTgzMzhjNmE2/ZTk5YjYwZTZlMWNi/LmpwZw',
        dealer_photo: 'https://imgs.search.brave.com/k4E_9WKKhcu8CGzCB9QhUAFCFAjVYYbIc6QmTCWMng4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY4/MzgwNjk1L2ZyL3Bo/b3RvL2RlYWxlci5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/R1dIcnh3R3UwWkda/ZVRDYjM5RVN6dm1r/ZXpkM1pzVDFhWG9S/ZzZyUUJiVT0',
        barrette_photo: 'https://imgs.search.brave.com/ZunKvC2ARAEJqRP-qpjnoL19_lqG7_PaoBBBSGR31e8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDkv/OTc0LzEyMi9zbWFs/bC9jdXRvdXQtY2Fu/bmFiaXMtbGVhZi1z/aW1wbGljaXR5LXdh/dGVyY29sb3ItcGFp/bnRpbmctZnJlZS1w/bmcucG5n',
        vendeur_photo : 'https://imgs.search.brave.com/kjpK4-yl-LDK8jNzSXSS6j3Xq5qQJA12e2cJKF1eFxc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cGhvdG9zLWdyYXR1/aXRlL3NvdXJpYW50/LWNhaXNzaWVyLWFm/cm8tYW1lcmljYWlu/LWFzc2lzLWNhaXNz/ZV83NDg1NS0zMjk3/LmpwZz9zZW10PWFp/c19oeWJyaWQ', 
        shampoing_photo : 'https://imgs.search.brave.com/GHRzXCkqkX4wi694qsBqVxnpLZxWxmY4m_szgvS-Zvc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hZnJv/Y2xhc3MuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA4/L0RvcC1TaGFtcG9v/aW5nLXRyZXMtZG91/eC1hdXgtT2V1ZnMt/NDAwbWwuanBn',
        photos_inventaire : [],
        assetsMap: {},
        guetteur_rencontre: true,
        neuf2i_rencontre: false,
        puffman_rencontre: false,
        dealer_rencontre: false,
        vendeur_rencontre: false,


        descriptions_objets: {
        'https://imgs.search.brave.com/zSctb-Uph-vbjd0EF760eFELmeyJM4SldqgjYdOr3-A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZWxpcXVpZGFuZGNv/LmNvbS8zNzUyMi1o/b21lX2RlZmF1bHQv/cGFzdGVxdWUtcGVj/aGUtbWFuZ3VlLmpw/Zw': 'Puff',
        'https://imgs.search.brave.com/ZunKvC2ARAEJqRP-qpjnoL19_lqG7_PaoBBBSGR31e8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDkv/OTc0LzEyMi9zbWFs/bC9jdXRvdXQtY2Fu/bmFiaXMtbGVhZi1z/aW1wbGljaXR5LXdh/dGVyY29sb3ItcGFp/bnRpbmctZnJlZS1w/bmcucG5n': 'Barrette',
        'https://imgs.search.brave.com/GHRzXCkqkX4wi694qsBqVxnpLZxWxmY4m_szgvS-Zvc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hZnJv/Y2xhc3MuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA4/L0RvcC1TaGFtcG9v/aW5nLXRyZXMtZG91/eC1hdXgtT2V1ZnMt/NDAwbWwuanBn': 'Shampoing aux oeufs doux, pour cheveux de beurettes',
        'https://imgs.search.brave.com/fXVPepuYffpevKQAspACjbTJHA7FGflcu1r_9R1-xpg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YXJy/aW9yc2RpdmluZS5j/b20vY2RuL3Nob3Av/YXJ0aWNsZXMvMTIz/NC1udW1iZXItcGF0/dGVybi1pbnRlcnBy/ZXRhdGlvbl8xMDI0/eDEwMjQuanBnP3Y9/MTcxOTM5MDU5Mw': 'Code de la gare : 1234'
    },
    },

    mounted() {
        this.fetchAssetsMap().then(() => {
            this.initMap();
            if (typeof this.startChrono === 'function') this.startChrono();
        }).catch(err => {
            console.error('fetchAssetsMap failed', err);
            this.initMap();
            if (typeof this.startChrono === 'function') this.startChrono();
        });
    },  

    methods: {
        startChrono() {
            const el = document.getElementById('chrono');
            if (!el) return;

            const cleStockage = 'debutChrono';
            let debut = sessionStorage.getItem(cleStockage);
            if (!debut) {
                debut = Date.now().toString();
                sessionStorage.setItem(cleStockage, debut);
            }
            debut = parseInt(debut, 10);

            function deuxChiffres(n) { return n.toString().padStart(2, '0'); }
            function formatHeuresSecondes(secTot) {
                const h = Math.floor(secTot / 3600);
                const m = Math.floor((secTot % 3600) / 60);
                const s = secTot % 60;
                if (h > 0) return `${h}:${deuxChiffres(m)}:${deuxChiffres(s)}`;
                return `${deuxChiffres(m)}:${deuxChiffres(s)}`;
            }

            // mise à jour chaque seconde
            let idInterval = setInterval(() => {
                const ecoule = Math.floor((Date.now() - debut) / 1000);
                el.textContent = formatHeuresSecondes(ecoule);
            }, 1000);

            // rafraîchir immédiatement
            (function () {
                const ecoule = Math.floor((Date.now() - debut) / 1000);
                el.textContent = formatHeuresSecondes(ecoule);
            })();

            // appel serveur toutes les 30s pour décrémenter le score
            const délaiTick = 30 * 1000;
            let idTickInterval = null;
            const elScore = document.getElementById('score');
            function appelTick() {
                fetch('/tick_score', { method: 'POST', credentials: 'same-origin', headers: { 'Accept': 'application/json' } })
                    .then(r => r.json())
                    .then(j => {
                        if (j && typeof j.score !== 'undefined') {
                            window.latestGameScore = j.score;
                            if (elScore) elScore.textContent = 'score : ' + String(j.score);
                        }
                    }).catch(e => console.warn('tick_score failed', e));
            }
            // premier tick après 30s
            const idFirstTick = setTimeout(() => { appelTick(); idTickInterval = setInterval(appelTick, délaiTick); }, délaiTick);

            // API en français
            window.chronoJeu = {
                obtenirTemps: function () { return Math.floor((Date.now() - debut) / 1000); },
                arreter: function () { clearInterval(idInterval); try { if (idTickInterval) clearInterval(idTickInterval); } catch (e) {} clearTimeout(idFirstTick); },
                reinitialiser: function () { debut = Date.now(); sessionStorage.setItem(cleStockage, debut.toString()); el.textContent = '00:00'; clearInterval(idInterval); idInterval = setInterval(() => { const ec = Math.floor((Date.now() - debut) / 1000); el.textContent = formatHeuresSecondes(ec); }, 1000); try { if (idTickInterval) clearInterval(idTickInterval); } catch (e) {} setTimeout(() => { appelTick(); idTickInterval = setInterval(appelTick, délaiTick); }, délaiTick); }
            };
            // compatibilité ascendante
            window.gameTimer = window.chronoJeu;
        },

        fetchAssetsMap() {
            return fetch('/assets')
                .then(res => { if (!res.ok) throw new Error('HTTP ' + res.status); return res.json(); })
                .then(objs => {
                    if (!Array.isArray(objs)) return;
                    this.assetsMap = {};
                    objs.forEach(o => {
                        if (o.nom) this.assetsMap[o.nom] = o;
                    });
                });
        },

        async loadObjects(map) {
            try {
                const res = await fetch('/api/objets');
                if (!res.ok) throw new Error('HTTP ' + res.status);
                const objs = await res.json();
                if (!Array.isArray(objs)) return;
                objs.forEach(o => {
                    // certains champs peuvent être renvoyés en string 't'/'f' pour booleans
                    if (o.est_ramassable === 't') o.est_ramassable = true;
                    if (o.est_ramassable === 'f') o.est_ramassable = false;
                    // ajouter l'objet à la carte
                    try { addObjectToMap(o); } catch (e) { console.warn('addObjectToMap failed', e); }
                });
            } catch (err) {
                console.error('Erreur loadObjects:', err);
                throw err;
            }
        },

        ajouter_inventaire(nom_objet) {
            this.photos_inventaire.push(nom_objet);
        },

        retirer_inventaire(nom_objet) {
            let index = this.photos_inventaire.indexOf(nom_objet);
            if (index !== -1) {
                this.photos_inventaire.splice(index, 1);
            }
        },

        afficher_description(photo_url) {
        let description = this.descriptions_objets[photo_url];
        if (description) {
            alert(description);
        }  
    },


        initMap() {
            let Sevranbedotte = [2.53483373, 48.9360525];
            let rueRogerSalengro = [2.5355004489383908, 48.94264317994083];
            let Jean_Jaurès = [2.5160858532768344, 48.94067724969696];
            let BeauSevran = [2.5281093734656395, 48.94984489166902];
            let quartierDealer = [2.533857385931753, 48.94847960265787];
            let carrefour = [2.5281698795516623, 48.94852626971482];

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

            map.on('click', function (evt) {
                let coord = evt.coordinate;
                let lonLat = ol.proj.toLonLat(coord);
                console.log('Longitude / Latitude :', lonLat);
            });

            
            // assets are loaded from DB via fetchAssetsMap; we avoid duplicating features here
            

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

            bouton.onclick = () => {
                texte.innerText = "La porte de la gare est fermée, il faut que tu récupères la clé. J'ai entendu dire qu'un guetteur avait des informations à la rue Salengro, va voir !";
                popup.setPosition(ol.proj.fromLonLat(Sevranbedotte));
                bouton.onclick = () => {popup.setPosition(undefined)}
            };

            // GARE SEVRAN
            let imageGare_sevran = new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat(Sevranbedotte))
            });

            imageGare_sevran.setStyle(new ol.style.Style({
                image: new ol.style.Icon({
                    src: (this.assetsMap['gare_sevran'] && this.assetsMap['gare_sevran'].image_url) ? this.assetsMap['gare_sevran'].image_url : this.gare_sevran,
                    scale: 0.25
                })
            }));

            let layerGare_sevran = new ol.layer.Vector({
                source: new ol.source.Vector({
                    features: [imageGare_sevran]
                })
            });

            map.addLayer(layerGare_sevran);
            layerGare_sevran.setVisible(true);

            // GUETTEUR
            let imageGuetteur = new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat(rueRogerSalengro))
            });

            imageGuetteur.setStyle(new ol.style.Style({
                image: new ol.style.Icon({
                    src: (this.assetsMap['guetteur'] && this.assetsMap['guetteur'].image_url) ? this.assetsMap['guetteur'].image_url : this.guetteur_photo,
                    scale: 0.2
                })
            }));

            let layerGuetteur = new ol.layer.Vector({
                source: new ol.source.Vector({
                    features: [imageGuetteur]
                })
            });

            map.addLayer(layerGuetteur);
            layerGuetteur.setVisible(false); 

            // PUFFMAN
            let imagePuffman = new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat(Jean_Jaurès))
            });

            imagePuffman.setStyle(new ol.style.Style({
                image: new ol.style.Icon({
                    src: (this.assetsMap['puffman'] && this.assetsMap['puffman'].image_url) ? this.assetsMap['puffman'].image_url : this.puffman_photo,
                    scale: 0.2
                })
            }));

            let layerPuffman = new ol.layer.Vector({
                source: new ol.source.Vector({
                    features: [imagePuffman]
                })
            });

            map.addLayer(layerPuffman);
            layerPuffman.setVisible(false);

            // NEUF2I
            let imageNeuf2i = new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat(BeauSevran))
            });

            imageNeuf2i.setStyle(new ol.style.Style({
                image: new ol.style.Icon({
                    src: (this.assetsMap['neuf2i'] && this.assetsMap['neuf2i'].image_url) ? this.assetsMap['neuf2i'].image_url : this.neuf2i,
                    scale: 0.2
                })
            }));

            let layerNeuf2i = new ol.layer.Vector({
                source: new ol.source.Vector({
                    features: [imageNeuf2i]
                })
            });

            map.addLayer(layerNeuf2i);
            layerNeuf2i.setVisible(false);

            // DEALER
            let imageDealer = new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat(quartierDealer))
            });

            imageDealer.setStyle(new ol.style.Style({
                image: new ol.style.Icon({
                    src: (this.assetsMap['dealer'] && this.assetsMap['dealer'].image_url) ? this.assetsMap['dealer'].image_url : this.dealer_photo,
                    scale: 0.2
                })
            }));

            let layerDealer = new ol.layer.Vector({
                source: new ol.source.Vector({
                    features: [imageDealer]
                })
            });

            map.addLayer(layerDealer);
            layerDealer.setVisible(false);

            // VENDEUR
            let imageVendeur = new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat(carrefour))
            });

            imageVendeur.setStyle(new ol.style.Style({
                image: new ol.style.Icon({
                    src: (this.assetsMap['vendeur'] && this.assetsMap['vendeur'].image_url) ? this.assetsMap['vendeur'].image_url : this.vendeur_photo,
                    scale: 0.2
                })
            }));

            let layerVendeur = new ol.layer.Vector({
                source: new ol.source.Vector({
                    features: [imageVendeur]
                })
            });

            map.addLayer(layerVendeur);
            layerVendeur.setVisible(false);


            map.getView().on('change:resolution', () => {
                let zoom = map.getView().getZoom();

                if (zoom >= 9) {
                    if (this.guetteur_rencontre) {
                        layerGuetteur.setVisible(true);
                    }
                    
                    if (this.puffman_rencontre && this.objet_recupere !== 'puff') {
                        layerPuffman.setVisible(true);
                    }

                    if (this.neuf2i_rencontre) {
                        layerNeuf2i.setVisible(true);
                    }

                    if (this.dealer_rencontre && this.objet_recupere !== 'barrette') {
                        layerDealer.setVisible(true);
                    }


                    if (this.vendeur_rencontre && this.objet_recupere !== 'oeufs doux') {
                        layerVendeur.setVisible(true);
                    }
                } else {
                    layerGuetteur.setVisible(false);
                    layerPuffman.setVisible(false);
                    layerNeuf2i.setVisible(false);
                    layerDealer.setVisible(false);
                    layerVendeur.setVisible(false);
                }
            });

            let vm = this;

            const addObjectToMap = (obj) => {
                if (!obj || !obj.coordonnees_lat || !obj.coordonnees_lon) return;
                const lon = parseFloat(obj.coordonnees_lon);
                const lat = parseFloat(obj.coordonnees_lat);
                const feature = new ol.Feature({
                    geometry: new ol.geom.Point(ol.proj.fromLonLat([lon, lat])),
                    nom: obj.nom,
                    description: obj.description,
                    type_objet: obj.type_objet,
                    est_ramassable: obj.est_ramassable
                });

                feature.setStyle(new ol.style.Style({
                    image: new ol.style.Icon({
                        src: obj.image_url,
                        scale: 0.16
                    })
                }));

                const layer = new ol.layer.Vector({
                    source: new ol.source.Vector({ features: [feature] })
                });
                map.addLayer(layer);

                map.on('singleclick', function(evt) {
                    map.forEachFeatureAtPixel(evt.pixel, function(f, l) {
                        if (f === feature) {
                            alert((f.get('description') || 'Objet') + "\n(nom: " + f.get('nom') + ")");
                        }
                    });
                });
            };

            // ajouter les objets depuis la base de données (si présents dans assetsMap)
            try {
                Object.values(vm.assetsMap || {}).forEach(o => {
                    try { addObjectToMap(o); } catch (e) { console.warn('addObjectToMap failed', e); }
                });
            } catch (e) { /* rien */ }

            // INTERACTIONS
            map.on('click', function (evt) {
                map.forEachFeatureAtPixel(evt.pixel, function(feature, layer) {


                    // GARE (détectée par le nom de la feature)
                    if (feature && feature.get && feature.get('nom') === 'gare_sevran') {
                        const code = prompt("Entrez le code à 4 chiffres :");
                        if (code === "1234") {
                            alert("Code correct !");
                            texte.innerText = "Bravo tu as réussi à sortir de Sevran ! Tu es enfin libre !!";
                            bouton.innerText = "Sortir de Sevran";
                            popup.setPosition(ol.proj.fromLonLat(Sevranbedotte));
                            bouton.onclick = () => { window.location.href = '/fin_du_jeu'; };
                        } else {
                            alert("Code incorrect");
                        }
                    }

                    // PUFFMAN
                    if (feature && feature.get && feature.get('nom') === 'puffman') {
                        texte.innerText = "Puffman : tu veux une puff ?";
                        bouton.innerText = "Oui";
                        popup.setPosition(ol.proj.fromLonLat(Jean_Jaurès));
                        bouton.onclick = () => {
                            popup.setPosition(ol.proj.fromLonLat(Jean_Jaurès));
                            texte.innerText = "Puffman : C'est 10 balles par contre";
                            bouton.innerText = "Payer 10€";
                            bouton.onclick = () => {
                                try { layerPuffman.setVisible(false); } catch(e) {}
                                popup.setPosition(undefined);
                                vm.objet_recupere = 'puff';
                                vm.ajouter_inventaire((vm.assetsMap['puff'] && vm.assetsMap['puff'].image_url) ? vm.assetsMap['puff'].image_url : vm.puff_photo);
                                vm.puffman_rencontre = false;
                            };
                        };
                    }

                    // GUETTEUR
                    if (feature && feature.get && feature.get('nom') === 'guetteur') {
                        if (vm.objet_recupere === 'puff'){
                            texte.innerText = "Guetteur : Ah merci tu régales le sang";
                            bouton.innerText = "Suivant";
                            popup.setPosition(ol.proj.fromLonLat(rueRogerSalengro));
                            bouton.onclick = () => {
                                popup.setPosition(ol.proj.fromLonLat(rueRogerSalengro));
                                texte.innerText = "Guetteur : Si tu veux je connais un gars à BeauSevran va le voir et dis lui que tu viens de ma part";
                                bouton.innerText = "Ca marche le sanglier";
                                bouton.onclick = () => {
                                    popup.setPosition(undefined);
                                    // retirer l'image puff depuis l'inventaire
                                    vm.retirer_inventaire((vm.assetsMap['puff'] && vm.assetsMap['puff'].image_url) ? vm.assetsMap['puff'].image_url : vm.puff_photo);
                                    vm.objet_recupere = '';
                                    vm.guetteur_rencontre = false;
                                    vm.neuf2i_rencontre = true;
                                    try { layerGuetteur.setVisible(false); } catch(e) {}
                                    try { layerNeuf2i.setVisible(true); } catch(e) {}
                                };
                            };
                        } else {
                            texte.innerText = "Guetteur : J'ai besoin d'une puff, reviens quand t'en auras une";
                            bouton.innerText = "Aller chercher une puff";
                            popup.setPosition(ol.proj.fromLonLat(rueRogerSalengro));
                            bouton.onclick = () => {
                                popup.setPosition(undefined);
                                vm.puffman_rencontre = true;
                                try { layerPuffman.setVisible(true); } catch(e) {}
                            };
                        }
                    }

                    // NEUF2I
                    if (feature && feature.get && feature.get('nom') === 'neuf2i') {
                        if (vm.objet_recupere === 'oeufs doux'){
                            texte.innerText = "Neuf2i : Ah ouais merci beaucoup tu me sauves !";
                            bouton.innerText = "Donner le shampoing";
                            popup.setPosition(ol.proj.fromLonLat(BeauSevran));
                            bouton.onclick = () => {
                                popup.setPosition(ol.proj.fromLonLat(BeauSevran));
                                // retirer shampoing depuis inventaire
                                vm.retirer_inventaire((vm.assetsMap['shampoing'] && vm.assetsMap['shampoing'].image_url) ? vm.assetsMap['shampoing'].image_url : vm.shampoing_photo);
                                texte.innerText = "Neuf2i : Merci, va à la gare je te donne le code.";
                                bouton.innerText = "Ok vsy !";
                                bouton.onclick = () => {
                                    vm.ajouter_inventaire((vm.assetsMap['code_gare'] && vm.assetsMap['code_gare'].image_url) ? vm.assetsMap['code_gare'].image_url : vm.code_gare_photo);
                                    popup.setPosition(undefined);
                                    vm.neuf2i_rencontre = false;
                                    try { layerNeuf2i.setVisible(false); } catch(e) {}
                                };
                            };
                        } else if (vm.objet_recupere === 'barrette'){
                            texte.innerText = "Neuf2i : Mais putain Farouk ! C'est quoi ce que tu me donnes moi je voulais un shampoing aux oeufs doux !";
                            bouton.innerText = "Suivant";
                            popup.setPosition(ol.proj.fromLonLat(BeauSevran));
                            bouton.onclick = () => {
                                popup.setPosition(ol.proj.fromLonLat(BeauSevran));
                                texte.innerText = "Neuf2i : J'ai des cheveux de beurettes, toi t'y connais rien t'es chauve";
                                bouton.innerText = "Mais c'est un quiproquo";
                                bouton.onclick = () => {
                                    popup.setPosition(ol.proj.fromLonLat(BeauSevran));
                                    texte.innerText = "Neuf2i : Je parle pas Japonais désolé quiproquo tout ça je connais pas. Va me chercher mon shampoing maintenant";
                                    bouton.innerText = "Ok déso le sang";
                                    bouton.onclick = () => {
                                        popup.setPosition(undefined);
                                        vm.objet_recupere = '';
                                        vm.vendeur_rencontre = true;
                                        vm.dealer_rencontre = false;
                                        try { layerDealer.setVisible(false); } catch(e) {}
                                        try { layerVendeur.setVisible(true); } catch(e) {}
                                    };
                                };
                            };
                        } else {
                            texte.innerText = "Neuf2i : J'ai besoin d'un 'zedou', tu peux m'en ramener un ?";
                            bouton.innerText = "Moi: Je vais voir ce que je peux faire";
                            popup.setPosition(ol.proj.fromLonLat(BeauSevran));
                            bouton.onclick = () => {
                                popup.setPosition(undefined);
                                vm.dealer_rencontre = true;
                                try { layerDealer.setVisible(true); } catch(e) {}
                            };
                        }
                    }

                    // DEALER
                    if (feature && feature.get && feature.get('nom') === 'dealer') {
                        texte.innerText = "Dealer : Ouais tu veux du sh*t chef ??";
                        bouton.innerText = "Oui s'il vous plait";
                        popup.setPosition(ol.proj.fromLonLat(quartierDealer));
                        bouton.onclick = () => {
                            popup.setPosition(ol.proj.fromLonLat(quartierDealer));
                            texte.innerText = "Dealer : Ça fait 50 balles";
                            bouton.innerText = "Payer 50€";
                            bouton.onclick = () => {
                                try { layerDealer.setVisible(false); } catch(e) {}
                                popup.setPosition(undefined);
                                vm.objet_recupere = 'barrette';
                                vm.ajouter_inventaire((vm.assetsMap['barrette'] && vm.assetsMap['barrette'].image_url) ? vm.assetsMap['barrette'].image_url : vm.barrette_photo);
                                vm.dealer_rencontre = false;
                            };
                        };
                    }

                    // VENDEUR
                    if (feature && feature.get && feature.get('nom') === 'vendeur') {
                        texte.innerText = "Vendeur carrefour : Vous cherchez quoi ?";
                        bouton.innerText = "Un shampoing aux oeufs doux";
                        popup.setPosition(ol.proj.fromLonLat(carrefour));
                        bouton.onclick = () => {
                            popup.setPosition(ol.proj.fromLonLat(carrefour));
                            texte.innerText = "Vendeur carrefour : 3,50€ svp";
                            bouton.innerText = "Payer 3,50€";
                            bouton.onclick = () => {
                                try { layerVendeur.setVisible(false); } catch(e) {}
                                popup.setPosition(undefined);
                                vm.objet_recupere = 'oeufs doux';
                                vm.ajouter_inventaire((vm.assetsMap['shampoing'] && vm.assetsMap['shampoing'].image_url) ? vm.assetsMap['shampoing'].image_url : vm.shampoing_photo);
                                vm.vendeur_rencontre = false;
                            };
                        };
                    }


                }); 
            }); 
        }                  
    }                      
});