let cards = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/img/icon-reaction.svg"
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/img/icon-memory.svg"
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/img/icon-verbal.svg"
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/img/icon-visual.svg"
  }
]

const contenedorTarjetas = document.getElementById("card-results")

const cargarTarjetas = (tarjetas) => {
  contenedorTarjetas.innerHTML = "";

  tarjetas.forEach(tarjeta => {
    const div = document.createElement("div");
    div.classList.add(`card__right__results__container__${tarjeta.category.toLowerCase()}`)
    div.innerHTML = `
      <div class="card__right__results__left">
        <img src="${tarjeta.icon}" alt="">
        <span>${tarjeta.category}</span>
      </div>
      <div class="card__right__results__right">
        <p>${tarjeta.score} <span>/ 100</span></p>
      </div>
    `
    contenedorTarjetas.append(div)
  })
}

cargarTarjetas(cards);