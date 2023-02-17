import type { User } from './user'
import type { Cover } from './cover'
import type { Label } from './label'

/**
 * 文章数据结构
 */
export interface Article {
  /** 文章作者 */
  author: { data: OmitId<User> }
  /** 文章评论 ID todo */
  comments: number[]
  /** 文章内容 */
  content: string
  /** 文章封面图片 | 可选 */
  cover: { data: OmitId<Cover> } | null
  /** 文章创建时间 */
  createdAt: string
  /** 文章发表时间 */
  createTime: string
  /** 文章摘要 | 可选 */
  digest: string
  /** 文章 ID */
  id: number
  /** 文章的标签 */
  labels: { data: OmitId<Label>[] }
  /** 给文章点赞用户 ID todo */
  likeUsers: number[]
  /** 文章发布时间 */
  publishedAt: string
  /** 阅读数 */
  readCnt: number
  /** 文章标题 */
  title: string
  /** 文章分类 tab ID todo */
  type: string
  /** 文章更新时间 */
  updatedAt: string
}
