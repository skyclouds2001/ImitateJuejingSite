import React from 'react'
import ArticleListItem from '@/components/ArticleListItem'
import styles from './index.module.scss'

const ArticleList: React.FC = () => {
  return (
    <>
      <div className={styles.list}>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li className={styles.item}>推荐</li>
              <li className={styles.item}>最新</li>
              <li className={styles.item}>热榜</li>
            </ul>
          </nav>
        </header>
        <article className={styles.container}>
          <ArticleListItem />
        </article>
      </div>
    </>
  )
}

export default ArticleList
