// ** Ilk Fonksiyonumuzu Tanimlamak:

function helloWorld() {
  console.log("Hello World");
}

function hello() {
  console.log("Merhaba");
  helloWorld();
}

// hata alabiliriz...
// function userCheck () {
//     if (userName && age >= 18) {
//         info.innerHTML = "ehliyet alabilirsiniz"
//     } else if (!userName) {
//         info.innerHTML = "Kullanici Adiniz Yok"
//     } else if ( !(age >= 18) ) {
//         info.innerHTML = "Yas Bilginiz Yok veya 18 Yasindan Kucuksunuz"
//     }
// }

hello(); // calistir

// For exaple:
function printScreen1() {
  console.log("İlk ekran çıktısı");
}

function printScreen2(callback1, callback2) {
  setTimeout(function () {
    callback1();
    console.log("İkinci ekran çıktısı");
    callback2();
  }, 3000);
}

function printScreen3() {
  console.log("Üçüncü ekran çıktısı");
}

printScreen2(printScreen1, printScreen3);
