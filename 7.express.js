const express = require("express");
const cors = require("cors");

const idKontrol = (req, res, next) => {
  console.log(req.params.id + "İD GEÇERLİ");

  req.body.text = "selam";

  if (true) {
    return res.status(404).json({ message: "ID Bulunamadı" });
  }

  next();
};

// bir api oluştur
const app = express();

// isteğibn body bölümü ile gelen veriye erişmemizi sğalayan middleware
app.use(express.json());

// cors arayazılımını çalıştır
// cors hatası almamız için gönderilmesi gereken bütün headerları ayarla
app.use(cors());

// middleware (arayazılım)
// api'a gelen her istekte çalışır
app.use((req, res, next) => {
  // gelen isteğin detaylarını console'a yaz
  console.log(req.method + " " + req.url);

  // middleware'den sonra çalışıcak fonksiyone geçmesine izin veriyor
  next();
});

// speseifik route'larda çalışan bir middleware
app.use("/users/:id", idKontrol);

// "/users" adresine atılan "get" isteklerine cevap ver
// req.query: istek ile gelen arama parametrelerine erişmemizi sağlar
app.get("/users", (req, res) => {
  res.json({ message: "Kullanıcılar alındı", queryParams: req.query });
});

// "/users" adresine atılan "post" isteklerine cevap ver
app.post("/users", (req, res) => {
  res.status(201).json({ message: "Kullanıcı oluşturuldu", body: req.body });
});

// "/users/id" adresine atılan "delete isteğine cevap ver"
// req.params: istek ile gelen parametrele erişmemizi sağlar
app.delete("/users/:id", (req, res) => {
  res.json({ message: "Kullanıcı silindi", id: req.params.id });
});

app.patch("/users/:id", (req, res) => {
  res.json({ message: "Kullanıcı güncellend,", id: req.params.id });
});

// tanımlanmayan bir adrese istek atılırsa 404 cevabı gönder
app.use((req, res) => {
  res.status(404).json({ message: "Adres bulunamadı" });
});

// hangi portta sunucu çalışıcak
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunu dinlemeye başladı`);
});

/*# Routing (Yönlendirme)

- Bir URL ve HTTP methoduna gelen isteğin, hangi kodu çalıştıracağını belirleme işlemi

# Express

- Node.js üzeirnde çalışan bir routing framework'ü.
- API yazmayı çok daha kolay hale getirir.

- Neden Express'e İhtiyaç Var?
- Nodejs'in kendi `http` modülü ile sunucu yazmak mümkün ama:
- - Routing (yönlendirme) zordur
- - Middleware (arayazılım) mantığı yoktur.
- - Kod çok hızlı karmaşıklaşır
- - - Express bu problemleri çözer

# Middleware

- İstek ile cevap arasına giren ve bu akışı kontrol eden ara fonksiyonlardır.

- İstek Gelir ------> middleware çalışır -------> (next varsa) sonraki adıma geçir -----------> response döner

- Middleware'ler neler yapabilir?

* req ve res nesnelerine erişebilir değiştirebilir
* isteği sonlandırabilir (response döndebilir)
* bir sonraki adıma geçebilir (next)
* hata yakalabilir

- En sık kullanılan middleware Örnekleri

* Body Parsing (Body ile gelen veriye erişmek için)
* Yetkilendirme: İstek atan kullanıncının yetkisi var mı kontrol ederiz
* Hata yakalama
* CORS sorununu çözmek

## Next

- Express middlewarelerinde kullanılur
- "bu iş bitti, sıradaki middleware'e / route'a geç"

# CORS

- Cross-Origin Resource Sharing
- www.frontend.com -----------> www.api.backend.com

- Bir websitenin başka bir domainden API isteği atmasına izin verilip verilmeyceğini belirleyen tarayıcı güvenlik mekanizmasınıdır.

- Tarayıcı: "Bu frontend, bu backend'e istek atabilir mi?" diye kontrol

## Terimler

- Get: Getir
- Post: Oluştur
- Put: Tamamen Güncelle
- Patch: Kısmi Güncelle
- Delete: sİL
- Req (Request): İstek
- Res (Response): Yanıt
- Query: Url'deki ? parametreler
- Params: Urldeki değişkenler
- Body: Gönderilen Veri
- Headers: Header bilgileri (token.)
- Cookies: Çerezler
- Status: Durum (404)
- Middleware: Arayazılım
- Routing: Yönlendirme*/