import lv2 from '@/assets/img/lv-2.png'
import lv3 from '@/assets/img/lv-3.png'
import lv4 from '@/assets/img/lv-4.png'
import lv5 from '@/assets/img/lv-5.png'
import lv6 from '@/assets/img/lv-6.png'
import lv7 from '@/assets/img/lv-7.png'

/**
 * 创作等级对应 Image 列表
 */
const lvs = [undefined, undefined, lv2, lv3, lv4, lv5, lv6, lv7]

/**
 * 获取创作等级对应 Image
 *
 * @param level 创作等级
 * @returns 创作等级对应 Image
 */
export const getAuthorWriterLevelImage = (level: number) => {
  return lvs.at(level)?.src ?? ''
}
