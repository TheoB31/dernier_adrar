L.mapquest.key = '65RMN01mAqPVBgU3VHJKX5suROpP1h8h';

// 'map' refers to a <div> element with the ID map
let map = L.mapquest.map('map', {
  center: [43.552500052464644, 1.4901009597963082],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12
});
L.marker([43.552500052464644, 1.4901009597963082], {
    icon: L.mapquest.icons.marker(),
    draggable: false
  }).bindPopup('Denver, CO').addTo(map);

  L.circle([43.552500052464644, 1.4901009597963082], { radius: 20000 }).addTo(map);


