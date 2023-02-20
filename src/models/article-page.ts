/**
 * 文章详情页数据结构
 */
interface ArticlePage {
  // 文章标题
  title: string
  // 作者信息
  author: {
    // 头像
    avatar: string
    // 姓名
    username: string
    // 等级
    level: string
  }
  // 文章创建时间
  createtime: string
  // 文章阅读数量
  readCnt: number
  // 文章内容
  content: string
}

export default ArticlePage
