import useSWR from 'swr'
import instance from '@/lib/http'
import type { Article } from '@/models'

export const getArticle = (): Promise<Article[]> => {
  return instance.get('/api/articles?populate=*')
}

export const useArticle = () => {
  return useSWR('/api/articles?populate=*', getArticle)
}
