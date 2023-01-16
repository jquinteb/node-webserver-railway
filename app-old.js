
const http = require('http');


http.createServer((req,res) =>{

    // res.writeHead(200,{'Content-type':'application/json'});

    // const persona = {
    //     id : 1,
    //     nombre: 'Juan da'
    // }

    // res.write(JSON.stringify(persona));
    // res.end();
//--------------------------------------
    // res.setHeader('Content-Disposition','attachment; filename=lista.csv')
    // res.writeHead(200,{'Content-type':'application/csv'});

    // res.write('id,nombre\n');
    // res.write('1,Juan\n');
    // res.write('2,David\n');
    // res.write('3,Laura\n');
    // res.write('4,Amelia\n');
    // res.end();


    res.write('hola mundo')
    res.end();

})
.listen(8081);

console.log('escuchando el puerto 8081');