// ********** Coklu Kosullarla Calismak **********

let userName = prompt("Kullanici Adiniz:")
let age = prompt("Yasiniz:")
let info = document.querySelector("#info")

if (userName && age >= 18) {
    info.innerHTML = "ehliyet alabilirsiniz"
} else if (!userName) {
    info.innerHTML = "Kullanici Adiniz Yok"
} else if ( !(age >= 18) ) {
    info.innerHTML = "Yas Bilginiz Yok veya 18 Yasindan Kucuksunuz"
}

// Switch
switch(ifade) {
    case a:
      // kod bloğu
      break;
    case b:
      // kod bloğu
      break;
    default:
      // kod bloğu
  }