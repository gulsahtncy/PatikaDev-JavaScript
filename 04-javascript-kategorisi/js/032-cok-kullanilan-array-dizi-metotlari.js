// Cok Kullanilan Array(Dizi) Metotlari ve Array icinde Array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://www.w3schools.com/js/js_array_methods.asp

let items = [1, 2, 3, 4, 5];

// Array icinde Array:
let femaleUsers = ["Ayse", "Hulya", "Merve"];
let maleUsers = ["Ahmet", "Hasan", "Mehmet"];

items.unshift(femaleUsers);

items.push(maleUsers);

console.log(items);

console.log(items.length);
console.log(items[0].length); // Array icindeki istedigimiz Array'in length bilgisini aldik
console.log(items[0][0]); // Ayse bilgisine ulastik :)

// Array icerisinden oge ayirmak -> splice(pos, item?)
let newItems = items.splice(1, 5);

console.log("newItems: ", newItems);
console.log("items: ", items);
// Array icerisindeki ogenin index bilgisini bulmak -> indexOf('value')
items.unshift("lorem");
items.push("ipsum");

console.log(items.indexOf("ipsum")); //3 // ["lorem", Array(3), Array(3), "ipsum"]

// Array Kopyalamak -> slice, [...ES6]
let copyItems = items;
console.log(items);

copyItems.pop(); // son ogeyi cikarttik
console.log("copyItems", copyItems);
console.log("items", items);

console.log("kopyalandiktan sonraki hali:");
copyItems = items.slice(); // kopyalama yapti
copyItems.pop(); // son ogeyi cikarttik
console.log("copyItems", copyItems);
console.log("items", items);

let es6Items = [...items]; // es6 ve sonrasinda gelen kopyalama islemi
console.log(es6Items);

// Iki Array Bilgisini Birlestirmek -> [...ES6, ...ES6]
let allUsers = [...femaleUsers, ...maleUsers]; // es6 birden fazla array yapisini birlestirmek
console.log(allUsers);

// Array icerisindeki bilgiyi String'e cevirmek -> toString, join
console.log(allUsers.toString());
console.log(allUsers.join(" --- "));

// Istedigimiz Index Bilgisine Oge Eklemek -> splice(index, 0, value)
allUsers.splice(allUsers.length - 1, 0, "Melissa");
allUsers.splice(Math.floor(allUsers.length / 2), 0, "Lorem");
console.log(allUsers);

// . push()
// Push metodu var olan bir diziye yeni bir eleman eklememizi sağlıyor. Eklemek istediğimiz elemanı parantez içerisine yazıyoruz.

// .pop()
// Pop metodu var olan bir dizideki en son elemanı silmemizi sağlar. Parantez içerisine parametre almaz.

// .includes()
// Includes metodu bir elemanın dizi içerisinde bulunup bulunmadığını kontrol eder. Boolean (true/false) olarak çıktı alınır.

// .slice()
// Slice (dilimleme) metodu bir dizinin bir kısmının kopyasıyla yeni bir dizi oluşturmamıza olanak sağlıyor.
// Parantez içerisine ise kopyalamak istediğimiz elemanların aralığını başlangıç ve bitiş indeksleri olacak şekilde iki parametre olarak giriyoruz. Bitiş indeksindeki değerin aralığa dahil olmadığını unutmayalım.
// Bu metot uygulandığı dizinin orijinal halini değiştirmiyor bu yüzden yeni oluşacak diziyi farklı bir değişkende saklıyoruz.

// .join()
// Bazen Dizi içerisinde topladığınız verileri, string (sözdizimi) olarak yazdırmak isteyebilirsiniz. Join metodu bu konuda yardıma yetişiyor.
// Parantez içerisine dizi elemanları arasına koymak istediğimiz string'i parametre olarak girebiliriz. Eğer bir parametre vermezsek virgül bastırır.

// .concat()
// Bu metot farklı dizileri birleştirip tek bir diziye çevirmemizi sağlıyor.

// Yazının devamında, içerisinde fonksiyon tanımladığımız ve bu fonksiyonlarla dizideki elemanları manipüle ettiğimiz dizi metotlarını inceleyeceğiz.

// .forEach()
// Malzemeler dizisindeki her bir malzemeyi ve onun indeksini konsola yazdıran bir kod yazalım:
const malzemeler = ["yumurta", "un", "süt"];

malzemeler.forEach(function (malzeme, malzemeIndeksi) {
  console.log(malzeme, malzemeIndeksi);
});
// console.log() fonksiyonu her bir malzeme için ayrı ayrı çalışacağından çıktı olarak tüm malzemeleri (ve indekslerini) alt alta görürüz.

// .map()
// Map metodu da forEach gibi kendisine verilen fonksiyonu dizinin her elemanı için uygular fakat forEach'ten farklı olarak sonucu yeni bir dizide tutar. Orijinal dizi olduğu gibi kalır.
// Bir dizideki sayıların 5 katından oluşan başka bir dizi oluşturalım:
const sayilar = [1, 2, 3];
let sayilarin5kati = sayilar.map(function (sayi) {
  return sayi * 5;
});
console.log(sayilarin5kati);
// Çıktı olarak [5,10,15] görmeyi bekleriz.
console.log(sayilar);
// Çıktı olarak [1,2,3] görmeyi bekleriz. Orijinal dizimiz aynı kalır.

//.some()
const sayilar = [4, 5, 6];
// sonucu görebilmek çıktıyı sonuc adlı değişkende tutalım:
const sonuc1 = sayilar.some(function (sayi) {
  return sayi > 5;
});
console.log(sonuc1);
// Dizi içerisinde 5'ten büyük bir eleman bulunduğu için çıktıda "true" görmeyi bekleriz.
const sonuc2 = sayilar.some(function (sayi) {
  return sayi < 3;
});
console.log(sonuc2);
// Dizi içerisinde 3'ten küçük herhangi bir sayı olmadığı için çıktıda "false" görmeyi bekleriz.

// .every()
// every metodu belirtilen bir koşulun dizideki tüm elemanlara uyup uymadığını kontrol ederiz.
// some metodunda olduğu gibi, Boolean yani true veya false olarak döner.
// True dönebilmesi için dizideki tüm elemanların fonksiyondaki koşula uyması gerekir.
const sayilar = [4, 5, 6];
const sonuc1 = sayilar.every(function (sayi) {
  return sayi > 3;
});
console.log(sonuc1);
// Dizideki tüm sayılar 3'ten büyük olduğu için bu sonucun true dönmesini bekleriz.
const sonuc2 = sayilar.every(function (sayi) {
  return sayi > 5;
});
console.log(sonuc2);
// Dizideki tüm sayılar 5'ten büyük olmadığı için sonucun false dönmesini bekleriz.
const sonuc3 = sayilar.every(function (sayi) {
  return sayi > 7;
});
console.log(sonuc3);
// Dizideki hiçbir sayı 7'den büyük olmadığı için sonucun false dömmesini bekleriz.

// .filter()
// filter metodu bir dizi içerisindeki belirli bir koşulu sağlayan elemanlar ile yeni bir dizi oluşturmamıza dolayısıyla dizi elemanlarını filtrelememize yarıyor.
// Yeni oluşacak diziyi bir değişkende saklıyoruz.
// Orijinal dizi bozulmuyor.
const sayilar = [1, 2, 3, 4, 5];
const filtrelenmisSayilar = sayilar.filter(function (sayi) {
  return sayi > 3;
});
console.log(filtrelenmisSayilar);
// Orijinal diziyi 3'ten büyük olan sayılar için filtrelediğimizde yeni oluşacak dizi [4,5] olacaktır.
console.log(sayilar);
// Orijinal dizi bozulmayacağından çıktıda [1,2,3,4,5] olarak görürüz.

// .find()
// Bu metot belirtilen koşula uyum sağlayan dizi elemanını bulmamızı sağlar.
// Diğer metotların aksine find metodu elemanın kendisini döner.
// Koşulu sağlayan birden fazla eleman varsa, bulduğu ilk elemanı döner.
// Koşulu sağlayan bir eleman bulamazsa undefined döner.
const sayilar = [4, 5, 6, 7];
const bulunacakEleman1 = sayilar.find(function (sayi) {
  return sayi === 5;
});
console.log(bulunacakEleman1);
// Dizi içerisinde 5 eleman olarak bulunduğu için çıktıda elemanın kendisini yani 5 görmeyi bekleriz.
const bulunacakEleman2 = sayilar.find(function (sayi) {
  return sayi > 5;
});
console.log(bulunacakEleman2);
// Dizi içerisinde 5'ten büyük birden fazla eleman olduğu için koşula uyan ilk elemanı yani 6'yı görmeyi bekleriz.
const bulunacakEleman3 = sayilar.find(function (sayi) {
  return sayi < 3;
});
console.log(bulunacakEleman3);
// Dizi içerisinde 3'ten küçük bir eleman olmadığı için çıktıda undefined görmeyi bekleriz.

// .sort()
// Bu metot, dizi içerisindeki elemanları sıralamaya yarar.
// Orijinal dizi sıralanmış şekilde döner. (Yani dizi mutate eder.)
// Eğer parametre olarak bir fonksiyon verilmezse dizi elemanları string'e çevrilir ve UTF-16 değerlerine göre sıralanır.
// Artan veya azalan olarak sıralamak için farklı bir yol izlenmelidir.
const sayilar = [3, 5, 2, 10, 4];
sayilar.sort(function (a, b) {
  return b - a;
});
console.log(sayilar);
// Çıktı olarak [10, 5, 4, 3, 2] alırız.

// .reduce()
// Bu metot dizimizi yalnızca bir değere indirger.
// Parantez içerisine parametre olarak bir fonksiyon ve accumulator'ün (toplayıcının) başlangıç değeri girilir.
// Bu metot orijinal diziyi değiştirmez. (Mutate etmez.)
// Tam olarak ne yaptığını anlamak için örnekleri inceleyelim.
const sayilar = [10, 20, 30];
// Dizi içindeki sayıları toplayarak indirgeyecek bir fonksiyon yazalım:
function indirgeyici(akumulator, sayi) {
  return akumulator + sayi;
};
// Bu fonksiyonu ve toplamaya 0'dan başlayacağımızı belirten 0 sayısını metodumuza parametre olarak girelim ve sonucu bir değişkende tutalım:
const sonuc1 = sayilar.reduce(indirgeyici, 0);
console.log(sonuc1);
//0 + 10 + 20 + 30 = 60 olacağından çıktı olarak 60 bekleriz.
// Eğer akümülatorümüzü 0 yerine 5'den başlatsaydık çıkabilecek sonucu görelim:
const sonuc2 = sayilar.reduce(indirgeyici, 5);
console.log(sonuc2);
// 5 + 10 + 20 + 30 = 65 olacağından çıktı olarak 65 bekleriz.



