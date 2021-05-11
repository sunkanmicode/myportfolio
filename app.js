const express = require('express');
const path = require('path');
const app = express();

const pathDir = path.join(__dirname, "./public");
app.use(express.static(pathDir));
app.set('view engine', 'hbs')

app.get('/', (req, res) =>{
    res.render('index')
});

app.get('/about', (req, res) =>{
    res.render('about')
});

app.listen(4000, ()=>{
    console.log('server is running on 4000...');
})
