// gerekli modulleri import ediyorum 
const http=require("http")

/*
* createServer() ,verdiğimiz dinleyiciyi fonksiyona her geldiğinde dinler .
* Bu fonksiyon iki parametre alır :
1)request:
2)response:


*/ 

// http.createServer fons. bir http sunucusu oluşturur.

http.createServer((req,res)=>{

    console.log("api'a isek geldi")
})