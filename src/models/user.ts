/**
 * 用户数据结构
 */
interface User {
  /** 用户名 */
  username: string
  /** 用户发表的所有文章ID */
  articles: string[]
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
  badges: string[]
}

export default User
