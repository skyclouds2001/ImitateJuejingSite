import type { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse<{ name: string }>) => {
  res.status(200).json({ name: 'sky' })
}

export default handler
