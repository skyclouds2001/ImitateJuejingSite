import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import QrCode from '@/assets/img/qrcode.png'
import { JUEJING_DOMAIN } from '@/config'
import styles from './index.module.css'

const AppDownload: React.FC = () => {
  return (
    <>
      <div className={styles.download}>
        <Link href={`${JUEJING_DOMAIN}/app`} target="_blank" rel="noreferrer" className={styles.link}>
          <Image src={QrCode} alt="下载稀土掘金" width={50} height={50}></Image>
          <div className={styles.text}>
            <p className={styles.title}>下载稀土掘金</p>
            <p className={styles.desc}>一个帮助开发者成长的社区</p>
          </div>
        </Link>
      </div>
    </>
  )
}

export default AppDownload
