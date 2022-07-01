
const express = require ('express')
const mongoose = require('mongoose')
const path = require('path')

require('dotenv').config()

const app = express()


mongoose
.connect(`mongodb+srv://aurox1000:${process.env.MONGO_DB_PASS}@developmet.thdbjwm.mongodb.net/stock-app?retryWrites=true&w=majority`
)
.then((result)=> {
app.listen(PORT, () => {
        console.log(`servidor escuchado en el puerto ${PORT}`)

      })
        console.log('conexion exitosa a la BDD')})

.catch((falla) => console.log(falla))


const productSchema = mongoose.Schema({
   name: {type: String, required:true},
   price: Number,
},
{timestamps: true }
)

const Product = mongoose.model('Product', productSchema)

app.use(express.json())



app.post('/api/v1/products',  (req, res) => {
 
  
 const newProduct = new Product(req.body)

 newProduct
.save()
.then(result => {
  
  res.status(201).json({ok: true})

})
.catch((falla) => console.log(falla))


})

app.use(express.static(path.join( __dirname, 'public')))

const PORT = process.env.PORT



