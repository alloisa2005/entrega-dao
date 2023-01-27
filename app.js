import express from 'express'
import userRouter from './routes/userRouter.js'

const app = express()
const server = app.listen(8080, () => console.log('Server Up'))

app.use(express.json())
app.use('/users', userRouter)