var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));
app.use('/ventas', require('./routes/saleRouter'));
app.use('/product', require('./routes/productRouter'));
app.use('/category', require('./routes/categoryRouter'));

app.listen(3030, () => console.log("Servidor Corriendo en el puerto 3030"));

module.exports = app;