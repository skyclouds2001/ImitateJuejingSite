import React from 'react'
import Image from 'next/image'
import useSWR from 'swr'
import type { User } from '@/models'
import styles from './index.module.css'

const AuthorList: React.FC = () => {
  return (
    <>
      <div className={styles.list}>
        <header className={styles.header}>🎖️作者榜</header>
        <article className={styles.content}>
          <section className={styles.item}>
            <a href="/user/4406498333033918" target="_blank">
              <img className={styles.avatar} src="https://p3-passport.byteimg.com/img/user-avatar/ee5b3d33c959244bf7b70b28bb3a4d07~100x100.awebp" alt={'' /* todo */} loading="lazy" title="用户头像" />
              <div className={styles.userinfo}>
                <a href="/user/4406498333033918" target="_blank" className={styles.username}>
                  <span className={styles.name}>天行无忌</span>
                  <span className={styles.rank}>
                    <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-6.b69935b.png" alt={'' /* todo */} title="创作等级" />
                  </span>
                </a>
                <div className={styles.position}>全栈开发 @ DevPoint</div>
              </div>
            </a>
          </section>
        </article>
        <footer className={styles.footer}>
          <a href="/recommendation/authors/recommended" target="_blank">
            完整榜单
          </a>
        </footer>
      </div>
    </>
  )
}

export default AuthorList
