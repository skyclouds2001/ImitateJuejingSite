/**
 * 用户数据结构
 */
export interface User {
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
  /** 用户头像 */
  profile: Avatar
  /** 获得所有徽章 ID */
  badges: number[]
  /** 用户点赞过的评论 ID */
  comments: number[]
  /** 用户点赞过的文章 ID */
  likeArticles: number[]
  /** 用户点赞过的评论 ID */
  likeComments: number[]
}

/**
 * 用户头像数据结构
 */
export interface Avatar extends Omit<Image, 'path'> {
  alternativeText: unknown
  caption: unknown
  /** 图片添加时间戳 */
  createdAt: string
  /** 其他编码格式图片 */
  formats: Record<'small' | 'thumbnail', Image>
  /** 图片 ID */
  id: number
  previewUrl: unknown
  /** 图片添加来源 */
  provider: string
  provider_metadata: unknown
  /** 图片更新时间戳 */
  updatedAt: string
}

/**
 * 图片数据结构
 */
export interface Image {
  /** 图片文件后缀名 */
  ext: string
  /** 图片 hash 戳 */
  hash: string
  /** 图片高度 */
  height: number
  /** 图片MIME类型 */
  mime: string
  /** 图片名称 */
  name: string
  path: unknown
  /** 图片大小 */
  size: number
  /** 图片 URL */
  url: string
  /** 图片宽度 */
  width: number
}
