import instance from '@/lib/http'
import { useEffect } from 'react'
import Image from 'next/image'
import { EyeTwoTone, LikeTwoTone } from '@ant-design/icons'
import styles from './index.module.css'
// 作者相关信息接口
interface article {}
interface author {
  // readCnt: number
  // likeUsers: object
  // author: {
  //   username: string
  //   profile: object
  //   writeLevel: number
  // }
}
const AuthorInfo = (props: any) => {
  const data: author = {
    // id: 1,
    // title: 'aaa',
    // author: '小弟调调',
    // readCnt: 2300,
    // likeUsers: 100,
    // authorInfo: 'bbbb',
  }
  // 一部分信息是通过props传递的，还有一部分需要另外获取
  // 通过传递的作者id获取作者的信息
  // useEffect(() => {
  //   instance(`/api/users/${data.id}`)
  // }, [])
  // useEffect(()=>{
  //   instance('/api/article/2')
  // },[])
  return (
    <>
      <div className={styles.box}>
        {/* 作者信息头部 */}
        <a href="http:junjin.com" className={styles.head}>
          <div className={styles.avatar}>
            <Image src="https://p3-passport.byteimg.com/img/user-avatar/9eb2a75c3063dde89a8da01253c41386~100x100.awebp" alt="" className={styles.pic} width="50" height="50" />
          </div>
          <div className={styles.intro}>
            <div className={styles.heads}>
              <p className={styles.name}>小弟调调</p>
              <p className={styles.levels}>
                <Image src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-5.d08789d.png" alt="等级" className={styles.avimg} width="35" height="16" />
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
            <EyeTwoTone />
            <span className={styles.likes}>获得点赞</span>&nbsp;10,395
          </p>
          <p className={styles.read}>
            <LikeTwoTone />
            <span className={styles.reads}>文章被阅读</span>&nbsp;331,384
          </p>
        </div>
      </div>
    </>
  )
}

export default AuthorInfo
