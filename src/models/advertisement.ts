import type Cover from './cover'

export interface AdvItem {
  key: number
  title: string
  src: string
  show: boolean
}

export interface AdvProps {
  advList: AdvItem[]
}

/**
 * 广告数据结构
 */
interface Advertisement {
  id: number
  title: string
  cover: { data: OmitId<Cover> }
  /** 标签类型时间戳 */
  createdAt: string
  /** 标签类型时间戳 */
  publishedAt: string
  /** 标签类型时间戳 */
  updatedAt: string
}

export default Advertisement
