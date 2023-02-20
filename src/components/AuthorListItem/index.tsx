import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { JUEJING_DOMAIN } from '@/config'
import type { User } from '@/models'
import { getAuthorWriterLevelImage, customNextImageLoader } from '@/util'
import styles from './index.module.scss'

const AuthorItem: React.FC<{ author: User }> = (props) => {
  const { author } = props

  return (
    <>
      <section>
        <Link className={styles.item} href={`${JUEJING_DOMAIN}/user/${author.id}`} target="_blank" rel="noreferrer">
          <Image className={styles.avatar} src={author.profile.url} loader={customNextImageLoader} alt={`${author.username}的头像`} loading="lazy" title="用户头像" width={46} height={46} />
          <div className={styles.userinfo}>
            <span className={styles.username}>
              <span className={styles.name}>{author.username}</span>
              <span className={styles.rank}>
                <Image src={getAuthorWriterLevelImage(author.writerLevel)} alt={`lv-${author.writerLevel}`} title="创作等级" width={35} height={16} />
              </span>
            </span>
            <div className={styles.position}>全栈开发 @ DevPoint</div>
          </div>
        </Link>
      </section>
    </>
  )
}

export default AuthorItem
