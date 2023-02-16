import useSWR from 'swr'
import instance from '@/lib/http'
import type { User } from '@/models'

export const getAuthor = (): Promise<User[]> => {
  return instance.get('/api/users?populate=*')
}

export const useAuthor = () => {
  return useSWR('/api/users?populate=*', getAuthor)
}
