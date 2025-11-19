import express from 'express';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import connectDB from './src/config/db.js';
import cors from 'cors';
import routes from './src/route/index.js'


const app = express()
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [
      "http://localhost:5174",
      "http://localhost:5173",
      "http://localhost:3000",
  
    ],


    credentials: true,
  })
);

app.use("/api", routes)

await connectDB();
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Something Broke!");
});


export default app;