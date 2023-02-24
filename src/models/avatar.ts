import type Image from './image'

/**
 * 用户头像数据结构
 */
interface Avatar extends Omit<Image, 'path'> {
  alternativeText: unknown
  caption: unknown
  /** 头像添加时间戳 */
  createdAt: string
  /** 头像其他编码格式 */
  formats: Record<'small' | 'thumbnail', Image>
  /** 头像 ID */
  id: number
  previewUrl: unknown
  /** 头像添加来源 */
  provider: string
  provider_metadata: unknown
  /** 头像更新时间戳 */
  updatedAt: string
}

export default Avatar
