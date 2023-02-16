/**
 * 文章数据结构
 */
interface Article {
  /** 文章标题 */
  title: string
  /** 文章作者ID */
  author: string
  /** 文章分类tab的ID */
  labels: string[]
  /** 文章摘要，可选 */
  digest: string
  /** 文章内容 */
  content: string
  /** 文章发表时间 */
  createTime: string
  /** 阅读数 */
  readCnt: number
  /** 文章封面图片 | 可选 */
  cover?: string
  /** 文章评论 */
  comments: number[]
}

export default Article
