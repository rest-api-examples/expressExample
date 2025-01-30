<h1>expressExample</h1>

Tutkitaan Express.js sovellusta ja http-metodien käyttöä sovelluksessa

<ol>
<li>Luo kansio nimeltään expressExample ja avaa komentokehote kansioon</li>
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

<hr>
Exploring an Express.js application and using HTTP methods in the application.

<ol> <li>Create a folder named <b>expressExample</b> and open a command prompt in the folder.</li> <li>Initialize a Node.js application with the command: <pre>npm init</pre></li> <li>Add the Express.js module to the application with the command: <pre>npm install express</pre></li> <li>Create a file named <b>app.js</b> in the application and add the following code: <pre> const express = require('express'); const port = 3000;
const app = express(); app.listen(port, function(){ console.log("Express example running on port " + port); });

app.get('/', function(request, response){ response.send("Express API example without a database running on port " + port); });

module.exports = app; </pre>

</li> <li>Start the application using the command: <pre>node app.js</pre> Then, open your browser and navigate to: <a href="http://localhost:3000" target="_blank">http://localhost:3000</a></li> <li>Try modifying the text displayed in the browser. Note that you need to stop the application (CTRL+C) and restart it for the changes to take effect.</li> <li>Install the <b>nodemon</b> utility with the command: <pre>npm install nodemon -g</pre></li> <li>Stop the application and restart it with: <pre>nodemon app.js</pre> Now, try modifying the text again—you will notice that the application restarts automatically whenever you save the JavaScript file.</li> <li>Add the following line to the "scripts" section in the <b>package.json</b> file: <pre> "start": "node app.js" </pre> You can now start the application using the command: <pre>npm start</pre></li> <li>Add another method to handle GET requests in the file.</li> <li>Add a GET request handler that accepts a name parameter and returns a greeting.</li> <li>Include the following lines in the application: <pre> app.use(express.json()); app.use(express.urlencoded({ extended: false })); </pre> </li> <li>Add a method to handle POST requests that returns all data received in the request body.</li> <li>Test the application using Postman.</li> <li>Experiment with middleware functions.</li> </ol>
