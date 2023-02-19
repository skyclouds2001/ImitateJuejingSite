import React, { useState, type MouseEventHandler } from 'react'
import Link from 'next/link'
import { useArticle } from '@/api'
import ArticleListItem from '@/components/ArticleListItem'
import styles from './index.module.scss'

const ArticleList: React.FC = () => {
  const { data } = useArticle()

  /**
   * 当前活跃 Nav
   */
  const [currentNav, setCurrentNav] = useState(1)

  /**
   * 切换文章 Tab
   *
   * @param e 鼠标点击事件
   */
  const switchNav: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const { index } = (e.target as HTMLAnchorElement).dataset
    if (index) {
      setCurrentNav(parseInt(index))
    }
  }

  return (
    <>
      <div className={styles.list}>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li className={`${styles.item} ${currentNav === 1 ? styles.active : ''}`}>
                <Link href="/" data-index={1} onClick={switchNav}>
                  推荐
                </Link>
              </li>
              <li className={`${styles.item} ${currentNav === 2 ? styles.active : ''}`}>
                <Link href="/" data-index={2} onClick={switchNav}>
                  最新
                </Link>
              </li>
              <li className={`${styles.item} ${currentNav === 3 ? styles.active : ''}`}>
                <Link href="/" data-index={3} onClick={switchNav}>
                  热榜
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <article className={styles.container}>{data ? data.data.map((v) => <ArticleListItem key={v.id} article={Object.assign(v.attributes, { id: v.id })} />) : ''}</article>
      </div>
    </>
  )
}

export default ArticleList
