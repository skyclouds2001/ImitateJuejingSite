import type { NextApiRequest, NextApiResponse } from 'next'
import { NavItem } from '../../interface/nav'
import { CMSDOMAIN } from '@/lib/http'
import axios from 'axios'

const handler = (req: NextApiRequest, res: NextApiResponse<{ navList: NavItem[] }>) => {
  // res.status(200).json({
  //   // 首页nav配置数据
  //   navList: [
  //     {
  //       key: 1,
  //       label: '首页',
  //     },
  //     {
  //       key: 2,
  //       label: '沸点',
  //     },
  //     {
  //       key: 3,
  //       label: '课程',
  //     },
  //     {
  //       key: 4,
  //       label: '直播',
  //     },
  //     {
  //       key: 5,
  //       label: '活动',
  //     },
  //     {
  //       key: 6,
  //       label: '商场',
  //     },
  //     {
  //       key: 7,
  //       label: 'APP',
  //       remark: '邀请有礼',
  //     },
  //   ],
  // })
  axios
    .get(`${CMSDOMAIN}/api/top-tabs`)
    .then((result) => {
      // 获取的数据
      // eslint-disable-next-line promise/always-return
      const { data } = result.data || {}
      // 按key排序
      data.sort((a: any, b: any) => {
        return a.attributes.key - b.attributes.key
      })
      // 数据处理
      const navList = data.map((item: any) => {
        if (item.attributes.remark) return { key: item.id, label: item.attributes.label, remark: item.attributes.remark }
        else return { key: item.id, label: item.attributes.label }
      })
      res.status(200).json({
        navList: navList,
      })
    })
    .catch((error) => console.log(error))
}

export default handler
