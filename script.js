// Definisikan proyeksi UTM zona 53S (EPSG:32753)
proj4.defs("UTM53S", "+proj=utm +zone=53 +south +datum=WGS84 +units=m +no_defs");

// Definisikan TM3 53.1 (titik tengah 129° BT) — TM3 = 3° zone centered
proj4.defs("TM3_53_1", "+proj=tmerc +lat_0=0 +lon_0=129 +k=0.9999 +x_0=500000 +y_0=0 +datum=WGS84 +units=m +no_defs");

function konversi() {
  const utmX = parseFloat(document.getElementById("utmX").value);
  const utmY = parseFloat(document.getElementById("utmY").value);

  if (isNaN(utmX) || isNaN(utmY)) {
    alert("Masukkan angka koordinat yang valid!");
    return;
  }

  // Lakukan konversi
  const [tm3x, tm3y] = proj4("UTM53S", "TM3_53_1", [utmX, utmY]);

  // Tampilkan hasil
  document.getElementById("tm3x").textContent = tm3x.toFixed(3);
  document.getElementById("tm3y").textContent = tm3y.toFixed(3);
}