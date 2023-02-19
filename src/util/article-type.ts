const types = [
  {
    id: 1,
    type: '后端',
    key: 'backend',
  },
  {
    id: 2,
    type: '前端',
    key: 'frontend',
  },
  {
    id: 3,
    type: 'Android',
    key: 'android',
  },
  {
    id: 4,
    type: 'iOS',
    key: 'ios',
  },
  {
    id: 5,
    type: '人工智能',
    key: 'ai',
  },
  {
    id: 6,
    type: '开发工具',
    key: 'freebie',
  },
  {
    id: 7,
    type: '代码人生',
    key: 'career',
  },
  {
    id: 8,
    type: '阅读',
    key: 'article',
  },
]

/**
 * 获取 Article Type key 方法
 *
 * @param id ArticleType ID
 * @returns ArticleType Key
 */
export const getArticleTypeKey = (id: number) => {
  return types.find((v) => v.id === id)?.key ?? 'recommended'
}
