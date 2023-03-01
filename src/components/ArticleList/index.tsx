import React, { useState, useEffect, type MouseEventHandler } from 'react'
import Link from 'next/link'
import { useArticle } from '@/api'
import ArticleListItem from '@/components/ArticleListItem'
import type { Article } from '@/models'
import styles from './index.module.scss'

const ArticleList: React.FC = () => {
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

  const { data } = useArticle()

  const [articles, setArticles] = useState<OmitId<Article>[]>([])

  useEffect(() => {
    let d = [...(data?.data ?? [])]
    switch (currentNav) {
      case 1:
        d = d?.sort?.((u, v) => u.id - v.id)
        break
      case 2:
        d = d?.sort?.((u, v) => new Date(v.attributes.createTime).getTime() - new Date(u.attributes.createTime).getTime())
        break
      case 3:
        d = d?.sort?.((u, v) => u.attributes.likeUsers.data.length - v.attributes.likeUsers.data.length)
        break
    }
    setArticles(d ?? [])
  }, [data, currentNav])

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
        <article className={styles.container}>
          {articles?.map?.((v) => (
            <ArticleListItem key={v.id} article={Object.assign(v.attributes, { id: v.id })} />
          ))}
        </article>
      </div>
    </>
  )
}

export default ArticleList
