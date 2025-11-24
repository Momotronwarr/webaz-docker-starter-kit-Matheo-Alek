
CREATE TABLE IF NOT EXISTS public.assets_jeu (
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    nom character varying(100) NOT NULL,
    description text,
    image_url character varying(500) NOT NULL,
    geom geometry(Point, 4326),
    CONSTRAINT assets_jeu_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.tableau_des_scores (
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    pseudo character varying(100),
    score double precision,
    CONSTRAINT tableau_des_scores_pkey PRIMARY KEY (id)
);


INSERT INTO tableau_des_scores (pseudo, score) VALUES ('Kaaris', 10000);


INSERT INTO assets_jeu (nom, description, image_url, geom) VALUES
('gare_sevran', 'Gare de Sevran - point de sortie', 'https://imgs.search.brave.com/vldMYz3y2EV-SizLXaHHX18rCs_qhJYianKf0WENruU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9maWxl/cy5zdHJ1Y3R1cmFl/Lm5ldC9maWxlcy8z/NTBoaWdoL3dpa2lw/ZWRpYS9zZXZyYW5f/Z2FyZV9kZV9zZXZy/YW5fYmVhdWRvdHRl/c18wMS5qcGc', ST_GeomFromText('POINT(2.53483373 48.9360525)', 4326)),
('guetteur', 'Personne à interroger rue Salengro', 'https://imgs.search.brave.com/fOoCwlWf4rMtU1AQr4eyma6yR2gvrPorYW4_97YwGb8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cGhvdG9zLXByZW1p/dW0vaG9tbWUtY2Fn/b3VsZS1yZXNzZW1i/bGUtZXRyYW5nZW1l/bnQtY2xvc2UtdXAt/cG9ydHJhaXQtaXNv/bGUtbXVyLWJsYW5j/XzMyOTA3MC01Nzku/anBnP3NlbXQ9YWlz/X2h5YnJpZA', ST_GeomFromText('POINT(2.5355004489383908 48.94264317994083)', 4326)),
('puffman', 'Vendeur de puff', 'https://imgs.search.brave.com/P28Yq3qq2soGI_CnzpLl9QJX0kX-OeuByx85RsRqftU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bWMuYmUvZW4tbWFy/Y2hlL3NpdGVzL21j/LWVuLW1hcmNoZS9m/aWxlcy9zdHlsZXMv/aW1hZ2Vfc2xpZGVy/X3hsL3B1YmxpYy9p/bWFnZXMvMjAyNC0w/Ny8yMC0yMS1QdWZm/LShjKUJlbGdhaW1h/Z2UuanBnLndlYnA_/aXRvaz03Y0dZczRl/Nw', ST_GeomFromText('POINT(2.5160858532768344 48.94067724969696)', 4326)),
('neuf2i', 'Neuf2i', 'https://imgs.search.brave.com/B7x0vdMf2NaY_24CvAqGPiw4mYq969ToXCHkWkb6rHU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzExL2Vj/L2U3LzExZWNlN2Uy/NDg0OTgzMzhjNmE2/ZTk5YjYwZTZlMWNi/LmpwZw', ST_GeomFromText('POINT(2.5281093734656395 48.94984489166902)', 4326)),
('dealer', 'Dealer du quartier', 'https://as1.ftcdn.net/jpg/00/30/29/30/1000_F_30293089_tRZtfNdeX3Xv11hSYAtTTr7mN2Qw1hdl.jpg', ST_GeomFromText('POINT(2.533857385931753 48.94847960265787)', 4326)),
('vendeur', 'Vendeur au carrefour', 'https://imgs.search.brave.com/kjpK4-yl-LDK8jNzSXSS6j3Xq5qQJA12e2cJKF1eFxc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cGhvdG9zLWdyYXR1/aXRlL3NvdXJpYW50/LWNhaXNzaWVyLWFm/cm8tYW1lcmljYWlu/LWFzc2lzLWNhaXNz/ZV83NDg1NS0zMjk3/LmpwZz9zZW10PWFp/c19oeWJyaWQ', ST_GeomFromText('POINT(2.5281698795516623 48.94852626971482)', 4326));


INSERT INTO assets_jeu (nom, description, image_url) VALUES
('puff', 'Une puff électronique', 'https://imgs.search.brave.com/zSctb-Uph-vbjd0EF760eFELmeyJM4SldqgjYdOr3-A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZWxpcXVpZGFuZGNv/LmNvbS8zNzUyMi1o/b21lX2RlZmF1bHQv/cGFzdGVxdWUtcGVj/aGUtbWFuZ3VlLmpw/Zw'),
('shampoing', 'Shampoing aux oeufs doux, pour cheveux de beurettes', 'https://imgs.search.brave.com/GHRzXCkqkX4wi694qsBqVxnpLZxWxmY4m_szgvS-Zvc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hZnJv/Y2xhc3MuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA4/L0RvcC1TaGFtcG9v/aW5nLXRyZXMtZG91/eC1hdXgtT2V1ZnMt/NDAwbWwuanBn'),
('barrette', 'Barrette', 'https://imgs.search.brave.com/ZunKvC2ARAEJqRP-qpjnoL19_lqG7_PaoBBBSGR31e8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDkv/OTc0LzEyMi9zbWFs/bC9jdXRvdXQtY2Fu/bmFiaXMtbGVhZi1z/aW1wbGljaXR5LXdh/dGVyY29sb3ItcGFp/bnRpbmctZnJlZS1w/bmcucG5n'),
('code_gare', 'Code de la gare : 1234', 'https://imgs.search.brave.com/fXVPepuYffpevKQAspACjbTJHA7FGflcu1r_9R1-xpg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YXJy/aW9yc2RpdmluZS5j/b20vY2RuL3Nob3Av/YXJ0aWNsZXMvMTIz/NC1udW1iZXItcGF0/dGVybi1pbnRlcnBy/ZXRhdGlvbl8xMDI0/eDEwMjQuanBnP3Y9/MTcxOTM5MDU5Mw');

