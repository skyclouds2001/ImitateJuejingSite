import styles from './index.module.css'
interface relatedArticleType {
  title: string
  likeCount: number
  commentCount: number
  link: string
}
const RelatedArticle = () => {
  const relatedArticleList: Array<relatedArticleType> = [
    {
      title: '常用Git命令总结',
      link: 'http://baidu.com',
      likeCount: 300,
      commentCount: 20,
    },
    {
      title: 'Git常用命令',
      link: 'http://baidu.com',
      likeCount: 120,
      commentCount: 20,
    },
    {
      title: '本人自用Git',
      link: 'http://baidu.com',
      likeCount: 420,
      commentCount: 14,
    },
    {
      title: '你要的Git来了',
      link: 'http://baidu.com',
      likeCount: 236,
      commentCount: 54,
    },
  ]
  return (
    <>
      <div className={styles.box}>
        <div className={styles.title}>相关文章</div>
        <div className={styles.entry}>
          {relatedArticleList.map((item, index) => {
            return (
              <a className={styles.item} href={item.link} key={'artie' + index}>
                <div className={styles.itemtitle}>{item.title}</div>
                <div className={styles.metabox}>
                  <div className={styles.metalike}>{item.likeCount}点赞</div>
                  <div className={styles.space}>&nbsp;·&nbsp;</div>
                  <div className={styles.metacomment}>{item.commentCount}评论</div>
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
