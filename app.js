
import express from 'express';
import userRouter from './routes/userRouter.js';

//////// Conexión MongoDB ////////
import connectDB from './database.js';

const app = express()
connectDB();

const server = app.listen(8080, () => console.log('Server Up'))

app.use(express.json())
app.use('/users', userRouter)