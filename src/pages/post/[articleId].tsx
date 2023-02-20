import React, { useEffect, useState } from 'react'
import showdown from 'showdown'
import { useRouter } from 'next/router'
import { useArticlePage } from '@/api'
import styles from './article.module.css'
import dayjs from 'dayjs'
import { CMS_DOMAIN } from '@/config/index'
import RelatedArticle from '@/components/RelatedArticle'
import AuthorInfo from '@/components/AuthorInfo/index'
const ArticlePage = (props: any) => {
  const router = useRouter()
  const { articleId } = router.query
  const { data } = useArticlePage(Number(articleId))
  const [html, sethtml] = useState('')

  useEffect(() => {
    const converter = new showdown.Converter()
    // 将图片 src 替换
    const html = converter.makeHtml(data?.content)?.replaceAll('<img src="', `<img src="${CMS_DOMAIN}`)
    sethtml(html)
  }, [data])
  return (
    <>
      <div className={styles.article}>
        <h1 className={styles.title}>{data?.title}</h1>
        <div className={styles.userinfo}>
          <span className={styles.username}>{data?.author.username}</span>
          <span className={styles.info}>
            {dayjs(data?.createtime).format('YYYY年MM月DD日 HH:mm')} . 阅读 {data?.readCnt}
          </span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} className={styles.content} />
      </div>
      <AuthorInfo></AuthorInfo>
      <RelatedArticle></RelatedArticle>
    </>
  )
}

export default ArticlePage
