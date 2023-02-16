/**
 * 用户数据结构
 */
interface User {
  /** 用户 ID */
  id: number
  /** 用户名 */
  username: string
  /** 用户发表的所有文章 ID */
  articles: number[]
  /** 个人信息-职业 */
  job: string
  /** 个人信息-自我介绍 */
  description: string
  /** 个人信息-创作等级 */
  writerLevel: number
  /** 个人信息-掘友等级 */
  juejinLevel: number
  /** 作者热度榜的顺序 */
  heat: number
  /** 头像链接 */
  profile: string
  /** 获得所有徽章ID */
  badges: number[]
  /** 用户点赞过的评论 ID */
  comments: number[]
  /** 用户点赞过的文章 ID */
  likeArticles: number[]
  /** 用户点赞过的评论 ID */
  likeComments: number[]
}

export default User
