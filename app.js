// memanggil module express / express adalah framework
const express = require('express')

// menggunakan fungsi express
const app = express()

// mendefinisikan port
const port = 3000

// untuk berpindah halaman
const router = require('./routes/index')
const morgan = require('morgan')

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.use(express.static("public")) //akses file public

app.set('view engine', 'ejs')

app.use(morgan('dev'))

app.use(router)

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}')
})