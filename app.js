const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["red", "yellow", "pink", "#5f80b3", "#64d9cb", "#dc86f0", "#d7fc03", "#03fc24"];

button.addEventListener("click", changeBackground);

let sıra = 0;

function changeBackground() {
    // rastgele bir renk
     const rastgeleSayi = Math.floor(Math.random() * colors.length);
     const secilenRenk = colors[rastgeleSayi];
     console.log(rastgeleSayi, secilenRenk);
     body.style.background = secilenRenk;

    // sırayla bir arka plan rengi seç
   // console.log(sıra);
   // if (sıra == 7) sıra = 0;
   // const secilenRenk = colors[sıra];
  //  sıra++;
   // body.style.backgroundColor = secilenRenk;

}