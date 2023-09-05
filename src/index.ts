// /random => renvoie un nombre aléatoire
// /randomBetween => renvoie un nombre compris entre deux nombre fourni dans request
import express from "express"
import fs from 'fs';
const app = express()
const port = 3000

// ne pas supprimer sert a "lancer le serveur"

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  // /Toto => affiche dans la console : "toto" et renvoie "toto"
app.get('/Toto', (req, res) => {
    console.log("Toto");
    res.send('Toto')
})


// /Date  => renvoie la date actuelle

app.get('/Date', (req, res) => {
    let date: Date = new Date();  
    res.send(date)
})

// /Tomas => renvoie un objet javascript { nom: "Laforge", prenom: "Thomas" }
interface IPersonne {
    nom: string,
    prenom: string

  }
  let Tomas : IPersonne = {
    nom: "Laforge",
    prenom: "Tomas",
  };

  app.get('/Tomas', (req, res) => {
    console.log("pas ouf ce prof");
    res.send(Tomas)
})

// /files => crée un fichier toto.txt sur le serveur



app.get ('/Files', (req, res) => {
    fs.writeFileSync('toto.txt', 'Je prefere les nouilles')
    console.log('Fichier créé avec succès');
    res.send('Fichier créé avec succès');

    })

    // /random => renvoie un nombre aléatoire



    app.get('/RNG', (req, res) => {
        let RandomNumber= Math.random()*10000000000000000;  
        const randomNumberString = RandomNumber.toString();
        res.send(randomNumberString);
    })