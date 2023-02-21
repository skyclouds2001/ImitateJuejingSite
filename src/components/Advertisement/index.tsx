import React, { MouseEventHandler } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CloseIcon from '@/assets/icon/close.png'
import { JUEJING_DOMAIN } from '@/config'
import type { Advertisement } from '@/models'
import { customNextImageLoader } from '@/util'
import styles from './index.module.css'

const AdvertisementBox: React.FC<{ advertisement: Advertisement }> = (props) => {
  const { advertisement: ad } = props

  /**
   * 关闭广告
   */
  const handlerCloseAd: MouseEventHandler<HTMLImageElement> = () => {
    const adv = document.getElementsByClassName(styles.banner)[0]
    if (adv) {
      adv.parentNode?.removeChild(adv)
    }
  }

  return (
    <>
      {/* 小册广告容器 */}
      <div className={styles.banner}>
        <Link className={styles.link} href={`${JUEJING_DOMAIN}/book/${ad.id}`} target="_blank" rel="noreferrer">
          {/* show 为 true 展示的广告  只会有一个 */}
          <Image src={ad.cover.data.attributes.url} alt={ad.title} loader={customNextImageLoader} loading="lazy" width={240} height={200}></Image>
        </Link>
        <div>
          {/* 关闭 */}
          <Image className={styles.close} src={CloseIcon} alt="关闭广告" width={16} height={16} onClick={handlerCloseAd}></Image>
          {/* 广告 */}
          <Link className={styles.advertise} href="https://bd.juejin.cn" target="_blank" rel="noreferrer">
            <span>投放</span>
            <span>广告</span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default AdvertisementBox
