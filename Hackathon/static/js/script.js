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
      // Aquí puedes hacer algo con la ubicación, como enviarla al servidor o realizar acciones adicionales.

      console.log(latitude,  longitude);

      fetch('/api/coords/' + latitude + '/' + longitude)
        .then(response => response.text())

    }
});
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll("a");

  for (const link of links) {
    link.addEventListener("click", smoothScroll);
  }

  function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
});