import { type ImageLoader } from 'next/image'
import { CMS_DOMAIN } from '@/config'

/**
 * 自定义 Next Image 组件 loader
 * 用于加载 CMS 系统的图片
 *
 * @param props 图片参数
 * @returns 图片 URL
 */
export const customNextImageLoader: ImageLoader = (props) => {
  return CMS_DOMAIN + props.src
}
