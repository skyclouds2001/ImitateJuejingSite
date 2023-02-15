import type { NextApiRequest, NextApiResponse } from 'next'
import { ArtNavItem } from '@/interface/nav'
import axios from 'axios'
import { CMSDOMAIN } from '@/lib/http'

const handler = (req: NextApiRequest, res: NextApiResponse<{ artnavList: ArtNavItem[]; selectkey: string }>) => {
  // res.status(200).json({
  //   // 首页nav配置数据
  //   artnavList: [
  //     {
  //       key: 1,
  //       label: '综合',
  //     },
  //     {
  //       key: 2,
  //       label: '关注',
  //     },
  //     {
  //       key: 3,
  //       label: '后端',
  //     },
  //     {
  //       key: 4,
  //       label: '前端',
  //     },
  //     {
  //       key: 5,
  //       label: 'Android',
  //     },
  //     {
  //       key: 6,
  //       label: 'ios',
  //     },
  //     {
  //       key: 7,
  //       label: '人工智能',
  //     },
  //     {
  //       key: 8,
  //       label: '开发工具',
  //     },
  //     {
  //       key: 9,
  //       label: '代码人生',
  //     },
  //     {
  //       key: 10,
  //       label: '阅读',
  //     },
  //   ],
  // })

  axios
    .get(`${CMSDOMAIN}/api/article-types`)
    .then((result) => {
      // 获取的数据
      // eslint-disable-next-line promise/always-return
      const { data } = result.data || {}
      // 按 level 排序
      data.sort((a: any, b: any) => {
        return a.attributes.level - b.attributes.level
      })
      // 数据处理
      const artnavList = data.map((item: any) => {
        return { key: item.id, label: item.attributes.type }
      })
      res.status(200).json({
        artnavList: artnavList,
        selectkey: 'recommended',
      })
    })
    .catch((error) => console.log(error))
}

export default handler
