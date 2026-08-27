// app.js
document.addEventListener('DOMContentLoaded', () => {



    // ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ 0. PROYECCIÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œN: EPSG:6370 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ WGS84 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬
    // EPSG:6370 = Mexico ITRF2008 / UTM zona 15N (metros)
    proj4.defs('EPSG:6370',
        '+proj=utm +zone=15 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
    );
    const fromEPSG6370 = proj4('EPSG:6370', 'WGS84');

    /**
     * Reprojecta todas las coordenadas de un GeoJSON
     * de EPSG:6370 (UTM m) a WGS84 (lon/lat).
     */
    function reprojectGeoJSON(geojson) {
        let firstCoords = null;
        if (geojson.features && geojson.features.length > 0) {
            const geom = geojson.features[0].geometry;
            if (geom) {
                if (geom.type === 'Point') firstCoords = geom.coordinates;
                else if (geom.type === 'LineString' || geom.type === 'MultiPoint') firstCoords = geom.coordinates[0];
                else if (geom.type === 'Polygon' || geom.type === 'MultiLineString') firstCoords = geom.coordinates[0][0];
                else if (geom.type === 'MultiPolygon') firstCoords = geom.coordinates[0][0][0];
            }
        }
        if (firstCoords && Array.isArray(firstCoords)) {
            const [x, y] = firstCoords;
            if (Math.abs(x) <= 180 && Math.abs(y) <= 90) {
                return geojson; // Ya está en WGS84 (lon/lat)
            }
        }

        const clone = JSON.parse(JSON.stringify(geojson)); // copia profunda
        if (clone.type === 'FeatureCollection') {
            clone.features.forEach(f => reprojectGeometry(f.geometry));
        } else if (clone.type === 'Feature') {
            reprojectGeometry(clone.geometry);
        }
        return clone;
    }

    function reprojectGeometry(geom) {
        if (!geom) return;
        switch (geom.type) {
            case 'Point':
                geom.coordinates = fromEPSG6370.forward(geom.coordinates);
                break;
            case 'MultiPoint':
            case 'LineString':
                geom.coordinates = geom.coordinates.map(c => fromEPSG6370.forward(c));
                break;
            case 'MultiLineString':
            case 'Polygon':
                geom.coordinates = geom.coordinates.map(ring =>
                    ring.map(c => fromEPSG6370.forward(c)));
                break;
            case 'MultiPolygon':
                geom.coordinates = geom.coordinates.map(poly =>
                    poly.map(ring => ring.map(c => fromEPSG6370.forward(c))));
                break;
            case 'GeometryCollection':
                geom.geometries.forEach(g => reprojectGeometry(g));
                break;
        }
    }

    // ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ 1. MAPA BASE ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬
    const map = L.map('map', { zoomControl: false }).setView([23.6345, -102.5528], 5);

    const baseLayers = {
        light: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri', maxZoom: 20, maxNativeZoom: 16
        }),
        dark: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri', maxZoom: 20, maxNativeZoom: 16
        }),
        satellite: L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
            maxZoom: 20, subdomains: ['mt0','mt1','mt2','mt3'], attribution: '&copy; Google Maps'
        }),
        hybrid: L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
            maxZoom: 20, subdomains: ['mt0','mt1','mt2','mt3'], attribution: '&copy; Google Maps'
        }),
        terrain: L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenTopoMap', maxZoom: 17
        })
    };
    baseLayers.light.addTo(map);

    L.control.zoom({ position: 'bottomright' }).addTo(map);

    // ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ 2. CAPAS GEOJSON (desde GitHub raw) ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬
    const REPO = 'https://raw.githubusercontent.com/estudiotab1/GEOVISOR/main/';

    const layerConfig = [
        { id: 'escuelas',       name: 'Escuelas',              file: 'Escuelas.geojson',            color: '#FF6B6B', icon: 'fa-school' },
        { id: 'hospitales',     name: 'Hospitales',            file: 'Hospitales.geojson',           color: '#4ECDC4', icon: 'fa-hospital' },
        { id: 'manzanas',       name: 'Manzanas Urbanas',      file: 'Manzanas%20Urbanas.geojson',  color: '#FFE66D', icon: 'fa-city' },
        { id: 'municipios',     name: 'Municipios',            file: 'Municipios.geojson',           color: '#A8E6CF', icon: 'fa-map' },
        { id: 'oficinas',       name: 'Oficinas del Pueblo',   file: 'Oficinas%20del%20Pueblo.geojson', color: '#FF8B94', icon: 'fa-building' },
        { id: 'subcuencas',     name: 'Subcuencas Hidro',      file: 'subcuencas_1.geojson',    color: '#74B9FF', icon: 'fa-water' },
        { id: 'caminos',        name: 'Caminos',               file: 'CAMINOS1geojson.geojson',             color: '#D4A373', icon: 'fa-road' },
        { id: 'ca',             name: 'Cuerpos de agua',       file: 'CA_1.geojson',                        color: '#87CEEB', icon: 'fa-water' },
        { id: 'albergues',      name: 'Albergues',             file: 'albergues_1.geojson',                 color: '#9B59B6', icon: 'fa-tent' },
        { id: 'vrs_riesgo',     name: 'Riesgo',                file: 'VRS_FIN_2.1.geojson', color: '#E74C3C', icon: 'fa-exclamation-triangle' },
        { id: 'vrs_vuln',       name: 'Vulnerabilidad',        file: 'VRS_FIN_2.1.geojson', color: '#F39C12', icon: 'fa-shield-alt' },
        { id: 'tr2_pichucalco', name: 'Pichucalco Tr2', file: 'https://huggingface.co/datasets/tab12k/tab2_lig/resolve/main/Pichucalco_Tr2.geojson', color: '#0A84FF', group: 'Tirante TR2', icon: 'fa-water' },
        { id: 'tr2_shumul', name: 'R. Shumul Tr2', file: 'https://huggingface.co/datasets/tab12k/tab2_lig/resolve/main/R.%20Shumul_Tr2.geojson', color: '#0A84FF', group: 'Tirante TR2', icon: 'fa-water' },
        { id: 'tr2_tulija', name: 'R. Tulija Tr2', file: 'https://huggingface.co/datasets/tab12k/tab2_lig/resolve/main/R.%20Tulija_Tr2.geojson', color: '#0A84FF', group: 'Tirante TR2', icon: 'fa-water' },
        { id: 'tr2_vjo_mezcalapa', name: 'R. Vjo Mezcalapa Tr2', file: 'https://huggingface.co/datasets/tab12k/tab2_lig/resolve/main/R.%20Vjo%20Mezcalapa_Tr2.geojson', color: '#0A84FF', group: 'Tirante TR2', icon: 'fa-water' },
        { id: 'tr2_sierra', name: 'R. de la Sierra Tr2', file: 'https://huggingface.co/datasets/tab12k/tab2_lig/resolve/main/R.%20de%20la%20Sierra_Tr2.geojson', color: '#0A84FF', group: 'Tirante TR2', icon: 'fa-water' },
        { id: 'tr2_almendro', name: 'R. Almendro Tr2', file: 'https://huggingface.co/datasets/tab12k/tab2_lig/resolve/main/R.Almendro_Tr2.geojson', color: '#0A84FF', group: 'Tirante TR2', icon: 'fa-water' },
        { id: 'tr2_basca', name: 'R. Basca Tr2', file: 'https://huggingface.co/datasets/tab12k/tab2_lig/resolve/main/R.Basca_Tr2.geojson', color: '#0A84FF', group: 'Tirante TR2', icon: 'fa-water' },
        { id: 'tr2_chacte', name: 'R. CHacte Tr2', file: 'https://huggingface.co/datasets/tab12k/tab2_lig/resolve/main/R.CHacte_Tr2.geojson', color: '#0A84FF', group: 'Tirante TR2', icon: 'fa-water' },
        { id: 'tr2_carrizal', name: 'R. Carrizal Tr2', file: 'https://huggingface.co/datasets/tab12k/tab2_lig/resolve/main/R.Carrizal_Tr2.geojson', color: '#0A84FF', group: 'Tirante TR2', icon: 'fa-water' },
        { id: 'tr2_chilapa', name: 'R. Chilapa Tr2', file: 'https://huggingface.co/datasets/tab12k/tab2_lig/resolve/main/R.Chilapa_Tr2.geojson', color: '#0A84FF', group: 'Tirante TR2', icon: 'fa-water' },
        { id: 'tr2_chilapilla', name: 'R. Chilapilla Tr2', file: 'https://huggingface.co/datasets/tab12k/tab2_lig/resolve/main/R.Chilapilla_Tr2.geojson', color: '#0A84FF', group: 'Tirante TR2', icon: 'fa-water' },
        { id: 'tr2_macuspana', name: 'R. Macuspana Tr2', file: 'https://huggingface.co/datasets/tab12k/tab2_lig/resolve/main/R.Macuspana_Tr2.geojson', color: '#0A84FF', group: 'Tirante TR2', icon: 'fa-water' },
        { id: 'tr2_paredon', name: 'R. Paredon Tr2', file: 'https://huggingface.co/datasets/tab12k/tab2_lig/resolve/main/R.Paredon_Tr2.geojson', color: '#0A84FF', group: 'Tirante TR2', icon: 'fa-water' },
        { id: 'tr2_platanos', name: 'R. Platanos Tr2', file: 'https://huggingface.co/datasets/tab12k/tab2_lig/resolve/main/R.Platanos_Tr2.geojson', color: '#0A84FF', group: 'Tirante TR2', icon: 'fa-water' },
        { id: 'tr2_puxcatn', name: 'R. Puxcatn Tr2', file: 'https://huggingface.co/datasets/tab12k/tab2_lig/resolve/main/R.Puxcatn_Tr2.geojson', color: '#0A84FF', group: 'Tirante TR2', icon: 'fa-water' },
        { id: 'tr2_tacotalpa', name: 'Tacotalpa Tr2', file: 'https://huggingface.co/datasets/tab12k/tab2_lig/resolve/main/Tacotalpa_Tr2.geojson', color: '#0A84FF', group: 'Tirante TR2', icon: 'fa-water' },
        { id: 'tr2_yashija', name: 'Yashija Tr2', file: 'https://huggingface.co/datasets/tab12k/tab2_lig/resolve/main/Yashija_Tr2.geojson', color: '#0A84FF', group: 'Tirante TR2', icon: 'fa-water' }
    ];

    // Estado de las capas en memoria
    const layerState = {};   // id -> { leafletLayer, geojsonData, visible }

    // ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ 3. CONSTRUIR SIDEBAR ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬
    const accordionMenu = document.querySelector('.accordion-menu');
    accordionMenu.innerHTML = ''; // Limpiar HTML estático

    const groups = {};
    const ungrouped = [];

    layerConfig.forEach(cfg => {
        layerState[cfg.id] = { leafletLayer: null, geojsonData: null, visible: false };
        if (cfg.group) {
            if (!groups[cfg.group]) groups[cfg.group] = [];
            groups[cfg.group].push(cfg);
        } else {
            ungrouped.push(cfg);
        }
    });

    function createLayerItem(cfg, container) {
        const item = document.createElement('div');
        item.className = 'accordion-item';
        item.dataset.layerId = cfg.id;
        item.innerHTML = `
            <div class="accordion-header">
                <div class="accordion-title">
                    <label class="layer-toggle">
                        <input type="checkbox" id="chk-${cfg.id}" data-layer="${cfg.id}">
                        <span class="layer-dot" style="background:${cfg.color}"></span>
                        <i class="fas ${cfg.icon}" style="color:${cfg.color}; font-size:0.85rem; margin-right:6px;"></i>
                        <span>${cfg.name}</span>
                    </label>
                </div>
                <div class="layer-status" id="status-${cfg.id}">
                    <span class="status-dot idle"></span>
                </div>
            </div>
        `;
        container.appendChild(item);

        const checkbox = item.querySelector(`#chk-${cfg.id}`);
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                loadLayer(cfg);
            } else {
                removeLayer(cfg);
            }
        });
    }

    ungrouped.forEach(cfg => createLayerItem(cfg, accordionMenu));

    Object.keys(groups).forEach(groupName => {
        const groupLayers = groups[groupName];
        const groupDiv = document.createElement('div');
        groupDiv.className = 'layer-group';
        
        let headerHtml = `
            <div class="group-header" style="padding: 10px; background: rgba(255,255,255,0.05); margin-top: 10px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.1);">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <label class="layer-toggle" style="font-weight: bold; font-size: 0.95rem; margin-bottom: 0;">
                        <input type="checkbox" class="group-master-chk" data-group="${groupName}">
                        <i class="fas fa-folder-open" style="color:var(--accent); margin-right:6px;"></i>
                        <span>${groupName}</span>
                    </label>
                    <i class="fas fa-chevron-up group-collapse-icon" style="cursor: pointer; color: #9CA3AF; padding: 4px;"></i>
                </div>
                <div style="margin-top: 12px; padding-left: 28px; padding-right: 10px;">
                    <label style="font-size: 0.75rem; color: #9CA3AF; display:flex; align-items:center; gap:8px;">
                        <span>Menos</span>
                        <input type="range" class="group-opacity-slider" data-group="${groupName}" min="0" max="1" step="0.05" value="1" style="flex:1;">
                        <span>Más</span>
                    </label>
                </div>
            </div>
            <div class="group-items" style="padding-left: 10px; margin-top: 5px; border-left: 2px solid rgba(255,255,255,0.05); margin-left: 15px;"></div>
        `;
        groupDiv.innerHTML = headerHtml;
        accordionMenu.appendChild(groupDiv);

        const itemsContainer = groupDiv.querySelector('.group-items');
        groupLayers.forEach(cfg => createLayerItem(cfg, itemsContainer));

        const collapseIcon = groupDiv.querySelector('.group-collapse-icon');
        collapseIcon.addEventListener('click', () => {
            if (itemsContainer.style.display === 'none') {
                itemsContainer.style.display = 'block';
                collapseIcon.className = 'fas fa-chevron-up group-collapse-icon';
            } else {
                itemsContainer.style.display = 'none';
                collapseIcon.className = 'fas fa-chevron-down group-collapse-icon';
            }
        });

        const masterChk = groupDiv.querySelector('.group-master-chk');
        masterChk.addEventListener('change', () => {
            const isChecked = masterChk.checked;
            groupLayers.forEach(cfg => {
                const chk = document.getElementById(`chk-${cfg.id}`);
                if (chk && chk.checked !== isChecked) {
                    chk.checked = isChecked;
                    if (isChecked) loadLayer(cfg);
                    else removeLayer(cfg);
                }
            });
        });

        const slider = groupDiv.querySelector('.group-opacity-slider');
        slider.addEventListener('input', (e) => {
            const opacity = parseFloat(e.target.value);
            groupLayers.forEach(cfg => {
                const state = layerState[cfg.id];
                if (state && state.visible && state.leafletLayer) {
                    state.leafletLayer.eachLayer(l => {
                        if (l.setStyle) {
                            l.setStyle({ fillOpacity: opacity, opacity: opacity });
                        }
                    });
                }
            });
        });
    });

    // Actualizar badge total
    document.querySelector('.badge')?.textContent && (document.querySelector('.badge').textContent = `${layerConfig.length} Capas`);

    // ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ 4. CARGA DE CAPAS (fetch desde GitHub) ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬
    function loadLayer(cfg) {
        const state = layerState[cfg.id];
        const statusEl = document.getElementById(`status-${cfg.id}`);

        // Si ya estÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡ cargada, solo mostrar
        if (state.leafletLayer && state.geojsonData) {
            state.leafletLayer.addTo(map);
            state.visible = true;
            statusEl.innerHTML = `<span class="status-dot active"></span>`;
            updateActivePanel();
            return;
        }

        // Mostrar cargando
        statusEl.innerHTML = `<i class="fas fa-spinner fa-spin" style="color:${cfg.color};font-size:0.75rem;"></i>`;

        const url = cfg.file.startsWith('http') ? cfg.file : REPO + cfg.file;

        let fetchPromise;
        if (url.endsWith('.fgb')) {
            fetchPromise = (async () => {
                statusEl.innerHTML = `<i class="fas fa-spinner fa-spin" style="color:${cfg.color};font-size:0.75rem;"></i>`;
                const response = await fetch(url);
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                
                statusEl.innerHTML = `<i class="fas fa-spinner fa-spin" style="color:${cfg.color};font-size:0.75rem;"></i>`;
                const buffer = await response.arrayBuffer();
                
                const result = flatgeobuf.deserialize(new Uint8Array(buffer));
                
                if (result && result.type === "FeatureCollection") {
                    return result;
                }
                
                const features = [];
                for (const feature of result) {
                    features.push(feature);
                }
                return { type: "FeatureCollection", features: features };
            })();
        } else {
            fetchPromise = fetch(url)
                .then(r => {
                    statusEl.innerHTML = `<i class="fas fa-spinner fa-spin" style="color:${cfg.color};font-size:0.75rem;"></i>`;
                    if (!r.ok) throw new Error(`HTTP ${r.status}`);
                    return r.json();
                });
        }

        fetchPromise
            .then(data => {
                // Reprojectar de EPSG:6370 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ WGS84 antes de renderizar
                const reprojected = reprojectGeoJSON(data);
                state.geojsonData = reprojected; // guardar ya reprojectado para descarga

                const isPoint = isPointLayer(reprojected);
                let leafletLayer;

                if (isPoint) {
                    leafletLayer = L.geoJSON(reprojected, {
                        pointToLayer: (feature, latlng) => L.circleMarker(latlng, {
                            radius: 6,
                            fillColor: cfg.color,
                            color: '#fff',
                            weight: 1.5,
                            opacity: 1,
                            fillOpacity: 0.9
                        }),
                        onEachFeature: bindPopup
                    });
                } else {
                    let fillOp = 0.25;
                    let lineOp = 0.9;
                    if (cfg.group) {
                        const slider = document.querySelector(`.group-opacity-slider[data-group="${cfg.group}"]`);
                        if (slider) {
                            fillOp = parseFloat(slider.value);
                            lineOp = fillOp;
                        } else {
                            fillOp = 1.0;
                            lineOp = 1.0;
                        }
                    }
                    const myRenderer = L.canvas();
                    leafletLayer = L.geoJSON(reprojected, {
                        style: {
                            renderer: myRenderer,
                            color: cfg.color,
                            weight: cfg.group ? 0.5 : 1.8,
                            fillColor: cfg.color,
                            fillOpacity: fillOp,
                            opacity: lineOp
                        },
                        onEachFeature: bindPopup
                    });
                }

                leafletLayer.addTo(map);
                state.leafletLayer = leafletLayer;
                state.visible = true;
                statusEl.innerHTML = `<span class="status-dot active"></span>`;
                updateActivePanel();
            })
            .catch(err => {
                statusEl.innerHTML = `<i class="fas fa-exclamation-triangle" style="color:#FF6B6B;font-size:0.75rem;" title="${err.message}"></i>`;
                document.getElementById(`chk-${cfg.id}`).checked = false;
                console.error(`Error cargando ${cfg.name}:`, err);
            });
    }

    function removeLayer(cfg) {
        const state = layerState[cfg.id];
        if (state.leafletLayer) map.removeLayer(state.leafletLayer);
        state.visible = false;
        document.getElementById(`status-${cfg.id}`).innerHTML = `<span class="status-dot idle"></span>`;
        updateActivePanel();
        updateInfoPanel();
    }

    function isPointLayer(data) {
        if (!data.features || data.features.length === 0) return false;
        const t = data.features[0].geometry.type;
        return t === 'Point' || t === 'MultiPoint';
    }

    function bindPopup(feature, layer) {
        if (!feature.properties) return;
        const props = Object.entries(feature.properties)
            .filter(([k, v]) => v !== null && v !== '')
            .slice(0, 8)
            .map(([k, v]) => `<tr><td><b>${k}</b></td><td>${v}</td></tr>`)
            .join('');
        if (props) {
            layer.bindPopup(`<table class="popup-table">${props}</table>`, { maxWidth: 280 });
        }
    }

    // ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ 5. PANEL ACTIVO (capas activas) ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬
    function updateActivePanel() {
        const activeList = document.getElementById('active-layer-list');
        const activeCount = document.getElementById('active-count');
        const active = layerConfig.filter(c => layerState[c.id].visible);

        activeCount.textContent = `${active.length} Capa${active.length !== 1 ? 's' : ''}`;
        activeList.innerHTML = active.length === 0
            ? `<p class="no-layers-msg">Sin capas activas</p>`
            : active.map(c => {
                const state = layerState[c.id];
                const isPoint = state.geojsonData && isPointLayer(state.geojsonData);
                const isHeatActive = state.heatLayer && map.hasLayer(state.heatLayer);
                const heatBtn = isPoint ? `
                    <button class="heatmap-toggle-btn${isHeatActive ? ' active' : ''}" title="Mapa de calor" data-id="${c.id}">
                        <i class="fas fa-fire"></i>
                    </button>` : '';
                return `
                <div class="active-layer-item" data-id="${c.id}">
                    <span class="layer-dot" style="background:${c.color}"></span>
                    <span class="active-name">${c.name}</span>
                    ${heatBtn}
                    <button class="zoom-layer-btn" title="Zoom a capa" data-id="${c.id}">
                        <i class="fas fa-search-plus"></i>
                    </button>
                    <button class="remove-layer-btn" title="Quitar capa" data-id="${c.id}">
                        <i class="fas fa-times"></i>
                    </button>
                </div>`;
            }).join('');

        // Eventos en botones de la lista activa
        activeList.querySelectorAll('.heatmap-toggle-btn').forEach(btn => {
            btn.addEventListener('click', e => {
                e.stopPropagation();
                const id = btn.dataset.id;
                toggleHeatmap(id);
            });
        });
        activeList.querySelectorAll('.zoom-layer-btn').forEach(btn => {
            btn.addEventListener('click', e => {
                e.stopPropagation();
                const id = btn.dataset.id;
                const layer = layerState[id].leafletLayer;
                if (layer && layer.getBounds) map.fitBounds(layer.getBounds().pad(0.1));
            });
        });
        activeList.querySelectorAll('.remove-layer-btn').forEach(btn => {
            btn.addEventListener('click', e => {
                e.stopPropagation();
                const id = btn.dataset.id;
                const cfg = layerConfig.find(c => c.id === id);
                document.getElementById(`chk-${id}`).checked = false;
                removeLayer(cfg);
            });
        });
        // Sincronizar tabla de atributos
        updateInfoPanel();
        updateDashboard();
    }

    // ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ 5b. TABLA DE ATRIBUTOS ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬
    let currentAttrLayerId = null;

    function updateInfoPanel() {
        const select  = document.getElementById('attr-layer-select');
        const wrapper = document.getElementById('attr-table-wrapper');
        const countEl = document.getElementById('attr-feature-count');
        const active  = layerConfig.filter(c => layerState[c.id].visible);

        // Recrear opciones
        select.innerHTML = '<option value="">- Selecciona una capa -</option>';
        active.forEach(c => {
            const opt = document.createElement('option');
            opt.value = c.id;
            opt.textContent = c.name;
            select.appendChild(opt);
        });

        // Si la capa seleccionada ya no estÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡ activa, limpiar
        if (currentAttrLayerId && !active.find(c => c.id === currentAttrLayerId)) {
            currentAttrLayerId = null;
        }
        // Auto-seleccionar si solo hay una activa
        if (!currentAttrLayerId && active.length === 1) {
            currentAttrLayerId = active[0].id;
        }

        if (currentAttrLayerId) {
            select.value = currentAttrLayerId;
            renderAttrTable(currentAttrLayerId, wrapper, countEl);
        } else {
            countEl.textContent = '';
            wrapper.innerHTML = `<p class="no-layers-msg" style="margin-top:12px;">Activa una capa para ver sus atributos.</p>`;
        }
    }

    function renderAttrTable(layerId, wrapper, countEl) {
        const data = layerState[layerId]?.geojsonData;
        if (!data || !data.features || data.features.length === 0) {
            wrapper.innerHTML = `<p class="no-layers-msg">Sin datos disponibles.</p>`;
            countEl.textContent = '';
            return;
        }
        const features = data.features;
        countEl.textContent = `${features.length} elementos`;

        // Columnas ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âºnicas
        const cols = [];
        features.forEach(f => {
            Object.keys(f.properties || {}).forEach(k => {
                if (!cols.includes(k)) cols.push(k);
            });
        });

        const thead = `<thead><tr>${cols.map(c => `<th>${c}</th>`).join('')}</tr></thead>`;
        const tbody = `<tbody>${features.map(f => {
            const p = f.properties || {};
            return `<tr>${cols.map(c => `<td title="${p[c] ?? ''}">${p[c] ?? ''}</td>`).join('')}</tr>`;
        }).join('')}</tbody>`;

        wrapper.innerHTML = `<table class="attr-full-table">${thead}${tbody}</table>`;
    }

    // ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ 6. DESCARGA ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬
    document.getElementById('download-btn').addEventListener('click', () => {
        const active = layerConfig.filter(c => layerState[c.id].visible && layerState[c.id].geojsonData);
        if (active.length === 0) { alert('Activa al menos una capa primero.'); return; }

        // Descargar la primera capa activa
        const cfg = active[0];
        const data = layerState[cfg.id].geojsonData;
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${cfg.name}.geojson`;
        a.click();
        URL.revokeObjectURL(url);
    });

    // ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ 7. SELECTOR DE MAPA BASE ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬
    document.querySelector('.basemap-select').addEventListener('change', e => {
        Object.values(baseLayers).forEach(l => { if (map.hasLayer(l)) map.removeLayer(l); });
        baseLayers[e.target.value]?.addTo(map);
    });

    // ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ 8. PANELES RETRACTIBLES ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬
    document.querySelectorAll('.panel').forEach(panel => {
        panel.querySelector('.minimize-btn')?.addEventListener('click', e => {
            e.stopPropagation();
            panel.classList.add('minimized');
        });
        panel.addEventListener('click', () => {
            if (panel.classList.contains('minimized')) panel.classList.remove('minimized');
        });
    });

    // ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ 9. BÃƒÆ’Ã†â€™Ãƒâ€¦Ã‚Â¡SQUEDA EN SIDEBAR ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬


    // Selector de capa en el panel info
    document.getElementById('attr-layer-select').addEventListener('change', function () {
        currentAttrLayerId = this.value || null;
        const wrapper = document.getElementById('attr-table-wrapper');
        const countEl = document.getElementById('attr-feature-count');
        if (currentAttrLayerId) {
            renderAttrTable(currentAttrLayerId, wrapper, countEl);
        } else {
            countEl.textContent = '';
            wrapper.innerHTML = `<p class="no-layers-msg" style="margin-top:12px;">Selecciona una capa activa.</p>`;
        }
    });

    // ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ 10. CLASIFICACIÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œN ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬
    const RAMPS = {
        'Semaforo': ['#1A9850','#66BD63','#D9EF8B','#FEE08B','#F46D43','#D73027'],
        'YlOrRd':  ['#FFFFB2','#FED976','#FEB24C','#FD8D3C','#FC4E2A','#E31A1C','#B10026'],
        'Blues':   ['#EFF3FF','#C6DBEF','#9ECAE1','#6BAED6','#3182BD','#08519C','#08306B'],
        'Greens':  ['#F7FCF5','#C7E9C0','#74C476','#41AB5D','#238B45','#006D2C','#00441B'],
        'Reds':    ['#FFF5F0','#FCBBA1','#FC8D59','#EF6548','#D7301F','#990000','#67000D'],
        'Purples': ['#F2F0F7','#DADAEB','#BCBDDC','#9E9AC8','#807DBA','#6A51A3','#3F007D'],
        'RdYlGn':  ['#D73027','#F46D43','#FEE08B','#D9EF8B','#66BD63','#1A9850','#006837'],
        'Viridis': ['#440154','#414487','#2A788E','#22A884','#7AD151','#FDE725'],
        'Plasma':  ['#0D0887','#6A00A8','#B12A90','#E16462','#FCA636','#F0F921']
    };

    const QUAL_PALETTE = [
        '#e41a1c','#377eb8','#4daf4a','#984ea3',
        '#ff7f00','#a65628','#f781bf','#999999',
        '#66c2a5','#fc8d62','#8da0cb','#e78ac3'
    ];

    let selectedRamp  = 'YlOrRd';
    let selectedClasses = 5;
    // Guardar simbologÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­a original por capa
    const origColors = {};  // id -> cfg.color

    // Renderizar ramp picker
    function buildRampPicker() {
        const picker = document.getElementById('cl-ramp-picker');
        picker.innerHTML = '';
        Object.entries(RAMPS).forEach(([name, colors]) => {
            const swatch = document.createElement('div');
            swatch.className = 'cl-ramp-swatch' + (name === selectedRamp ? ' active' : '');
            swatch.title = name;
            swatch.dataset.ramp = name;
            const bar = colors.map(c => `<span style="background:${c};flex:1;height:100%;display:inline-block;"></span>`).join('');
            swatch.innerHTML = `<div class="cl-ramp-bar">${bar}</div><span class="cl-ramp-name">${name}</span>`;
            swatch.addEventListener('click', () => {
                selectedRamp = name;
                document.querySelectorAll('.cl-ramp-swatch').forEach(s => s.classList.remove('active'));
                swatch.classList.add('active');
                refreshLegendPreview();
            });
            picker.appendChild(swatch);
        });
    }

    // Abrir modal
    document.getElementById('classify-btn').addEventListener('click', () => {
        const modal = document.getElementById('classify-modal');
        modal.classList.remove('hidden');
        // Poblar selector de capas activas
        const clLayer = document.getElementById('cl-layer');
        const active = layerConfig.filter(c => layerState[c.id].visible);
        clLayer.innerHTML = '<option value="">- Seleccionar -</option>';
        active.forEach(c => {
            const opt = document.createElement('option');
            opt.value = c.id; opt.textContent = c.name;
            clLayer.appendChild(opt);
        });
        if (active.length === 1) clLayer.value = active[0].id;
        buildRampPicker();
        populateFieldSelector();
    });

    document.getElementById('classify-close').addEventListener('click', () => {
        document.getElementById('classify-modal').classList.add('hidden');
    });
    document.getElementById('classify-modal').addEventListener('click', e => {
        if (e.target === document.getElementById('classify-modal'))
            document.getElementById('classify-modal').classList.add('hidden');
    });

    // Poblar campos segÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âºn capa seleccionada
    function populateFieldSelector() {
        const layerId = document.getElementById('cl-layer').value;
        const fieldSel = document.getElementById('cl-field');
        fieldSel.innerHTML = '<option value="">- Seleccionar campo -</option>';
        document.getElementById('cl-legend').innerHTML = '';
        if (!layerId) return;
        const data = layerState[layerId]?.geojsonData;
        if (!data?.features?.length) return;
        const cols = [];
        data.features.forEach(f => {
            Object.keys(f.properties || {}).forEach(k => {
                if (!cols.includes(k)) cols.push(k);
            });
        });
        cols.forEach(k => {
            const opt = document.createElement('option');
            opt.value = k; opt.textContent = k;
            fieldSel.appendChild(opt);
        });
    }

    document.getElementById('cl-layer').addEventListener('change', populateFieldSelector);
    document.getElementById('cl-field').addEventListener('change', refreshLegendPreview);

    // Mostrar/ocultar opciones graduales
    document.querySelectorAll('input[name="cl-method"]').forEach(r => {
        r.addEventListener('change', () => {
            const isGrad = document.querySelector('input[name="cl-method"]:checked').value === 'graduated';
            document.getElementById('cl-graduated-opts').classList.toggle('hidden', !isGrad);
            refreshLegendPreview();
        });
    });

    // Botones de nÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âºmero de clases
    document.querySelectorAll('.cl-class-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.cl-class-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedClasses = parseInt(btn.dataset.n);
            refreshLegendPreview();
        });
    });

    document.querySelectorAll('input[name="cl-interval"]').forEach(r => {
        r.addEventListener('change', refreshLegendPreview);
    });

    // ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ Previsualizar leyenda ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬
    function refreshLegendPreview() {
        const layerId = document.getElementById('cl-layer').value;
        const field   = document.getElementById('cl-field').value;
        const method  = document.querySelector('input[name="cl-method"]:checked').value;
        const legend  = document.getElementById('cl-legend');
        legend.innerHTML = '';
        if (!layerId || !field) return;
        const data = layerState[layerId]?.geojsonData;
        if (!data?.features?.length) return;

        if (method === 'unique') {
            const uniques = getUniqueValues(data.features, field);
            const ramp = RAMPS[selectedRamp];
            legend.innerHTML = uniques.slice(0, 12).map((v, i) => {
                const col = rampColor(ramp, i / (Math.max(uniques.length - 1, 1)));
                return `<div class="cl-legend-item">
                    <span class="cl-legend-dot" style="background:${col}"></span>
                    <span class="cl-legend-label">${v}</span>
                 </div>`;
            }).join('') + (uniques.length > 12 ? `<p class="cl-legend-more">+${uniques.length - 12} valores más</p>` : '');
        } else {
            const values = data.features
                .map(f => parseFloat(f.properties?.[field]))
                .filter(v => !isNaN(v));
            if (!values.length) { legend.innerHTML = `<p class="cl-legend-more">El campo no tiene valores numÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©ricos.</p>`; return; }
            const interval = document.querySelector('input[name="cl-interval"]:checked').value;
            let breaks;
            if (interval === 'jenks') {
                breaks = getJenksBreaks(values, selectedClasses);
            } else if (interval === 'quantile') {
                breaks = getQuantileBreaks(values, selectedClasses);
            } else {
                breaks = getEqualBreaks(values, selectedClasses);
            }
            const ramp = RAMPS[selectedRamp];
            legend.innerHTML = breaks.map((b, i) => {
                const col = rampColor(ramp, i / (breaks.length - 1 || 1));
                return `<div class="cl-legend-item">
                    <span class="cl-legend-dot" style="background:${col};border-radius:2px;"></span>
                    <span class="cl-legend-label">${b.from.toFixed(1)} - ${b.to.toFixed(1)}</span>
                </div>`;
            }).join('');
        }
    }

    // ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ Aplicar clasificaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬
    document.getElementById('cl-apply-btn').addEventListener('click', () => {
        const layerId = document.getElementById('cl-layer').value;
        const field   = document.getElementById('cl-field').value;
        const method  = document.querySelector('input[name="cl-method"]:checked').value;
        if (!layerId || !field) { alert('Selecciona una capa y un campo.'); return; }

        const state = layerState[layerId];
        const data  = state?.geojsonData;
        if (!data?.features?.length) return;

        // Guardar color original
        const cfg = layerConfig.find(c => c.id === layerId);
        if (!origColors[layerId]) origColors[layerId] = cfg.color;

        if (method === 'unique') {
            const uniques = getUniqueValues(data.features, field);
            const colorMap = {};
            const ramp = RAMPS[selectedRamp];
            uniques.forEach((v, i) => { 
                colorMap[v] = rampColor(ramp, i / (Math.max(uniques.length - 1, 1))); 
            });
            state.leafletLayer.eachLayer(l => {
                const val = l.feature?.properties?.[field];
                const col = colorMap[val] || '#ccc';
                if (l.setStyle) l.setStyle({ color: col, fillColor: col, fillOpacity: 0.8 });
            });
            // Mostrar leyenda en mapa
            showMapLegend(
                cfg.name, field,
                uniques.slice(0, 15).map((v, i) => ({
                    color: colorMap[v],
                    label: v,
                    shape: 'circle'
                }))
            );
        } else {
            const values = data.features.map(f => parseFloat(f.properties?.[field])).filter(v => !isNaN(v));
            const interval = document.querySelector('input[name="cl-interval"]:checked').value;
            let breaks;
            if (interval === 'jenks') {
                breaks = getJenksBreaks(values, selectedClasses);
            } else if (interval === 'quantile') {
                breaks = getQuantileBreaks(values, selectedClasses);
            } else {
                breaks = getEqualBreaks(values, selectedClasses);
            }
            const ramp = RAMPS[selectedRamp];
            state.leafletLayer.eachLayer(l => {
                const val = parseFloat(l.feature?.properties?.[field]);
                const idx = breaks.findIndex(b => val >= b.from && val <= b.to);
                const t   = idx < 0 ? 0 : idx / (breaks.length - 1 || 1);
                const col = rampColor(ramp, t);
                if (l.setStyle) l.setStyle({ color: col, fillColor: col, fillOpacity: 0.8 });
            });
            // Mostrar leyenda en mapa
            showMapLegend(
                cfg.name, field,
                breaks.map((b, i) => ({
                    color: rampColor(ramp, i / (breaks.length - 1 || 1)),
                    label: `${b.from.toFixed(1)} - ${b.to.toFixed(1)}`,
                    shape: 'square'
                }))
            );
        }

        document.getElementById('classify-modal').classList.add('hidden');
    });

    // ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ Restaurar colores originales ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬
    document.getElementById('cl-reset-btn').addEventListener('click', () => {
        const layerId = document.getElementById('cl-layer').value;
        if (!layerId) return;
        const state = layerState[layerId];
        const col = origColors[layerId] || layerConfig.find(c => c.id === layerId)?.color || '#0A84FF';
        state.leafletLayer?.eachLayer(l => {
            if (l.setStyle) l.setStyle({ color: col, fillColor: col, fillOpacity: 0.25 });
        });
        delete origColors[layerId];
        hideMapLegend();
    });

    // ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ Leyenda en mapa ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬
    function showMapLegend(layerName, fieldName, entries) {
        document.getElementById('legend-title').textContent = layerName;
        document.getElementById('legend-field').textContent = fieldName;
        document.getElementById('legend-items').innerHTML = entries.map(e =>
            `<div class="leg-entry">
                <span class="leg-swatch" style="background:${e.color};border-radius:${e.shape === 'circle' ? '50%' : '3px'};"></span>
                <span class="leg-label" title="${e.label}">${e.label}</span>
            </div>`
        ).join('');
        document.getElementById('map-legend').classList.remove('hidden');
    }

    function hideMapLegend() {
        document.getElementById('map-legend').classList.add('hidden');
    }

    document.getElementById('legend-close').addEventListener('click', hideMapLegend);

    // Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Helpers Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
    function getUniqueValues(features, field) {
        const set = new Set();
        features.forEach(f => { if (f.properties?.[field] != null) set.add(String(f.properties[field])); });
        return [...set].sort();
    }

    function getQuantileBreaks(values, n) {
        const sorted = [...values].sort((a, b) => a - b);
        const breaks = [];
        for (let i = 0; i < n; i++) {
            const from = sorted[Math.floor((i / n) * sorted.length)];
            const to   = sorted[Math.floor(((i + 1) / n) * sorted.length) - 1] ?? sorted[sorted.length - 1];
            breaks.push({ from, to });
        }
        return breaks;
    }

    function getEqualBreaks(values, n) {
        const min = Math.min(...values), max = Math.max(...values);
        const step = (max - min) / n;
        return Array.from({ length: n }, (_, i) => ({
            from: min + i * step,
            to:   min + (i + 1) * step
        }));
    }

    function getJenksBreaks(values, n) {
        if (typeof ss === 'undefined' || !ss.jenks) return getQuantileBreaks(values, n);
        const uniqueVals = [...new Set(values)];
        const classes = Math.min(n, uniqueVals.length);
        if (classes <= 1) {
            const min = Math.min(...values), max = Math.max(...values);
            return [{from: min, to: max}];
        }
        
        try {
            const breaksRaw = ss.jenks(values, classes);
            const breaks = [];
            for (let i = 0; i < breaksRaw.length - 1; i++) {
                breaks.push({ from: breaksRaw[i], to: breaksRaw[i+1] });
            }
            return breaks;
        } catch (e) {
            console.error("Error calculating Jenks breaks:", e);
            return getQuantileBreaks(values, n);
        }
    }

    function rampColor(ramp, t) {
        const clamped = Math.max(0, Math.min(1, t));
        const pos = clamped * (ramp.length - 1);
        const lo  = Math.floor(pos), hi = Math.ceil(pos);
        const frac = pos - lo;
        return lerpHex(ramp[lo], ramp[hi], frac);
    }

    function lerpHex(a, b, t) {
        const ar = parseInt(a.slice(1, 3), 16), ag = parseInt(a.slice(3, 5), 16), ab = parseInt(a.slice(5, 7), 16);
        const br = parseInt(b.slice(1, 3), 16), bg = parseInt(b.slice(3, 5), 16), bb = parseInt(b.slice(5, 7), 16);
        const r = Math.round(ar + (br - ar) * t).toString(16).padStart(2, '0');
        const g = Math.round(ag + (bg - ag) * t).toString(16).padStart(2, '0');
        const bv= Math.round(ab + (bb - ab) * t).toString(16).padStart(2, '0');
        return `#${r}${g}${bv}`;
    }

    // Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ 11. SIDEBAR TOGGLE Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
    const sidebar = document.getElementById('sidebar-left');
    const toggleBtn = document.getElementById('sidebar-toggle');
    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
            // Dar tiempo a la transiciÃƒÂ³n CSS antes de redimensionar el mapa
            setTimeout(() => { map.invalidateSize(); }, 450);
        });
    }

    // ─── 12. DASHBOARD LOGIC ───────────────────────────────────────────────────────
    const btnMap  = document.getElementById('view-map-btn');
    const btnDash = document.getElementById('view-dash-btn');
    const viewMap  = document.getElementById('map-view');
    const viewDash = document.getElementById('dashboard-view');

    let chartVariable = null;
    let chartCapas = null;
    let currentChartType = 'bar'; // 'bar', 'doughnut', 'horizontalBar'
    let activeFilter = null; // { layerId, field, value }

    function switchToMap() {
        btnMap.classList.add('active');
        btnDash.classList.remove('active');
        viewMap.style.display = 'flex';
        viewDash.style.display = 'none';
        setTimeout(() => { map.invalidateSize(); }, 150);
    }

    function switchToDash() {
        btnDash.classList.add('active');
        btnMap.classList.remove('active');
        viewMap.style.display = 'none';
        viewDash.style.display = 'block';
        setTimeout(updateDashboard, 60);
    }

    if (btnMap)  btnMap.addEventListener('click', switchToMap);
    if (btnDash) btnDash.addEventListener('click', switchToDash);

    // Selector de tipo de grÃ¡fico
    document.querySelectorAll('.dash-chart-type-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.dash-chart-type-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentChartType = btn.dataset.type;
            updateVariableChart();
        });
    });

    function updateDashboard() {
        if (!viewDash || viewDash.style.display !== 'block') return;

        let totalFeatures   = 0;
        let activeLayerCount = 0;
        const featuresPerLayer = {};
        const featuresPerMun   = {};
        const layerColors      = [];

        layerConfig.forEach(cfg => {
            const st = layerState[cfg.id];
            if (!st.visible || !st.geojsonData) return;

            activeLayerCount++;
            const count = st.geojsonData.features.length;
            totalFeatures += count;
            featuresPerLayer[cfg.name] = count;
            layerColors.push(cfg.color);

            st.geojsonData.features.forEach(f => {
                const p   = f.properties || {};
                let mun = p.nom_mun || p.inmueble_c_nom_mun || p.MUNICIPIO || p.NOM_MUN || p.Municipio || p.nom_ent || 'Sin municipio';
                mun = mun.replace(/M%NDEZ/g, 'MÃ‰NDEZ').replace(/C\?RDENAS/g, 'CÃRDENAS').replace(/BALANC\?N/g, 'BALANCÃN');
                if (!featuresPerMun[mun]) featuresPerMun[mun] = 0;
                featuresPerMun[mun]++;
            });
        });

        const munCount = Object.keys(featuresPerMun).length;

        // KPIs
        document.getElementById('kpi-layers').textContent  = activeLayerCount;
        document.getElementById('kpi-features').textContent = totalFeatures.toLocaleString();

        // --- GrÃ¡fico: Elementos por Capa (dona) ---
        const ctxCap = document.getElementById('chart-capas');
        if (chartCapas) { chartCapas.destroy(); chartCapas = null; }
        const emCap = document.getElementById('dash-empty-cap');

        if (activeLayerCount > 0 && ctxCap) {
            if (emCap) emCap.classList.add('hidden');
            ctxCap.style.display = 'block';
            chartCapas = new Chart(ctxCap, {
                type: 'doughnut',
                data: {
                    labels: Object.keys(featuresPerLayer),
                    datasets: [{ data: Object.values(featuresPerLayer), backgroundColor: layerColors, borderWidth: 2, borderColor: '#0f1319' }]
                },
                options: {
                    responsive: true, maintainAspectRatio: false,
                    plugins: { legend: { position: 'bottom', labels: { color: '#fff', font: { family: 'Montserrat', size: 11 }, padding: 16 } } }
                }
            });
        } else if (ctxCap) {
            ctxCap.style.display = 'none';
            if (emCap) emCap.classList.remove('hidden');
        }

        // --- Sincronizar selectores de variable ---
        const varLayerSel = document.getElementById('dash-var-layer');
        if (varLayerSel) {
            const prevVal = varLayerSel.value;
            varLayerSel.innerHTML = '<option value="">- Seleccionar Capa -</option>';
            
            layerConfig.forEach(cfg => {
                if (layerState[cfg.id].visible && layerState[cfg.id].geojsonData) {
                    const opt = document.createElement('option');
                    opt.value = cfg.id;
                    opt.textContent = cfg.name;
                    varLayerSel.appendChild(opt);
                }
            });

            if (prevVal && varLayerSel.querySelector(`option[value="${prevVal}"]`)) {
                varLayerSel.value = prevVal;
            } else if (varLayerSel.options.length > 1) {
                varLayerSel.selectedIndex = 1;
            }
            
            populateVarFieldSelector();
        }

        // --- Selector de capas en el Dashboard (Detalle Tabla) ---
        const dashSel = document.getElementById('dash-layer-select');
        if (dashSel) {
            const prev = dashSel.value;
            dashSel.innerHTML = '<option value="">- Selecciona una capa -</option>';
            layerConfig.forEach(cfg => {
                if (layerState[cfg.id].visible && layerState[cfg.id].geojsonData) {
                    const opt = document.createElement('option');
                    opt.value = cfg.id;
                    opt.textContent = cfg.name;
                    dashSel.appendChild(opt);
                }
            });
            if (prev && dashSel.querySelector(`option[value="${prev}"]`)) {
                dashSel.value = prev;
            }
            renderDashAttrTable(dashSel.value);
        }
    }

    function populateVarFieldSelector() {
        const layerSel = document.getElementById('dash-var-layer');
        const fieldSel = document.getElementById('dash-var-field');
        const fieldSel2 = document.getElementById('dash-var-field-2');
        if (!layerSel || !fieldSel || !fieldSel2) return;

        const layerId = layerSel.value;
        const prevField = fieldSel.value;
        const prevField2 = fieldSel2.value;

        fieldSel.innerHTML = '<option value="">- Variable principal -</option>';
        fieldSel2.innerHTML = '<option value="">- Comparar con (Opcional) -</option>';

        if (!layerId || !layerState[layerId]?.geojsonData) {
            updateVariableChart();
            return;
        }

        const features = layerState[layerId].geojsonData.features;
        if (!features.length) {
            updateVariableChart();
            return;
        }

        const ignoreList = ['geometry', 'fid', 'g_id', 'x_long', 'y_lat', 'latitud', 'longitud', 'cve_ent', 'cvegeomun', 'cvegeoloc'];
        const fields = [];
        features.forEach(f => {
            Object.keys(f.properties || {}).forEach(k => {
                if (!fields.includes(k) && !ignoreList.includes(k)) {
                    fields.push(k);
                }
            });
        });

        fields.forEach(f => {
            const opt = document.createElement('option');
            opt.value = f;
            opt.textContent = f;
            fieldSel.appendChild(opt);

            const opt2 = document.createElement('option');
            opt2.value = f;
            opt2.textContent = f;
            fieldSel2.appendChild(opt2);
        });

        if (prevField && fieldSel.querySelector(`option[value="${prevField}"]`)) {
            fieldSel.value = prevField;
        } else if (fieldSel.options.length > 1) {
            const defaults = ['tiponivelsub_c_servicion2', 'nivel_atencion', 'nom_institucion', 'estrato_unidad', 'clase', 'inmueble_c_nom_mun', 'nom_mun'];
            const match = defaults.find(d => fields.includes(d));
            if (match) {
                fieldSel.value = match;
            } else {
                fieldSel.selectedIndex = 1;
            }
        }

        if (prevField2 && fieldSel2.querySelector(`option[value="${prevField2}"]`)) {
            fieldSel2.value = prevField2;
        }

        updateVariableChart();
    }

    function updateVariableChart() {
        const layerId = document.getElementById('dash-var-layer')?.value;
        const field = document.getElementById('dash-var-field')?.value;
        const field2 = document.getElementById('dash-var-field-2')?.value;
        const ctxVar = document.getElementById('chart-variable');
        const emVar = document.getElementById('dash-empty-var');
        const statsRow = document.getElementById('dash-stats-row');

        if (chartVariable) {
            chartVariable.destroy();
            chartVariable = null;
        }

        if (!layerId || !field || !layerState[layerId]?.geojsonData || !ctxVar) {
            if (ctxVar) ctxVar.style.display = 'none';
            if (emVar) emVar.classList.remove('hidden');
            if (statsRow) statsRow.classList.add('hidden');
            return;
        }

        if (emVar) emVar.classList.add('hidden');
        ctxVar.style.display = 'block';

        const features = layerState[layerId].geojsonData.features;
        const themeColor = layerConfig.find(c => c.id === layerId)?.color || '#0A84FF';

        // 1. Obtener y verificar valores vÃ¡lidos
        const rawValues = features.map(f => f.properties?.[field]);
        const validValues = rawValues.filter(v => v !== undefined && v !== null && v !== '');

        // 2. DetecciÃ³n numÃ©rica
        const numValues = validValues.map(v => parseFloat(v)).filter(v => !isNaN(v));
        const isNumeric = validValues.length > 0 && (numValues.length / validValues.length) >= 0.8;

        let labels = [];
        let chartDatasets = [];

        // Si tenemos segunda variable, hacemos anÃ¡lisis bivariado
        if (field2) {
            if (statsRow) statsRow.classList.add('hidden'); // No aplica estadÃ­sticas simples para bivariado

            // Recopilar categorÃ­as de ambas variables
            const data2D = {}; // val1 -> { val2 -> count }
            const uniqueVal2 = new Set();

            features.forEach(f => {
                const p = f.properties || {};
                let val1 = p[field];
                let val2 = p[field2];

                if (val1 === undefined || val1 === null || val1 === '') val1 = 'N/A';
                if (val2 === undefined || val2 === null || val2 === '') val2 = 'N/A';

                if (typeof val1 === 'string') val1 = val1.replace(/M%NDEZ/g, 'MÃ‰NDEZ').replace(/C\?RDENAS/g, 'CÃRDENAS').replace(/BALANC\?N/g, 'BALANCÃN');
                if (typeof val2 === 'string') val2 = val2.replace(/M%NDEZ/g, 'MÃ‰NDEZ').replace(/C\?RDENAS/g, 'CÃRDENAS').replace(/BALANC\?N/g, 'BALANCÃN');

                if (!data2D[val1]) data2D[val1] = {};
                data2D[val1][val2] = (data2D[val1][val2] || 0) + 1;
                uniqueVal2.add(val2);
            });

            // Agrupar y ordenar etiquetas del eje principal (Top 12)
            const field1Counts = {};
            features.forEach(f => {
                let v = f.properties?.[field] || 'N/A';
                if (typeof v === 'string') v = v.replace(/M%NDEZ/g, 'MÃ‰NDEZ').replace(/C\?RDENAS/g, 'CÃRDENAS').replace(/BALANC\?N/g, 'BALANCÃN');
                field1Counts[v] = (field1Counts[v] || 0) + 1;
            });
            const topField1 = Object.entries(field1Counts).sort((a,b) => b[1] - a[1]).slice(0, 12).map(e => e[0]);
            labels = topField1;

            // Generar datasets apilados
            const listVal2 = [...uniqueVal2].sort();
            const palette = [
                '#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00',
                '#a65628','#f781bf','#999999','#66c2a5','#fc8d62',
                '#8da0cb','#e78ac3','#a6d854','#ffd92f','#e5c494'
            ];

            chartDatasets = listVal2.map((val2, idx) => {
                const dataArr = topField1.map(val1 => (data2D[val1]?.[val2] || 0));
                return {
                    label: val2,
                    data: dataArr,
                    backgroundColor: palette[idx % palette.length],
                    borderRadius: 4
                };
            });

        } else {
            // AnÃ¡lisis monovariable normal (existente)
            let data = [];
            const counts = {};

            if (isNumeric) {
                if (statsRow) statsRow.classList.remove('hidden');
                const sum = numValues.reduce((a, b) => a + b, 0);
                const max = Math.max(...numValues);
                const min = Math.min(...numValues);
                const avg = sum / numValues.length;

                document.getElementById('stat-sum').textContent = sum.toLocaleString(undefined, {maximumFractionDigits: 2});
                document.getElementById('stat-avg').textContent = avg.toLocaleString(undefined, {maximumFractionDigits: 2});
                document.getElementById('stat-max').textContent = max.toLocaleString(undefined, {maximumFractionDigits: 2});
                document.getElementById('stat-min').textContent = min.toLocaleString(undefined, {maximumFractionDigits: 2});

                const binsCount = 6;
                const binSize = (max - min) / binsCount;
                const bins = [];
                for (let i = 0; i < binsCount; i++) {
                    bins.push({ from: min + i * binSize, to: min + (i + 1) * binSize, count: 0 });
                }

                numValues.forEach(val => {
                    const bin = bins.find(b => val >= b.from && val <= b.to) || bins[bins.length - 1];
                    if (bin) bin.count++;
                });

                labels = bins.map(b => `${b.from.toFixed(1)} - ${b.to.toFixed(1)}`);
                data = bins.map(b => b.count);
            } else {
                if (statsRow) statsRow.classList.add('hidden');

                validValues.forEach(v => {
                    let val = v;
                    if (typeof val === 'string') {
                        val = val.replace(/M%NDEZ/g, 'MÃ‰NDEZ').replace(/C\?RDENAS/g, 'CÃRDENAS').replace(/BALANC\?N/g, 'BALANCÃN');
                    }
                    counts[val] = (counts[val] || 0) + 1;
                });

                const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 15);
                labels = sorted.map(e => e[0]);
                data = sorted.map(e => e[1]);
            }

            const isHex = themeColor.startsWith('#');
            chartDatasets = [{
                label: 'Cantidad',
                data: data,
                backgroundColor: isHex ? themeColor + '4D' : themeColor,
                borderColor: themeColor,
                borderWidth: 2,
                borderRadius: 4,
                hoverBackgroundColor: isHex ? themeColor + '80' : themeColor,
                hoverBorderColor: themeColor
            }];
        }

        // ConfiguraciÃ³n de ChartJS segÃºn tipo
        let chartType = currentChartType === 'horizontalBar' ? 'bar' : currentChartType;
        let indexAxis = currentChartType === 'horizontalBar' ? 'y' : 'x';

        chartVariable = new Chart(ctxVar, {
            type: chartType,
            data: {
                labels: labels,
                datasets: chartDatasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: indexAxis,
                onClick: (event, elements) => {
                    if (elements.length > 0 && !field2) {
                        const idx = elements[0].index;
                        const clickedLabel = labels[idx];
                        applyDashboardFilter(layerId, field, clickedLabel, isNumeric);
                    }
                },
                scales: {
                    y: { 
                        beginAtZero: true, 
                        stacked: (field2 ? true : false),
                        grid: { color: 'rgba(255,255,255,0.07)' }, 
                        ticks: { color: '#9CA3AF', font: { family: 'Montserrat', size: 11 } } 
                    },
                    x: { 
                        stacked: (field2 ? true : false),
                        grid: { display: false }, 
                        ticks: { color: '#9CA3AF', font: { family: 'Montserrat', size: 10 }, maxRotation: 45 } 
                    }
                },
                plugins: {
                    legend: { display: (currentChartType === 'doughnut' || field2 ? true : false) }
                }
            }
        });
    }

    function applyDashboardFilter(layerId, field, value, isNumeric) {
        const state = layerState[layerId];
        if (!state || !state.leafletLayer) return;

        // Toggle filtro
        if (activeFilter && activeFilter.layerId === layerId && activeFilter.field === field && activeFilter.value === value) {
            // Desactivar
            activeFilter = null;
            state.leafletLayer.eachLayer(l => {
                const origCol = origColors[layerId] || layerConfig.find(c => c.id === layerId)?.color || '#0A84FF';
                if (l.setStyle) {
                    l.setStyle({ fillOpacity: 0.25, opacity: 0.8 });
                }
            });
        } else {
            // Activar
            activeFilter = { layerId, field, value };

            let checkFn;
            if (isNumeric) {
                const parts = value.split(' - ');
                const from = parseFloat(parts[0]);
                const to = parseFloat(parts[1]);
                checkFn = (val) => val >= from && val <= to;
            } else {
                checkFn = (val) => String(val) === String(value);
            }

            state.leafletLayer.eachLayer(l => {
                const val = l.feature?.properties?.[field];
                if (checkFn(val)) {
                    if (l.setStyle) l.setStyle({ fillOpacity: 0.8, opacity: 0.9 });
                } else {
                    if (l.setStyle) l.setStyle({ fillOpacity: 0.05, opacity: 0.05 });
                }
            });
        }
        
        renderDashAttrTable(document.getElementById('dash-layer-select').value);
    }

    // Configurar listeners de variables
    const varLayerSel = document.getElementById('dash-var-layer');
    if (varLayerSel) {
        varLayerSel.addEventListener('change', populateVarFieldSelector);
    }
    const varFieldSel = document.getElementById('dash-var-field');
    if (varFieldSel) {
        varFieldSel.addEventListener('change', updateVariableChart);
    }
    const varFieldSel2 = document.getElementById('dash-var-field-2');
    if (varFieldSel2) {
        varFieldSel2.addEventListener('change', updateVariableChart);
    }

    // Configurar exportaciones
    document.getElementById('btn-export-png')?.addEventListener('click', () => {
        if (!chartVariable) return;
        const link = document.createElement('a');
        link.download = `grafico_analisis.png`;
        link.href = chartVariable.toBase64Image();
        link.click();
    });

    document.getElementById('btn-export-csv')?.addEventListener('click', () => {
        if (!chartVariable) return;
        let csv = 'Variable,Cantidad\n';
        chartVariable.data.labels.forEach((lbl, idx) => {
            csv += `"${lbl}",${chartVariable.data.datasets[0].data[idx]}\n`;
        });
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.download = `datos_analisis.csv`;
        link.href = URL.createObjectURL(blob);
        link.click();
    });

    function renderDashAttrTable(layerId) {
        const wrap = document.getElementById('dash-attr-wrapper');
        if (!wrap) return;
        if (!layerId || !layerState[layerId]?.geojsonData) {
            wrap.innerHTML = '<p class="no-layers-msg">Selecciona una capa para ver su tabla de atributos.</p>';
            return;
        }
        
        let features = layerState[layerId].geojsonData.features;

        // Si hay un filtro de dashboard activo, reducir la tabla de atributos
        if (activeFilter && activeFilter.layerId === layerId) {
            const { field, value } = activeFilter;
            const isNumeric = value.includes(' - ');
            if (isNumeric) {
                const parts = value.split(' - ');
                const from = parseFloat(parts[0]);
                const to = parseFloat(parts[1]);
                features = features.filter(f => {
                    const val = parseFloat(f.properties?.[field]);
                    return val >= from && val <= to;
                });
            } else {
                features = features.filter(f => String(f.properties?.[field]) === String(value));
            }
        }

        if (!features.length) { wrap.innerHTML = '<p class="no-layers-msg">La capa no tiene elementos coincidiendo con el filtro.</p>'; return; }

        const keys = Object.keys(features[0].properties || {}).filter(k => !['geometry','fid','g_id'].includes(k)).slice(0, 12);
        let html = `<table class="attr-full-table"><thead><tr>${keys.map(k => `<th>${k}</th>`).join('')}</tr></thead><tbody>`;
        features.slice(0, 200).forEach(f => {
            const p = f.properties || {};
            html += `<tr>${keys.map(k => `<td title="${p[k] ?? ''}">${p[k] ?? ''}</td>`).join('')}</tr>`;
        });
        html += '</tbody></table>';
        wrap.innerHTML = html;
    }

    const dashSel = document.getElementById('dash-layer-select');
    if (dashSel) {
        dashSel.addEventListener('change', () => renderDashAttrTable(dashSel.value));
    }

    // â”€â”€â”€ MAPAS DE CALOR (Heatmap) â”€â”€â”€
    function toggleHeatmap(layerId) {
        const state = layerState[layerId];
        if (!state || !state.geojsonData) return;

        const isPoint = isPointLayer(state.geojsonData);
        if (!isPoint) return;

        const btn = document.querySelector(`.heatmap-toggle-btn[data-id="${layerId}"]`);

        if (!state.heatLayer) {
            const points = state.geojsonData.features.map(f => {
                const coords = f.geometry.coordinates;
                const lat = coords[1];
                const lng = coords[0];
                return [lat, lng, 0.6];
            }).filter(p => !isNaN(p[0]) && !isNaN(p[1]));

            state.heatLayer = L.heatLayer(points, {
                radius: 20,
                blur: 15,
                maxZoom: 18,
                gradient: { 0.4: 'blue', 0.65: 'yellow', 1: 'red' }
            });
        }

        if (map.hasLayer(state.heatLayer)) {
            map.removeLayer(state.heatLayer);
            map.addLayer(state.leafletLayer);
            btn?.classList.remove('active');
        } else {
            map.removeLayer(state.leafletLayer);
            map.addLayer(state.heatLayer);
            btn?.classList.add('active');
        }
    }

    // â”€â”€â”€ ÃREA DE INFLUENCIA (BÃšFER) â”€â”€â”€
    let bufferCircle = null;
    let bufferMarker = null;
    let isBufferActive = false;

    const bufActBtn = document.getElementById('buffer-activate-btn');
    const bufRadiusInput = document.getElementById('buffer-radius');
    const bufResults = document.getElementById('buffer-results');
    const bufResultsList = document.getElementById('buffer-results-list');
    const bufClearBtn = document.getElementById('buffer-clear-btn');

    if (bufActBtn) {
        bufActBtn.addEventListener('click', () => {
            isBufferActive = !isBufferActive;
            if (isBufferActive) {
                bufActBtn.innerHTML = '<i class="fas fa-hand-pointer"></i> Haz clic en el mapa';
                bufActBtn.style.background = '#FF9F43';
                map.getContainer().style.cursor = 'crosshair';
            } else {
                resetBufferUI();
            }
        });
    }

    if (bufClearBtn) {
        bufClearBtn.addEventListener('click', clearBuffer);
    }

    if (bufRadiusInput) {
        bufRadiusInput.addEventListener('change', () => {
            if (bufferCircle && bufferMarker) {
                const radius = parseFloat(bufRadiusInput.value) || 1500;
                bufferCircle.setRadius(radius);
                calculateBufferStats(bufferMarker.getLatLng(), radius);
            }
        });
    }

    map.on('click', e => {
        if (!isBufferActive) return;

        const latlng = e.latlng;
        const radius = parseFloat(bufRadiusInput.value) || 1500;

        clearBuffer();

        bufferMarker = L.marker(latlng, { draggable: true }).addTo(map);
        bufferCircle = L.circle(latlng, {
            radius: radius,
            color: '#FF9F43',
            fillColor: '#FF9F43',
            fillOpacity: 0.15,
            weight: 2
        }).addTo(map);

        calculateBufferStats(latlng, radius);

        bufferMarker.on('drag', dragEvent => {
            const newLatLng = dragEvent.latlng;
            bufferCircle.setLatLng(newLatLng);
            calculateBufferStats(newLatLng, parseFloat(bufRadiusInput.value) || 1500);
        });

        resetBufferUI();
    });

    function resetBufferUI() {
        isBufferActive = false;
        if (bufActBtn) {
            bufActBtn.innerHTML = '<i class="fas fa-crosshairs"></i> Activar marcador';
            bufActBtn.style.background = 'var(--accent)';
        }
        map.getContainer().style.cursor = '';
    }

    function clearBuffer() {
        if (bufferCircle) { map.removeLayer(bufferCircle); bufferCircle = null; }
        if (bufferMarker) { map.removeLayer(bufferMarker); bufferMarker = null; }
        if (bufResults) bufResults.style.display = 'none';
        if (bufResultsList) bufResultsList.innerHTML = '';
        resetBufferUI();
    }

    function calculateBufferStats(centerLatLng, radius) {
        if (!bufResults || !bufResultsList) return;

        bufResults.style.display = 'block';
        bufResultsList.innerHTML = '';

        layerConfig.forEach(cfg => {
            const state = layerState[cfg.id];
            if (!state || !state.visible || !state.geojsonData) return;

            let count = 0;
            state.geojsonData.features.forEach(f => {
                const coords = f.geometry.coordinates;
                if (f.geometry.type === 'Point') {
                    const fLatLng = L.latLng(coords[1], coords[0]);
                    const dist = centerLatLng.distanceTo(fLatLng);
                    if (dist <= radius) {
                        count++;
                    }
                }
            });

            if (count > 0) {
                const li = document.createElement('li');
                li.style.display = 'flex';
                li.style.justifyContent = 'space-between';
                li.innerHTML = `<span><span style="display:inline-block; width:8px; height:8px; background:${cfg.color}; border-radius:50%; margin-right:6px;"></span>${cfg.name}</span><strong>${count}</strong>`;
                bufResultsList.appendChild(li);
            }
        });

        if (bufResultsList.children.length === 0) {
            bufResultsList.innerHTML = '<li style="color:#9ca3af; text-align:center;">Ningun elemento en el radio</li>';
        }
    }

    // Inicializar
    updateActivePanel();
    updateInfoPanel();
});

