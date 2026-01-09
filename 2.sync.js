// senkron bir işlem baştan sona tamamlanana kadar diğer kodların çalışmasını durdurur
// yani işlemi başlattığınızda sonraki işlem tamamlanana kadar sonraki satır çalışmaz .
//  senkron işlemler özellikle büyük veri işlemleri için bekleme süresini arttırabilir ve performansı düşürür.
// bunun sebebi node.js'in tek iş parçacıklı yapıya sahipolmasıdır .
// hangi durumlarda senkron kullanılır: Küçük işlemlerde ve beklemenin kritik olduğu durumlarda kullanılır .
// FS modulunu bu dosyaya çağırmak;

const { isUtf8 } = require("buffer");
const fs = require("fs");

// FS(FileSystem)
// sahip olduğu moduller sayesinde dosya dizininde işlemler yapabileceğiz
// dosya oluşturma /silme/yazma/okuma


//! dosya okuma:

const text=fs.readFileSync("./data/örnek.txt","utf-8")
console.log(text)

//! dosya yazma :
// gönderilecek metin içeriğini hazırlamalıyız 
const newText = `bu yeni oluşturduğum text :${text}
oluşturulma tarihi :${new Date().toLocaleString()
}
`;

// 
fs.writeFileSync("./data/output.txt", newText)

//!Dosya silme

// senkron olduğu için yorum satırına aldım
// fs.unlinkSync("./data/bozuk.txt")

// !klasör oluşturma
// fs.mkdirSync("hello")

// !dosya dizin ismini değiştirmen 

fs.renameSync("./hello/", "important")
