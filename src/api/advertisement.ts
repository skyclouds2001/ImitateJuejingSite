import useSWR from 'swr'
import { http } from '@/lib'

export const getAdvertisement = (): Promise<unknown> => {
  return http.get('/api/advertisements?populate=*')
}

export const useAdvertisement = () => {
  return useSWR('/api/advertisements?populate=*', getAdvertisement)
}
