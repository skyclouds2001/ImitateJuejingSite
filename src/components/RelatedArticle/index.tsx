import { useEffect, useState } from 'react'
import styles from './index.module.css'
import instance from '@/lib/http'
// interface relatedArticleType {
//   title: string
//   likeUsers: Array<any>
//   comments: Array<any>
//   link: string
// }
// 组件接收一个typeId
const RelatedArticle = (props: any) => {
  const number = 1
  const relatedArticleList: any = [
    {
      title: 'Git常用',
      likeUsers: [34, 2, 5, 3, 56, 3, 23, 32, 3],
      comments: ['34', '34', 65, 76, 34, 12],
      link: 'http://baidu.com',
    },
    {
      title: 'Git常用',
      likeUsers: [34, 2, 5, 3, 56, 3, 23, 32, 3],
      comments: ['34', '34', 65, 76, 34, 12],
      link: 'http://baidu.com',
    },
    {
      title: 'Git常用',
      likeUsers: [34, 2, 5, 3, 56, 3, 23, 32, 3],
      comments: ['34', '34', 65, 76, 34, 12],
      link: 'http://baidu.com',
    },
  ]
  // useEffect(() => {
  //   instance('/api/article-labels/2?populate[articles][populate]=%2A')
  //     .then((res) => {
  //       relatedArticleList = res.data.data.attributes.articles.data

  //     })
  //     .catch((e) => {
  //       console.log(e)
  //     })
  // }, [])

  return (
    <>
      <div className={styles.box}>
        <div className={styles.title}>相关文章</div>
        <div className={styles.entry}>
          {relatedArticleList.map((item: any, index: number) => {
            return (
              <a className={styles.item} href={'/api/articles/' + item.id} key={'artie' + index}>
                <div className={styles.itemtitle}>{item.title}</div>
                <div className={styles.metabox}>
                  <div className={styles.metalike}>{item.likeUsers?.length ?? 20}点赞</div>
                  <div className={styles.space}>&nbsp;·&nbsp;</div>
                  <div className={styles.metacomment}>{item.comments?.length ?? 3}评论</div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default RelatedArticle
