import { VercelRequest, VercelResponse } from '@vercel/node'
import { Request, Response, NextFunction } from 'express'

export function vercelToExpress(
  handler: (req: Request, res: Response, next: NextFunction) => void
) {
  return async (vercelReq: VercelRequest, vercelRes: VercelResponse) => {
    const req = vercelReq as unknown as Request
    const res = vercelRes as unknown as Response

    // Add any missing properties or methods here
    req.get = req.get || ((name: string) => vercelReq.headers[name.toLowerCase()])

    await new Promise<void>((resolve, reject) => {
      handler(req, res, (err?: any) => {
        if (err) reject(err)
        else resolve()
      })
    })
  }
}
