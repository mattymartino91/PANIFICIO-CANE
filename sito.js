const scheda = document.querySelector("#scheda");
const fotoScheda = document.querySelector("#foto-scheda");
const comandiFoto = document.querySelector("#comandi-foto");
const contatoreFoto = document.querySelector("#contatore-foto");
let prodottoAttivo;
let indiceFoto = 0;

function creaFoto(foto) {
  const img = document.createElement("img");
  img.src = "assets/" + foto.file;
  img.alt = foto.alt;
  return img;
}

function mostraFoto() {
  const { foto } = prodottoAttivo;
  fotoScheda.replaceChildren(creaFoto(foto[indiceFoto]));
  comandiFoto.hidden = foto.length < 2;
  contatoreFoto.textContent = `${indiceFoto + 1} / ${foto.length}`;
}

function cambiaFoto(direzione) {
  const totale = prodottoAttivo.foto.length;
  indiceFoto = (indiceFoto + direzione + totale) % totale;
  mostraFoto();
}

function apriScheda(prodotto) {
  prodottoAttivo = prodotto;
  indiceFoto = 0;
  document.querySelector("#titolo-scheda").textContent = prodotto.nome;
  document.querySelector("#descrizione-scheda").textContent =
    prodotto.descrizione || "Descrizione in arrivo.";
  mostraFoto();
  scheda.showModal();
}

document.querySelector("#foto-precedente").addEventListener("click", () => cambiaFoto(-1));
document.querySelector("#foto-successiva").addEventListener("click", () => cambiaFoto(1));
scheda.addEventListener("click", (event) => {
  if (event.target === scheda) scheda.close();
});
scheda.addEventListener("keydown", (event) => {
  if (prodottoAttivo.foto.length < 2) return;
  if (event.key === "ArrowLeft") cambiaFoto(-1);
  if (event.key === "ArrowRight") cambiaFoto(1);
});

for (const [categoria, prodotti] of Object.entries(catalogoCane)) {
  const contenitore = document.querySelector("#prodotti-" + categoria);
  for (const prodotto of prodotti) {
    const card = document.createElement("article");
    card.className = "product";
    if (prodotto.foto.length) {
      const bottone = document.createElement("button");
      bottone.type = "button";
      bottone.className = "product-button";
      bottone.setAttribute("aria-haspopup", "dialog");
      const foto = creaFoto(prodotto.foto[0]);
      foto.alt = "";
      foto.loading = "lazy";
      const nome = document.createElement("span");
      nome.className = "product-name";
      nome.textContent = prodotto.nome;
      const freccia = document.createElement("span");
      freccia.className = "product-arrow";
      freccia.setAttribute("aria-hidden", "true");
      freccia.textContent = "↗";
      bottone.append(foto, nome, freccia);
      bottone.addEventListener("click", () => apriScheda(prodotto));
      card.append(bottone);
    } else {
      const spazio = document.createElement("div");
      spazio.className = "photo-placeholder";
      spazio.textContent = "Foto in arrivo";
      card.append(spazio);
    }
    if (categoria !== "panettoni") {
      if (prodotto.nome.toLowerCase() !== categoria && !prodotto.foto.length) {
        const nome = document.createElement("h3");
        nome.textContent = prodotto.nome;
        card.append(nome);
      }
      const testo = document.createElement("p");
      testo.textContent = prodotto.descrizione || "Descrizione in arrivo.";
      card.append(testo);
    }
    contenitore.append(card);
  }
}

if (emailCane.trim()) {
  const link = document.createElement("a");
  link.href = "mailto:" + emailCane.trim();
  link.textContent = emailCane.trim();
  document.querySelector("#contatto-email").replaceChildren(link);
}
