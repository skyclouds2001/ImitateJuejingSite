import React from 'react'
import Image from 'next/image'
import DownCodeImage from '../../../public/downcode.png'
import styles from './index.module.css'

const AppDownload: React.FC = () => {
  return (
    <>
      <div className={styles.download}>
        <a href="/app" target="_blank" className={styles.link}>
          <Image src={DownCodeImage} alt="下载稀土掘金" width={50}></Image>
          <div className={styles.text}>
            <p>下载稀土掘金</p>
            <p>一个帮助开发者成长的社区</p>
          </div>
        </a>
      </div>
    </>
  )
}

export default AppDownload
