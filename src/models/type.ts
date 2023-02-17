/**
 * 文章类型数据结构
 */
interface Type {
  /** 类型 ID */
  id: number
  /** 类型名称 */
  type: string
  /** 分类下文章数 */
  level: number
  /** 标签类型时间戳 */
  createdAt: string
  /** 标签类型时间戳 */
  publishedAt: string
  /** 标签类型时间戳 */
  updatedAt: string
}

export default Type
