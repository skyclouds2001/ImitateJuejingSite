/**
 * 分页数据模型
 */
export interface Pagination {
  /** 当前页面 index */
  page: number
  /** 页面总数 */
  pageCount: number
  /** 页面容量 */
  pageSize: number
  /** 数据条目总数 */
  total: number
}
