var map = L.map('map').setView([50.45, 30.52], 17);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

var marker = L.marker([50.45, 30.52]).addTo(map)
.bindPopup('Mr. Snowman Cafe').openPopup();