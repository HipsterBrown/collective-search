// builtin modules
const path = require('path')

// node_modules
const express = require('express')
const handlebars = require('express-handlebars')
const logger = require('morgan')

// project modueles
const indexRoutes = require('./routes')

const app = express();

app.set('views', path.join(__dirname, 'views'))
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(logger('combined'))

app.use('/', indexRoutes)

module.exports = app;
