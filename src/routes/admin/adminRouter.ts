import { Router, Request, Response, NextFunction, json } from 'express'

const adminRouter = Router()
adminRouter.use(json())
// Dummy data for posts
const posts = [
  { id: 1, title: 'First Post', content: 'This is the first post' },
  { id: 2, title: 'Second Post', content: 'This is the second post' }
]

// Get post routes
adminRouter.get('/post', (_: Request, res: Response) => {
  res.status(200).json(posts)
})

// Root route
adminRouter.get('/', (_: Request, res: Response) => {
  res.status(200).json({ message: 'Hello World' })
})

// Error handling middleware
adminRouter.use((err: Error, _: Request, res: Response, __: NextFunction) => {
  console.error(err.stack)
  res.status(500).json({ message: err.message })
})

export default adminRouter
