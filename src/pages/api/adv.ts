import type { NextApiRequest, NextApiResponse } from 'next'
import { CMSDOMAIN } from '@/lib/http'
import axios from 'axios'
import { AdvProps } from '@/interface/adv'

const handler = (req: NextApiRequest, res: NextApiResponse<{ advList: AdvProps }>) => {
  axios
    .get(`${CMSDOMAIN}/api/advertisements/?populate=*`)
    .then((result) => {
      // 获取的数据
      // eslint-disable-next-line promise/always-return
      const { data } = result.data || {}
      // 数据处理
      const advList = data.filter((item: any) => item.attributes.show)
      const advListshow = advList.map((item: any) => {
        if (item.attributes.show) return { key: item.id, title: item.attributes.title, show: item.attributes.show, src: CMSDOMAIN + item.attributes.cover.data.attributes.formats.thumbnail.url }
      })
      res.status(200).json({
        advList: advListshow,
      })
    })
    .catch((error) => console.log(error))
}

export default handler
