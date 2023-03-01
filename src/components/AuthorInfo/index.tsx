import { useEffect, useState } from 'react'
import Image from 'next/image'
import { EyeTwoTone, LikeTwoTone } from '@ant-design/icons'
import { getAuthorInfo } from '@/api/author'
import { CMS_DOMAIN } from '@/config'
import { getAuthorWriterLevelImage } from '@/util/author'
import styles from './index.module.css'

const AuthorInfo = (props: any) => {
  const { data } = props
  const [authorInfo, setInfo] = useState({
    imgUrl: 'https://p3-passport.byteimg.com/img/user-avatar/9eb2a75c3063dde89a8da01253c41386~100x100.awebp',
    imgTitle: '图片',
    username: '小松鼠',
    job: '前端开发工程狮',
    writerLevel: '2',
    readCnt: 320,
    likeCnt: 68,
  })

  useEffect(() => {
    if (data) {
      const { author: authorData } = data
      getAuthorInfo(authorData.id)
        .then((res) => {
          setInfo({
            username: res.username,
            imgTitle: res.profile.name,
            imgUrl: `${CMS_DOMAIN}${res.profile.url}`,
            writerLevel: getAuthorWriterLevelImage(res.writerLevel),
            likeCnt: 68,
            readCnt: res.heat,
            job: res.job,
          })
          return null
        })
        .catch((err) => {})
    }
  }, [data])

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
