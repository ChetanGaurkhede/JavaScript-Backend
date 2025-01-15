import dotenv from 'dotenv'
import { app } from './app.js';
import connectDB from './db/index.js';

dotenv.config(
  {
    path: '.env'
  }
)
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`App is listning on port ${process.env.PORT}`)
    })
  })
  .catch((error) => {
    console.log(`mongoDB Connection failed: ${error}`)
  })


// const app = express()


// app.listen(process.env.PORT, () => {
//   console.log(`app listening on PORT: ${process.env.PORT}`)
// })


















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

