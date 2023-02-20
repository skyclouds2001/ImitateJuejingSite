import React from 'react'
import { useAuthor } from '@/api'
import AuthorItem from '@/components/AuthorListItem'
import styles from './index.module.scss'

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
