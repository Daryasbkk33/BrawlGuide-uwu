const hoodieCatalog = document.getElementById("hoodie-catalog");

const hoodies = [
  { name: "Худи 'Спайк', кислотная", price: 2579, img: "h22.png", link: "order.html" },
  { name: "Худи 'Сэнди', космический принт", price: 2699, img: "h33.png", link: "order.html" },
  { name: "Худи 'Беа' с капюшоном", price: 12550, img: "h44.png", link: "order.html" },
  { name: "Худи 'Картоноголовый' с капюшоном", price: 11570, img: "худи.png", link: "order.html" },
  { name: "Худи 'Кот-Кит' космос", price: 7999, img: "худи3.png", link: "order.html" },
  { name: "Худи 'Мышь' с капюшоном", price: 12550, img: "худи2.png", link: "order.html" }
];

hoodies.forEach(h => {
  const col = document.createElement("div");
  col.className = "col-6 col-md-4 col-lg-3"; // адаптивная колонка

  col.innerHTML = `
    <div class="card h-100 text-center">
      <img src="${h.img}" class="card-img-top" alt="${h.name}">
      <div class="card-body">
        <h5 class="card-title">${h.name}</h5>
        <p class="card-text">${h.price} ₽</p>
        <a href="${h.link}" class="btn btn-primary">Купить</a>
      </div>
    </div>
  `;

  hoodieCatalog.appendChild(col);
});