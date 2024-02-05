const express=require('express');
const port=3000;
const app=express();
app.listen(port, function(){
console.log("Express esimerkki portissa "+port);
});
app.get('/',function(request,response){
    response.send("Nodemon testi Express API esimerkki ilman tietokantaa portissa "+port);
});
app.get('/toka',function(request,response){
    response.send("Endpoint toka");
    console.log("/toka");
});

module.exports=app;