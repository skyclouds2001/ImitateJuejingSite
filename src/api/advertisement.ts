import useSWR from 'swr'
import { http } from '@/lib'
import type { Advertisement, Pagination } from '@/models'

export const getAdvertisement = (): Promise<{ data: Array<OmitId<Advertisement>>; meta: { pagination: Pagination } }> => {
  return http.get('/api/advertisements?populate=*')
}

export const useAdvertisement = () => {
  return useSWR('/api/advertisements?populate=*', getAdvertisement)
}
