import React from 'react'
import Image from 'next/image'
import type { User } from '@/models'
import { getAuthorWriterLevelImage, customNextImageLoader } from '@/util'
import styles from './index.module.scss'

const AuthorItem: React.FC<{ author: User }> = (props) => {
  const { author } = props

  return (
    <>
      <section>
        <a className={styles.item} href={`/user/${author.id}`} target="_blank" rel="noreferrer">
          <Image className={styles.avatar} src={author.profile.url} loader={customNextImageLoader} alt={`${author.username}的头像`} loading="lazy" title="用户头像" width={46} height={46} />
          <div className={styles.userinfo}>
            <a href={`/user/${author.id}`} target="_blank" rel="noreferrer" className={styles.username}>
              <span className={styles.name}>{author.username}</span>
              <span className={styles.rank}>
                <Image src={getAuthorWriterLevelImage(author.writerLevel)} alt={`lv-${author.writerLevel}`} title="创作等级" width={35} height={16} />
              </span>
            </a>
            <div className={styles.position}>全栈开发 @ DevPoint</div>
          </div>
        </a>
      </section>
    </>
  )
}

export default AuthorItem
