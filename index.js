const express = require('express')

const app = express()

app.set('views',`${__dirname}/src/views`)
app.set('view engine','pug')

app.use('/',express.static(`node_modules`))
app.use(express.static(`src/public`))

app.get('/',(req,res)=> {
    res.render('index')
})

app.listen(3000, ()=> console.log("Servidor iniciado com sucesso"))