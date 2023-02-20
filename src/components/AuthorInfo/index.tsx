import instance from '@/lib/http'
import { useEffect } from 'react'
import Image from 'next/image'
import { EyeTwoTone, LikeTwoTone } from '@ant-design/icons'
import styles from './index.module.css'
// 作者相关信息接口
// interface article {}
// interface author {
//   id: number
//   username: string
//   job: string
//   likeUsers: object
//   readCnt: number
//   writeLevel: number
// }
const AuthorInfo = (props: any) => {
  // const data: author = {}
  // 一部分信息是通过props传递的，还有一部分需要另外获取
  // 通过传递的作者id获取作者的信息
  // useEffect(() => {
  //   instance(`/api/users/${data.id}`)
  // }, [])
  // useEffect(()=>{
  //   instance('/api/article/2')
  // },[])
  // useEffect(() => {
  //   instance
  //     .get('/api/articles/1?populate=*')
  //     .then((res) => {
  //       console.log(res)
  //     })
  //     .catch((e) => {
  //       console.log(e)
  //     })
  // })
  console.log(props)
  // http://localhost:8080/api/articles/1?populate[author][populate]=%2A
  const authorInfo = {
    imgUrl: 'https://p3-passport.byteimg.com/img/user-avatar/9eb2a75c3063dde89a8da01253c41386~100x100.awebp',
    username: '小松鼠',
    job: '前端开发工程狮',
    writeLevel: '4',
    readCnt: 320,
    likeCnt: 68,
  }

  return (
    <>
      <div className={styles.box}>
        {/* 作者信息头部 */}
        <a href="http:junjin.com" className={styles.head}>
          <div className={styles.avatar}>
            <img src={authorInfo.imgUrl} alt="头像" className={styles.pic} width="50" height="50" />
          </div>
          <div className={styles.intro}>
            <div className={styles.heads}>
              <p className={styles.name}>{authorInfo.username}</p>
              <p className={styles.levels}>
                {/* 这里的等级对应的是图片，先以默认图片代替 */}
                <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-5.d08789d.png" alt="等级" className={styles.avimg} width="35" height="16" />
              </p>
            </div>

            <p className={styles.posts}>{authorInfo.job}</p>
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
            <EyeTwoTone />
            <span className={styles.likes}>获得点赞</span>&nbsp;{authorInfo.likeCnt}
          </p>
          <p className={styles.read}>
            <LikeTwoTone />
            <span className={styles.reads}>文章被阅读</span>&nbsp;{authorInfo.readCnt}
          </p>
        </div>
      </div>
    </>
  )
}

export default AuthorInfo
