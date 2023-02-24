import instance from '@/lib/http'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { EyeTwoTone, LikeTwoTone } from '@ant-design/icons'
import styles from './index.module.css'
import { getAuthorInfo } from '@/api/author'
const AuthorInfo = (props: any) => {
  console.log('当前是AuthorInfo组件', props)
  const [authorInfo, setInfo] = useState({
    imgUrl: 'https://p3-passport.byteimg.com/img/user-avatar/9eb2a75c3063dde89a8da01253c41386~100x100.awebp',
    imgTitle: '图片',
    username: '小松鼠',
    job: '前端开发工程狮',
    writerLevel: '2',
    readCnt: 320,
    likeCnt: 68,
  })
  // useEffect(() => {
  //   const { authorId, likeCnt, readCnt } = props.data
  //   // let authorId = 2
  //   // let readCnt = 3
  //   // let likeCnt = 10

  //   getAuthorInfo(authorId).then((res: any) => {
  //     setInfo({
  //       imgUrl: res.profile.url,
  //       imgTitle: res.profile.name,
  //       username: res.username,
  //       job: res.job,
  //       writerLevel: getLevelImg(res.writerLevel),
  //       readCnt: readCnt,
  //       likeCnt: likeCnt,
  //     })
  //   })
  // }, [])
  // 获取对应头像的函数
  const getLevelImg = (writerLevel: number) => {
    switch (writerLevel) {
      case 1:
      case 2:
        return require('../../assets/img/lv-2.png')
      case 3:
        return require('../../assets/img/lv-3.png')
      case 4:
        return require('../../assets/img/lv-4.png')
      case 5:
        return require('../../assets/img/lv-5.png')
      case 6:
        return require('../../assets/img/lv-6.png')
      case 7:
        return require('../../assets/img/lv-7.png')
      default:
        return require('../../assets/img/lv-2.png')
    }
  }
  // console.log(authorInfo)
  return (
    <>
      <div className={styles.box}>
        {/* 作者信息头部 */}
        <a href="http:junjin.com" className={styles.head}>
          <div className={styles.avatar}>
            <img src={authorInfo.imgUrl} alt="头像" className={styles.pic} title={authorInfo.imgTitle} width="50" height="50" />
          </div>
          <div className={styles.intro}>
            <div className={styles.heads}>
              <p className={styles.name}>{authorInfo.username}</p>
              <p className={styles.levels}>
                {/* 这里的等级对应的是图片，先以默认图片代替 */}
                <img src={authorInfo.writerLevel} alt="等级" className={styles.avimg} width="35" height="16" />
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
