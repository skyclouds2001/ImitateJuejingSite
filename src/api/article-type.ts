import useSWR from 'swr'
import { http } from '@/lib'
import type { Type, Pagination } from '@/models'

export const getArticleType = (): Promise<{ data: Array<OmitId<Type>>; meta: { pagination: Pagination } }> => {
  return http.get('/api/article-types?populate=*')
}

export const useArticleType = () => {
  return useSWR('/api/article-types?populate=*', getArticleType)
}
