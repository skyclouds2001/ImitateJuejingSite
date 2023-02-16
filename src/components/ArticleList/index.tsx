import React, { useState } from 'react'
import Link from 'next/link'
import { useArticle } from '@/api'
import ArticleListItem from '@/components/ArticleListItem'
import styles from './index.module.scss'

const ArticleList: React.FC = () => {
  const { data } = useArticle()
  console.log(data)

  const [currentNav, setCurrentNav] = useState(1)

  return (
    <>
      <div className={styles.list}>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li className={`${styles.item} ${currentNav === 1 ? styles.active : ''}`}>
                <Link href="/">推荐</Link>
              </li>
              <li className={`${styles.item} ${currentNav === 2 ? styles.active : ''}`}>
                <Link href="/">最新</Link>
              </li>
              <li className={`${styles.item} ${currentNav === 3 ? styles.active : ''}`}>
                <Link href="/">热榜</Link>
              </li>
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
