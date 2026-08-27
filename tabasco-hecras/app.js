/* ─── CONFIGURATION ────────────────────────────────────────────────────────────
 * To add your own maps, edit the MAPS array below.
 * To connect a PDF, set PDF_PATH to the relative path of your file.
 * ─────────────────────────────────────────────────────────────────────────── */

const PDF_PATH = 'https://docs.google.com/document/d/1wEy1rL-Wo-gYg3sonGtsPMumI939OhV8/preview';

const MAPS = [];

// ─── PLACEHOLDER MAPS (remove when real maps are added) ──────────────────────
const PLACEHOLDER_MAPS = [
    { title: 'Tirantes máximos',     meta: 'Tr 100 años · Pendiente' },
    { title: 'Velocidades de flujo', meta: 'HEC-RAS 2D · Pendiente' },
    { title: 'Mancha de inundación', meta: 'Extensión máxima · Pendiente' },
    { title: 'Tiempo de llegada',    meta: 'Propagación de onda · Pendiente' },
];

// ─── DOM READY ────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

    setupInteractiveMaps();
    setupLightbox();
    setupScrollReveal();

});

// ─── INTERACTIVE MAPS (Style Geovisor) ─────────────────────────────────────────
function setupInteractiveMaps() {
    const btns = document.querySelectorAll('.map-btn');
    const mapImg = document.getElementById('main-map-img');

    if (btns.length > 0 && mapImg) {
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remover active de todos
                btns.forEach(b => b.classList.remove('active'));
                // Agregar active al clickeado
                btn.classList.add('active');
                // Cambiar la imagen
                mapImg.src = btn.getAttribute('data-src');
            });
        });
    }
}

// ─── MAPS GALLERY ─────────────────────────────────────────────────────────────
function buildMapsGallery() {
    const gallery = document.getElementById('maps-gallery');
    if (!gallery) return;

    // Decide whether to use real maps or placeholders
    const items = MAPS.length > 0 ? MAPS : PLACEHOLDER_MAPS;
    const isPlaceholder = MAPS.length === 0;

    items.forEach((item, i) => {
        const card = document.createElement('div');
        card.className = 'map-thumb reveal';
        card.style.transitionDelay = `${i * 0.08}s`;

        if (!isPlaceholder && item.src) {
            // Real image thumbnail
            card.innerHTML = `
                <img class="map-thumb-img" src="${item.src}" alt="${item.title}" loading="lazy">
                <div class="map-thumb-info">
                    <div class="map-thumb-title">${item.title}</div>
                    <div class="map-thumb-meta">${item.meta}</div>
                </div>`;
            card.addEventListener('click', () => openLightbox(item.src, item.title));
        } else {
            // Placeholder card
            card.innerHTML = `
                <div class="map-thumb-placeholder">
                    <i class="fa-regular fa-image"></i>
                    <span>En proceso</span>
                </div>
                <div class="map-thumb-info">
                    <div class="map-thumb-title">${item.title}</div>
                    <div class="map-thumb-meta">${item.meta}</div>
                </div>`;
            card.style.opacity = '0.55';
            card.style.cursor = 'default';
        }

        gallery.appendChild(card);
    });
}

// ─── LIGHTBOX ─────────────────────────────────────────────────────────────────
function setupLightbox() {
    const lb = document.getElementById('lightbox');
    const lbClose = document.getElementById('lb-close');
    if (!lb || !lbClose) return;

    lbClose.addEventListener('click', closeLightbox);
    lb.addEventListener('click', (e) => { if (e.target === lb) closeLightbox(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
}

function openLightbox(src, caption) {
    const lb = document.getElementById('lightbox');
    document.getElementById('lb-img').src = src;
    document.getElementById('lb-caption').textContent = caption;
    lb.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').classList.add('hidden');
    document.body.style.overflow = '';
}

// ─── PDF ──────────────────────────────────────────────────────────────────────
function openPDF() {
    if (!PDF_PATH) {
        // No PDF assigned yet — show a friendly notice
        alert('El documento metodológico estará disponible próximamente.');
        return;
    }
    const modal = document.getElementById('pdf-modal');
    document.getElementById('pdf-frame').src = PDF_PATH;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closePDF() {
    const modal = document.getElementById('pdf-modal');
    modal.classList.add('hidden');
    document.getElementById('pdf-frame').src = '';
    document.body.style.overflow = '';
}

// ─── SCROLL REVEAL ────────────────────────────────────────────────────────────
function setupScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    // Observe elements with .reveal class
    document.querySelectorAll('.stat-card, .step-item, .doc-card, .map-thumb, .layer-item').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

// ─── CHATBOT MAPITA ───────────────────────────────────────────────────────────
const MAPITA_QA = [
    {
        "keywords":  [
                         "hola",
                         "buenas",
                         "buenos dias",
                         "buen dia",
                         "hey",
                         "saludos",
                         "que tal",
                         "como estas"
                     ],
        "answer":  "¡Hola! 👋 Bienvenido. Soy **Mapita** 🌎, tu asistente técnico sobre la metodología de modelación de inundaciones en Tabasco. ¿Sobre qué tema te gustaría saber? ✨",
        "noSuggestions":  true
    },
    {
        "keywords":  [
                         "¿Cuál es el objetivo principal del documento técnico ampliado",
                         "cuál",
                         "objetivo",
                         "principal",
                         "documento",
                         "técnico",
                         "ampliado"
                     ],
        "answer":  "Desarrollar con nivel de detalle técnico ampliado la metodología propuesta para la modelación de inundaciones en el estado de Tabasco, México."
    },
    {
        "keywords":  [
                         "¿Qué abarca el estudio desde el inicio hasta el final",
                         "abarca",
                         "estudio",
                         "desde",
                         "inicio",
                         "hasta",
                         "final"
                     ],
        "answer":  "Desde la recopilación de insumos base hasta la generación de mapas de peligro por periodo de retorno."
    },
    {
        "keywords":  [
                         "¿Cuál es el componente central del documento",
                         "cuál",
                         "componente",
                         "central",
                         "documento"
                     ],
        "answer":  "El capítulo 8, dedicado al cumplimiento de la normatividad nacional aplicable."
    },
    {
        "keywords":  [
                         "¿Qué instituciones se detallan en el capítulo 8",
                         "instituciones",
                         "detallan",
                         "capítulo"
                     ],
        "answer":  "CENAPRED, CONAGUA y SEDATU."
    },
    {
        "keywords":  [
                         "¿Qué incluye la matriz resumen de cumplimiento",
                         "incluye",
                         "matriz",
                         "resumen",
                         "cumplimiento"
                     ],
        "answer":  "Facilita la revisión institucional del estudio mostrando cómo cada requerimiento normativo es atendido."
    },
    {
        "keywords":  [
                         "¿Cuál es el propósito del capítulo de cuestionamientos críticos",
                         "cuál",
                         "propósito",
                         "capítulo",
                         "cuestionamientos",
                         "críticos"
                     ],
        "answer":  "Orientar al equipo técnico a mantener una postura de mejora continua y transparencia metodológica."
    },
    {
        "keywords":  [
                         "¿Qué productos finales se mencionan en el resumen",
                         "productos",
                         "finales",
                         "mencionan",
                         "resumen"
                     ],
        "answer":  "Mapas de peligro por periodo de retorno y memoria de cálculo."
    },
    {
        "keywords":  [
                         "¿Qué tipo de modelo hidráulico se propone",
                         "tipo",
                         "modelo",
                         "hidráulico",
                         "propone"
                     ],
        "answer":  "Un modelo hidráulico bidimensional (2D)."
    },
    {
        "keywords":  [
                         "¿Qué estrategia computacional se describe",
                         "estrategia",
                         "computacional",
                         "describe"
                     ],
        "answer":  "La necesaria para abordar un territorio de escala estatal sin sacrificar resolución en zonas urbanas prioritarias."
    },
    {
        "keywords":  [
                         "¿Qué insumos base se recopilan al inicio",
                         "insumos",
                         "base",
                         "recopilan",
                         "inicio"
                     ],
        "answer":  "Topografía, precipitación, cuencas, suelos e infraestructura hidráulica."
    },
    {
        "keywords":  [
                         "¿Cuál es el énfasis especial del documento",
                         "cuál",
                         "énfasis",
                         "especial",
                         "documento"
                     ],
        "answer":  "El cumplimiento de la normatividad nacional."
    },
    {
        "keywords":  [
                         "¿Qué recomendaciones incluye el capítulo 8",
                         "recomendaciones",
                         "incluye",
                         "capítulo"
                     ],
        "answer":  "Recomendaciones específicas y accionables para cada institución."
    },
    {
        "keywords":  [
                         "¿Qué cierra el documento",
                         "cierra",
                         "documento"
                     ],
        "answer":  "Un capítulo de cuestionamientos críticos, consideraciones de calidad y referencias bibliográficas."
    },
    {
        "keywords":  [
                         "¿Para qué sirven los mapas de peligro generados",
                         "para",
                         "sirven",
                         "mapas",
                         "peligro",
                         "generados"
                     ],
        "answer":  "Para la gestión de riesgos, planeación territorial y concientización pública."
    },
    {
        "keywords":  [
                         "¿Qué nivel de detalle tiene el documento",
                         "nivel",
                         "detalle",
                         "tiene",
                         "documento"
                     ],
        "answer":  "Nivel de detalle técnico ampliado."
    },
    {
        "keywords":  [
                         "¿Qué es un Modelo Digital de Elevación (MDE)",
                         "modelo",
                         "digital",
                         "elevación"
                     ],
        "answer":  "Es un modelo de terreno de alta resolución que define la topografía base para simular el flujo del agua."
    },
    {
        "keywords":  [
                         "¿Qué resolución ideal se requiere para el MDE",
                         "resolución",
                         "ideal",
                         "requiere",
                         "para"
                     ],
        "answer":  "Idealmente ~5 metros de resolución."
    },
    {
        "keywords":  [
                         "¿De dónde se recomienda obtener el MDE",
                         "dónde",
                         "recomienda",
                         "obtener"
                     ],
        "answer":  "De LiDAR de INEGI o levantamientos recientes."
    },
    {
        "keywords":  [
                         "¿Qué tipo de MDE se necesita",
                         "tipo",
                         "necesita"
                     ],
        "answer":  "Tipo \u0027bare earth\u0027 (terreno despejado de edificaciones y vegetación)."
    },
    {
        "keywords":  [
                         "¿Qué características del terreno permite captar un MDE detallado en Tabasco",
                         "características",
                         "terreno",
                         "permite",
                         "captar",
                         "detallado",
                         "tabasco"
                     ],
        "answer":  "La pendiente suave de la planicie, cauces de ríos, diques, humedales y depresiones."
    },
    {
        "keywords":  [
                         "¿Qué información climatológica se requiere",
                         "información",
                         "climatológica",
                         "requiere"
                     ],
        "answer":  "Registros de precipitación máxima y crónicas de tormentas históricas."
    },
    {
        "keywords":  [
                         "¿Qué son las curvas IDF",
                         "curvas"
                     ],
        "answer":  "Curvas Intensidad-Duración-Frecuencia que relacionan intensidad de lluvia con duración y frecuencia."
    },
    {
        "keywords":  [
                         "¿Qué fuentes proporcionan datos de estaciones pluviográficas",
                         "fuentes",
                         "proporcionan",
                         "datos",
                         "estaciones",
                         "pluviográficas"
                     ],
        "answer":  "CONAGUA y el Servicio Meteorológico Nacional (SMN)."
    },
    {
        "keywords":  [
                         "¿Qué publica la SCT sobre lluvia extrema",
                         "publica",
                         "sobre",
                         "lluvia",
                         "extrema"
                     ],
        "answer":  "Mapas o isoyetas oficiales con intensidades para distintas duraciones y periodos de retorno por estado."
    },
    {
        "keywords":  [
                         "¿Qué periodos de retorno tienen isoyetas de la SCT para Tabasco",
                         "periodos",
                         "retorno",
                         "tienen",
                         "isoyetas",
                         "para",
                         "tabasco"
                     ],
        "answer":  "5, 10, 25, 50, 100, 200, 500 y 1000 años."
    },
    {
        "keywords":  [
                         "¿Qué ofrece el Atlas Nacional de Riesgos (ANR) de CENAPRED",
                         "ofrece",
                         "atlas",
                         "nacional",
                         "riesgos",
                         "cenapred"
                     ],
        "answer":  "Isoyetas de lluvia de 1 y 24 horas para diversos periodos de retorno y regiones homogéneas."
    },
    {
        "keywords":  [
                         "¿Quiénes realizaron el estudio de regionalización hidrológica del ANR",
                         "quiénes",
                         "realizaron",
                         "estudio",
                         "regionalización",
                         "hidrológica"
                     ],
        "answer":  "Domínguez et al. (2018)."
    },
    {
        "keywords":  [
                         "¿Qué productos satelitales se mencionan para datos de precipitación",
                         "productos",
                         "satelitales",
                         "mencionan",
                         "para",
                         "datos",
                         "precipitación"
                     ],
        "answer":  "CHIRPS y ERA5."
    },
    {
        "keywords":  [
                         "¿Por qué es importante evaluar la representatividad de datos remotos",
                         "importante",
                         "evaluar",
                         "representatividad",
                         "datos",
                         "remotos"
                     ],
        "answer":  "Para calibrar posibles sesgos en la magnitud de la lluvia comparando con estaciones locales."
    },
    {
        "keywords":  [
                         "¿Por qué el análisis debe basarse en unidades hidrológicas y no en límites administrativos",
                         "análisis",
                         "debe",
                         "basarse",
                         "unidades",
                         "hidrológicas",
                         "límites",
                         "administrativos"
                     ],
        "answer":  "Porque las escorrentías generadas aguas arriba pueden impactar zonas dentro de Tabasco."
    },
    {
        "keywords":  [
                         "¿Qué información se requiere de cada cuenca",
                         "información",
                         "requiere",
                         "cada",
                         "cuenca"
                     ],
        "answer":  "Mapas de subcuencas, flujo superficial, patrones de drenaje, longitudes y pendientes de cauces, áreas y elevaciones."
    },
    {
        "keywords":  [
                         "¿Para qué sirve la información de uso/cobertura del suelo",
                         "para",
                         "sirve",
                         "información",
                         "usocobertura",
                         "suelo"
                     ],
        "answer":  "Para caracterizar infiltración, escurrimiento y rugosidad del terreno."
    },
    {
        "keywords":  [
                         "¿Qué fuentes de cobertura/uso de suelo se mencionan",
                         "fuentes",
                         "coberturauso",
                         "suelo",
                         "mencionan"
                     ],
        "answer":  "INEGI Serie VII y Copernicus Land Cover."
    },
    {
        "keywords":  [
                         "¿Qué coeficiente se asigna según el uso del suelo",
                         "coeficiente",
                         "asigna",
                         "según",
                         "suelo"
                     ],
        "answer":  "Coeficientes de rugosidad de Manning."
    },
    {
        "keywords":  [
                         "¿Qué son las cartas edafológicas",
                         "cartas",
                         "edafológicas"
                     ],
        "answer":  "Mapas que determinan la capacidad de infiltración y el Curve Number (CN)."
    },
    {
        "keywords":  [
                         "¿Qué método utiliza el Curve Number",
                         "método",
                         "utiliza",
                         "curve",
                         "number"
                     ],
        "answer":  "El método del Servicio de Conservación de Suelos de EE. UU. (SCS)."
    },
    {
        "keywords":  [
                         "¿Qué infraestructura hidráulica debe recabarse",
                         "infraestructura",
                         "hidráulica",
                         "debe",
                         "recabarse"
                     ],
        "answer":  "Red de drenaje pluvial urbano, diques, bordos, canales artificiales e infraestructura de transporte."
    },
    {
        "keywords":  [
                         "¿Por qué es importante identificar puntos de insuficiencia de la red de drenaje",
                         "importante",
                         "identificar",
                         "puntos",
                         "insuficiencia",
                         "drenaje"
                     ],
        "answer":  "Porque en cabeceras municipales la capacidad de drenajes y alcantarillado es limitada."
    },
    {
        "keywords":  [
                         "¿Qué ejemplos de bordos de contención se mencionan en Tabasco",
                         "ejemplos",
                         "bordos",
                         "contención",
                         "mencionan",
                         "tabasco"
                     ],
        "answer":  "A lo largo del Carrizal y Grijalva en Villahermosa."
    },
    {
        "keywords":  [
                         "¿Qué canal de alivio se menciona como ejemplo",
                         "canal",
                         "alivio",
                         "menciona",
                         "como",
                         "ejemplo"
                     ],
        "answer":  "El canal de alivio El Censo."
    },
    {
        "keywords":  [
                         "¿Cómo pueden actuar las carreteras elevadas y ferrocarriles",
                         "cómo",
                         "pueden",
                         "actuar",
                         "carreteras",
                         "elevadas",
                         "ferrocarriles"
                     ],
        "answer":  "Como diques o restricciones al flujo."
    },
    {
        "keywords":  [
                         "¿Qué productos cartográficos exige la normatividad",
                         "productos",
                         "cartográficos",
                         "exige",
                         "normatividad"
                     ],
        "answer":  "Mapas de peligro de inundación con extensión inundada y tirantes para diversos periodos de retorno."
    },
    {
        "keywords":  [
                         "¿Qué documento debe acompañar los mapas",
                         "documento",
                         "debe",
                         "acompañar",
                         "mapas"
                     ],
        "answer":  "Una memoria de cálculo que documente insumos, análisis, criterios y metodología."
    },
    {
        "keywords":  [
                         "¿Qué tres instituciones establecen los lineamientos normativos",
                         "tres",
                         "instituciones",
                         "establecen",
                         "lineamientos",
                         "normativos"
                     ],
        "answer":  "CENAPRED, CONAGUA y SEDATU."
    },
    {
        "keywords":  [
                         "¿Cuál es la fuente recomendada para el MDE de terreno",
                         "cuál",
                         "fuente",
                         "recomendada",
                         "para",
                         "terreno"
                     ],
        "answer":  "INEGI LiDAR o levantamientos topográficos estatales."
    },
    {
        "keywords":  [
                         "¿Cuál es la utilidad del MDE en el estudio",
                         "cuál",
                         "utilidad",
                         "estudio"
                     ],
        "answer":  "Base topográfica para el modelo hidráulico 2D e identificación de cauces, bajos y pendientes."
    },
    {
        "keywords":  [
                         "¿Qué fuentes se mencionan para precipitación máxima de diseño",
                         "fuentes",
                         "mencionan",
                         "para",
                         "precipitación",
                         "máxima",
                         "diseño"
                     ],
        "answer":  "Estaciones CONAGUA/SMN, Atlas Nacional de Riesgos (isoyetas) y CHIRPS/ERA5."
    },
    {
        "keywords":  [
                         "¿Para qué sirven las curvas IDF/isoyetas",
                         "para",
                         "sirven",
                         "curvas",
                         "idfisoyetas"
                     ],
        "answer":  "Cálculo de intensidades para diversas duraciones y apoyo para extrapolar lluvias en zonas sin datos locales."
    },
    {
        "keywords":  [
                         "¿Qué fuentes proporcionan cobertura y uso de suelo",
                         "fuentes",
                         "proporcionan",
                         "cobertura",
                         "suelo"
                     ],
        "answer":  "INEGI Serie VII y Copernicus Land Cover 10 m."
    },
    {
        "keywords":  [
                         "¿Qué parámetros se obtienen del tipo de suelo hidrológico",
                         "parámetros",
                         "obtienen",
                         "tipo",
                         "suelo",
                         "hidrológico"
                     ],
        "answer":  "Grupos hidrológicos de suelo (A, B, C, D) para cómputo de infiltración."
    },
    {
        "keywords":  [
                         "¿De dónde se obtiene la delimitación de cuencas y red hídrica",
                         "dónde",
                         "obtiene",
                         "delimitación",
                         "cuencas",
                         "hídrica"
                     ],
        "answer":  "INEGI Atlas hidrográfico y análisis en GIS del MDE."
    },
    {
        "keywords":  [
                         "¿Qué datos de presas se requieren",
                         "datos",
                         "presas",
                         "requieren"
                     ],
        "answer":  "Datos de operación y vertidos de CONAGUA y CFE."
    },
    {
        "keywords":  [
                         "¿Para qué sirven los datos de presas",
                         "para",
                         "sirven",
                         "datos",
                         "presas"
                     ],
        "answer":  "Definir escenarios de caudales máximos por desfogues y establecer condiciones de frontera en ríos controlados."
    },
    {
        "keywords":  [
                         "¿Qué fuentes proporcionan información sobre infraestructura de control de inundaciones",
                         "fuentes",
                         "proporcionan",
                         "información",
                         "sobre",
                         "infraestructura",
                         "control",
                         "inundaciones"
                     ],
        "answer":  "Gobierno estatal, CONAGUA (Plan Hídrico Tabasco) y PNUD/Protección Civil."
    },
    {
        "keywords":  [
                         "¿Para qué sirven los registros de inundaciones históricas",
                         "para",
                         "sirven",
                         "registros",
                         "inundaciones",
                         "históricas"
                     ],
        "answer":  "Calibración/validación cualitativa del modelo e identificación de zonas críticas."
    },
    {
        "keywords":  [
                         "¿Qué evento histórico se menciona como referencia para registros de inundación",
                         "evento",
                         "histórico",
                         "menciona",
                         "como",
                         "referencia",
                         "para",
                         "registros",
                         "inundación"
                     ],
        "answer":  "Las inundaciones de 2007."
    },
    {
        "keywords":  [
                         "¿Qué imágenes satelitales se sugieren para validación",
                         "imágenes",
                         "satelitales",
                         "sugieren",
                         "para",
                         "validación"
                     ],
        "answer":  "Imágenes del evento de 2007."
    },
    {
        "keywords":  [
                         "¿Cuántos insumos principales lista la tabla síntesis",
                         "cuántos",
                         "insumos",
                         "principales",
                         "lista",
                         "tabla",
                         "síntesis"
                     ],
        "answer":  "10 insumos principales."
    },
    {
        "keywords":  [
                         "¿Qué significa \u0027bare earth\u0027 en un MDE",
                         "significa",
                         "bare",
                         "earth"
                     ],
        "answer":  "Terreno despejado de edificaciones y vegetación."
    },
    {
        "keywords":  [
                         "¿Por qué Tabasco requiere especial atención en la recopilación de insumos",
                         "tabasco",
                         "requiere",
                         "especial",
                         "atención",
                         "recopilación",
                         "insumos"
                     ],
        "answer":  "Por su planicie baja, numerosos ríos perennes y vulnerabilidad a inundaciones fluviales y pluviales."
    },
    {
        "keywords":  [
                         "¿Qué método se usa para determinar la infiltración",
                         "método",
                         "para",
                         "determinar",
                         "infiltración"
                     ],
        "answer":  "El método del Curve Number (CN) del SCS."
    },
    {
        "keywords":  [
                         "¿Qué grupos hidrológicos de suelo existen",
                         "grupos",
                         "hidrológicos",
                         "suelo",
                         "existen"
                     ],
        "answer":  "Grupos A, B, C y D."
    },
    {
        "keywords":  [
                         "¿Qué factores regionales ofrece CENAPRED para cuencas no aforadas",
                         "factores",
                         "regionales",
                         "ofrece",
                         "cenapred",
                         "para",
                         "cuencas",
                         "aforadas"
                     ],
        "answer":  "Factores para estimar gastos en cuencas no aforadas."
    },
    {
        "keywords":  [
                         "¿Qué son las regiones homogéneas del ANR",
                         "regiones",
                         "homogéneas"
                     ],
        "answer":  "Regiones que permiten estimar lluvias de diseño para cuencas sin datos locales."
    },
    {
        "keywords":  [
                         "¿Por qué se recomienda contrastar CHIRPS/ERA5 con datos locales",
                         "recomienda",
                         "contrastar",
                         "chirpsera5",
                         "datos",
                         "locales"
                     ],
        "answer":  "Porque las estimaciones satelitales pueden subestimar picos de lluvia convectiva."
    },
    {
        "keywords":  [
                         "¿Qué es un hietograma",
                         "hietograma"
                     ],
        "answer":  "La representación gráfica de la distribución temporal de la lluvia."
    },
    {
        "keywords":  [
                         "¿Cómo se estructura geográficamente el área de estudio",
                         "cómo",
                         "estructura",
                         "geográficamente",
                         "área",
                         "estudio"
                     ],
        "answer":  "Esencialmente a las subcuencas dentro de la demarcación territorial del estado de Tabasco."
    },
    {
        "keywords":  [
                         "¿Qué criterio se usó para delimitar el área de estudio",
                         "criterio",
                         "para",
                         "delimitar",
                         "área",
                         "estudio"
                     ],
        "answer":  "Se estableció una ponderación en el nivel de peligro de inundación de las subcuencas."
    },
    {
        "keywords":  [
                         "¿En qué categorías de peligro se concentró la delimitación",
                         "categorías",
                         "peligro",
                         "concentró",
                         "delimitación"
                     ],
        "answer":  "Áreas donde el nivel de peligro fuese de categoría Muy Alto y Alto."
    },
    {
        "keywords":  [
                         "¿A qué región hidrológica pertenecen las subcuencas del estudio",
                         "región",
                         "hidrológica",
                         "pertenecen",
                         "subcuencas",
                         "estudio"
                     ],
        "answer":  "Región hidrológica Grijalva-Usumacinta."
    },
    {
        "keywords":  [
                         "¿Cuántas subcuencas se identificaron en la región Grijalva-Usumacinta",
                         "cuántas",
                         "subcuencas",
                         "identificaron",
                         "región",
                         "grijalvausumacinta"
                     ],
        "answer":  "16 subcuencas."
    },
    {
        "keywords":  [
                         "¿Qué institución recomendó considerar subcuencas de prioridad alta y muy alta",
                         "institución",
                         "recomendó",
                         "considerar",
                         "subcuencas",
                         "prioridad",
                         "alta"
                     ],
        "answer":  "El Instituto de Protección Civil del Estado de Tabasco (IPCET)."
    },
    {
        "keywords":  [
                         "¿Cuántos criterios combina el índice de prioridad compuesto",
                         "cuántos",
                         "criterios",
                         "combina",
                         "índice",
                         "prioridad",
                         "compuesto"
                     ],
        "answer":  "Tres criterios: área, perímetro y número de estaciones hidrométricas."
    },
    {
        "keywords":  [
                         "¿Qué subcuencas tienen prioridad \u0027Muy alta\u0027",
                         "subcuencas",
                         "tienen",
                         "prioridad",
                         "alta"
                     ],
        "answer":  "Río Tacotalpa, Río Viejo Mezcalapa y Río Almendro."
    },
    {
        "keywords":  [
                         "¿Qué subcuencas tienen prioridad \u0027Alta\u0027",
                         "subcuencas",
                         "tienen",
                         "prioridad",
                         "alta"
                     ],
        "answer":  "Río Pichucalco y Río de la Sierra."
    },
    {
        "keywords":  [
                         "¿Qué subcuencas tienen prioridad \u0027Media\u0027",
                         "subcuencas",
                         "tienen",
                         "prioridad",
                         "media"
                     ],
        "answer":  "Río Macuspana y Río Tulijá."
    },
    {
        "keywords":  [
                         "¿Qué subcuencas tienen prioridad \u0027Baja\u0027",
                         "subcuencas",
                         "tienen",
                         "prioridad",
                         "baja"
                     ],
        "answer":  "Ríos Paredón, Bascá, Plátanos, Chilapilla y Yashijá."
    },
    {
        "keywords":  [
                         "¿Qué subcuencas tienen prioridad \u0027Muy baja\u0027",
                         "subcuencas",
                         "tienen",
                         "prioridad",
                         "baja"
                     ],
        "answer":  "Ríos Puxcatán, Shumulá, Chilapa y Chacté."
    },
    {
        "keywords":  [
                         "¿Cuál es el área del Río Tacotalpa",
                         "cuál",
                         "área",
                         "tacotalpa"
                     ],
        "answer":  "514.6 km²."
    },
    {
        "keywords":  [
                         "¿Cuál es el perímetro del Río Viejo Mezcalapa",
                         "cuál",
                         "perímetro",
                         "viejo",
                         "mezcalapa"
                     ],
        "answer":  "165.1 km."
    },
    {
        "keywords":  [
                         "¿Cuántas estaciones hidrométricas tiene el Río Almendro",
                         "cuántas",
                         "estaciones",
                         "hidrométricas",
                         "tiene",
                         "almendro"
                     ],
        "answer":  "3 estaciones."
    },
    {
        "keywords":  [
                         "¿Cuál es el índice de prioridad del Río Pichucalco",
                         "cuál",
                         "índice",
                         "prioridad",
                         "pichucalco"
                     ],
        "answer":  "0.62."
    },
    {
        "keywords":  [
                         "¿Cuál es el índice de prioridad del Río de la Sierra",
                         "cuál",
                         "índice",
                         "prioridad",
                         "sierra"
                     ],
        "answer":  "0.56."
    },
    {
        "keywords":  [
                         "¿Qué subcuenca tiene mayor área",
                         "subcuenca",
                         "tiene",
                         "mayor",
                         "área"
                     ],
        "answer":  "Río Chilapa con 2172.8 km²."
    },
    {
        "keywords":  [
                         "¿Qué subcuenca tiene menor área",
                         "subcuenca",
                         "tiene",
                         "menor",
                         "área"
                     ],
        "answer":  "Río Paredón con 382 km²."
    },
    {
        "keywords":  [
                         "¿Qué subcuenca tiene mayor perímetro",
                         "subcuenca",
                         "tiene",
                         "mayor",
                         "perímetro"
                     ],
        "answer":  "Río Tulijá con 338.1 km."
    },
    {
        "keywords":  [
                         "¿Cuál es el peso relativo del criterio \u0027Área\u0027 en el índice",
                         "cuál",
                         "peso",
                         "relativo",
                         "criterio",
                         "área",
                         "índice"
                     ],
        "answer":  "0.4."
    },
    {
        "keywords":  [
                         "¿Cuál es el peso relativo del criterio \u0027Perímetro\u0027 en el índice",
                         "cuál",
                         "peso",
                         "relativo",
                         "criterio",
                         "perímetro",
                         "índice"
                     ],
        "answer":  "0.3."
    },
    {
        "keywords":  [
                         "¿Cuál es el peso relativo del criterio \u0027Estaciones hidrométricas\u0027 en el índice",
                         "cuál",
                         "peso",
                         "relativo",
                         "criterio",
                         "estaciones",
                         "hidrométricas",
                         "índice"
                     ],
        "answer":  "0.3."
    },
    {
        "keywords":  [
                         "¿Por qué las subcuencas más pequeñas y mejor instrumentadas tienen mayor prioridad",
                         "subcuencas",
                         "pequeñas",
                         "mejor",
                         "instrumentadas",
                         "tienen",
                         "mayor",
                         "prioridad"
                     ],
        "answer":  "Porque permiten una modelación más manejable y mejor calibrada."
    },
    {
        "keywords":  [
                         "¿Las subcuencas de menor prioridad quedan excluidas del análisis",
                         "subcuencas",
                         "menor",
                         "prioridad",
                         "quedan",
                         "excluidas",
                         "análisis"
                     ],
        "answer":  "No, solo marca el orden en que se abordarán con mayor detalle."
    },
    {
        "keywords":  [
                         "¿Cuál es el área total del área de estudio",
                         "cuál",
                         "área",
                         "total",
                         "estudio"
                     ],
        "answer":  "15,418.5 km²."
    },
    {
        "keywords":  [
                         "¿Cuánto suman las cinco subcuencas de prioridad Alta y Muy alta",
                         "cuánto",
                         "suman",
                         "cinco",
                         "subcuencas",
                         "prioridad",
                         "alta",
                         "alta"
                     ],
        "answer":  "4,511.4 km²."
    },
    {
        "keywords":  [
                         "¿Qué porcentaje representan las subcuencas prioritarias del área total",
                         "porcentaje",
                         "representan",
                         "subcuencas",
                         "prioritarias",
                         "área",
                         "total"
                     ],
        "answer":  "29.3%."
    },
    {
        "keywords":  [
                         "¿Qué porcentaje representan las subcuencas no prioritarias",
                         "porcentaje",
                         "representan",
                         "subcuencas",
                         "prioritarias"
                     ],
        "answer":  "70.7% (10,907.1 km²)."
    },
    {
        "keywords":  [
                         "¿Cuántas subcuencas de prioridad Media, Baja y Muy baja hay",
                         "cuántas",
                         "subcuencas",
                         "prioridad",
                         "media",
                         "baja",
                         "baja"
                     ],
        "answer":  "11 subcuencas."
    },
    {
        "keywords":  [
                         "¿Por qué se priorizó el Río Tacotalpa",
                         "priorizó",
                         "tacotalpa"
                     ],
        "answer":  "Porque tiene menor área (514.6 km²), menor perímetro y una estación hidrométrica, dándole el índice más alto (0.72)."
    },
    {
        "keywords":  [
                         "¿Qué significa que el sentido de ponderación del área sea \u0027menor área = mayor prioridad\u0027",
                         "significa",
                         "sentido",
                         "ponderación",
                         "área",
                         "menor",
                         "mayor",
                         "prioridad"
                     ],
        "answer":  "Que entre más pequeña sea la cuenca, mayor será su índice de prioridad."
    },
    {
        "keywords":  [
                         "¿Qué significa que el sentido de ponderación del perímetro sea \u0027menor perímetro = mayor prioridad\u0027",
                         "significa",
                         "sentido",
                         "ponderación",
                         "perímetro",
                         "menor",
                         "mayor",
                         "prioridad"
                     ],
        "answer":  "Que cuencas más compactas geográficamente reciben mayor prioridad."
    },
    {
        "keywords":  [
                         "¿Qué significa que el sentido de ponderación de estaciones sea \u0027más estaciones = mayor prioridad\u0027",
                         "significa",
                         "sentido",
                         "ponderación",
                         "estaciones",
                         "mayor",
                         "prioridad"
                     ],
        "answer":  "Que mayor densidad de monitoreo hidrométrico aumenta la prioridad."
    },
    {
        "keywords":  [
                         "¿Cuál es el índice de prioridad más bajo reportado",
                         "cuál",
                         "índice",
                         "prioridad",
                         "bajo",
                         "reportado"
                     ],
        "answer":  "0.24 del Río Chilapa."
    },
    {
        "keywords":  [
                         "¿Cuál es el índice de prioridad más alto reportado",
                         "cuál",
                         "índice",
                         "prioridad",
                         "alto",
                         "reportado"
                     ],
        "answer":  "0.72 del Río Tacotalpa."
    },
    {
        "keywords":  [
                         "¿Qué subcuencas no tienen estaciones hidrométricas",
                         "subcuencas",
                         "tienen",
                         "estaciones",
                         "hidrométricas"
                     ],
        "answer":  "Ríos Paredón, Bascá, Plátanos, Chilapilla, Yashijá, Puxcatán, Shumulá, Chilapa y Chacté."
    },
    {
        "keywords":  [
                         "¿Cuántas subcuencas tienen al menos una estación hidrométrica",
                         "cuántas",
                         "subcuencas",
                         "tienen",
                         "menos",
                         "estación",
                         "hidrométrica"
                     ],
        "answer":  "7 subcuencas."
    },
    {
        "keywords":  [
                         "¿Cuál es el área del Río Macuspana",
                         "cuál",
                         "área",
                         "macuspana"
                     ],
        "answer":  "1179.2 km²."
    },
    {
        "keywords":  [
                         "¿Cuál es el perímetro del Río Tulijá",
                         "cuál",
                         "perímetro",
                         "tulijá"
                     ],
        "answer":  "338.1 km."
    },
    {
        "keywords":  [
                         "¿En qué se concentrará el estudio de detalle según IPCET",
                         "concentrará",
                         "estudio",
                         "detalle",
                         "según",
                         "ipcet"
                     ],
        "answer":  "En las subcuencas de prioridad Alta y Muy alta."
    },
    {
        "keywords":  [
                         "¿Cuál es la importancia de la priorización de subcuencas",
                         "cuál",
                         "importancia",
                         "priorización",
                         "subcuencas"
                     ],
        "answer":  "Permite ordenar y jerarquizar la totalidad del territorio analizado según su nivel de peligro y viabilidad técnica."
    },
    {
        "keywords":  [
                         "¿Qué subcuenca tiene el perímetro más corto",
                         "subcuenca",
                         "tiene",
                         "perímetro",
                         "corto"
                     ],
        "answer":  "Río Paredón con 118 km."
    },
    {
        "keywords":  [
                         "¿Cuál es el área del Río Chacté",
                         "cuál",
                         "área",
                         "chacté"
                     ],
        "answer":  "1490.6 km²."
    },
    {
        "keywords":  [
                         "¿Cuántas subcuencas tienen prioridad \u0027Muy alta\u0027",
                         "cuántas",
                         "subcuencas",
                         "tienen",
                         "prioridad",
                         "alta"
                     ],
        "answer":  "3 subcuencas."
    },
    {
        "keywords":  [
                         "¿Cuántas subcuencas tienen prioridad \u0027Alta\u0027",
                         "cuántas",
                         "subcuencas",
                         "tienen",
                         "prioridad",
                         "alta"
                     ],
        "answer":  "2 subcuencas."
    },
    {
        "keywords":  [
                         "¿Cuántas subcuencas tienen prioridad \u0027Media\u0027",
                         "cuántas",
                         "subcuencas",
                         "tienen",
                         "prioridad",
                         "media"
                     ],
        "answer":  "2 subcuencas."
    },
    {
        "keywords":  [
                         "¿Cuántas subcuencas tienen prioridad \u0027Baja\u0027",
                         "cuántas",
                         "subcuencas",
                         "tienen",
                         "prioridad",
                         "baja"
                     ],
        "answer":  "5 subcuencas."
    },
    {
        "keywords":  [
                         "¿Cuántas subcuencas tienen prioridad \u0027Muy baja\u0027",
                         "cuántas",
                         "subcuencas",
                         "tienen",
                         "prioridad",
                         "baja"
                     ],
        "answer":  "4 subcuencas."
    },
    {
        "keywords":  [
                         "¿Cuál es el objetivo del análisis hidrológico",
                         "cuál",
                         "objetivo",
                         "análisis",
                         "hidrológico"
                     ],
        "answer":  "Obtener hidrogramas de escurrimiento o campos de lluvia efectiva que sirvan de entrada al modelo hidráulico."
    },
    {
        "keywords":  [
                         "¿Qué traduce el análisis hidrológico",
                         "traduce",
                         "análisis",
                         "hidrológico"
                     ],
        "answer":  "La amenaza de precipitación en volúmenes y flujos de agua sobre el terreno."
    },
    {
        "keywords":  [
                         "¿Cuántos periodos de retorno tradicionalmente se consideraban",
                         "cuántos",
                         "periodos",
                         "retorno",
                         "tradicionalmente",
                         "consideraban"
                     ],
        "answer":  "Ocho: 2, 5, 10, 20, 50, 100, 250 y 500 años."
    },
    {
        "keywords":  [
                         "¿Cuántos escenarios clave suele enfocar CONAGUA",
                         "cuántos",
                         "escenarios",
                         "clave",
                         "suele",
                         "enfocar",
                         "conagua"
                     ],
        "answer":  "5 escenarios: 2, 5, 10, 20 y 100 años."
    },
    {
        "keywords":  [
                         "¿Qué escenarios se recomienda generar como mínimo",
                         "escenarios",
                         "recomienda",
                         "generar",
                         "como",
                         "mínimo"
                     ],
        "answer":  "Mapas para 5, 10, 20 y 100 años, e incluir 2 años y un extremo (250 o 500 años)."
    },
    {
        "keywords":  [
                         "¿Por qué modelar ocho escenarios puede ser computacionalmente pesado",
                         "modelar",
                         "ocho",
                         "escenarios",
                         "puede",
                         "computacionalmente",
                         "pesado"
                     ],
        "answer":  "Porque a escala estatal requiere muchos recursos de cómputo."
    },
    {
        "keywords":  [
                         "¿Qué duraciones de lluvia son críticas en cuencas grandes como Grijalva y Usumacinta",
                         "duraciones",
                         "lluvia",
                         "críticas",
                         "cuencas",
                         "grandes",
                         "como",
                         "grijalva",
                         "usumacinta"
                     ],
        "answer":  "Lluvias intensas de 24-48 horas combinadas con saturación previa."
    },
    {
        "keywords":  [
                         "¿Qué duraciones de lluvia pueden causar inundación en cuencas urbanas pequeñas",
                         "duraciones",
                         "lluvia",
                         "pueden",
                         "causar",
                         "inundación",
                         "cuencas",
                         "urbanas",
                         "pequeñas"
                     ],
        "answer":  "Una lluvia torrencial de 1-6 horas."
    },
    {
        "keywords":  [
                         "¿Qué son los hietogramas",
                         "hietogramas"
                     ],
        "answer":  "La distribución temporal de la lluvia una vez definido el total y la duración."
    },
    {
        "keywords":  [
                         "¿Qué distribuciones sintéticas típicas se mencionan para hietogramas",
                         "distribuciones",
                         "sintéticas",
                         "típicas",
                         "mencionan",
                         "para",
                         "hietogramas"
                     ],
        "answer":  "Tipo II del SCS y Huff 50%."
    },
    {
        "keywords":  [
                         "¿Qué tormenta histórica se menciona como referencia para ajustar hietogramas",
                         "tormenta",
                         "histórica",
                         "menciona",
                         "como",
                         "referencia",
                         "para",
                         "ajustar",
                         "hietogramas"
                     ],
        "answer":  "La de octubre de 2007 en Tabasco."
    },
    {
        "keywords":  [
                         "¿Cómo se pueden considerar los efectos espaciales a escala estatal",
                         "cómo",
                         "pueden",
                         "considerar",
                         "efectos",
                         "espaciales",
                         "escala",
                         "estatal"
                     ],
        "answer":  "Asumiendo uniformidad por cuenca o aplicando gradientes espaciales según isoyetas oficiales."
    },
    {
        "keywords":  [
                         "¿Por qué en Tabasco muchas inundaciones ocurren tras periodos lluviosos prolongados",
                         "tabasco",
                         "muchas",
                         "inundaciones",
                         "ocurren",
                         "tras",
                         "periodos",
                         "lluviosos",
                         "prolongados"
                     ],
        "answer":  "Porque el suelo está saturado."
    },
    {
        "keywords":  [
                         "¿Qué humedad antecedente se recomienda suponer para ser conservador",
                         "humedad",
                         "antecedente",
                         "recomienda",
                         "suponer",
                         "para",
                         "conservador"
                     ],
        "answer":  "Humedad Antecedente II o III en la metodología SCS."
    },
    {
        "keywords":  [
                         "¿Cuáles son los dos enfoques principales para modelación hidrológica",
                         "cuáles",
                         "enfoques",
                         "principales",
                         "para",
                         "modelación",
                         "hidrológica"
                     ],
        "answer":  "Enfoque (a) hidrológico separado + entradas al modelo 2D, y enfoque (b) lluvia directa sobre el modelo 2D acoplado."
    },
    {
        "keywords":  [
                         "¿Qué software se menciona para el enfoque hidrológico separado",
                         "software",
                         "menciona",
                         "para",
                         "enfoque",
                         "hidrológico",
                         "separado"
                     ],
        "answer":  "HEC-HMS, SWMM o métodos manuales."
    },
    {
        "keywords":  [
                         "¿Qué método se usa para calcular la infiltración en el enfoque separado",
                         "método",
                         "para",
                         "calcular",
                         "infiltración",
                         "enfoque",
                         "separado"
                     ],
        "answer":  "El método de Curva Número (CN) del SCS."
    },
    {
        "keywords":  [
                         "¿Qué transformaciones lluvia-caudal se mencionan",
                         "transformaciones",
                         "lluviacaudal",
                         "mencionan"
                     ],
        "answer":  "Hidrograma unitario del SCS, Clark y Snyder."
    },
    {
        "keywords":  [
                         "¿Qué factores regionales se pueden usar para ajustar",
                         "factores",
                         "regionales",
                         "pueden",
                         "usar",
                         "para",
                         "ajustar"
                     ],
        "answer":  "Factores regionales de CENAPRED."
    },
    {
        "keywords":  [
                         "¿Qué presa se menciona como ejemplo para escenarios de operación",
                         "presa",
                         "menciona",
                         "como",
                         "ejemplo",
                         "para",
                         "escenarios",
                         "operación"
                     ],
        "answer":  "La presa Peñitas en el Grijalva."
    },
    {
        "keywords":  [
                         "¿Qué modelo 2D puede calcular escorrentía directamente",
                         "modelo",
                         "puede",
                         "calcular",
                         "escorrentía",
                         "directamente"
                     ],
        "answer":  "HEC-RAS 2D."
    },
    {
        "keywords":  [
                         "¿Qué parámetros de pérdida se usan en el enfoque acoplado",
                         "parámetros",
                         "pérdida",
                         "usan",
                         "enfoque",
                         "acoplado"
                     ],
        "answer":  "Pérdidas constantes o Curve Number dinámico."
    },
    {
        "keywords":  [
                         "¿Para qué tipo de inundaciones es útil el enfoque acoplado",
                         "para",
                         "tipo",
                         "inundaciones",
                         "útil",
                         "enfoque",
                         "acoplado"
                     ],
        "answer":  "Para inundaciones pluviales urbanas."
    },
    {
        "keywords":  [
                         "¿Qué debe vigilarse en el enfoque acoplado",
                         "debe",
                         "vigilarse",
                         "enfoque",
                         "acoplado"
                     ],
        "answer":  "La calibración de las pérdidas por infiltración."
    },
    {
        "keywords":  [
                         "¿Qué insumos alimentan la etapa hidráulica",
                         "insumos",
                         "alimentan",
                         "etapa",
                         "hidráulica"
                     ],
        "answer":  "Hidrogramas de entrada por río o cuenca, o hietogramas y parámetros de escorrentía calibrados."
    },
    {
        "keywords":  [
                         "¿Qué es el tiempo de concentración",
                         "tiempo",
                         "concentración"
                     ],
        "answer":  "El tiempo que tarda el agua en llegar desde el punto más hidrológicamente remoto hasta la salida de la cuenca."
    },
    {
        "keywords":  [
                         "¿Qué es un hidrograma",
                         "hidrograma"
                     ],
        "answer":  "La representación gráfica del caudal en función del tiempo."
    },
    {
        "keywords":  [
                         "¿Qué es el método del hidrograma unitario",
                         "método",
                         "hidrograma",
                         "unitario"
                     ],
        "answer":  "Un método que relaciona la lluvia efectiva con el escurrimiento directo."
    },
    {
        "keywords":  [
                         "¿Qué es el enrutamiento (rutear) del caudal",
                         "enrutamiento",
                         "rutear",
                         "caudal"
                     ],
        "answer":  "El proceso de trasladar el hidrograma a través del cauce considerando el almacenamiento."
    },
    {
        "keywords":  [
                         "¿Qué significa \u0027cuenca no aforada\u0027",
                         "significa",
                         "cuenca",
                         "aforada"
                     ],
        "answer":  "Una cuenca sin mediciones directas de caudal."
    },
    {
        "keywords":  [
                         "¿Qué es la lluvia efectiva",
                         "lluvia",
                         "efectiva"
                     ],
        "answer":  "La porción de precipitación que genera escurrimiento superficial."
    },
    {
        "keywords":  [
                         "¿Qué es la escorrentía inicial",
                         "escorrentía",
                         "inicial"
                     ],
        "answer":  "La lluvia que se pierde por interceptación, depresiones e infiltración antes de generar escurrimiento."
    },
    {
        "keywords":  [
                         "¿Por qué se recomienda Humedad Antecedente II o III",
                         "recomienda",
                         "humedad",
                         "antecedente"
                     ],
        "answer":  "Porque representa condiciones de suelo húmedo o saturado, típicas en Tabasco."
    },
    {
        "keywords":  [
                         "¿Qué es la regionalización hidrológica",
                         "regionalización",
                         "hidrológica"
                     ],
        "answer":  "La división del territorio en regiones con características hidrológicas similares."
    },
    {
        "keywords":  [
                         "¿Quiénes desarrollaron el estudio de regionalización del ANR",
                         "quiénes",
                         "desarrollaron",
                         "estudio",
                         "regionalización"
                     ],
        "answer":  "Domínguez et al. en 2018."
    },
    {
        "keywords":  [
                         "¿Qué es una isoyeta",
                         "isoyeta"
                     ],
        "answer":  "Línea que une puntos de igual precipitación."
    },
    {
        "keywords":  [
                         "¿Qué ventaja tiene el enfoque hidrológico separado",
                         "ventaja",
                         "tiene",
                         "enfoque",
                         "hidrológico",
                         "separado"
                     ],
        "answer":  "Permite mayor control y calibración del proceso de transformación lluvia-escurrimiento."
    },
    {
        "keywords":  [
                         "¿Qué ventaja tiene el enfoque acoplado",
                         "ventaja",
                         "tiene",
                         "enfoque",
                         "acoplado"
                     ],
        "answer":  "Captura naturalmente la escorrentía local sin necesidad de un modelo hidrológico externo."
    },
    {
        "keywords":  [
                         "¿Qué es SWMM",
                         "swmm"
                     ],
        "answer":  "Storm Water Management Model, un modelo para simulación de escurrimiento urbano."
    },
    {
        "keywords":  [
                         "¿Qué es HEC-HMS",
                         "hechms"
                     ],
        "answer":  "Hydrologic Engineering Center - Hydrologic Modeling System, software del USACE para modelación hidrológica."
    },
    {
        "keywords":  [
                         "¿Qué significa SCS",
                         "significa"
                     ],
        "answer":  "Soil Conservation Service (ahora NRCS)."
    },
    {
        "keywords":  [
                         "¿Qué es el Curve Number (CN)",
                         "curve",
                         "number"
                     ],
        "answer":  "Un parámetro empírico que representa las características de escurrimiento de una cuenca."
    },
    {
        "keywords":  [
                         "¿Qué rangos de CN existen",
                         "rangos",
                         "existen"
                     ],
        "answer":  "De 0 a 100, donde mayor CN indica mayor escurrimiento y menor infiltración."
    },
    {
        "keywords":  [
                         "¿Por qué es imprescindible usar un modelo de flujo 2D",
                         "imprescindible",
                         "usar",
                         "modelo",
                         "flujo"
                     ],
        "answer":  "Para representar adecuadamente la dinámica del flujo superficial en la planicie tabasqueña."
    },
    {
        "keywords":  [
                         "¿Qué software se selecciona para la simulación",
                         "software",
                         "selecciona",
                         "para",
                         "simulación"
                     ],
        "answer":  "HEC-RAS 2D."
    },
    {
        "keywords":  [
                         "¿Quién desarrolla HEC-RAS",
                         "quién",
                         "desarrolla",
                         "hecras"
                     ],
        "answer":  "El USACE (Cuerpo de Ingenieros del Ejército de EE.UU.)."
    },
    {
        "keywords":  [
                         "¿Es HEC-RAS gratuito",
                         "hecras",
                         "gratuito"
                     ],
        "answer":  "Sí, es software gratuito."
    },
    {
        "keywords":  [
                         "¿Qué herramienta permite visualizar resultados de HEC-RAS en GIS",
                         "herramienta",
                         "permite",
                         "visualizar",
                         "resultados",
                         "hecras"
                     ],
        "answer":  "HEC-RAS Mapper."
    },
    {
        "keywords":  [
                         "¿Qué ventajas tiene HEC-RAS 2D",
                         "ventajas",
                         "tiene",
                         "hecras"
                     ],
        "answer":  "Permite combinar esquemas 1D/2D, insertar estructuras hidráulicas y paralelizar cálculos en múltiples núcleos."
    },
    {
        "keywords":  [
                         "¿Por qué no se abarca todo el estado con la misma resolución",
                         "abarca",
                         "todo",
                         "estado",
                         "misma",
                         "resolución"
                     ],
        "answer":  "Por eficiencia computacional."
    },
    {
        "keywords":  [
                         "¿Cómo se recomienda dividir el análisis",
                         "cómo",
                         "recomienda",
                         "dividir",
                         "análisis"
                     ],
        "answer":  "Por cuencas principales: Grijalva, Usumacinta y cuencas costeras."
    },
    {
        "keywords":  [
                         "¿Qué resolución se emplea en zonas críticas",
                         "resolución",
                         "emplea",
                         "zonas",
                         "críticas"
                     ],
        "answer":  "MDE de 5 m directamente."
    },
    {
        "keywords":  [
                         "¿Qué resolución se usa en áreas rurales homogéneas",
                         "resolución",
                         "áreas",
                         "rurales",
                         "homogéneas"
                     ],
        "answer":  "50-100 m."
    },
    {
        "keywords":  [
                         "¿Qué estructuras deben incorporarse al terreno antes de generar la malla",
                         "estructuras",
                         "deben",
                         "incorporarse",
                         "terreno",
                         "antes",
                         "generar",
                         "malla"
                     ],
        "answer":  "Diques, carreteras elevadas."
    },
    {
        "keywords":  [
                         "¿Qué artefactos deben removerse del MDE",
                         "artefactos",
                         "deben",
                         "removerse"
                     ],
        "answer":  "Artefactos espurios, sin sobrecorregir depresiones reales."
    },
    {
        "keywords":  [
                         "¿Qué es la batimetría",
                         "batimetría"
                     ],
        "answer":  "El levantamiento topográfico del fondo del cauce por debajo del nivel del agua."
    },
    {
        "keywords":  [
                         "¿Por qué es importante la batimetría",
                         "importante",
                         "batimetría"
                     ],
        "answer":  "Determina la capacidad real de conducción del cauce (sección hidráulica efectiva)."
    },
    {
        "keywords":  [
                         "¿Qué limitación tiene un MDE LiDAR \u0027bare earth\u0027 en cauces con agua",
                         "limitación",
                         "tiene",
                         "lidar",
                         "bare",
                         "earth",
                         "cauces",
                         "agua"
                     ],
        "answer":  "Solo capta la superficie del agua, no la profundidad real del lecho."
    },
    {
        "keywords":  [
                         "¿Qué representa el MDE en tramos con agua permanente",
                         "representa",
                         "tramos",
                         "agua",
                         "permanente"
                     ],
        "answer":  "La superficie del agua en el momento del vuelo, no la geometría real del fondo."
    },
    {
        "keywords":  [
                         "¿Cómo se calcula la profundidad en cada celda de HEC-RAS 2D",
                         "cómo",
                         "calcula",
                         "profundidad",
                         "cada",
                         "celda",
                         "hecras"
                     ],
        "answer":  "Como la diferencia entre la elevación de la superficie del agua y la elevación del terreno del MDE."
    },
    {
        "keywords":  [
                         "¿Por qué la profundidad calculada dentro del cauce es \u0027artificial\u0027",
                         "profundidad",
                         "calculada",
                         "dentro",
                         "cauce",
                         "artificial"
                     ],
        "answer":  "Porque el MDE registra otra superficie de agua histórica en lugar del lecho real."
    },
    {
        "keywords":  [
                         "¿Qué ecuaciones resuelve HEC-RAS 2D",
                         "ecuaciones",
                         "resuelve",
                         "hecras"
                     ],
        "answer":  "Las ecuaciones de Saint-Venant o su aproximación de onda difusiva."
    },
    {
        "keywords":  [
                         "¿Qué problema genera tratar el cauce como superficie plana",
                         "problema",
                         "genera",
                         "tratar",
                         "cauce",
                         "como",
                         "superficie",
                         "plana"
                     ],
        "answer":  "Sub-representa la capacidad real de acarreo del río."
    },
    {
        "keywords":  [
                         "¿Cómo se compensa numéricamente el error geométrico sin batimetría",
                         "cómo",
                         "compensa",
                         "numéricamente",
                         "error",
                         "geométrico",
                         "batimetría"
                     ],
        "answer":  "Ajustando la rugosidad de Manning de manera que absorba parte del error."
    },
    {
        "keywords":  [
                         "¿Los ajustes de rugosidad reflejan la fricción real del lecho",
                         "ajustes",
                         "rugosidad",
                         "reflejan",
                         "fricción",
                         "real",
                         "lecho"
                     ],
        "answer":  "No, absorben parte del error geométrico no corregido."
    },
    {
        "keywords":  [
                         "¿Cuáles son las principales fuentes de incertidumbre en el mapeo de inundaciones",
                         "cuáles",
                         "principales",
                         "fuentes",
                         "incertidumbre",
                         "mapeo",
                         "inundaciones"
                     ],
        "answer":  "MDE, batimetría, parámetros de rugosidad, espaciamiento de secciones transversales y estructuras hidráulicas."
    },
    {
        "keywords":  [
                         "¿Dónde SÍ es confiable la profundidad calculada",
                         "dónde",
                         "confiable",
                         "profundidad",
                         "calculada"
                     ],
        "answer":  "Sobre la planicie de inundación, donde el MDE representa terreno real."
    },
    {
        "keywords":  [
                         "¿Dónde NO debe interpretarse la profundidad como medición hidráulica real",
                         "dónde",
                         "debe",
                         "interpretarse",
                         "profundidad",
                         "como",
                         "medición",
                         "hidráulica",
                         "real"
                     ],
        "answer":  "Dentro del cauce mismo de los ríos."
    },
    {
        "keywords":  [
                         "¿Se generó una campaña de levantamiento batimétrico para este estudio",
                         "generó",
                         "campaña",
                         "levantamiento",
                         "batimétrico",
                         "para",
                         "este",
                         "estudio"
                     ],
        "answer":  "No, es una limitación reconocida y asumida conscientemente."
    },
    {
        "keywords":  [
                         "¿Por qué no se realizó el levantamiento batimétrico",
                         "realizó",
                         "levantamiento",
                         "batimétrico"
                     ],
        "answer":  "Porque excede el alcance, presupuesto y tiempos de esta primera fase."
    },
    {
        "keywords":  [
                         "¿Qué equipos se requieren para levantamiento batimétrico",
                         "equipos",
                         "requieren",
                         "para",
                         "levantamiento",
                         "batimétrico"
                     ],
        "answer":  "Ecosonda monohaz o multihaz georreferenciada con GPS diferencial o RTK."
    },
    {
        "keywords":  [
                         "¿Qué ventana de tiempo es ideal para batimetría",
                         "ventana",
                         "tiempo",
                         "ideal",
                         "para",
                         "batimetría"
                     ],
        "answer":  "Época de estiaje, cuando los niveles son más bajos y estables."
    },
    {
        "keywords":  [
                         "¿Qué tratamiento alternativo se usa sin batimetría medida",
                         "tratamiento",
                         "alternativo",
                         "batimetría",
                         "medida"
                     ],
        "answer":  "Conservar el cauce tal como lo registra el MDE y usar enfoque 1D acoplado en tramos relevantes."
    },
    {
        "keywords":  [
                         "¿Por qué conservar el cauce según el MDE es conservador para desbordamiento",
                         "conservar",
                         "cauce",
                         "según",
                         "conservador",
                         "para",
                         "desbordamiento"
                     ],
        "answer":  "Porque subestima la capacidad de conducción real, tendiendo a sobreestimar desbordamientos."
    },
    {
        "keywords":  [
                         "¿Qué enfoque se recomienda en tramos de mayor relevancia",
                         "enfoque",
                         "recomienda",
                         "tramos",
                         "mayor",
                         "relevancia"
                     ],
        "answer":  "Modelación 1D acoplada a la malla 2D con secciones transversales aproximadas."
    },
    {
        "keywords":  [
                         "¿Cómo se estima la geometría esquemática del cauce",
                         "cómo",
                         "estima",
                         "geometría",
                         "esquemática",
                         "cauce"
                     ],
        "answer":  "A partir del ancho superficial visible en imágenes satelitales o MDE y una profundidad media asumida."
    },
    {
        "keywords":  [
                         "¿Qué debe documentarse explícitamente sobre los cauces",
                         "debe",
                         "documentarse",
                         "explícitamente",
                         "sobre",
                         "cauces"
                     ],
        "answer":  "Que la geometría es aproximación basada en MDE de superficie y secciones esquemáticas, no batimetría medida."
    },
    {
        "keywords":  [
                         "¿Qué puede ocurrir en tramos profundos sin batimetría",
                         "puede",
                         "ocurrir",
                         "tramos",
                         "profundos",
                         "batimetría"
                     ],
        "answer":  "El modelo puede subestimar la capacidad de conducción y sobreestimar desbordamientos."
    },
    {
        "keywords":  [
                         "¿Qué puede ocurrir en tramos colmatados por sedimentos",
                         "puede",
                         "ocurrir",
                         "tramos",
                         "colmatados",
                         "sedimentos"
                     ],
        "answer":  "El modelo podría no captar puntos de desbordamiento localizado que sí ocurren en la realidad."
    },
    {
        "keywords":  [
                         "¿Cómo deben interpretarse los mapas de peligro derivados",
                         "cómo",
                         "deben",
                         "interpretarse",
                         "mapas",
                         "peligro",
                         "derivados"
                     ],
        "answer":  "Como primera aproximación de carácter estatal para planeación territorial, no como sustituto de estudios de detalle."
    },
    {
        "keywords":  [
                         "¿Para qué NO deben usarse los mapas en tramos críticos",
                         "para",
                         "deben",
                         "usarse",
                         "mapas",
                         "tramos",
                         "críticos"
                     ],
        "answer":  "No para proyectar obras de infraestructura crítica sin batimetría medida."
    },
    {
        "keywords":  [
                         "¿Cuál es la primera prioridad para trabajo futuro de batimetría",
                         "cuál",
                         "primera",
                         "prioridad",
                         "para",
                         "trabajo",
                         "futuro",
                         "batimetría"
                     ],
        "answer":  "Tramo del río Grijalva y Carrizal a su paso por Villahermosa."
    },
    {
        "keywords":  [
                         "¿Cuál es la segunda prioridad para batimetría",
                         "cuál",
                         "segunda",
                         "prioridad",
                         "para",
                         "batimetría"
                     ],
        "answer":  "Tramos del río Usumacinta cercanos a Jonuta y Macuspana."
    },
    {
        "keywords":  [
                         "¿Cuál es la tercera prioridad para batimetría",
                         "cuál",
                         "tercera",
                         "prioridad",
                         "para",
                         "batimetría"
                     ],
        "answer":  "Cauces de subcuencas priorizadas: Tacotalpa, Viejo Mezcalapa, Almendro, Pichucalco y de la Sierra."
    },
    {
        "keywords":  [
                         "¿Con quién debe coordinarse la campaña batimétrica",
                         "quién",
                         "debe",
                         "coordinarse",
                         "campaña",
                         "batimétrica"
                     ],
        "answer":  "CONAGUA y la Comisión Federal de Electricidad (CFE)."
    },
    {
        "keywords":  [
                         "¿Qué se recomienda hacer una vez disponible la batimetría medida",
                         "recomienda",
                         "hacer",
                         "disponible",
                         "batimetría",
                         "medida"
                     ],
        "answer":  "Actualizar el MDE integrado y volver a correr los escenarios de mayor relevancia."
    },
    {
        "keywords":  [
                         "¿Qué valores de rugosidad de Manning se asignan a cauces mayores",
                         "valores",
                         "rugosidad",
                         "manning",
                         "asignan",
                         "cauces",
                         "mayores"
                     ],
        "answer":  "n≈0.030."
    },
    {
        "keywords":  [
                         "¿Qué valores de Manning se asignan a llanuras de inundación con pastizal",
                         "valores",
                         "manning",
                         "asignan",
                         "llanuras",
                         "inundación",
                         "pastizal"
                     ],
        "answer":  "n=0.040-0.060."
    },
    {
        "keywords":  [
                         "¿Qué valores de Manning se asignan a áreas urbanas",
                         "valores",
                         "manning",
                         "asignan",
                         "áreas",
                         "urbanas"
                     ],
        "answer":  "n≈0.1."
    },
    {
        "keywords":  [
                         "¿Qué valores de Manning se asignan a bosques o vegetación densa",
                         "valores",
                         "manning",
                         "asignan",
                         "bosques",
                         "vegetación",
                         "densa"
                     ],
        "answer":  "n=0.08-0.15."
    },
    {
        "keywords":  [
                         "¿Qué estructuras hidráulicas deben representarse",
                         "estructuras",
                         "hidráulicas",
                         "deben",
                         "representarse"
                     ],
        "answer":  "Puentes, alcantarillas, compuertas, vertederos laterales, diques y bordos."
    },
    {
        "keywords":  [
                         "¿Cuándo se acoplan estructuras en 1D en HEC-RAS",
                         "cuándo",
                         "acoplan",
                         "estructuras",
                         "hecras"
                     ],
        "answer":  "Cuando la malla 2D no resuelve su luz."
    },
    {
        "keywords":  [
                         "¿Cómo se representan diques y bordos",
                         "cómo",
                         "representan",
                         "diques",
                         "bordos"
                     ],
        "answer":  "Elevando el terreno o mediante la herramienta Levee de HEC-RAS."
    },
    {
        "keywords":  [
                         "¿Qué condiciones de frontera hidráulicas se incluyen",
                         "condiciones",
                         "frontera",
                         "hidráulicas",
                         "incluyen"
                     ],
        "answer":  "Entradas de caudal y salidas hacia el Golfo de México."
    },
    {
        "keywords":  [
                         "¿Qué fenómeno puede generar la marea alta en la planicie costera",
                         "fenómeno",
                         "puede",
                         "generar",
                         "marea",
                         "alta",
                         "planicie",
                         "costera"
                     ],
        "answer":  "Remanso tierra adentro."
    },
    {
        "keywords":  [
                         "¿Qué escenario extremo se recomienda probar",
                         "escenario",
                         "extremo",
                         "recomienda",
                         "probar"
                     ],
        "answer":  "Nivel del mar elevado coincidente con frente frío o ciclón."
    },
    {
        "keywords":  [
                         "¿Qué criterio se usa para el paso de tiempo",
                         "criterio",
                         "para",
                         "paso",
                         "tiempo"
                     ],
        "answer":  "Criterio de Courant."
    },
    {
        "keywords":  [
                         "¿Contra qué se calibran las rugosidades",
                         "contra",
                         "calibran",
                         "rugosidades"
                     ],
        "answer":  "Contra mapas de inundación histórica cuando estén disponibles."
    },
    {
        "keywords":  [
                         "¿Qué debe verificarse respecto a flujos no físicos",
                         "debe",
                         "verificarse",
                         "respecto",
                         "flujos",
                         "físicos"
                     ],
        "answer":  "Que no existan por resolución insuficiente."
    },
    {
        "keywords":  [
                         "¿Qué es el criterio de Courant",
                         "criterio",
                         "courant"
                     ],
        "answer":  "Un criterio numérico que relaciona el paso de tiempo con el tamaño de celda y la velocidad del flujo."
    },
    {
        "keywords":  [
                         "¿Qué es el remanso",
                         "remanso"
                     ],
        "answer":  "El aumento del nivel del agua aguas arriba causado por una obstrucción o condición de frontera."
    },
    {
        "keywords":  [
                         "¿Qué es una onda difusiva",
                         "onda",
                         "difusiva"
                     ],
        "answer":  "Una aproximación de las ecuaciones de Saint-Venant que ignora términos de inercia."
    },
    {
        "keywords":  [
                         "¿Qué es una ecosonda multihaz",
                         "ecosonda",
                         "multihaz"
                     ],
        "answer":  "Un equipo que emite múltiples haces de sonido para mapear el fondo del cuerpo de agua."
    },
    {
        "keywords":  [
                         "¿Qué significa RTK en GPS",
                         "significa"
                     ],
        "answer":  "Real-Time Kinematic, técnica de posicionamiento de alta precisión."
    },
    {
        "keywords":  [
                         "¿Qué es una sección transversal esquemática",
                         "sección",
                         "transversal",
                         "esquemática"
                     ],
        "answer":  "Una aproximación geométrica simplificada del cauce (por ejemplo, trapezoidal)."
    },
    {
        "keywords":  [
                         "¿Por qué es conservador subestimar la capacidad de conducción del río",
                         "conservador",
                         "subestimar",
                         "capacidad",
                         "conducción"
                     ],
        "answer":  "Porque tiende a mostrar más áreas inundadas de las que realmente ocurrirían."
    },
    {
        "keywords":  [
                         "¿Qué es el balance de masa en un modelo hidráulico",
                         "balance",
                         "masa",
                         "modelo",
                         "hidráulico"
                     ],
        "answer":  "La conservación del volumen de agua a lo largo de la simulación."
    },
    {
        "keywords":  [
                         "¿Qué porcentaje de pérdida de masa puede indicar problemas",
                         "porcentaje",
                         "pérdida",
                         "masa",
                         "puede",
                         "indicar",
                         "problemas"
                     ],
        "answer":  "Pérdidas mayores a 1-2%."
    },
    {
        "keywords":  [
                         "¿Qué es la malla 2D",
                         "malla"
                     ],
        "answer":  "La discretización espacial del terreno en celdas para resolver las ecuaciones de flujo."
    },
    {
        "keywords":  [
                         "¿Qué es la interfaz 1D-2D",
                         "interfaz",
                         "1d2d"
                     ],
        "answer":  "La conexión entre elementos modelados en una dimensión (cauces) y en dos dimensiones (planicie)."
    },
    {
        "keywords":  [
                         "¿Cuál es el principal desafío computacional del estudio",
                         "cuál",
                         "principal",
                         "desafío",
                         "computacional",
                         "estudio"
                     ],
        "answer":  "Modelar un territorio completo a detalle sin sacrificar precisión en zonas críticas."
    },
    {
        "keywords":  [
                         "¿Qué estrategia principal se propone para manejar la escala estatal",
                         "estrategia",
                         "principal",
                         "propone",
                         "para",
                         "manejar",
                         "escala",
                         "estatal"
                     ],
        "answer":  "División en submodelos por cuenca o región."
    },
    {
        "keywords":  [
                         "¿Cómo se recomienda usar la resolución de malla",
                         "cómo",
                         "recomienda",
                         "usar",
                         "resolución",
                         "malla"
                     ],
        "answer":  "Concentrar celdas finas en cabeceras municipales y zonas urbanizadas, y celdas grandes en zonas rurales."
    },
    {
        "keywords":  [
                         "¿Qué es la simplificación de hidrogramas concurrentes",
                         "simplificación",
                         "hidrogramas",
                         "concurrentes"
                     ],
        "answer":  "Correr escenarios por regiones o asumir todo extremo a la vez para el peor caso."
    },
    {
        "keywords":  [
                         "¿Qué hardware se recomienda",
                         "hardware",
                         "recomienda"
                     ],
        "answer":  "Equipos con buen CPU y RAM suficiente."
    },
    {
        "keywords":  [
                         "¿Qué ventaja ofrece HEC-RAS 2D en términos de hardware",
                         "ventaja",
                         "ofrece",
                         "hecras",
                         "términos",
                         "hardware"
                     ],
        "answer":  "Paralelización del cálculo en múltiples núcleos."
    },
    {
        "keywords":  [
                         "¿Qué alternativa de cómputo se menciona",
                         "alternativa",
                         "cómputo",
                         "menciona"
                     ],
        "answer":  "Cómputo en servidor o nube."
    },
    {
        "keywords":  [
                         "¿Qué método estático se sugiere como verificación complementaria",
                         "método",
                         "estático",
                         "sugiere",
                         "como",
                         "verificación",
                         "complementaria"
                     ],
        "answer":  "Métodos de superposición de lámina de agua (bathtub model)."
    },
    {
        "keywords":  [
                         "¿El bathtub model reemplaza al modelo dinámico 2D",
                         "bathtub",
                         "model",
                         "reemplaza",
                         "modelo",
                         "dinámico"
                     ],
        "answer":  "No, es una aproximación rápida complementaria."
    },
    {
        "keywords":  [
                         "¿Qué enfoque se recomienda para optimizar escenarios",
                         "enfoque",
                         "recomienda",
                         "para",
                         "optimizar",
                         "escenarios"
                     ],
        "answer":  "Enfoque de severidad vs. probabilidad."
    },
    {
        "keywords":  [
                         "¿Hasta qué periodo de retorno se prioriza",
                         "hasta",
                         "periodo",
                         "retorno",
                         "prioriza"
                     ],
        "answer":  "Hasta 100 años."
    },
    {
        "keywords":  [
                         "¿Cuándo se considera el periodo de 500 años",
                         "cuándo",
                         "considera",
                         "periodo",
                         "años"
                     ],
        "answer":  "Solo si lo exige la normatividad."
    },
    {
        "keywords":  [
                         "¿Qué mapas adicionales se sugieren",
                         "mapas",
                         "adicionales",
                         "sugieren"
                     ],
        "answer":  "Mapas de severidad (profundidad + velocidad)."
    },
    {
        "keywords":  [
                         "¿Qué regiones se sugieren como submodelos",
                         "regiones",
                         "sugieren",
                         "como",
                         "submodelos"
                     ],
        "answer":  "Planicie de Villahermosa, planicie del Usumacinta y ríos costeros occidentales."
    },
    {
        "keywords":  [
                         "¿Por qué es importante cubrir traslapes en la planicie común",
                         "importante",
                         "cubrir",
                         "traslapes",
                         "planicie",
                         "común"
                     ],
        "answer":  "Porque cerca de Villahermosa las cuencas comparten planicie de inundación."
    },
    {
        "keywords":  [
                         "¿Qué tamaños de celda se mencionan para zonas rurales",
                         "tamaños",
                         "celda",
                         "mencionan",
                         "para",
                         "zonas",
                         "rurales"
                     ],
        "answer":  "50-100 m."
    },
    {
        "keywords":  [
                         "¿Qué tamaños de celda se mencionan para zonas urbanas críticas",
                         "tamaños",
                         "celda",
                         "mencionan",
                         "para",
                         "zonas",
                         "urbanas",
                         "críticas"
                     ],
        "answer":  "5-15 m."
    },
    {
        "keywords":  [
                         "¿Qué es un modelo bathtub",
                         "modelo",
                         "bathtub"
                     ],
        "answer":  "Un método estático que superpone una elevación de agua sobre el MDE sin simular dinámica de flujo."
    },
    {
        "keywords":  [
                         "¿Por qué el bathtub model es más rápido",
                         "bathtub",
                         "model",
                         "rápido"
                     ],
        "answer":  "Porque no resuelve ecuaciones de flujo, solo compara elevaciones."
    },
    {
        "keywords":  [
                         "¿Qué significa \u0027envolver el peor caso\u0027",
                         "significa",
                         "envolver",
                         "peor",
                         "caso"
                     ],
        "answer":  "Asumir que todos los eventos extremos ocurren simultáneamente."
    },
    {
        "keywords":  [
                         "¿Qué ventaja tiene dividir en submodelos",
                         "ventaja",
                         "tiene",
                         "dividir",
                         "submodelos"
                     ],
        "answer":  "Reduce el tamaño de cada simulación haciéndola más manejable computacionalmente."
    },
    {
        "keywords":  [
                         "¿Qué desventaja tiene dividir en submodelos",
                         "desventaja",
                         "tiene",
                         "dividir",
                         "submodelos"
                     ],
        "answer":  "Requiere integrar posteriormente los resultados en un mapa estatal coherente."
    },
    {
        "keywords":  [
                         "¿Qué significa paralelizar el cálculo",
                         "significa",
                         "paralelizar",
                         "cálculo"
                     ],
        "answer":  "Distribuir la carga de procesamiento entre múltiples núcleos del procesador."
    },
    {
        "keywords":  [
                         "¿Por qué es importante mantener manejable el número total de elementos",
                         "importante",
                         "mantener",
                         "manejable",
                         "número",
                         "total",
                         "elementos"
                     ],
        "answer":  "Para que los tiempos de cómputo sean razonables y la simulación sea estable."
    },
    {
        "keywords":  [
                         "¿Qué factores determinan el tiempo de simulación",
                         "factores",
                         "determinan",
                         "tiempo",
                         "simulación"
                     ],
        "answer":  "Número de celdas, paso de tiempo, duración del evento y capacidad del hardware."
    },
    {
        "keywords":  [
                         "¿Qué es la resolución espacial en un modelo 2D",
                         "resolución",
                         "espacial",
                         "modelo"
                     ],
        "answer":  "El tamaño de las celdas que discretizan el terreno."
    },
    {
        "keywords":  [
                         "¿Por qué no se usa resolución uniforme en todo el estado",
                         "resolución",
                         "uniforme",
                         "todo",
                         "estado"
                     ],
        "answer":  "Porque sería computacionalmente inviable y no necesario en zonas homogéneas."
    },
    {
        "keywords":  [
                         "¿Qué se entiende por \u0027escala estatal\u0027",
                         "entiende",
                         "escala",
                         "estatal"
                     ],
        "answer":  "El territorio completo del estado de Tabasco (aproximadamente 24,000 km²)."
    },
    {
        "keywords":  [
                         "¿Qué es la malla mixta o variable",
                         "malla",
                         "mixta",
                         "variable"
                     ],
        "answer":  "Una malla con diferentes tamaños de celda según la zona."
    },
    {
        "keywords":  [
                         "¿Qué se simula en esta etapa",
                         "simula",
                         "esta",
                         "etapa"
                     ],
        "answer":  "Escenarios de lluvia/caudal correspondientes a distintos periodos de retorno."
    },
    {
        "keywords":  [
                         "¿De qué condiciones se parte en la inicialización",
                         "condiciones",
                         "parte",
                         "inicialización"
                     ],
        "answer":  "Terrenos secos, salvo en cauces principales donde se inicia con caudal base."
    },
    {
        "keywords":  [
                         "¿Qué porcentaje del caudal pico se sugiere como caudal base inicial",
                         "porcentaje",
                         "caudal",
                         "pico",
                         "sugiere",
                         "como",
                         "base",
                         "inicial"
                     ],
        "answer":  "10% del caudal pico de diseño."
    },
    {
        "keywords":  [
                         "¿Por qué se inicia con caudal base en los cauces",
                         "inicia",
                         "caudal",
                         "base",
                         "cauces"
                     ],
        "answer":  "Para evitar arranques en seco que generen inestabilidades numéricas."
    },
    {
        "keywords":  [
                         "¿Qué tipo de simulación se ejecuta",
                         "tipo",
                         "simulación",
                         "ejecuta"
                     ],
        "answer":  "Simulación transitoria para cada periodo de retorno."
    },
    {
        "keywords":  [
                         "¿Qué parámetros se monitorean durante la ejecución",
                         "parámetros",
                         "monitorean",
                         "durante",
                         "ejecución"
                     ],
        "answer":  "Estabilidad, balance de volumen y cortes de tiempo adaptativo."
    },
    {
        "keywords":  [
                         "¿Qué resultados se obtienen de cada simulación",
                         "resultados",
                         "obtienen",
                         "cada",
                         "simulación"
                     ],
        "answer":  "Campos de profundidad máxima, extensión inundada, velocidad máxima y duración de inundación."
    },
    {
        "keywords":  [
                         "¿Se reutiliza el mismo modelo base para diferentes periodos",
                         "reutiliza",
                         "mismo",
                         "modelo",
                         "base",
                         "para",
                         "diferentes",
                         "periodos"
                     ],
        "answer":  "Sí, cambiando hietogramas/hidrogramas y condiciones de salida."
    },
    {
        "keywords":  [
                         "¿Cómo se organizan los resultados de múltiples escenarios",
                         "cómo",
                         "organizan",
                         "resultados",
                         "múltiples",
                         "escenarios"
                     ],
        "answer":  "Por planes o proyectos separados según el periodo de retorno."
    },
    {
        "keywords":  [
                         "¿Cuál es la cadena de procesos del estudio",
                         "cuál",
                         "cadena",
                         "procesos",
                         "estudio"
                     ],
        "answer":  "Lluvia de diseño → escurrimiento (hidrograma) → simulación 2D → mapa de inundación."
    },
    {
        "keywords":  [
                         "¿Cómo deben comportarse los mapas entre periodos de retorno",
                         "cómo",
                         "deben",
                         "comportarse",
                         "mapas",
                         "entre",
                         "periodos",
                         "retorno"
                     ],
        "answer":  "Deben anidarse: la inundación de periodo menor contenida dentro de la de periodo mayor."
    },
    {
        "keywords":  [
                         "¿Qué escenarios adicionales se pueden distinguir",
                         "escenarios",
                         "adicionales",
                         "pueden",
                         "distinguir"
                     ],
        "answer":  "Inundación pluvial urbana versus fluvial."
    },
    {
        "keywords":  [
                         "¿Qué es un evento concurrente extremo",
                         "evento",
                         "concurrente",
                         "extremo"
                     ],
        "answer":  "Lluvia de diseño más marea alta más desfogue de presa."
    },
    {
        "keywords":  [
                         "¿Cómo se clasifica el evento concurrente extremo",
                         "cómo",
                         "clasifica",
                         "evento",
                         "concurrente",
                         "extremo"
                     ],
        "answer":  "Como escenario máximo creíble, de baja probabilidad."
    },
    {
        "keywords":  [
                         "¿Para qué sirve el escenario máximo creíble",
                         "para",
                         "sirve",
                         "escenario",
                         "máximo",
                         "creíble"
                     ],
        "answer":  "Para la planeación y diseño de infraestructura crítica."
    },
    {
        "keywords":  [
                         "¿Qué es un corte de tiempo adaptativo",
                         "corte",
                         "tiempo",
                         "adaptativo"
                     ],
        "answer":  "Un mecanismo que ajusta el paso de tiempo durante la simulación según las condiciones de flujo."
    },
    {
        "keywords":  [
                         "¿Qué significa que los mapas \u0027aniden\u0027",
                         "significa",
                         "mapas",
                         "aniden"
                     ],
        "answer":  "Que el área inundada de un periodo menor debe estar completamente dentro del área de un periodo mayor."
    },
    {
        "keywords":  [
                         "¿Qué condiciones de salida pueden cambiar entre escenarios",
                         "condiciones",
                         "salida",
                         "pueden",
                         "cambiar",
                         "entre",
                         "escenarios"
                     ],
        "answer":  "El nivel del mar, considerando marea alta para periodos de retorno elevados."
    },
    {
        "keywords":  [
                         "¿Qué es la profundidad máxima",
                         "profundidad",
                         "máxima"
                     ],
        "answer":  "La mayor lámina de agua alcanzada en cada celda durante toda la simulación."
    },
    {
        "keywords":  [
                         "¿Qué es la velocidad máxima",
                         "velocidad",
                         "máxima"
                     ],
        "answer":  "La mayor velocidad de flujo alcanzada en cada celda durante la simulación."
    },
    {
        "keywords":  [
                         "¿Qué es la duración de la inundación",
                         "duración",
                         "inundación"
                     ],
        "answer":  "El tiempo que cada celda permanece inundada durante el evento."
    },
    {
        "keywords":  [
                         "¿Por qué es importante verificar la coherencia entre periodos de retorno",
                         "importante",
                         "verificar",
                         "coherencia",
                         "entre",
                         "periodos",
                         "retorno"
                     ],
        "answer":  "Para asegurar la consistencia física del modelo."
    },
    {
        "keywords":  [
                         "¿Qué tiempo de simulación debe cubrirse",
                         "tiempo",
                         "simulación",
                         "debe",
                         "cubrirse"
                     ],
        "answer":  "El hidrograma completo más tiempo adicional para observar el descenso del agua."
    },
    {
        "keywords":  [
                         "¿Qué es un escenario de diseño",
                         "escenario",
                         "diseño"
                     ],
        "answer":  "Una combinación de condiciones de lluvia, caudal y frontera asociada a un periodo de retorno específico."
    },
    {
        "keywords":  [
                         "¿Qué diferencia hay entre inundación pluvial y fluvial",
                         "diferencia",
                         "entre",
                         "inundación",
                         "pluvial",
                         "fluvial"
                     ],
        "answer":  "La pluvial es por lluvia directa sobre el terreno; la fluvial es por desbordamiento de ríos."
    },
    {
        "keywords":  [
                         "¿Por qué el escenario concurrente es de baja probabilidad",
                         "escenario",
                         "concurrente",
                         "baja",
                         "probabilidad"
                     ],
        "answer":  "Porque requiere que múltiples eventos extremos ocurran simultáneamente."
    },
    {
        "keywords":  [
                         "¿Qué se entiende por \u0027máximo creíble\u0027",
                         "entiende",
                         "máximo",
                         "creíble"
                     ],
        "answer":  "El peor escenario que puede razonablemente esperarse, aunque sea poco probable."
    },
    {
        "keywords":  [
                         "¿Qué papel juega la memoria de cálculo en esta etapa",
                         "papel",
                         "juega",
                         "memoria",
                         "cálculo",
                         "esta",
                         "etapa"
                     ],
        "answer":  "Documentar los parámetros y resultados de cada corrida."
    },
    {
        "keywords":  [
                         "¿Qué se genera a partir de la rejilla de profundidad máxima",
                         "genera",
                         "partir",
                         "rejilla",
                         "profundidad",
                         "máxima"
                     ],
        "answer":  "Polígonos de inundación para cada escenario."
    },
    {
        "keywords":  [
                         "¿Qué se hace con manchas aisladas insignificantes",
                         "hace",
                         "manchas",
                         "aisladas",
                         "insignificantes"
                     ],
        "answer":  "Se suavizan o eliminan."
    },
    {
        "keywords":  [
                         "¿Cómo se clasifican las profundidades",
                         "cómo",
                         "clasifican",
                         "profundidades"
                     ],
        "answer":  "En intervalos con distinto color, por ejemplo \u003c0.5 m, 0.5-1.5 m, \u003e1.5 m."
    },
    {
        "keywords":  [
                         "¿Dónde deben justificarse los umbrales elegidos",
                         "dónde",
                         "deben",
                         "justificarse",
                         "umbrales",
                         "elegidos"
                     ],
        "answer":  "En la memoria técnica."
    },
    {
        "keywords":  [
                         "¿Qué mapas adicionales se recomienda elaborar",
                         "mapas",
                         "adicionales",
                         "recomienda",
                         "elaborar"
                     ],
        "answer":  "Mapas de severidad combinando profundidad y velocidad."
    },
    {
        "keywords":  [
                         "¿Qué puntos críticos deben marcarse",
                         "puntos",
                         "críticos",
                         "deben",
                         "marcarse"
                     ],
        "answer":  "Localidades afectadas, infraestructura clave bajo agua y profundidades máximas destacables."
    },
    {
        "keywords":  [
                         "¿Qué elementos debe incluir cada mapa por periodo de retorno",
                         "elementos",
                         "debe",
                         "incluir",
                         "cada",
                         "mapa",
                         "periodo",
                         "retorno"
                     ],
        "answer":  "Título claro, leyenda, escala gráfica y numérica, rosa de los vientos, fuentes de información, fecha y logotipos institucionales."
    },
    {
        "keywords":  [
                         "¿Qué escala se recomienda para mapas estatales de inundación general",
                         "escala",
                         "recomienda",
                         "para",
                         "mapas",
                         "estatales",
                         "inundación",
                         "general"
                     ],
        "answer":  "1:250,000 o 1:100,000."
    },
    {
        "keywords":  [
                         "¿Qué escala se recomienda para cabeceras municipales",
                         "escala",
                         "recomienda",
                         "para",
                         "cabeceras",
                         "municipales"
                     ],
        "answer":  "Escalas grandes como 1:10,000."
    },
    {
        "keywords":  [
                         "¿Qué sistema de coordenadas se sugiere usar",
                         "sistema",
                         "coordenadas",
                         "sugiere",
                         "usar"
                     ],
        "answer":  "Coordenadas proyectadas (UTM)."
    },
    {
        "keywords":  [
                         "¿Cómo se recomienda presentar los mapas",
                         "cómo",
                         "recomienda",
                         "presentar",
                         "mapas"
                     ],
        "answer":  "Un mapa general del estado con recuadros de detalle en ciudades principales."
    },
    {
        "keywords":  [
                         "¿Qué tablas resumidas se sugieren en el reporte",
                         "tablas",
                         "resumidas",
                         "sugieren",
                         "reporte"
                     ],
        "answer":  "Superficie inundada por municipio, profundidad máxima y principales localidades afectadas."
    },
    {
        "keywords":  [
                         "¿Con qué datos poblacionales se puede cruzar la información",
                         "datos",
                         "poblacionales",
                         "puede",
                         "cruzar",
                         "información"
                     ],
        "answer":  "Datos del INEGI."
    },
    {
        "keywords":  [
                         "¿Para qué sirven los mapas de peligro finalmente",
                         "para",
                         "sirven",
                         "mapas",
                         "peligro",
                         "finalmente"
                     ],
        "answer":  "Para gestión de riesgos, planeación territorial y concientización pública."
    },
    {
        "keywords":  [
                         "¿Qué es un mapa de severidad",
                         "mapa",
                         "severidad"
                     ],
        "answer":  "Un mapa que combina profundidad y velocidad de inundación."
    },
    {
        "keywords":  [
                         "¿Por qué es importante la rosa de los vientos en un mapa",
                         "importante",
                         "rosa",
                         "vientos",
                         "mapa"
                     ],
        "answer":  "Para orientar geográficamente al usuario."
    },
    {
        "keywords":  [
                         "¿Qué es un recuadro de detalle",
                         "recuadro",
                         "detalle"
                     ],
        "answer":  "Una ventana ampliada del mapa general que muestra una zona específica con mayor detalle."
    },
    {
        "keywords":  [
                         "¿Qué significa \u0027suavizar manchas aisladas\u0027",
                         "significa",
                         "suavizar",
                         "manchas",
                         "aisladas"
                     ],
        "answer":  "Eliminar pequeñas áreas inundadas que pueden ser artefactos numéricos."
    },
    {
        "keywords":  [
                         "¿Por qué se usan tonalidades azules para inundación",
                         "usan",
                         "tonalidades",
                         "azules",
                         "para",
                         "inundación"
                     ],
        "answer":  "Por convención en atlas de riesgo de México para evitar confusión con otros fenómenos."
    },
    {
        "keywords":  [
                         "¿Qué otros fenómenos usan gamas de color diferentes",
                         "otros",
                         "fenómenos",
                         "usan",
                         "gamas",
                         "color",
                         "diferentes"
                     ],
        "answer":  "Deslizamientos y sismos."
    },
    {
        "keywords":  [
                         "¿Qué son los metadatos descriptivos",
                         "metadatos",
                         "descriptivos"
                     ],
        "answer":  "Información sobre fecha, autor, fuente, resolución y sistema de referencia de cada capa."
    },
    {
        "keywords":  [
                         "¿Qué es EPSG:6362",
                         "epsg6362"
                     ],
        "answer":  "El sistema de coordenadas oficial Mexico ITRF2008 recomendado para compatibilidad con el ANR."
    },
    {
        "keywords":  [
                         "¿Qué alternativa de sistema de coordenadas se menciona",
                         "alternativa",
                         "sistema",
                         "coordenadas",
                         "menciona"
                     ],
        "answer":  "WGS84/UTM zona 15N."
    },
    {
        "keywords":  [
                         "¿Por qué es importante cruzar con datos de INEGI",
                         "importante",
                         "cruzar",
                         "datos",
                         "inegi"
                     ],
        "answer":  "Para estimar la población expuesta y la vulnerabilidad de elementos expuestos."
    },
    {
        "keywords":  [
                         "¿Qué es la extensión inundada",
                         "extensión",
                         "inundada"
                     ],
        "answer":  "El área total cubierta por el agua durante el evento de inundación."
    },
    {
        "keywords":  [
                         "¿Qué es el tirante de agua",
                         "tirante",
                         "agua"
                     ],
        "answer":  "La profundidad o lámina de agua sobre el terreno en un punto específico."
    },
    {
        "keywords":  [
                         "¿Qué es la cartografía temática",
                         "cartografía",
                         "temática"
                     ],
        "answer":  "Mapas que representan información específica sobre un tema (en este caso, inundación)."
    },
    {
        "keywords":  [
                         "¿Por qué se recomienda justificar los umbrales de profundidad",
                         "recomienda",
                         "justificar",
                         "umbrales",
                         "profundidad"
                     ],
        "answer":  "Para que los usuarios entiendan el criterio técnico detrás de la clasificación."
    },
    {
        "keywords":  [
                         "¿Qué significa \u0027productos cartográficos\u0027",
                         "significa",
                         "productos",
                         "cartográficos"
                     ],
        "answer":  "Los mapas y capas geográficas entregables del estudio."
    },
    {
        "keywords":  [
                         "¿Qué es una base de datos geográfica",
                         "base",
                         "datos",
                         "geográfica"
                     ],
        "answer":  "Un conjunto de capas de información espacial organizadas para su uso en SIG."
    },
    {
        "keywords":  [
                         "¿Cuáles son las tres principales instituciones normativas mencionadas",
                         "cuáles",
                         "tres",
                         "principales",
                         "instituciones",
                         "normativas",
                         "mencionadas"
                     ],
        "answer":  "CENAPRED, CONAGUA y SEDATU."
    },
    {
        "keywords":  [
                         "¿Qué documento de CENAPRED sistematiza el estado del arte",
                         "documento",
                         "cenapred",
                         "sistematiza",
                         "estado",
                         "arte"
                     ],
        "answer":  "Actualización de metodologías para la elaboración de mapas de peligros y riesgos estatales y municipales (2022)."
    },
    {
        "keywords":  [
                         "¿Tiene carácter de norma oficial obligatoria el documento de CENAPRED de 2022",
                         "tiene",
                         "carácter",
                         "norma",
                         "oficial",
                         "obligatoria",
                         "documento",
                         "cenapred",
                         "2022"
                     ],
        "answer":  "No, aunque marca la tendencia técnica esperada."
    },
    {
        "keywords":  [
                         "¿Qué instrumento más reciente de SEDATU se menciona",
                         "instrumento",
                         "reciente",
                         "sedatu",
                         "menciona"
                     ],
        "answer":  "La NOM-006-SEDATU-2024."
    },
    {
        "keywords":  [
                         "¿Qué define CENAPRED en el marco normativo",
                         "define",
                         "cenapred",
                         "marco",
                         "normativo"
                     ],
        "answer":  "El \u0027cómo\u0027 técnico-metodológico: insumos, modelos, escalas y productos cartográficos."
    },
    {
        "keywords":  [
                         "¿Qué aporta CONAGUA",
                         "aporta",
                         "conagua"
                     ],
        "answer":  "El \u0027con qué\u0027 hidrológico e hidráulico: series de datos, criterios de diseño y reglas de operación."
    },
    {
        "keywords":  [
                         "¿Qué establece SEDATU",
                         "establece",
                         "sedatu"
                     ],
        "answer":  "El \u0027para qué\u0027 en términos de planeación urbana y restricción de usos de suelo."
    },
    {
        "keywords":  [
                         "¿Cómo debe abordarse el análisis según CENAPRED",
                         "cómo",
                         "debe",
                         "abordarse",
                         "análisis",
                         "según",
                         "cenapred"
                     ],
        "answer":  "Por cuencas hidrológicas completas, no solo por límites municipales o estatales."
    },
    {
        "keywords":  [
                         "¿Por qué es crítico el enfoque de cuenca en Tabasco",
                         "crítico",
                         "enfoque",
                         "cuenca",
                         "tabasco"
                     ],
        "answer":  "Porque los ríos Grijalva y Usumacinta drenan cuencas que se extienden hacia Chiapas y Guatemala."
    },
    {
        "keywords":  [
                         "¿Qué colaboración se propone para cuencas compartidas",
                         "colaboración",
                         "propone",
                         "para",
                         "cuencas",
                         "compartidas"
                     ],
        "answer":  "Inter-municipal e interestatal, con intercambio de información hidrométrica."
    },
    {
        "keywords":  [
                         "¿Qué región hidrológico-administrativa de CONAGUA se menciona",
                         "región",
                         "hidrológicoadministrativa",
                         "conagua",
                         "menciona"
                     ],
        "answer":  "XI Frontera Sur."
    },
    {
        "keywords":  [
                         "¿Qué se sugiere documentar en un anexo cartográfico",
                         "sugiere",
                         "documentar",
                         "anexo",
                         "cartográfico"
                     ],
        "answer":  "La porción de cada cuenca fuera del estado y el porcentaje de aportación de caudal externo."
    },
    {
        "keywords":  [
                         "¿Cuáles son los periodos de retorno oficiales de la Guía mínima de CENAPRED",
                         "cuáles",
                         "periodos",
                         "retorno",
                         "oficiales",
                         "guía",
                         "mínima",
                         "cenapred"
                     ],
        "answer":  "2, 5, 10, 20, 50, 100, 250 y 500 años."
    },
    {
        "keywords":  [
                         "¿Cuántos periodos maneja CONAGUA en la práctica",
                         "cuántos",
                         "periodos",
                         "maneja",
                         "conagua",
                         "práctica"
                     ],
        "answer":  "5 periodos clave: 2, 5, 10, 50 y 100 años."
    },
    {
        "keywords":  [
                         "¿Cuáles son los 5 periodos mínimos indispensables según la metodología",
                         "cuáles",
                         "periodos",
                         "mínimos",
                         "indispensables",
                         "según",
                         "metodología"
                     ],
        "answer":  "2, 5, 10, 50 y 100 años."
    },
    {
        "keywords":  [
                         "¿Por qué se recomienda ampliar al escenario de 500 años",
                         "recomienda",
                         "ampliar",
                         "escenario",
                         "años"
                     ],
        "answer":  "Porque algunos programas de financiamiento federal condicionan la aceptación de atlas a su inclusión."
    },
    {
        "keywords":  [
                         "¿Qué fondo federal se menciona como condicionante",
                         "fondo",
                         "federal",
                         "menciona",
                         "como",
                         "condicionante"
                     ],
        "answer":  "Fondo de Prevención de Desastres (FOPREDEN) o sus equivalentes vigentes."
    },
    {
        "keywords":  [
                         "¿Qué alternativa se sugiere si no se puede correr 500 años para toda el área",
                         "alternativa",
                         "sugiere",
                         "puede",
                         "correr",
                         "años",
                         "para",
                         "toda",
                         "área"
                     ],
        "answer":  "Generarlo al menos para las cabeceras municipales prioritarias."
    },
    {
        "keywords":  [
                         "¿Qué requiere la normatividad actual para atlas de riesgo",
                         "requiere",
                         "normatividad",
                         "actual",
                         "para",
                         "atlas",
                         "riesgo"
                     ],
        "answer":  "Análisis de flujo superficial en dos dimensiones (2D)."
    },
    {
        "keywords":  [
                         "¿Qué software cumple con el requisito de modelación 2D",
                         "software",
                         "cumple",
                         "requisito",
                         "modelación"
                     ],
        "answer":  "HEC-RAS 2D."
    },
    {
        "keywords":  [
                         "¿Qué ecuaciones debe resolver el modelo 2D",
                         "ecuaciones",
                         "debe",
                         "resolver",
                         "modelo"
                     ],
        "answer":  "Ecuaciones de Saint-Venant en forma bidimensional o aproximación de onda difusiva."
    },
    {
        "keywords":  [
                         "¿Qué métodos no deben usarse exclusivamente",
                         "métodos",
                         "deben",
                         "usarse",
                         "exclusivamente"
                     ],
        "answer":  "Métodos simplificados unidimensionales o aproximaciones puramente históricas/cualitativas."
    },
    {
        "keywords":  [
                         "¿Qué elementos debe documentar la memoria técnica sobre la modelación 2D",
                         "elementos",
                         "debe",
                         "documentar",
                         "memoria",
                         "técnica",
                         "sobre",
                         "modelación"
                     ],
        "answer":  "Esquema numérico, tamaño de paso de tiempo, criterio de Courant y reportes de balance de masa."
    },
    {
        "keywords":  [
                         "¿Qué parámetro de intensidad indica CENAPRED reportar",
                         "parámetro",
                         "intensidad",
                         "indica",
                         "cenapred",
                         "reportar"
                     ],
        "answer":  "La profundidad o tirante de inundación."
    },
    {
        "keywords":  [
                         "¿Qué producto adicional alinea con mejores prácticas internacionales",
                         "producto",
                         "adicional",
                         "alinea",
                         "mejores",
                         "prácticas",
                         "internacionales"
                     ],
        "answer":  "Mapas de severidad que combinen profundidad y velocidad."
    },
    {
        "keywords":  [
                         "¿Qué umbral internacional se menciona para peligro a personas",
                         "umbral",
                         "internacional",
                         "menciona",
                         "para",
                         "peligro",
                         "personas"
                     ],
        "answer":  "Producto profundidad × velocidad mayor a 0.5 m²/s."
    },
    {
        "keywords":  [
                         "¿Existe un criterio numérico oficial mexicano equivalente al umbral de 0.5 m²/s",
                         "existe",
                         "criterio",
                         "numérico",
                         "oficial",
                         "mexicano",
                         "equivalente",
                         "umbral"
                     ],
        "answer":  "No, por lo que se sugiere adaptarlo y justificarlo para el contexto tabasqueño."
    },
    {
        "keywords":  [
                         "¿Qué principio de detalle espera CENAPRED",
                         "principio",
                         "detalle",
                         "espera",
                         "cenapred"
                     ],
        "answer":  "Mayor nivel de detalle a nivel municipal que a nivel estatal."
    },
    {
        "keywords":  [
                         "¿Qué resolución se propone en cabeceras municipales",
                         "resolución",
                         "propone",
                         "cabeceras",
                         "municipales"
                     ],
        "answer":  "Malla fina de 5-15 m."
    },
    {
        "keywords":  [
                         "¿Qué resolución se propone en zonas rurales",
                         "resolución",
                         "propone",
                         "zonas",
                         "rurales"
                     ],
        "answer":  "Malla gruesa de 50-100 m."
    },
    {
        "keywords":  [
                         "¿Qué convenciones de color se deben seguir",
                         "convenciones",
                         "color",
                         "deben",
                         "seguir"
                     ],
        "answer":  "Tonalidades azules para inundación, evitando confusión con deslizamientos o sismos."
    },
    {
        "keywords":  [
                         "¿Qué sistema de coordenadas oficial se recomienda",
                         "sistema",
                         "coordenadas",
                         "oficial",
                         "recomienda"
                     ],
        "answer":  "EPSG:6362 (Mexico ITRF2008)."
    },
    {
        "keywords":  [
                         "¿Qué metadatos deben incluir las capas geográficas",
                         "metadatos",
                         "deben",
                         "incluir",
                         "capas",
                         "geográficas"
                     ],
        "answer":  "Fecha, autor, fuente, resolución y sistema de referencia."
    },
    {
        "keywords":  [
                         "¿Qué estructura sugiere CENAPRED para la memoria de cálculo",
                         "estructura",
                         "sugiere",
                         "cenapred",
                         "para",
                         "memoria",
                         "cálculo"
                     ],
        "answer":  "Antecedentes, objetivos, área de estudio, insumos, metodología hidrológica, metodología hidráulica, resultados, limitaciones y recomendaciones."
    },
    {
        "keywords":  [
                         "¿Qué cursos ha puesto a disposición CENAPRED",
                         "cursos",
                         "puesto",
                         "disposición",
                         "cenapred"
                     ],
        "answer":  "Cursos y materiales audiovisuales sobre análisis hidrológico e hidráulico para inundaciones."
    },
    {
        "keywords":  [
                         "¿Qué tres frentes interviene CONAGUA",
                         "tres",
                         "frentes",
                         "interviene",
                         "conagua"
                     ],
        "answer":  "Fuente de información, autoridad en aguas nacionales, y referente técnico para criterios de diseño."
    },
    {
        "keywords":  [
                         "¿Qué estaciones son fuentes prioritarias de CONAGUA",
                         "estaciones",
                         "fuentes",
                         "prioritarias",
                         "conagua"
                     ],
        "answer":  "Pluviográficas, pluviométricas e hidrométricas."
    },
    {
        "keywords":  [
                         "¿Qué productos satelitales complementarios se mencionan",
                         "productos",
                         "satelitales",
                         "complementarios",
                         "mencionan"
                     ],
        "answer":  "CHIRPS y ERA5."
    },
    {
        "keywords":  [
                         "¿Qué se debe hacer antes de emplear productos satelitales como insumo definitivo",
                         "debe",
                         "hacer",
                         "antes",
                         "emplear",
                         "productos",
                         "satelitales",
                         "como",
                         "insumo",
                         "definitivo"
                     ],
        "answer":  "Contrastarlos contra registros locales disponibles."
    },
    {
        "keywords":  [
                         "¿Qué se recomienda solicitar formalmente a CONAGUA",
                         "recomienda",
                         "solicitar",
                         "formalmente",
                         "conagua"
                     ],
        "answer":  "Histórico completo de estaciones hidrométricas y estudios de actualización de curvas IDF."
    },
    {
        "keywords":  [
                         "¿A qué gerencia de CONAGUA se debe dirigir la solicitud",
                         "gerencia",
                         "conagua",
                         "debe",
                         "dirigir",
                         "solicitud"
                     ],
        "answer":  "Gerencia Regional Frontera Sur."
    },
    {
        "keywords":  [
                         "¿Qué presa se menciona en el sistema Grijalva",
                         "presa",
                         "menciona",
                         "sistema",
                         "grijalva"
                     ],
        "answer":  "Presa Peñitas."
    },
    {
        "keywords":  [
                         "¿Cuántos escenarios de presa se contemplan",
                         "cuántos",
                         "escenarios",
                         "presa",
                         "contemplan"
                     ],
        "answer":  "Dos: hidrograma de pico controlado y liberación mayor por evento extremo."
    },
    {
        "keywords":  [
                         "¿A quién se debe gestionar las reglas de operación de presas",
                         "quién",
                         "debe",
                         "gestionar",
                         "reglas",
                         "operación",
                         "presas"
                     ],
        "answer":  "Comisión Federal de Electricidad (CFE) y Gerencia de Aguas Superficiales de CONAGUA."
    },
    {
        "keywords":  [
                         "¿Qué se recomienda para validación de mapas",
                         "recomienda",
                         "para",
                         "validación",
                         "mapas"
                     ],
        "answer":  "Mesas de trabajo conjuntas con CONAGUA regional y Protección Civil de Tabasco."
    },
    {
        "keywords":  [
                         "¿Qué conocimiento aportan los operadores de presas",
                         "conocimiento",
                         "aportan",
                         "operadores",
                         "presas"
                     ],
        "answer":  "Información no documentada sobre niveles históricos de inundación en comunidades específicas."
    },
    {
        "keywords":  [
                         "¿Cuál es el objeto de la NOM-006-SEDATU-2024",
                         "cuál",
                         "objeto",
                         "nom006sedatu2024"
                     ],
        "answer":  "Establecer criterios para clasificación y delimitación de zonas no aptas para desarrollo urbano por peligros naturales."
    },
    {
        "keywords":  [
                         "¿Qué tipos de inundación menciona explícitamente la NOM-006-SEDATU-2024",
                         "tipos",
                         "inundación",
                         "menciona",
                         "explícitamente",
                         "nom006sedatu2024"
                     ],
        "answer":  "Inundaciones de tipo fluvial y pluvial."
    },
    {
        "keywords":  [
                         "¿Qué información técnica proporciona la metodología para la NOM",
                         "información",
                         "técnica",
                         "proporciona",
                         "metodología",
                         "para"
                     ],
        "answer":  "Identificación y caracterización de zonas inundables en términos de profundidad, extensión y frecuencia."
    },
    {
        "keywords":  [
                         "¿Qué se recomienda incluir en el informe final respecto a la NOM",
                         "recomienda",
                         "incluir",
                         "informe",
                         "final",
                         "respecto"
                     ],
        "answer":  "Una sección de vinculación entre resultados y criterios de la NOM-006-SEDATU-2024."
    },
    {
        "keywords":  [
                         "¿Qué combinaciones deberían traducirse en \u0027zona no apta para urbanización\u0027",
                         "combinaciones",
                         "deberían",
                         "traducirse",
                         "zona",
                         "apta",
                         "para",
                         "urbanización"
                     ],
        "answer":  "Combinaciones de periodo de retorno y tirante que la autoridad determine."
    },
    {
        "keywords":  [
                         "¿Quién tiene la decisión normativa final sobre clasificación de zonas",
                         "quién",
                         "tiene",
                         "decisión",
                         "normativa",
                         "final",
                         "sobre",
                         "clasificación",
                         "zonas"
                     ],
        "answer":  "La autoridad competente (municipal o estatal)."
    },
    {
        "keywords":  [
                         "¿Qué más integra un atlas de riesgo completo según SEDATU y CENAPRED",
                         "integra",
                         "atlas",
                         "riesgo",
                         "completo",
                         "según",
                         "sedatu",
                         "cenapred"
                     ],
        "answer":  "La vulnerabilidad de elementos expuestos además del peligro."
    },
    {
        "keywords":  [
                         "¿En qué se centra la presente metodología",
                         "centra",
                         "presente",
                         "metodología"
                     ],
        "answer":  "En la caracterización del peligro por inundación."
    },
    {
        "keywords":  [
                         "¿Qué se recomienda para una fase posterior del proyecto",
                         "recomienda",
                         "para",
                         "fase",
                         "posterior",
                         "proyecto"
                     ],
        "answer":  "Cruzar profundidades con información de vivienda del INEGI y funciones de vulnerabilidad de CENAPRED."
    },
    {
        "keywords":  [
                         "¿Qué permite estimar el cruce con datos de vivienda",
                         "permite",
                         "estimar",
                         "cruce",
                         "datos",
                         "vivienda"
                     ],
        "answer":  "Daños esperados y pérdidas económicas potenciales por escenario."
    },
    {
        "keywords":  [
                         "¿Con qué instrumentos de planeación deben integrarse los mapas",
                         "instrumentos",
                         "planeación",
                         "deben",
                         "integrarse",
                         "mapas"
                     ],
        "answer":  "Programas de Desarrollo Urbano y Programas Municipales de Ordenamiento Territorial."
    },
    {
        "keywords":  [
                         "¿Qué obras de mitigación se proponen donde hay infraestructura crítica en peligro",
                         "obras",
                         "mitigación",
                         "proponen",
                         "donde",
                         "infraestructura",
                         "crítica",
                         "peligro"
                     ],
        "answer":  "Bordos, canales de alivio y mejoras al drenaje pluvial."
    },
    {
        "keywords":  [
                         "¿Qué leyes establecen la obligación de contar con atlas de riesgo actualizados",
                         "leyes",
                         "establecen",
                         "obligación",
                         "contar",
                         "atlas",
                         "riesgo",
                         "actualizados"
                     ],
        "answer":  "Ley General de Protección Civil y Ley General de Asentamientos Humanos, Ordenamiento Territorial y Desarrollo Urbano."
    },
    {
        "keywords":  [
                         "¿Cuántos requerimientos lista la matriz resumen de cumplimiento",
                         "cuántos",
                         "requerimientos",
                         "lista",
                         "matriz",
                         "resumen",
                         "cumplimiento"
                     ],
        "answer":  "10 requerimientos principales."
    },
    {
        "keywords":  [
                         "¿Qué requerimiento atiende el enfoque de cuenca",
                         "requerimiento",
                         "atiende",
                         "enfoque",
                         "cuenca"
                     ],
        "answer":  "Analizar por unidades hidrológicas, no solo por límites administrativos."
    },
    {
        "keywords":  [
                         "¿Qué requerimiento atienden los periodos de retorno 2-100 años",
                         "requerimiento",
                         "atienden",
                         "periodos",
                         "retorno",
                         "2100",
                         "años"
                     ],
        "answer":  "Los periodos de retorno oficiales de CENAPRED y CONAGUA."
    },
    {
        "keywords":  [
                         "¿Cómo se atiende el requerimiento de dimensionalidad 2D",
                         "cómo",
                         "atiende",
                         "requerimiento",
                         "dimensionalidad"
                     ],
        "answer":  "Uso de HEC-RAS 2D para todos los escenarios sin simplificaciones 1D exclusivas."
    },
    {
        "keywords":  [
                         "¿Cómo se atiende el requerimiento de parámetro de salida",
                         "cómo",
                         "atiende",
                         "requerimiento",
                         "parámetro",
                         "salida"
                     ],
        "answer":  "Mapas temáticos de profundidad máxima y mapas de severidad."
    },
    {
        "keywords":  [
                         "¿Cómo se atienden las escalas cartográficas",
                         "cómo",
                         "atienden",
                         "escalas",
                         "cartográficas"
                     ],
        "answer":  "Malla fina en cabeceras municipales y zooms municipales."
    },
    {
        "keywords":  [
                         "¿Cómo se atiende el requerimiento de memoria de cálculo",
                         "cómo",
                         "atiende",
                         "requerimiento",
                         "memoria",
                         "cálculo"
                     ],
        "answer":  "Con una memoria técnica estructurada con insumos, métodos, supuestos y limitaciones."
    },
    {
        "keywords":  [
                         "¿Cómo se atienden los desfogues de presas",
                         "cómo",
                         "atienden",
                         "desfogues",
                         "presas"
                     ],
        "answer":  "Con escenarios de hidrograma controlado y liberación extraordinaria."
    },
    {
        "keywords":  [
                         "¿Cómo se atiende el requerimiento de zonas no aptas",
                         "cómo",
                         "atiende",
                         "requerimiento",
                         "zonas",
                         "aptas"
                     ],
        "answer":  "Con vinculación explícita de tirantes y periodos de retorno con criterios de clasificación de uso de suelo."
    },
    {
        "keywords":  [
                         "¿Cómo se atiende la vulnerabilidad y riesgo integral",
                         "cómo",
                         "atiende",
                         "vulnerabilidad",
                         "riesgo",
                         "integral"
                     ],
        "answer":  "Sentando la base metodológica y recomendando cruce posterior con datos de vivienda."
    },
    {
        "keywords":  [
                         "¿Cómo se atiende la validación institucional",
                         "cómo",
                         "atiende",
                         "validación",
                         "institucional"
                     ],
        "answer":  "Con mesas de trabajo de validación documentadas como anexo."
    },
    {
        "keywords":  [
                         "¿Qué se sugiere documentar de las mesas de validación",
                         "sugiere",
                         "documentar",
                         "mesas",
                         "validación"
                     ],
        "answer":  "Actas, listas de asistencia, observaciones recibidas y su atención."
    },
    {
        "keywords":  [
                         "¿Por qué es valiosa la evidencia de mesas de validación",
                         "valiosa",
                         "evidencia",
                         "mesas",
                         "validación"
                     ],
        "answer":  "Porque suele ser valorada positivamente en procesos de dictaminación federal."
    },
    {
        "keywords":  [
                         "¿Con qué ley estatal se recomienda vincular los resultados",
                         "estatal",
                         "recomienda",
                         "vincular",
                         "resultados"
                     ],
        "answer":  "Ley de Protección Civil del Estado de Tabasco."
    },
    {
        "keywords":  [
                         "¿Qué instrumentos locales pueden alimentarse del estudio",
                         "instrumentos",
                         "locales",
                         "pueden",
                         "alimentarse",
                         "estudio"
                     ],
        "answer":  "Planes de contingencia por temporada de lluvias y ciclones."
    },
    {
        "keywords":  [
                         "¿Con qué frecuencia se recomienda actualizar el estudio",
                         "frecuencia",
                         "recomienda",
                         "actualizar",
                         "estudio"
                     ],
        "answer":  "Cada 5 años o tras eventos hidrometeorológicos mayores."
    },
    {
        "keywords":  [
                         "¿Por qué un atlas desactualizado pierde validez",
                         "atlas",
                         "desactualizado",
                         "pierde",
                         "validez"
                     ],
        "answer":  "Porque la normatividad y los insumos disponibles evolucionan con el tiempo."
    },
    {
        "keywords":  [
                         "¿Dónde se sugiere integrar los productos cartográficos",
                         "dónde",
                         "sugiere",
                         "integrar",
                         "productos",
                         "cartográficos"
                     ],
        "answer":  "Al Atlas Nacional de Riesgos de CENAPRED."
    },
    {
        "keywords":  [
                         "¿Qué ventaja adicional da integrarse al ANR",
                         "ventaja",
                         "adicional",
                         "integrarse"
                     ],
        "answer":  "Facilita el acceso a financiamiento federal para obras de mitigación."
    },
    {
        "keywords":  [
                         "¿Qué código se recomienda revisar para congruencia jurídica",
                         "código",
                         "recomienda",
                         "revisar",
                         "para",
                         "congruencia",
                         "jurídica"
                     ],
        "answer":  "Código Reglamentario o equivalente del estado de Tabasco en materia de asentamientos humanos."
    },
    {
        "keywords":  [
                         "¿Qué rol debe tener el equipo jurídico del proyecto",
                         "debe",
                         "tener",
                         "equipo",
                         "jurídico",
                         "proyecto"
                     ],
        "answer":  "Revisar la congruencia de productos con disposiciones específicas estatales."
    },
    {
        "keywords":  [
                         "¿Qué significa que las tres fuentes normativas son complementarias",
                         "significa",
                         "tres",
                         "fuentes",
                         "normativas",
                         "complementarias"
                     ],
        "answer":  "Que no son excluyentes entre sí y deben atenderse simultáneamente."
    },
    {
        "keywords":  [
                         "¿Qué es el FOPREDEN",
                         "fopreden"
                     ],
        "answer":  "Fondo de Prevención de Desastres, un programa de financiamiento federal."
    },
    {
        "keywords":  [
                         "¿Qué es una dictaminación federal",
                         "dictaminación",
                         "federal"
                     ],
        "answer":  "El proceso de revisión y aprobación oficial de estudios técnicos por autoridades federales."
    },
    {
        "keywords":  [
                         "¿Qué es un anexo cartográfico",
                         "anexo",
                         "cartográfico"
                     ],
        "answer":  "Material gráfico complementario que documenta aspectos espaciales del estudio."
    },
    {
        "keywords":  [
                         "¿Qué es la gobernanza del estudio",
                         "gobernanza",
                         "estudio"
                     ],
        "answer":  "La coordinación institucional y participación de actores en la validación y uso de resultados."
    },
    {
        "keywords":  [
                         "¿Cuál es la actitud recomendada para el equipo técnico y stakeholders",
                         "cuál",
                         "actitud",
                         "recomendada",
                         "para",
                         "equipo",
                         "técnico",
                         "stakeholders"
                     ],
        "answer":  "Una actitud crítica constructiva."
    },
    {
        "keywords":  [
                         "¿Qué aspecto de calidad del MDE debe cuestionarse",
                         "aspecto",
                         "calidad",
                         "debe",
                         "cuestionarse"
                     ],
        "answer":  "Si la resolución de 5 m refleja correctamente la realidad, especialmente cauces y bordos."
    },
    {
        "keywords":  [
                         "¿Qué se debe hacer si hay duda sobre la exactitud vertical del MDE",
                         "debe",
                         "hacer",
                         "duda",
                         "sobre",
                         "exactitud",
                         "vertical"
                     ],
        "answer":  "Calibrar con levantamientos de campo en puntos críticos."
    },
    {
        "keywords":  [
                         "¿Qué limitación tienen las estimaciones satelitales de lluvia",
                         "limitación",
                         "tienen",
                         "estimaciones",
                         "satelitales",
                         "lluvia"
                     ],
        "answer":  "Pueden subestimar picos de lluvia convectiva."
    },
    {
        "keywords":  [
                         "¿Qué análisis de sensibilidad se recomienda para lluvias extremas",
                         "análisis",
                         "sensibilidad",
                         "recomienda",
                         "para",
                         "lluvias",
                         "extremas"
                     ],
        "answer":  "Evaluar cómo cambia la inundación si la lluvia de 100 años fuera 10% mayor o menor."
    },
    {
        "keywords":  [
                         "¿Qué modelo de infiltración más complejo se menciona",
                         "modelo",
                         "infiltración",
                         "complejo",
                         "menciona"
                     ],
        "answer":  "Green-Ampt con tasas variables."
    },
    {
        "keywords":  [
                         "¿Dónde podría ser útil el modelo Green-Ampt",
                         "dónde",
                         "podría",
                         "útil",
                         "modelo",
                         "greenampt"
                     ],
        "answer":  "En zonas de suelos arenosos en la costa que podrían drenar mejor."
    },
    {
        "keywords":  [
                         "¿Qué evento histórico es punto de referencia obligado para calibración",
                         "evento",
                         "histórico",
                         "punto",
                         "referencia",
                         "obligado",
                         "para",
                         "calibración"
                     ],
        "answer":  "La inundación de octubre de 2007 en Tabasco."
    },
    {
        "keywords":  [
                         "¿Qué debe hacerse si el modelo no fue cotejado con la realidad",
                         "debe",
                         "hacerse",
                         "modelo",
                         "cotejado",
                         "realidad"
                     ],
        "answer":  "Reconocerlo como limitación explícita y aplicar factor de seguridad adicional."
    },
    {
        "keywords":  [
                         "¿Qué comparación se sugiere para evaluar sensibilidad a resolución espacial",
                         "comparación",
                         "sugiere",
                         "para",
                         "evaluar",
                         "sensibilidad",
                         "resolución",
                         "espacial"
                     ],
        "answer":  "Comparar profundidad máxima de corrida de alta resolución uniforme contra corrida mixta operativa."
    },
    {
        "keywords":  [
                         "¿Qué factor de cambio climático sugiere CENAPRED",
                         "factor",
                         "cambio",
                         "climático",
                         "sugiere",
                         "cenapred"
                     ],
        "answer":  "Mostrar posible evolución futura de lluvia o nivel del mar."
    },
    {
        "keywords":  [
                         "¿Qué se recomienda incluir para aproximar condiciones de mitad de siglo",
                         "recomienda",
                         "incluir",
                         "para",
                         "aproximar",
                         "condiciones",
                         "mitad",
                         "siglo"
                     ],
        "answer":  "Un factor de incremento sobre los tirantes de diseño."
    },
    {
        "keywords":  [
                         "¿Qué porcentaje de pérdida de masa puede indicar problemas numéricos",
                         "porcentaje",
                         "pérdida",
                         "masa",
                         "puede",
                         "indicar",
                         "problemas",
                         "numéricos"
                     ],
        "answer":  "Pérdidas de masa mayores a 1-2%."
    },
    {
        "keywords":  [
                         "¿Qué artefactos deben verificarse en los resultados",
                         "artefactos",
                         "deben",
                         "verificarse",
                         "resultados"
                     ],
        "answer":  "Pequeñas zonas inundadas desconectadas por una celda baja del MDE."
    },
    {
        "keywords":  [
                         "¿Qué obras planeadas podrían alterar los mapas",
                         "obras",
                         "planeadas",
                         "podrían",
                         "alterar",
                         "mapas"
                     ],
        "answer":  "Obras de mitigación recientemente ejecutadas o planeadas."
    },
    {
        "keywords":  [
                         "¿Qué condición asumen los mapas generados",
                         "condición",
                         "asumen",
                         "mapas",
                         "generados"
                     ],
        "answer":  "Condiciones actuales del terreno e infraestructura."
    },
    {
        "keywords":  [
                         "¿Cómo debe comunicarse el riesgo a usuarios finales",
                         "cómo",
                         "debe",
                         "comunicarse",
                         "riesgo",
                         "usuarios",
                         "finales"
                     ],
        "answer":  "Con claridad sobre qué profundidad implica riesgo severo, evitando alarma innecesaria."
    },
    {
        "keywords":  [
                         "¿Los mapas de peligro garantizan exactitud total en eventos reales",
                         "mapas",
                         "peligro",
                         "garantizan",
                         "exactitud",
                         "total",
                         "eventos",
                         "reales"
                     ],
        "answer":  "No, son escenarios basados en supuestos de diseño."
    },
    {
        "keywords":  [
                         "¿Con qué deben complementarse los mapas",
                         "deben",
                         "complementarse",
                         "mapas"
                     ],
        "answer":  "Monitoreo en tiempo real y sistema de alerta temprana."
    },
    {
        "keywords":  [
                         "¿Por qué un estudio transparente en limitaciones es más confiable",
                         "estudio",
                         "transparente",
                         "limitaciones",
                         "confiable"
                     ],
        "answer":  "Porque guía futuras mejoras y evita falsas seguridades."
    },
    {
        "keywords":  [
                         "¿Qué es un factor de seguridad adicional",
                         "factor",
                         "seguridad",
                         "adicional"
                     ],
        "answer":  "Un margen conservador aplicado a los resultados cuando hay incertidumbre."
    },
    {
        "keywords":  [
                         "¿Qué es la mejora continua en este contexto",
                         "mejora",
                         "continua",
                         "este",
                         "contexto"
                     ],
        "answer":  "La postura de actualizar y refinar la metodología con nuevos datos y conocimientos."
    },
    {
        "keywords":  [
                         "¿Qué significa transparencia metodológica",
                         "significa",
                         "transparencia",
                         "metodológica"
                     ],
        "answer":  "Documentar abiertamente los supuestos, limitaciones y criterios utilizados."
    },
    {
        "keywords":  [
                         "¿Qué es un evento de diseño",
                         "evento",
                         "diseño"
                     ],
        "answer":  "Un escenario hipotético con características estadísticas definidas para fines de planeación."
    },
    {
        "keywords":  [
                         "¿Por qué es importante contrastar información anecdótica",
                         "importante",
                         "contrastar",
                         "información",
                         "anecdótica"
                     ],
        "answer":  "Porque los operadores locales tienen conocimiento empírico valioso no documentado."
    },
    {
        "keywords":  [
                         "¿Qué año publicó CENAPRED la Actualización de metodologías",
                         "publicó",
                         "cenapred",
                         "actualización",
                         "metodologías"
                     ],
        "answer":  "2022."
    },
    {
        "keywords":  [
                         "¿Qué institución publica las isoyetas de intensidad de lluvia por estado",
                         "institución",
                         "publica",
                         "isoyetas",
                         "intensidad",
                         "lluvia",
                         "estado"
                     ],
        "answer":  "Secretaría de Comunicaciones y Transportes (SCT)."
    },
    {
        "keywords":  [
                         "¿Qué es CHIRPS",
                         "chirps"
                     ],
        "answer":  "Un producto de datos de precipitación mundial diarios."
    },
    {
        "keywords":  [
                         "¿Qué es ERA5",
                         "era5"
                     ],
        "answer":  "Un producto de reanálisis climático global."
    },
    {
        "keywords":  [
                         "¿Qué organización desarrolló el programa de apoyo a reducción de riesgos mencionado",
                         "organización",
                         "desarrolló",
                         "programa",
                         "apoyo",
                         "reducción",
                         "riesgos",
                         "mencionado"
                     ],
        "answer":  "PNUD (Programa de las Naciones Unidas para el Desarrollo)."
    },
    {
        "keywords":  [
                         "¿Qué es COFEMER",
                         "cofemer"
                     ],
        "answer":  "Comisión Federal de Mejora Regulatoria."
    },
    {
        "keywords":  [
                         "¿Qué es MITIGA",
                         "mitiga"
                     ],
        "answer":  "Criterios de evaluación mencionados en una referencia del documento."
    },
    {
        "keywords":  [
                         "¿Qué es la Unión Geofísica Mexicana",
                         "unión",
                         "geofísica",
                         "mexicana"
                     ],
        "answer":  "Una organización que publica ecuaciones ajustadas para cálculo de lluvias máximas."
    },
    {
        "keywords":  [
                         "¿Qué universidad se menciona en el repositorio institucional",
                         "universidad",
                         "menciona",
                         "repositorio",
                         "institucional"
                     ],
        "answer":  "Universidad Mariana."
    },
    {
        "keywords":  [
                         "¿Qué fuentes principales se usaron para elaborar la metodología",
                         "fuentes",
                         "principales",
                         "usaron",
                         "para",
                         "elaborar",
                         "metodología"
                     ],
        "answer":  "Lineamientos de CENAPRED, recomendaciones de CONAGUA y recursos internacionales de sensores remotos."
    },
    {
        "keywords":  [
                         "gracias",
                         "adios",
                         "bye",
                         "hasta luego",
                         "nos vemos",
                         "cerrar"
                     ],
        "answer":  "¡De nada! Ha sido un placer ayudarte. 💙 Si tienes más dudas sobre la metodología, aquí estaré. ¡Hasta pronto! 👋🗺️",
        "noSuggestions":  true
    }
];

const MAPITA_SUGGESTIONS = [
    "¿Cuál es el componente central del documento?",
    "¿Qué instituciones se detallan en el capítulo 8?",
    "¿Qué incluye la matriz resumen de cumplimiento?",
    "¿Qué tipo de modelo hidráulico se propone?",
    "¿Qué estrategia computacional se describe?",
    "¿Qué insumos base se recopilan al inicio?",
    "¿Cuál es el énfasis especial del documento?",
    "¿Qué recomendaciones incluye el capítulo 8?",
    "¿Qué cierra el documento?",
    "¿Para qué sirven los mapas de peligro generados?",
    "¿Qué nivel de detalle tiene el documento?",
    "¿Qué es un Modelo Digital de Elevación (MDE)?",
    "¿Qué resolución ideal se requiere para el MDE?",
    "¿De dónde se recomienda obtener el MDE?",
    "¿Qué tipo de MDE se necesita?",
    "¿Qué información climatológica se requiere?",
    "¿Qué son las curvas IDF?",
    "¿Qué publica la SCT sobre lluvia extrema?",
    "¿Qué información se requiere de cada cuenca?",
    "¿Qué son las cartas edafológicas?",
    "¿Qué método utiliza el Curve Number?",
    "¿Qué infraestructura hidráulica debe recabarse?",
    "¿Qué canal de alivio se menciona como ejemplo?",
    "¿Qué documento debe acompañar los mapas?",
    "¿Cuál es la utilidad del MDE en el estudio?",
    "¿Para qué sirven las curvas IDF/isoyetas?",
    "¿Qué datos de presas se requieren?",
    "¿Para qué sirven los datos de presas?",
    "¿Qué significa \u0027bare earth\u0027 en un MDE?",
    "¿Qué grupos hidrológicos de suelo existen?",
    "¿Qué son las regiones homogéneas del ANR?",
    "¿Qué es un hietograma?",
    "¿Qué subcuencas tienen prioridad \u0027Muy alta\u0027?",
    "¿Qué subcuencas tienen prioridad \u0027Alta\u0027?",
    "¿Qué subcuencas tienen prioridad \u0027Media\u0027?",
    "¿Qué subcuencas tienen prioridad \u0027Baja\u0027?",
    "¿Qué subcuencas tienen prioridad \u0027Muy baja\u0027?",
    "¿Cuál es el área del Río Tacotalpa?",
    "¿Cuál es el perímetro del Río Viejo Mezcalapa?",
    "¿Qué subcuenca tiene mayor área?",
    "¿Qué subcuenca tiene menor área?",
    "¿Qué subcuenca tiene mayor perímetro?",
    "¿Cuál es el área total del área de estudio?",
    "¿Por qué se priorizó el Río Tacotalpa?",
    "¿Cuál es el área del Río Macuspana?",
    "¿Cuál es el perímetro del Río Tulijá?",
    "¿Qué subcuenca tiene el perímetro más corto?",
    "¿Cuál es el área del Río Chacté?",
    "¿Cuántas subcuencas tienen prioridad \u0027Muy alta\u0027?",
    "¿Cuántas subcuencas tienen prioridad \u0027Alta\u0027?",
    "¿Cuántas subcuencas tienen prioridad \u0027Media\u0027?",
    "¿Cuántas subcuencas tienen prioridad \u0027Baja\u0027?",
    "¿Cuántas subcuencas tienen prioridad \u0027Muy baja\u0027?",
    "¿Cuál es el objetivo del análisis hidrológico?",
    "¿Qué traduce el análisis hidrológico?",
    "¿Cuántos escenarios clave suele enfocar CONAGUA?",
    "¿Qué son los hietogramas?",
    "¿Qué transformaciones lluvia-caudal se mencionan?",
    "¿Qué debe vigilarse en el enfoque acoplado?",
    "¿Qué insumos alimentan la etapa hidráulica?",
    "¿Qué es el tiempo de concentración?",
    "¿Qué es un hidrograma?",
    "¿Qué es el método del hidrograma unitario?",
    "¿Qué es el enrutamiento (rutear) del caudal?",
    "¿Qué significa \u0027cuenca no aforada\u0027?",
    "¿Qué es la lluvia efectiva?",
    "¿Qué es la escorrentía inicial?",
    "¿Qué es la regionalización hidrológica?",
    "¿Qué es una isoyeta?",
    "¿Qué ventaja tiene el enfoque acoplado?",
    "¿Qué es HEC-HMS?",
    "¿Qué significa SCS?",
    "¿Qué es el Curve Number (CN)?",
    "¿Qué rangos de CN existen?",
    "¿Qué software se selecciona para la simulación?",
    "¿Quién desarrolla HEC-RAS?",
    "¿Es HEC-RAS gratuito?",
    "¿Qué ventajas tiene HEC-RAS 2D?",
    "¿Cómo se recomienda dividir el análisis?",
    "¿Qué resolución se emplea en zonas críticas?",
    "¿Qué artefactos deben removerse del MDE?",
    "¿Qué es la batimetría?",
    "¿Por qué es importante la batimetría?",
    "¿Qué ecuaciones resuelve HEC-RAS 2D?",
    "¿Dónde SÍ es confiable la profundidad calculada?",
    "¿Qué ventana de tiempo es ideal para batimetría?",
    "¿Cuál es la segunda prioridad para batimetría?",
    "¿Cuál es la tercera prioridad para batimetría?",
    "¿Qué estructuras hidráulicas deben representarse?",
    "¿Cuándo se acoplan estructuras en 1D en HEC-RAS?",
    "¿Cómo se representan diques y bordos?",
    "¿Qué escenario extremo se recomienda probar?",
    "¿Qué criterio se usa para el paso de tiempo?",
    "¿Contra qué se calibran las rugosidades?",
    "¿Qué es el criterio de Courant?",
    "¿Qué es el remanso?",
    "¿Qué es una onda difusiva?",
    "¿Qué es una ecosonda multihaz?",
    "¿Qué significa RTK en GPS?",
    "¿Qué es una sección transversal esquemática?",
    "¿Qué es la malla 2D?",
    "¿Qué es la interfaz 1D-2D?",
    "¿Cómo se recomienda usar la resolución de malla?",
    "¿Qué hardware se recomienda?",
    "¿Qué alternativa de cómputo se menciona?",
    "¿Hasta qué periodo de retorno se prioriza?",
    "¿Cuándo se considera el periodo de 500 años?",
    "¿Qué mapas adicionales se sugieren?",
    "¿Qué regiones se sugieren como submodelos?",
    "¿Qué es un modelo bathtub?",
    "¿Por qué el bathtub model es más rápido?",
    "¿Qué significa \u0027envolver el peor caso\u0027?",
    "¿Qué ventaja tiene dividir en submodelos?",
    "¿Qué desventaja tiene dividir en submodelos?",
    "¿Qué significa paralelizar el cálculo?",
    "¿Qué factores determinan el tiempo de simulación?",
    "¿Qué es la resolución espacial en un modelo 2D?",
    "¿Qué se entiende por \u0027escala estatal\u0027?",
    "¿Qué es la malla mixta o variable?",
    "¿Qué se simula en esta etapa?",
    "¿Por qué se inicia con caudal base en los cauces?",
    "¿Qué tipo de simulación se ejecuta?",
    "¿Qué resultados se obtienen de cada simulación?",
    "¿Cuál es la cadena de procesos del estudio?",
    "¿Qué escenarios adicionales se pueden distinguir?",
    "¿Qué es un evento concurrente extremo?",
    "¿Cómo se clasifica el evento concurrente extremo?",
    "¿Para qué sirve el escenario máximo creíble?",
    "¿Qué es un corte de tiempo adaptativo?",
    "¿Qué significa que los mapas \u0027aniden\u0027?",
    "¿Qué es la profundidad máxima?",
    "¿Qué es la velocidad máxima?",
    "¿Qué es la duración de la inundación?",
    "¿Qué tiempo de simulación debe cubrirse?",
    "¿Qué es un escenario de diseño?",
    "¿Qué se entiende por \u0027máximo creíble\u0027?",
    "¿Cómo se clasifican las profundidades?",
    "¿Dónde deben justificarse los umbrales elegidos?",
    "¿Qué mapas adicionales se recomienda elaborar?",
    "¿Qué puntos críticos deben marcarse?",
    "¿Qué sistema de coordenadas se sugiere usar?",
    "¿Cómo se recomienda presentar los mapas?",
    "¿Qué tablas resumidas se sugieren en el reporte?",
    "¿Para qué sirven los mapas de peligro finalmente?",
    "¿Qué es un mapa de severidad?",
    "¿Qué es un recuadro de detalle?",
    "¿Qué significa \u0027suavizar manchas aisladas\u0027?",
    "¿Qué son los metadatos descriptivos?",
    "¿Qué es EPSG:6362?",
    "¿Por qué es importante cruzar con datos de INEGI?",
    "¿Qué es la extensión inundada?",
    "¿Qué es el tirante de agua?",
    "¿Qué es la cartografía temática?",
    "¿Qué significa \u0027productos cartográficos\u0027?",
    "¿Qué es una base de datos geográfica?",
    "¿Qué define CENAPRED en el marco normativo?",
    "¿Qué aporta CONAGUA?",
    "¿Qué establece SEDATU?",
    "¿Cómo debe abordarse el análisis según CENAPRED?",
    "¿Cuántos periodos maneja CONAGUA en la práctica?",
    "¿Qué ecuaciones debe resolver el modelo 2D?",
    "¿Qué métodos no deben usarse exclusivamente?",
    "¿Qué principio de detalle espera CENAPRED?",
    "¿Qué resolución se propone en zonas rurales?",
    "¿Qué convenciones de color se deben seguir?",
    "¿Qué cursos ha puesto a disposición CENAPRED?",
    "¿Qué tres frentes interviene CONAGUA?",
    "¿Qué presa se menciona en el sistema Grijalva?",
    "¿Cuántos escenarios de presa se contemplan?",
    "¿Qué se recomienda para validación de mapas?",
    "¿Cuál es el objeto de la NOM-006-SEDATU-2024?",
    "¿En qué se centra la presente metodología?",
    "¿Qué requerimiento atiende el enfoque de cuenca?",
    "¿Cómo se atienden las escalas cartográficas?",
    "¿Cómo se atienden los desfogues de presas?",
    "¿Cómo se atiende la validación institucional?",
    "¿Por qué un atlas desactualizado pierde validez?",
    "¿Qué ventaja adicional da integrarse al ANR?",
    "¿Qué es el FOPREDEN?",
    "¿Qué es una dictaminación federal?",
    "¿Qué es un anexo cartográfico?",
    "¿Qué es la gobernanza del estudio?",
    "¿Dónde podría ser útil el modelo Green-Ampt?",
    "¿Qué factor de cambio climático sugiere CENAPRED?",
    "¿Qué obras planeadas podrían alterar los mapas?",
    "¿Qué condición asumen los mapas generados?",
    "¿Con qué deben complementarse los mapas?",
    "¿Qué es un factor de seguridad adicional?",
    "¿Qué es la mejora continua en este contexto?",
    "¿Qué significa transparencia metodológica?",
    "¿Qué es un evento de diseño?",
    "¿Qué es COFEMER?",
    "¿Qué es la Unión Geofísica Mexicana?"
];
const MAPITA_OPTIONS = [
    "¿Qué software usaron?",
    "Escalas de los mapas",
    "Limitaciones del estudio",
    "Recomendaciones a futuro"
];

const FALLBACK_MSG = "¡Hola! 👋 Soy **Mapita** 🗺️. Soy tu asistente virtual guiado y tengo información técnica sobre la metodología. ¿En qué te puedo ayudar hoy? ✨";

document.addEventListener('DOMContentLoaded', () => {
    const btnToggle = document.getElementById('chatbot-toggle');
    const btnClose = document.getElementById('chatbot-close');
    const widget = document.getElementById('chatbot-widget');
    const windowEl = document.getElementById('chatbot-window');
    const msgContainer = document.getElementById('chatbot-messages');
    const inputEl = document.getElementById('chatbot-input');
    const btnSend = document.getElementById('chatbot-send');

    const STORAGE_KEY = 'mapita_chat_history';
    let chatOpened = false;

    // ── Badge de notificación ──
    const badge = document.createElement('span');
    badge.className = 'chatbot-badge';
    badge.textContent = '1';
    widget.appendChild(badge);

    // ── Restaurar historial desde localStorage ──
    function saveHistory() {
        const msgs = [...msgContainer.querySelectorAll('.chat-msg-wrapper')].map(w => ({
            sender: w.classList.contains('bot') ? 'bot' : 'user',
            html: w.querySelector('.chat-msg').innerHTML
        }));
        localStorage.setItem(STORAGE_KEY, JSON.stringify(msgs));
    }

    function loadHistory() {
        try {
            const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
            if (!saved || !saved.length) return false;
            saved.forEach(({ sender, html }) => {
                const wrapper = document.createElement('div');
                wrapper.className = `chat-msg-wrapper ${sender}`;
                const div = document.createElement('div');
                div.className = `chat-msg ${sender}`;
                div.innerHTML = html;
                // re-attach chip clicks
                div.querySelectorAll('.chat-chip').forEach(btn => {
                    btn.onclick = () => { inputEl.value = btn.textContent; sendMessage(); };
                });
                wrapper.appendChild(div);
                msgContainer.appendChild(wrapper);
            });
            msgContainer.scrollTop = msgContainer.scrollHeight;
            return true;
        } catch(e) { return false; }
    }

    // ── Toggle Chat ──
    btnToggle.addEventListener('click', () => {
        widget.classList.add('open');
        windowEl.classList.remove('hidden');
        badge.style.display = 'none';
        if (!chatOpened) {
            const restored = loadHistory();
            if (!restored) {
                const shuffled = [...MAPITA_SUGGESTIONS].sort(() => 0.5 - Math.random()); const suggestions = shuffled.slice(0, 3); setTimeout(() => { addMessage(FALLBACK_MSG, 'bot', suggestions); }, 300);
            }
            chatOpened = true;
        }
        inputEl.focus();
    });

    btnClose.addEventListener('click', () => {
        widget.classList.remove('open');
        windowEl.classList.add('hidden');
    });

    // ── Send Message ──
    const sendMessage = () => {
        const text = inputEl.value.trim();
        if (!text) return;
        addMessage(text, 'user');
        inputEl.value = '';
        showTyping();
        setTimeout(() => { processInput(text); }, 1200);
    };

    btnSend.addEventListener('click', sendMessage);
    inputEl.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    // ── Typing Indicator ──
    function showTyping() {
        const wrapper = document.createElement('div');
        wrapper.className = 'chat-msg-wrapper bot';
        wrapper.id = 'typing-indicator';
        wrapper.innerHTML = `<div class="chat-msg bot typing-bubble"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>`;
        msgContainer.appendChild(wrapper);
        msgContainer.scrollTop = msgContainer.scrollHeight;
    }
    function hideTyping() {
        const t = document.getElementById('typing-indicator');
        if (t) t.remove();
    }

    // Process Input
        function processInput(text) {
        const lowerText = text.toLowerCase().trim();
        
        // Check if asking for general help/topics
        const helpKeywords = ['ayuda', 'temas', 'preguntas', 'menú', 'menu', 'opciones', 'que hay', 'que responder', 'qué temas', 'qué responder', 'que preguntar'];
        const isHelp = helpKeywords.some(kw => lowerText.includes(kw));
        
        if (isHelp) {
            hideTyping();
            const shuffled = [...MAPITA_SUGGESTIONS].sort(() => 0.5 - Math.random());
            const suggestions = shuffled.slice(0, 3);
            addMessage("¡Claro! 🌎 Puedo responder muchas preguntas sobre la Metodología. Aquí tienes algunos temas de ejemplo que puedes preguntarme:", 'bot', suggestions);
            return;
        }

        const stopwords = ['de', 'la', 'el', 'en', 'que', 'y', 'un', 'una', 'los', 'las', 'para', 'sobre', 'con', 'del', 'al', 'lo', 'se', 'por', 'es', 'un', 'como', 'cual', 'cuál', 'cómo', 'qué', 'que', 'quien', 'quién', 'dónde', 'donde', 'tiene', 'tienen', 'hay', 'o'];
        const userWords = lowerText.replace(/[^\w\s]/g, '').split(/\s+/).filter(w => w.length > 2 && !stopwords.includes(w));

        let bestMatch = null;
        let matchedIndex = -1;
        let highestScore = 0;

        MAPITA_QA.forEach((qa, i) => {
            let score = 0;
            
            // Full question match
            const fullQuestion = qa.keywords[0].toLowerCase().replace(/[^\w\s]/g, '');
            const cleanUserText = lowerText.replace(/[^\w\s]/g, '');
            if (cleanUserText.length > 0 && fullQuestion.includes(cleanUserText)) {
                score += 10;
            }
            
            // Keyword matching
            qa.keywords.forEach((kw, kwIdx) => {
                const kwLower = kw.toLowerCase().replace(/[^\w\s]/g, '');
                if (kwIdx === 0) return; // skip full question
                
                if (lowerText.includes(kwLower)) {
                    score += 2;
                }
                
                userWords.forEach(word => {
                    if (kwLower === word) {
                        score += 1;
                    }
                });
            });

            if (score > highestScore) {
                highestScore = score;
                bestMatch = qa.answer;
                matchedIndex = i;
            }
        });

        if (bestMatch && highestScore >= 2) {
            hideTyping();
            if (MAPITA_QA[matchedIndex].noSuggestions) {
                addMessage(bestMatch, 'bot');
            } else {
                const shuffled = [...MAPITA_SUGGESTIONS].filter(q => q !== MAPITA_QA[matchedIndex].keywords[0]).sort(() => 0.5 - Math.random());
                const suggestions = shuffled.slice(0, 2);
                addMessage(bestMatch, 'bot', suggestions);
            }
        } else {
            hideTyping();
            const shuffled = [...MAPITA_SUGGESTIONS].sort(() => 0.5 - Math.random());
            const suggestions = shuffled.slice(0, 3);
            addMessage("Lo siento, no encontré información exacta sobre eso. Recuerda que respondo dudas sobre la Metodología (ej. hidrología, modelación HEC-RAS, datos de Tabasco). Puedes elegir una de estas opciones de ejemplo o intentar reformular tu pregunta:", 'bot', suggestions);
        }
    }

    function addMessage(text, sender, options = null) {

        const wrapper = document.createElement('div');
        wrapper.className = `chat-msg-wrapper ${sender}`;

        const div = document.createElement('div');
        div.className = `chat-msg ${sender}`;
        
        const textSpan = document.createElement('span');
        textSpan.className = 'chat-text';
        textSpan.innerHTML = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        div.appendChild(textSpan);

        // Timestamp
        const ts = document.createElement('span');
        ts.className = 'chat-timestamp';
        ts.textContent = new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' });
        div.appendChild(ts);

        if (options && options.length > 0 && sender === 'bot') {
            const optsDiv = document.createElement('div');
            optsDiv.className = 'chat-options';
            options.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = 'chat-chip';
                btn.textContent = opt;
                btn.onclick = () => { inputEl.value = opt; sendMessage(); };
                optsDiv.appendChild(btn);
            });
            div.appendChild(optsDiv);
        }

        wrapper.appendChild(div);
        msgContainer.appendChild(wrapper);
        msgContainer.scrollTop = msgContainer.scrollHeight;
        saveHistory();
    }
});

