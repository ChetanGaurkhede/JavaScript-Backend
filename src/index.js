import dotenv from 'dotenv'
import express from 'express'
import connectDB from './db/index.js';

dotenv.config(
  {
    path: '.env'
  }
)
 connectDB()


const app = express()


app.listen(process.env.PORT, () => {
  console.log(`app listening on PORT: ${process.env.PORT}`)
})


















// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     console.log(`MongoDB Connected`)
//   } catch (error) {
//     console.log(`Error in MongoDB connection: ${error}`)
//   }
// })()

// app.listen(process.env.PORT, () => {
//   console.log(`app listening on PORT: ${process.env.PORT}`)
// })

