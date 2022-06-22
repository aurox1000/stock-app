const express = require ('express')

const app = express()

app.get('/', (req, res)=> {
   console.log('peticion recibida')

   res.send('<H1>!Hola mundo</H1>')
})

app.listen(4000, () => {
    console.log('servidor escuchado en el puerto 4000')
})