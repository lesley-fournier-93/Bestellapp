function getHeader() {
  return `
    <div class="ct-container flex-row gap justify-between xalign-stretch">
        <div class="ct-header">
          <a href="index.html">
            <img id="header-up" src="./assets/Logo/Logo.png" alt="Logo" />
          </a>
          <nav id="btn">
            <img
              onclick="toggleOverlay()"
              class="image"
              src="./assets/icons/burgermenu.png"
              alt="Burger Menu"
            />
          </nav>
        </div>
      </div>
    `;
}

function getFooter() {
  return `
     <div class="ct-container">
        <div class="ct-footer">
        <a href="index.html"><img src="./assets/Favicon/apple-touch-icon.png" alt="Favicon" /></a>
          <p>
            &copy; 2024 Bestell - App by Lesley Fournier. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    `;
}

function getMenuTemplate(indexMenu, Menu) {
  return `
    <div class="ct-meals" id="meals-${indexMenu}">
      ${
        Menu.headline
          ? `<h3 id="${Menu.id}" class="menu-headline">${Menu.headline}</h3>`
          : ""
      }
      <div class="menu-class">
        <div class="menu-class-content">
          ${Menu.name ? `<h4 class="menu-name">${Menu.name}</h4>` : ""}
          ${
            Menu.description
              ? `<p class="description">${Menu.description}</p>`
              : ""
          }
          ${Menu.price ? `<p class="price">${Menu.price} €</p>` : ""}
        </div>
        <div class="add-button">
          <button class="add-meal-btn" onclick="addToCart(${indexMenu})" data-index="${indexMenu}">
            <img src="./assets/icons/plus.png" alt="Hinzufügen">
          </button>
        </div>
      </div>
    </div>
  `;
}
