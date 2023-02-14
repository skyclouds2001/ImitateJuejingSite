import styles from './RelatedArticle.module.css'
const RelatedArticle = () => {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.title}>相关文章</div>
        <div className={styles.entry}>
          <a className={styles.item} href="http:/baidu.com">
            <div className={styles.itemtitle}>常用Git命令总结</div>
            <div className={styles.metabox}>
              <div className={styles.metalike}>128点赞</div>
              <div className={styles.space}>&nbsp;·&nbsp;</div>
              <div className={styles.metacomment}>23评论</div>
            </div>
          </a>
          <a className={styles.item} href="http:/baidu.com">
            <div className={styles.itemtitle}>常用Git命令总结</div>
            <div className={styles.metabox}>
              <div className={styles.metalike}>128点赞</div>
              <div className={styles.space}>&nbsp;·&nbsp;</div>
              <div className={styles.metacomment}>23评论</div>
            </div>
          </a>{' '}
          <a className={styles.item} href="http:/baidu.com">
            <div className={styles.itemtitle}>常用Git命令总结</div>
            <div className={styles.metabox}>
              <div className={styles.metalike}>128点赞</div>
              <div className={styles.space}>&nbsp;·&nbsp;</div>
              <div className={styles.metacomment}>23评论</div>
            </div>
          </a>{' '}
          <a className={styles.item} href="http:/baidu.com">
            <div className={styles.itemtitle}>常用Git命令总结</div>
            <div className={styles.metabox}>
              <div className={styles.metalike}>128点赞</div>
              <div className={styles.space}>&nbsp;·&nbsp;</div>
              <div className={styles.metacomment}>23评论</div>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}
export default RelatedArticle
