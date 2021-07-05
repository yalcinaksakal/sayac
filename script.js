const ekranEl = document.querySelector(".ekran");

const artiButton = document.querySelector(".arti");

const eksiButton = document.querySelector(".eksi");

console.log(ekranEl, artiButton, eksiButton);

let sayac = 0;

artiButton.addEventListener("click", () => {
  sayac = sayac + 1;
  console.log("artı tıklandı", sayac);
  ekranEl.innerHTML = sayac;
});

eksiButton.addEventListener("click", () => {
  sayac = sayac - 1;
  console.log("eksi tıklandı", sayac);
  ekranEl.innerHTML = sayac;
});
