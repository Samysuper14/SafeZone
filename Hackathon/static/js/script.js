document.addEventListener("DOMContentLoaded", function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("La geolocalización no es compatible con este navegador.");
    }
  
    function showPosition(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      var locationElement = document.getElementById("location");
      locationElement.textContent = "Ubicación actual: " + latitude + ", " + longitude;
      // Aquí puedes hacer algo con la ubicación, como enviarla al servidor o realizar acciones adicionales.

      console.log(latitude,  longitude);

      const request = new XMLHttpRequest();

      request.open('POST', '/api/coords/${JSON.stringify(latitude, longitude)}')

    }
});