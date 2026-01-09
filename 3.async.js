/*ASENKRON
 * Asenkron işlemler tamamlandığında aynı anda kod çalışmaya başlar 
 * node.js işlemi arka planda yürütür ve tamamlandığında callback function ile sonuç döndürür.
 * asenkron işlemler node.js single-thread yapısından dolayı performansı artttırır çünkü bir işlem devam ederken diğer işlemleri engellemeden yürütebilir.
 


 * Hangi durumlarda kullanılır?
 - performansın önenmli olduğu  kullanıcı deneyimini etkilemek istemedğimiz durumlarda asenkron yöntemleri kullanmalıyız.
- Büyük dosya varsa veya daha fazla girdi /çıktı varsa asenkron tercih ederiz
-


*/
const fs = require("fs");

//! dosya okuma
fs.readFile("./data/örnek.txt", "utf-8", (err, data) => {
  if (err) return console.log("hata", err);
  console.log("dosya okundu", data);
});
// !dosya yazma 
fs.writeFile("./data/output2.txt", "selamlar içerik bu ", (err) => {
  if (err) return console.log("yazma işlemi hatalı", err);
  console.log("yeni dosya oluşturuldu");
});

// !dosya silme
fs.unlink("./data/bozuk.txt", (err)=>{

    if(err) return console.log("dosya silinemedi")
        console.log("dosya silindi")

})