// Calibración de la proyección geo→foto del visor 360°.
// Editable en vivo desde editor-360.html → panel "🎯 Calibrar" → "Exportar calibración".
// La usan tanto index.html (sitio en vivo) como editor-360.html.
window.SE_CALIB = {
  "geoOffset": -15.5,   // rumbo: rota TODAS las parcelas alrededor (grados)
  "pitchTrim": 0,       // inclinación: sube/baja TODAS las parcelas (grados)
  "camLat": -33.7501038,// posición de la cámara
  "camLng": -70.7185238,
  "camH": 150.6         // altura de la cámara (m)
};
