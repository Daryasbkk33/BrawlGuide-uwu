const figures = [
  { name: "Бо, Rare", price: 8799, img: "fi11.png", link: "order.html" },
  { name: "Пенни, Rare", price: 2300, img: "fi22.png", link: "order.html" },
  { name: "Мэг, Exclusive!", price: 12399, img: "fi33.png", link: "order.html" }
];

const catalog = document.getElementById("figures-catalog");

figures.forEach(f => {
  const item = document.createElement("div");
  item.className = "figure-item col-lg-4 col-md-6 col-sm-12"; // адаптивная сетка Bootstrap

  item.innerHTML = `
    <div class="card mb-4">
      <img src="${f.img}" class="card-img-top img-fluid" alt="${f.name}">
      <div class="card-body text-center">
        <h5 class="card-title">${f.name}</h5>
        <p class="card-text">${f.price} ₽</p>
        <a href="${f.link}" class="btn btn-warning">Купить</a>
      </div>
    </div>
  `;

  catalog.appendChild(item);
});