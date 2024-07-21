import express, { Request, Response, NextFunction } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import compression from 'compression'

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

// Dummy data for posts
const posts = [
  { id: 1, title: 'First Post', content: 'This is the first post' },
  { id: 2, title: 'Second Post', content: 'This is the second post' }
]

// Get post routes
app.get('/post', (_: Request, res: Response) => {
  res.status(200).json(posts)
})

// Root route
app.get('/', (_: Request, res: Response) => {
  res.status(200).json({ message: 'Hello World' })
})

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack)
  res.status(500).json({ message: err.message })
})

export default app
