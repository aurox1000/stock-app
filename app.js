require('dotenv').config()
const express = require ('express')

const app = express()

app.get('/', (req, res)=> {
   console.log('peticion recibida')

   res.send('<H1>!Hola mundo</H1>')
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`servidor escuchado en el puerto ${PORT}`)


})