/**
 * 图片数据结构
 */
interface Image {
  /** 图片文件后缀名 */
  ext: string
  /** 图片 hash 戳 */
  hash: string
  /** 图片高度 */
  height: number
  /** 图片MIME类型 */
  mime: string
  /** 图片名称 */
  name: string
  path: unknown
  /** 图片大小 */
  size: number
  /** 图片 URL */
  url: string
  /** 图片宽度 */
  width: number
}

export default Image
