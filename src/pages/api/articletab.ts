import type { NextApiRequest, NextApiResponse } from 'next'
import { ArtNavItem } from '@/interface/nav'
const handler = (req: NextApiRequest, res: NextApiResponse<{ artnavList: ArtNavItem[] }>) => {
  res.status(200).json({
    // 首页nav配置数据
    artnavList: [
      {
        key: 1,
        label: '综合',
      },
      {
        key: 2,
        label: '关注',
      },
      {
        key: 3,
        label: '后端',
      },
      {
        key: 4,
        label: '前端',
      },
      {
        key: 5,
        label: 'Android',
      },
      {
        key: 6,
        label: 'ios',
      },
      {
        key: 7,
        label: '人工智能',
      },
      {
        key: 8,
        label: '开发工具',
      },
      {
        key: 9,
        label: '代码人生',
      },
      {
        key: 10,
        label: '阅读',
      },
    ],
  })
}

export default handler
