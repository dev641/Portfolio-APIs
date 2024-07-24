// routes.ts
import { Router } from 'express'
import adminRouter from './admin/adminRouter' // Adjust the path as needed
import apiRouter from './apis/apiRouter' // Adjust the path as needed
import authRouter from './auth/authRouter'
const router = Router()

// Define your route handlers
router.use('/auth', authRouter)
router.use('/admin', adminRouter)
router.use('/api', apiRouter)

export default router
