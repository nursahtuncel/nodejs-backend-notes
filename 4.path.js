//  dosya dizinindeki kullanılabilecek methodlar

const path = require("path")

textPath = "./data/output.txt"
console.log("dirname:", path.dirname(textPath));   
// Dosyanın bulunduğu dizinin yolunu döndürür (klasör yolu)

console.log("basename:", path.basename(textPath)); 
// Dosya adını (uzantısıyla birlikte) döndürür

console.log("extname:", path.extname(textPath));   
// Dosyanın uzantısını döndürür


console.log("join:",path.join("./media","photos","profile.png"))
// iki veya daha fazla yolu birleştirir.

console.log("resolve:",path.resolve("örnek.txt"));
// dosyanın mutlak konumunu bulmak istiyorsak 

console.log("normalize:",path.normalize("./users/selin/../deneme.txt"))
// yolu en basit hale getirir.