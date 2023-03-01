import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import showdown from 'showdown'
import dayjs from 'dayjs'
import MarkdownNavbar from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
import { useAdvertisement, useArticlePage } from '@/api'
import { CMS_DOMAIN } from '@/config'
import Advertisement from '@/components/Advertisement'
import RelatedArticle from '@/components/RelatedArticle'
import AuthorInfo from '@/components/AuthorInfo'
import styles from './article.module.css'

const ArticlePage: React.FC = () => {
  const router = useRouter()
  const { articleId } = router.query

  const { data } = useArticlePage(Number(articleId))
  const [html, sethtml] = useState('')

  const { data: ad } = useAdvertisement()

  useEffect(() => {
    const converter = new showdown.Converter()
    // 将图片 src 替换
    const html = converter.makeHtml(data?.content)?.replaceAll('<img src="', `<img src="${CMS_DOMAIN}`)
    sethtml(html)
  }, [data])

  return (
    <>
      <Head>
        <title>{data?.title} - 掘金</title>
        <meta name="description" content={data?.title} />
      </Head>
      <div className={styles.container}>
        <div className={styles.article}>
          {/* 文章标题 */}
          <h1 className={styles.title}>{data?.title}</h1>
          {/* 文章头部信息 */}
          <div className={styles.userinfo}>
            <span className={styles.username}>{data?.author.username}</span>
            <span className={styles.info}>
              {dayjs(data?.createtime).format('YYYY年MM月DD日 HH:mm')} . 阅读 {data?.readCnt}
            </span>
          </div>
          {/* 文章内容 */}
          <div dangerouslySetInnerHTML={{ __html: html }} className={styles.content} />
        </div>

        {/* 文章右侧内容框 */}
        <div className={styles.about}>
          <div className={styles.auth}>
            <AuthorInfo data={data}></AuthorInfo>
          </div>
          {/* 小册广告位 */}
          {ad?.data?.map((v) => (
            <Advertisement key={v.id} advertisement={Object.assign(v.attributes, { id: v.id })} />
          ))}
          <div className={styles.relate}>
            <RelatedArticle></RelatedArticle>
          </div>
          <div className={styles.directory}>
            <h3>目录</h3>
            <div className={styles.navigation}>
              <MarkdownNavbar source={data?.content} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ArticlePage
