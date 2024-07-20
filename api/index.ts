import { VercelRequest, VercelResponse } from '@vercel/node'
import { Request, Response } from 'express'
import app from '../src/server'

export default async (req: VercelRequest, res: VercelResponse) => {
  await new Promise((resolve, reject) => {
    app(req as unknown as Request, res as unknown as Response, (err: any) => {
      if (err) {
        return reject(err)
      }
      resolve(null)
    })
  })
}
