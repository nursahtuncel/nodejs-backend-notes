// gerekli modulleri import ediyorum
const http = require("http");

/*
* createServer() ,verdiğimiz dinleyiciyi fonksiyona her geldiğinde dinler .
Bu fonksiyon her gelen request’te çalışır
* Bu fonksiyon iki parametre alır :
req → gelen isteğin tüm bilgileri
res → cevabı oluşturacağın nesne

* Bu fonsiyon içerisinde gelen isteğe göre cevap döndürülür 



*/

// http.createServer fons. bir http sunucusu oluşturur.
// server apı için çalışma ortamı sağlayan bir ortam
const server =http.createServer((req, res) => {
  console.log("api'a isek geldi");
  // Server’a bir client bağlandı
  // Tarayıcıda sayfa açmak bile request’tir
  console.log(req.method+"isteği geldi");
  // Gelen isteğin:
  // URL’i
  // Method’u (GET, POST)
  // Headers’ı
  // Socket bilgileri
  // gibi her şeyi burada görürsün

  // res.end ile bir api oluşturduk
  res.end("server tarafından selamlar");

});

//  Bir dinleyici oluşturup hangi porta gelen isteklerin dinleneceğini söylemeliyiz.

server.listen(1616,"127.0.0.1",()=>{
    console.log("Ip adresinin 1616 portuna gelen istekler dinlenmeye alındı");
})