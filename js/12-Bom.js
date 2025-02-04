/*
B - Browser
O - Object
M - Model
 */
const dondeEstoy = navigator.geolocation.getCurrentPosition((position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  document.write(latitude);
  document.write(`<br>`);
  document.write(longitude);
});
