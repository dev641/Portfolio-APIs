import { Router, Request, Response, NextFunction } from 'express'

const authRouter = Router()

const posts = [
  { id: 1, title: 'First Post', content: 'This is the first post' },
  { id: 2, title: 'Second Post', content: 'This is the second post' }
]

// Get post routes
authRouter.get('/post', (_: Request, res: Response) => {
  res.status(200).json(posts)
})

// Root route
authRouter.get('/', (_: Request, res: Response) => {
  res.status(200).json({ message: 'Hello World' })
})

// Error handling middleware
authRouter.use((err: Error, _: Request, res: Response, __: NextFunction) => {
  console.error(err.stack)
  res.status(500).json({ message: err.message })
})

export default authRouter
