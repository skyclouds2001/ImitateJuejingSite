import React from 'react'
import Image from 'next/image'
import { useAuthor } from '@/api'
import { type User } from '@/models'
import { getAuthorWriterLevelImage } from '@/util'
import styles from './index.module.css'

const AuthorItem: React.FC<{ author: User }> = (props) => {
  const { author } = props

  return (
    <>
      <section className={styles.item}>
        <a href={`/user/${author.id}`} target="_blank" rel="noreferrer">
          <Image className={styles.avatar} src={author.profile} alt={`${author.username}的头像`} loading="lazy" title="用户头像" width={46} height={46} />
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

const AuthorList: React.FC = () => {
  const { data: authors } = useAuthor()

  return (
    <>
      <div className={styles.list}>
        <header className={styles.header}>🎖️作者榜</header>
        <article className={styles.content}>
          {authors?.map((v) => (
            <AuthorItem key={v.id} author={v} />
          ))}
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
