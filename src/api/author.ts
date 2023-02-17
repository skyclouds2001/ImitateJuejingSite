import useSWR from 'swr'
import { http } from '@/lib'
import type { User } from '@/models'

export const getAuthor = (): Promise<User[]> => {
  return http.get('/api/users?populate=*')
}

export const useAuthor = () => {
  return useSWR('/api/users?populate=*', getAuthor)
}
