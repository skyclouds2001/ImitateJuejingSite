/**
 * 工具接口
 *
 * 自数据结构生成id与详细信息分离的数据结构
 */
interface OmitId<T extends { id: number }> {
  id: T['id']
  attributes: Omit<T, 'id'>
}
