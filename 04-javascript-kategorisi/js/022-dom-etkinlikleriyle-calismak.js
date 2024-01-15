// DOM Etkinlikleriyle Calismak
// https://www.w3schools.com/jsref/dom_obj_event.asp
// https://developer.mozilla.org/en-US/docs/Web/Events

let greeting = document.querySelector("#greeting");
greeting.addEventListener("click", domClick);

function domClick() {
  console.log("etkinlik denetlendi");
  this.style.color == "red"
    ? (this.style.color = "black")
    : (this.style.color = "red");
}

// 1.METOT
element.addEventListener(eventt, function () {
  // Nesneye bir etkinlik atandı..
  const button = document.querySelector("#button");
  //Burada ilk olarak tip ('click') ,ikinci olarak da fonksiyonun kendisi parametre olarak eklenir
  button.addEventListener("click", function () {
    alert("Buton Tıklandı");
  });
  // Çıktı : Buton Tıklandı!!!
});

// 2.METOT
element.addEventListener(eventt, functionName); // Fonksiyon etkinlik parametresi olarak da çalışabilmektedir.
//id =button olan nesne seçildi
const button = document.querySelector("#button");
//nesneye bir etkinlik atandı.Burada ilk olarak tip ('click')
//ikinci olarak da aşağıda fonksiyon tanımlanır ,fonksiyon ismi parametre olarak girilir.
button.addEventListener("click", btnClicked);
function btnClicked() {
  alert("Buton Tıklandı!!!");
}
// Çıktı : Buton Tıklandı!!!

// MOUSE ETKİNLİĞİ
//id = text olan buton çağrıldı
//dblclick = çift tıklama etkinliği nesneye atandı, fonksiyon ismi parametre olarak tanımlandı
const buttonn = document.querySelector("#text");
button.addEventListener("dblclick", clickFonksiyonu);
//fonksiyonda id = text olan element çağrılarak innerHTML ile içeriği değiştirildi.
function clickFonksiyonu() {
  document.getElementById("text").innerHTML = "NEW FORM";
}

// KLAVYE ETKİNLİĞİ
//id = fname olan nesne çağrılarak keyboard değişkenine atandı
const keyboard = document.querySelector("#fname");
//keyboard isimli değişkene "cut" etkinliği atandı ve fonksiyon ismi parametre olarak atandı
keyboard.addEventListener("cut", cuttingFunction);
//cuttingFunction isimli fonksiyon ile form inputuna yazılan girdileri klavye ctrl+c ile kesildiğinde etkinlik çalışmaktadır
function cuttingFunction(event) {
  console.log("etkinlik tipi: ", event.type);
}
//console ekranı : etkinlik tipi: cut

// FORM ETKİNLİKLERİ
<form action="#" id="selectColor">
  <label for="color">Choose a color</label>
  <select name="colors" id="select">
    <option value="red">RED</option>
    <option value="blue">BLUE</option>
    <option value="purple">PURPLE</option>
    <option value="orange">ORANGE</option>
    <option value="pink">PINK</option>
  </select>
  <br></br>
  <input type="submit" value="Submit"></input>
</form>;

//id=select olan nesne çağrılarak color değişkenine atandı
const color = document.querySelector("#select");
//color değişkenine change etkinliği etkinliği atandı ve fonksiyon ismi parametre olarak atandı
color.addEventListener("change", selectBox);

//selectBox isimli fonksiyon ile selectbox her seçildiğinde etkinlik tipi =change ve değeri consola yazılmaktadır
function selectBox(event) {
  console.log("Etkinlik tipi : " + event.type);
  console.log("deger : " + event.target.value);
}
// Selectbox içinde "blue" değerini seçtiğimiz takdirde;
// ekran çıktısı: Etkinlik tipi : change, deger : blue

// Kabarcıklanma Etkinliği (Event Bubbling) ve Yakalama Etkinliği (Event Capturing)
    // 1.Kabarcıklanma Etkinliği(Event Bubbling)
    element.addEventListener(eventt, function(){}); // Örnekte event parametresi "click" etkinliği almaktadır. function parametresi ise fonksiyonun ismini veya fonksiyonun kendisini almaktadır.

    // 2.Yakalama Etkinliği(Event Capturing)
    element.addEventListener(eventt, function(){}, useCapture); // useCapture parametresi "True" ve "False" değerleri almaktadır. Diğer tüm kullanımı kabarcıklanma etkinliği ile aynıdır.

    // event.stopPropagation() // Bir etkinliğin özelliğini durdurmak için kullanılır. Bir fonksiyon parametresi olarak girilen "event" e bu etkinlik atanarak kullanılır.
    // event.preventDefault(); // Bir HTML elementinin varsayılan eylemini tamamen engellemek için bu eylem kullanılır. Bir fonksiyon parametresi olarak girilen "event" e bu etkinlik atanarak kullanılır.
    


