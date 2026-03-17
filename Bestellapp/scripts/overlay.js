function toggleOverlay() {
  const overlay = document.getElementById("overlay");
  const restaurantLogo = document.getElementById("restaurant-logo");

  if (overlay.classList.contains("d-none")) {
    overlay.classList.remove("d-none");
    restaurantLogo.style.display = "none"; 
  } else {
    overlay.classList.add("d-none");
    restaurantLogo.style.display = "block"; 
  }
}



