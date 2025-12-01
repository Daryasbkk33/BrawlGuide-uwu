const tshirts = [
  { name: "Футболка 'Brawl Stars', розовая, хлопок", price: 12799, img: "f22.png", link: "order.html" },
  { name: "Футболка 'All Stars', хлопок", price: 14599, img: "f33png.png", link: "order.html" },
  { name: "Футболка 'MAX', хлопок", price: 10500, img: "f44.png", link: "order.html" },
 
];

const catalog = document.getElementById("tshirt-catalog");

if (catalog) {
  tshirts.forEach(t => {
    const item = document.createElement("div");
    item.className = "tshirt-item";

    item.innerHTML = `
      <img src="${t.img}" alt="${t.name}">
      <h3>${t.name}</h3>
      <p>${t.price} ₽</p>
      <a href="${t.link}" class="buy-button">Купить</a>
    `;

    catalog.appendChild(item);
  });
}