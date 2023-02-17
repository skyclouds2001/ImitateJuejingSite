import useSWR from 'swr'
import instance from '@/lib/http'
import type { Article, Pagination } from '@/models'

export const getArticle = (): Promise<{ data: Array<OmitId<Article>>; meta: { pagination: Pagination } }> => {
  return instance.get('/api/articles?populate=*')
}

export const useArticle = () => {
  return useSWR('/api/articles?populate=*', getArticle)
}
