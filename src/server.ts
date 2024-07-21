import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import compression from 'compression'
import router from './routes/router'
dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Enable CORS
app.use(cors())

// Security headers
app.use(helmet())

// HTTP request logger
app.use(morgan('combined'))

// Compress response bodies
app.use(compression())

const PORT = process.env.PORT || 3000

app.use('/', router)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
export default app
