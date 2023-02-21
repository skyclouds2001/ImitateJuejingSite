/**
 * 顶部 Tab 数据结构
 */
interface Tab {
  /** Tab ID */
  id: number
  /** Tab 名称 */
  label: string
  /** Tab 键值 */
  key: number
  /** Tab 标注 */
  remark: string | null
  /** Tab 添加时间戳 */
  createdAt: string
  /** Tab 发布时间戳 */
  publishedAt: string
  /** Tab 更新时间戳 */
  updatedAt: string
}

export default Tab
