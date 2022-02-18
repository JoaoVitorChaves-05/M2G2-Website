const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/views/index.html')
})

app.listen(process.env.PORT || 3000), () => {
    console.log('> listening on port: ' + process.env.PORT || 3000)
}