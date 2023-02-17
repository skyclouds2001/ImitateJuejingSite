/**
 * 文章数据结构
 */
export interface Article {
  /** 文章作者 ID todo */
  author: string
  /** 文章评论 todo */
  comments: number[]
  /** 文章内容 */
  content: string
  /** 文章封面图片 | 可选 todo */
  cover: string | null
  /** 文章创建时间 */
  createdAt: string
  /** 文章发表时间 */
  createTime: string
  /** 文章摘要，可选 */
  digest: string
  /** 文章 ID */
  id: number
  /** 文章的标签 ID todo */
  labels: number[]
  /** 给文章点赞用户 ID todo */
  likeUsers: number[]
  /** 文章发布时间 */
  publishedAt: string
  /** 阅读数 */
  readCnt: number
  /** 文章标题 */
  title: string
  /** 文章分类tab todo */
  type: string
  /** 文章更新时间 */
  updatedAt: string
}
