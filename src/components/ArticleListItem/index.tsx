import React from 'react'
import Image from 'next/image'
import dayjs from 'dayjs'
import type { Article } from '@/models'
import { customNextImageLoader } from '@/util'
import styles from './index.module.scss'

const ArticleListItem: React.FC<{ article: Article }> = (props) => {
  const { article } = props

  return (
    <>
      <section className={styles.item}>
        <div className={styles.meta}>
          <div className={styles.author}>{article.author.data.attributes.username}</div>
          <div className={styles.date}>{dayjs(article.createTime).fromNow().replaceAll(' ', '')}</div>
          <div className={styles.tags}>
            {article.labels.data.map((v) => (
              <a key={v.id} href={`/tag/${v.attributes.label}`} target="_blank" rel="noreferrer" className={styles.tag}>
                {v.attributes.label}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.main}>
            <div className={styles.title}>
              <a href={`/post/${article.id}`} target="_blank" rel="noreferrer">
                {article.title}
              </a>
            </div>
            <div className={styles.desc}>
              <a href={`/post/${article.id}`} target="_blank" rel="noreferrer">
                {article.digest}
              </a>
            </div>
            <ul className={styles.actions}>
              <li className={[styles.action, styles.view].join(' ')}>
                <i></i>
                <span>{article.readCnt}</span>
              </li>
              <li className={[styles.action, styles.like].join(' ')}>
                <i></i>
                <span>{article.likeUsers.data.length}</span>
              </li>
              <li className={[styles.action, styles.comment].join(' ')}>
                <i></i>
                <span>{article.comments.data.length}</span>
              </li>
            </ul>
          </div>
          {article.cover?.data?.attributes.url ? <Image className={styles.img} src={article.cover.data.attributes.url} loader={customNextImageLoader} alt={article.title} loading="lazy" width={120} height={80} /> : ''}
        </div>
        <div className={styles.dislike}></div>
      </section>
    </>
  )
}

export default ArticleListItem
