import instance from '@/lib/http'
import { useEffect } from 'react'
import { EyeFilled, LikeFilled } from '@ant-design/icons'
import styles from './ArticleInfo.module.css'
const ArticleInfo = () => {
  // useEffect(() => {
  //   instance.get('/api/top-tabs').then((res) => {
  //     console.log(res)
  //   })
  // })
  return (
    <>
      <h2>我是作者信息相关组件</h2>
      <div className={styles.box}>
        {/* 作者信息头部 */}
        <a href="http:junjin.com" className={styles.head}>
          <div className={styles.avatar}>
            <img src="https://p3-passport.byteimg.com/img/user-avatar/9eb2a75c3063dde89a8da01253c41386~100x100.awebp" alt="" className={styles.pic} width="50" height="50" />
          </div>
          <div className={styles.intro}>
            <div className={styles.heads}>
              <p className={styles.name}>小弟调调</p>
              <p className={styles.levels}>
                <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-5.d08789d.png" alt="等级" className={styles.avimg} width="35" height="16" />
              </p>
            </div>

            <p className={styles.posts}>杂役</p>
          </div>
        </a>
        {/* 关注 点赞 */}
        <div className={styles.opera}>
          <button className={styles.attention}>关注</button>
          <button className={styles.tell}>私信</button>
        </div>
        <hr />
        {/* 获得点赞，文章被阅读 */}
        <div className={styles.info}>
          <p className={styles.like}>
            <EyeFilled />
            <span className={styles.likes}>获得点赞</span>&nbsp;10,395
          </p>
          <p className={styles.read}>
            <LikeFilled />
            <span className={styles.reads}>文章被阅读</span>&nbsp;331,384
          </p>
        </div>
      </div>
    </>
  )
}

export default ArticleInfo
