import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';
import cors from 'cors';

const app = express()
dotenv.config();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 4001;
const URI = process.env.mongoDBURI;


// MONGODB
const connectDb = async () => {
    try { const conn = await mongoose.connect(URI);
      console.log(`Connected to MongoDB database ${conn.connection.host}`);
    } catch (error) { console.log(error); }
  };
  connectDb();

//   ROUTES
app.use('/book', bookRoute);
app.use('/user', userRoute);

//   PORT
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})