import { Router, Request, Response, NextFunction } from 'express'

const apiRouter = Router()

// Dummy data for posts
const posts = [
  { id: 1, title: 'First Post', content: 'This is the first post' },
  { id: 2, title: 'Second Post', content: 'This is the second post' }
]

// Set Port Number
// Get post routes
apiRouter.get('/post', (_: Request, res: Response) => {
  res.status(200).json(posts)
})

// Root route
apiRouter.get('/', (_: Request, res: Response) => {
  res.status(200).json({ message: 'Hello World' })
})

// Error handling middleware
apiRouter.use((err: Error, _: Request, res: Response, __: NextFunction) => {
  console.error(err.stack)
  res.status(500).json({ message: err.message })
})

export default apiRouter
