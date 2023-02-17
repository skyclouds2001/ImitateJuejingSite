import type Image from './image'

/**
 * 文章封面图数据结构
 */
interface Cover extends Omit<Image, 'path'> {
  alternativeText: unknown
  caption: unknown
  /** 头像添加时间戳 */
  createdAt: string
  /** 头像其他编码格式 */
  formats: Record<'small' | 'thumbnail' | 'medium' | 'large', Image>
  /** 头像 ID */
  id: number
  previewUrl: unknown
  /** 头像添加来源 */
  provider: string
  provider_metadata: unknown
  /** 头像更新时间戳 */
  updatedAt: string
}

export default Cover
