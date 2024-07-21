// import { VercelRequest, VercelResponse } from '@vercel/node'
// import { Request, Response, NextFunction } from 'express'

// export function vercelToExpress(
//   handler: (req: Request, res: Response, next: NextFunction) => void
// ) {
//   return async (vercelReq: VercelRequest, vercelRes: VercelResponse) => {
//     const req = vercelReq as unknown as Request
//     const res = vercelRes as unknown as Response

//     // Add any missing properties or methods here
//     req.get = req.get || ((name: string) => vercelReq.headers[name.toLowerCase()])

//     try {
//       await new Promise<void>((resolve, reject) => {
//         handler(req, res, (err?: any) => {
//           if (err) {
//             console.error('Express error:', err)
//             vercelRes.status(500).json({ error: 'Internal Server Error' })
//             reject(err)
//           } else {
//             resolve()
//           }
//         })
//       })
//     } catch (error) {
//       console.error('Caught error in vercelToExpress:', error)
//       if (!vercelRes.headersSent) {
//         vercelRes.status(500).json({ error: 'Internal Server Error' })
//       }
//     }
//   }
// }
