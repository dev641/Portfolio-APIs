// import express, { Express, Request, Response } from 'express'
// import dotenv from 'dotenv'

// dotenv.config()

// const app: Express = express()
// // const port = process.env.PORT || 3000

// app.get('/', (_: Request, res: Response) => {
//   console.log('hello')
//   res.send('Express + TypeScript Server')
// })

// // app.listen(port, () => {
// //   console.log(`[server]: Server is running at http://localhost:${port}`)
// // })

// export default app
import express, { Request, Response } from 'express'

const app = express()
// const port = 3003

app.get('/', (_: Request, res: Response) => {
  res.send('Hello World!')
})

app.get('/home', (_: Request, res: Response) => {
  res.send('Hello World! + home')
})

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`)
// })

export default app
