import useSWR from 'swr'
import { http } from '@/lib'
import type { Tab, Pagination } from '@/models'

export const getTopTab = (): Promise<{ data: Array<OmitId<Tab>>; meta: { pagination: Pagination } }> => {
  return http.get('/api/top-tabs?populate=*')
}

export const useTopTab = () => {
  return useSWR('/api/top-tabs?populate=*', getTopTab)
}
