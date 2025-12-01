// Блок для худи
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
  const item = document.createElement("div");
  item.className = "hoodie-item";

  item.innerHTML = `
    <img src="${h.img}" alt="${h.name}">
    <h3>${h.name}</h3>
    <p>${h.price} ₽</p>
    <a href="${h.link}" class="buy-button">Купить</a>
  `;

  hoodieCatalog.appendChild(item);
});

