// import express, { Express, Request, Response } from 'express'
// import dotenv from 'dotenv'

// dotenv.config()

// const app: Express = express()
// const port = process.env.PORT || 3000

// app.get('/', (_: Request, res: Response) => {
//   console.log('hello')
//   res.send('Express + TypeScript Server')
// })

// app.listen(port, () => {
//   console.log(`[server]: Server is running at http://localhost:${port}`)
// })

// export default app
const express = require('express')
const app = express()

app.get('/', (_: Request, res: Response) => res.send('Express on Vercel'))

app.listen(3000, () => console.log('Server ready on port 3000.'))

module.exports = app
