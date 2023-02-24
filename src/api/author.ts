import useSWR from 'swr'
import { http } from '@/lib'
import type { User } from '@/models'

export const getAuthor = (): Promise<User[]> => {
  return http.get('/api/users?populate=*')
}

export const useAuthor = () => {
  return useSWR('/api/users?populate=*', getAuthor)
}
// 作者详情组件信息接口
export const getAuthorInfo = (authorId = 2) => {
  return http.get(`/api/users/${authorId}?populate=*`)
}
