// !API 
/* API (Application Programming Interface), yazılımların birbirleriyle iletişim kurmasını sağlayan kurallar ve araçlar bütünüdür. Basit ifade ile: Bir yazılımın, başka bir yazılımdan nasıl veri isteyeceğini ve nasıl cevap alacağını tanımlar.

Aşağıda konuyu sistematik ve pratik şekilde açıklıyorum.
*/
// ! API Ne İşe Yarar?

// Farklı uygulamaların birbirine veri göndermesini

// Belirli fonksiyonların dışarıya kontrollü biçimde açılmasını

// Sistemlerin bağımsız ama uyumlu çalışmasını sağlar

// Gerçek hayat benzetmesi:

// Menü (API) → Sipariş (Request) → Mutfak (Server) → Yemek (Response)

// ! En Yaygın API Türleri

// ********* Restfull Api**********

// HTTP protokolünü kullanır

// JSON veri formatı yaygındır

// Stateless’tir

// Örnek endpoint:

// GET /users
// POST /users
// PUT /users/1
// DELETE /users/1

// ********SOAP API*************

// XML tabanlıdır

// Daha ağır ve katıdır

// Bankacılık ve kurumsal sistemlerde görülür

// *************** GraphQL**********

// Facebook tarafından geliştirilmiştir

// İstemci yalnızca ihtiyacı olan veriyi ister

// Tek endpoint kullanır

// Örnek:

// {
//   users {
//     name
//     email
//   }
// }

// ********** WebSocket API**********

// Gerçek zamanlı iletişim sağlar

// Chat, canlı borsa, oyunlarda kullanılır
