import express, { Request, Response } from 'express'

const app = express()
app.use(express.json())

// get post routes
app.get('/post', (_: Request, res: Response) => {
  res.status(200).json({ message: 'post routes' })
})

// root routes
app.get('/', (_: Request, res: Response) => {
  res.status(200).json({ message: 'Hello World' })
})
export default app
