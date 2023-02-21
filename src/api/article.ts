import useSWR from 'swr'
import { http } from '@/lib'
import type { Article, Pagination } from '@/models'

export const getArticle = (): Promise<{ data: Array<OmitId<Article>>; meta: { pagination: Pagination } }> => {
  return http.get('/api/articles?populate=*')
}

export const useArticle = () => {
  return useSWR('/api/articles?populate=*', getArticle)
}
