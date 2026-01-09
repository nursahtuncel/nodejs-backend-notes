// !örnek: 
/* 
1) title dosyasını okuyun
2) content dosyasını okuyun
3) title dosyasındaki başlığa/yola ve content dosyasındaki içeriğe sahip bir dosya oluşturun.
*/ 

const fs =require("fs")

fs.readFile("./challenge/title.txt", "utf8",(err,baslik)=>{
if (err) return console.log("hata",err)

fs.readFile("./challenge/content.txt", "utf8",(err,icerik)=>{

if (err) return console.log("hata",err)
console.log(icerik)

fs.writeFile(`${baslik}`, `${icerik}`,(err)=>{
    if (err) return console.log("hata",err)
        console.log("islem tamam")
})


})
})