import React, { useEffect, useState } from 'react'
import showdown from 'showdown'
import { useRouter } from 'next/router'
import { useArticlePage } from '@/api'
import styles from './article.module.css'
import dayjs from 'dayjs'
import { CMS_DOMAIN } from '@/config/index'
import RelatedArticle from '@/components/RelatedArticle'
import AuthorInfo from '@/components/AuthorInfo/index'
// markdown-navbar
import MarkdownNavbar from 'markdown-navbar'
// The default style of markdown-navbar should be imported additionally
import 'markdown-navbar/dist/navbar.css'
const ArticlePage = (props: any) => {
  const router = useRouter()
  const { articleId } = router.query

  const { data } = useArticlePage(Number(articleId))
  // console.log('当前Article页面获取到的数据为', data)
  const [html, sethtml] = useState('')

  useEffect(() => {
    const converter = new showdown.Converter()
    // 将图片 src 替换
    const html = converter.makeHtml(data?.content)?.replaceAll('<img src="', `<img src="${CMS_DOMAIN}`)
    sethtml(html)
  }, [data])

  return (
    <>
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
