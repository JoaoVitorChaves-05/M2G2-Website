const express = require('express')
const app = express()
require('dotenv').config()

app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/views/index.html')
})

app.get('/admin', (req, res) => {
    const {auth} = req.query
    
    if (!auth.length || auth != process.env.AUTH_TOKEN) {
        res.send('<h1>Acesso não autorizado</h1>')
    }

    res.sendFile(__dirname + '/public/views/admin.html')
})

app.get('/search', (req, res) => {
    const {modalidadeImovel, 
        categoriaImovel, 
        tipoImovel,
        cidade,
        bairro,
        rua,
        min_price,
        max_price,
        metragem,
        numeroQuartos,
        numeroBanheiros,
        vagas
    } = req.query

    res.send('<h1>OK</h1>')
})

app.post('/login', (req, res) => {
    const {login, password} = req.body

    console.log(process.env.AUTH_TOKEN)
    if (login == 'admin' && password == 'admin')
        res.redirect('/admin?auth=' + process.env.AUTH_TOKEN)
    else
        res.send('<h1>Acesso não autorizado</h1>')
})

app.listen(process.env.PORT || 3000), () => {
    console.log('> listening on port: ' + process.env.PORT || 3000)
}