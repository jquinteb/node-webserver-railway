const express = require('express')
const app = express()
const hbs = require('hbs');
require('dotenv').config();

const port = process.env.PORT;


//Handlebars
hbs.registerPartials(__dirname+'/views/partials', function(err){});

app.set('view engine','hbs');

//servir contenido estatico
app.use(express.static('public'));

app.get('/',  (req, res) => {
  res.render('home',{
    nombre: 'Juan David',
    titulo: 'Curso Node'
  });
  //res.send ('hola mundo')
})

app.get('/generic',  (req, res) => {
    res.render('generic',{
        nombre: 'Juan David',
        titulo: 'Curso Node'
      });
    //res.sendFile(__dirname+'/public/generic.html')
  })

  app.get('/elements',  (req, res) => {
    res.render('elements',{
        nombre: 'Juan David',
        titulo: 'Curso Node'
      });
    //res.sendFile(__dirname+'/public/elements.html')
  })

// app.get('*', (req, res) => {
//     res.sendFile(__dirname+'/public/404.html')
// })


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })