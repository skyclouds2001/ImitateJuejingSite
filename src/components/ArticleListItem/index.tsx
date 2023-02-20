import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import dayjs from 'dayjs'
import { JUEJING_DOMAIN } from '@/config'
import type { Article } from '@/models'
import { customNextImageLoader } from '@/util'
import styles from './index.module.scss'

const ArticleListItem: React.FC<{ article: Article }> = (props) => {
  const { article } = props

  return (
    <>
      <section className={styles.item}>
        <Link href={`/post/${article.id}`} target="_blank" rel="noreferrer">
          <div className={styles.meta}>
            <div className={styles.author}>
              <Link href={`${JUEJING_DOMAIN}/user/${article.author.data.id}`} target="_blank" rel="noreferrer">
                {article.author.data.attributes.username}
              </Link>
            </div>
            <div className={styles.date}>{dayjs(article.createTime).fromNow().replaceAll(' ', '')}</div>
            <div className={styles.tags}>
              {article.labels.data.map((v) => (
                <Link key={v.id} href={`${JUEJING_DOMAIN}/tag/${v.attributes.label}`} target="_blank" rel="noreferrer" className={styles.tag}>
                  {v.attributes.label}
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.main}>
              <div className={styles.title}>
                <Link href={`/post/${article.id}`} target="_blank" rel="noreferrer">
                  {article.title}
                </Link>
              </div>
              <div className={styles.desc}>
                <Link href={`/post/${article.id}`} target="_blank" rel="noreferrer">
                  {article.digest}
                </Link>
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
        </Link>
      </section>
    </>
  )
}

export default ArticleListItem
