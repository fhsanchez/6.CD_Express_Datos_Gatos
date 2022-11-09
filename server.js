const express = require('express');
//const hbs = require('hbs');
const app = express();

app.use(express.static(__dirname + "/static"));

console.log(__dirname);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

 // Arreglo con info del gato
 const gatos_array = [
    { id: 0, img : "cat1.jpg" , food: "Spaghetti 1", age: "3", sleeping : "under the bed"},
    { id: 1, img : "cat2.jpg" , food: "Spaghetti 2", age: "5", sleeping : "in a sunbeam"},
    { id: 2, img : "tigre.jpg" , food: "Spaghetti 3", age: "7", sleeping : "under the bed 3"}
];


app.get('/', (req, res) => {
    res.render('cats', {gatos : gatos_array});
})

app.get('/cuddles/:id', function (req, res)  {
    console.log(req.params.id);
    let id = req.params.id;
    let gato_objeto;
    
    for (let i=0;i<=2;i++){
        if (gatos_array[i].id == id){
            gato_objeto = gatos_array[i];
            console.log("impresion img");
            console.log(gato_objeto.img);
        }
    }
    console.log(gato_objeto);
    res.render('cuddles', {gato : gato_objeto});
})

app.listen(4300, () => {
    console.log('Escuchando en el puerto 4300');
})