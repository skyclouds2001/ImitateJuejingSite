import React from 'react'
import Image from 'next/image'
import type { User } from '@/models'
import styles from './index.module.css'

interface AuthorListProps {
  authors: User[]
}

const AuthorList: React.FC<AuthorListProps> = (props) => {
  return (
    <>
      <div className={styles.authorList}>
        <header className={styles.authorHeader}>🎖️作者榜</header>
        <article className={styles.authorContent}>
          <section className={styles.authorItem}>
            <Image className={styles.authorAvatar} src="https://p3-passport.byteimg.com/img/user-avatar/ee5b3d33c959244bf7b70b28bb3a4d07~100x100.awebp" alt={'' /* todo */} loading="lazy" title="用户头像" />
            <a href="/user/4406498333033918" target="_blank" className={styles.authorUserinfo}>
              <div className={styles.authorUsername}>
                <span className={styles.authorName}>天行无忌</span>
                <span className={styles.authorRank}>
                  <Image src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-6.b69935b.png" alt={'' /* todo */} title="创作等级" />
                </span>
              </div>
              <div className={styles.authorPosition}>全栈开发 @ DevPoint</div>
            </a>
          </section>
        </article>
        <footer className={styles.authorFooter}>完整榜单 todo</footer>
      </div>
    </>
  )
}

export default AuthorList
