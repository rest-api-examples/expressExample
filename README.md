# expressExample

Tutkitaan Express.js sovellusta ja http-metodien käyttöä sovelluksessa

<ol>
<li>Alusta node.js sovellus komennolla npm init</li>
<li>Lisää sovellukseen Express.js moduuli komennolla npm install express</li>
<li>Lisää sovellukseen tiedosto app.js, jossa koodi 
<pre>
const express=require('express');
const port=3000;

const app=express();
app.listen(port, function(){
    console.log("Express esimerkki portissa "+port);
});
app.get('/',function(request,response){
    response.send("Express API esimerkki ilman tietokantaa portissa "+port);
});

module.exports=app;
</pre>
</li>
<li>Käynnistä sovellus komennolla node app.js ja avaa selaimeen sivu http://localhost:3000</li>
<li>Kokeile muokata tekstiä, joka tulostuu selaimeen. Huomaa, että sinun tulee sammuttaa sovellus (CTRL+C) ja käynnistää se uudelleen</li>
<li>Asenna koneellesi <b>nodemon</b> apuohjelman komennolla npm install nodemon -g </li>
<li>Sammuta sovellus ja käynnistä se komennolla nodemon app.js. Kokeile muokata tekstiä ja huomaat, että sovellus käynnistyy automaattisesti uudelleen aina kun tallet JavaScript tiedoston</li>
<li>Lisää package.json tiedoston script lohkoon rivi: 
<pre>
"start":"node app.js"
</pre>
</li>
<li>Voit nyt käynnistää sovelluksen komennolla npm start</li>
<li>Lisää tiedostoon toinenkin get-pyyntöihin vastaava metodi</li>
<li>Lisää tiedostoon get-pyyntöihin vastaava metodi, joka ottaa vastaan annetun nimen ja palauttaa tervehdyksen</li>
<li>Lisää sovellukseen rivit 
<pre>
app.use(express.json());
app.use(express.urlencoded({extended:false}));
</pre>
</li>
<li>Lisää sovellukseen post-pyyntöihin vastaava metodi, joka palauttaa kaiken sille pyynnön body-osassa annetun datan</li>
<li>Testaa sovellusta Postmanilla</li>
<li>Kokeile middleware funktioiden toimintaa</li>
</ol>