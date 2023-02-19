const tabs = [
  {
    id: 1,
    path: '/',
    self: true,
  },
  {
    id: 2,
    path: 'https://juejin.cn/pins',
    self: true,
  },
  {
    id: 3,
    path: 'https://juejin.cn/course',
    self: true,
  },
  {
    id: 4,
    path: 'https://juejin.cn/live',
    self: true,
  },
  {
    id: 5,
    path: 'https://juejin.cn/events/all',
    self: true,
  },
  {
    id: 6,
    path: 'https://juejin.cn/challenge',
    self: true,
  },
  {
    id: 7,
    path: 'https://detail.youzan.com/show/goods/newest?kdt_id=104340304',
    self: false,
  },
  {
    id: 8,
    path: 'https://juejin.cn/app',
    self: false,
  },
  {
    id: 9,
    path: 'https://juejin.cn/extension',
    self: false,
  },
]

/**
 * 获取 TopTab path 方法
 *
 * @param id TopTab id
 * @returns TopTab path
 */
export const getTopTabPath = (id: number) => {
  return tabs.find((v) => v.id === id)?.path ?? '/'
}
