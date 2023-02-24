/**
 * 文章标签数据结构
 */
interface Label {
  /** 标签 ID */
  id: number
  /** 标签名称 */
  label: string
  /** 标签添加时间戳 */
  createdAt: string
  /** 标签更新时间戳 */
  publishedAt: string
  /** 标签更新时间戳 */
  updatedAt: string
}

export default Label
