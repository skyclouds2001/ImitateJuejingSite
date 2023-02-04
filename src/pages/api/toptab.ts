import type { NextApiRequest, NextApiResponse } from 'next'
import { NavItem } from '../../interface/nav'

const handler = (req: NextApiRequest, res: NextApiResponse<{ navList: NavItem[] }>) => {
  res.status(200).json({
    // 首页nav配置数据
    navList: [
      {
        key: 1,
        label: '首页',
      },
      {
        key: 2,
        label: '沸点',
      },
      {
        key: 3,
        label: '课程',
      },
      {
        key: 4,
        label: '直播',
      },
      {
        key: 5,
        label: '活动',
      },
      {
        key: 6,
        label: '商场',
      },
      {
        key: 7,
        label: 'APP',
        remark: '邀请有礼',
      },
    ],
  })
}

export default handler
