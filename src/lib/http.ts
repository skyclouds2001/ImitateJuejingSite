import axios from 'axios'
import { CMS_DOMAIN } from '@/config'

const instance = axios.create({
  baseURL: CMS_DOMAIN,
  timeout: 10 * 1000,
  withCredentials: true,
})

instance.interceptors.request.use(
  (config) => config,
  (error) => error
)

instance.interceptors.response.use(
  (result) => result.data,
  (error) => error
)

export default instance
// cms地址
export const CMSDOMAIN = 'http://127.0.0.1:8080'
