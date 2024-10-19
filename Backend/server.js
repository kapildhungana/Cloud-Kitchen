import express from 'express'
import path from 'path'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import morgan from 'morgan'
import colors from 'colors'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
import userRoutes from './routes/user.js'
import cors from 'cors'


dotenv.config()

const app = express()

// if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
// }


const corsOptions ={
    origin:'*', 
    credentials:true,
    optionSuccessStatus:200,
    methods: [
        'GET',
        'POST',
      ],
    allowedHeaders: [
        'Content-Type',
      ],
}
app.use(cors(corsOptions));
app.use(express.json())

const MONGO_URI = 'mongodb+srv://cloud:cloud@cloudkitchen.afn38.mongodb.net/?retryWrites=true&w=majority&appName=cloudkitchen';

await connectDB(MONGO_URI)

app.use('/users', userRoutes)
// app.use('/api/products', productRoutes)
// app.use('/api/orders', orderRoutes)
// app.use('/api/upload', uploadRoutes)

// app.get('/api/config/paypal', (req, res) =>
//     res.send(process.env.PAYPAL_CLIENT_ID)
//  )
 
//  const __dirname = path.resolve()

//  app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

//  if (process.env.NODE_ENV === 'production') {
//      app.use(express.static(path.join(__dirname, '/e-commerce/build')))

//      app.get('*', (req, res) =>
//          res.sendFile(path.resolve(__dirname, 'e-commerce', 'build', 'index.html')))
//  } else {
//     app.get('/', (req,res) => {
//         res.send("Hello World")
//     })
//  }

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 7777

app.listen(PORT, console.log(`Server running on port ${PORT}`.magenta.bold))