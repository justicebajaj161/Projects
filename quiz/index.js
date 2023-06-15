import express from 'express';
import dotenv from 'dotenv';
import quizRoutes from './routes/quizRoutes.js';
import Connection from './database/db.js';






const app=express();
app.use(express.json())

dotenv.config();



app.use("/api/quizes",quizRoutes);










const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;
Connection(username,password);

const PORT= process.env.PORT || 6000;

app.listen(PORT,()=>{
    console.log(`running at port ${PORT}`)
});