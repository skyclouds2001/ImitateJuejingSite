import React, { useState, useEffect, type MouseEventHandler } from 'react'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { throttle } from 'lodash-es'
import { useArticleType } from '@/api'
import { changeArticleSelectKey, type AppDispatch, type RootState } from '@/store'
import { getArticleTypeKey } from '@/util'
import styles from './index.module.css'

const ArticleTab: React.FC = () => {
  const { data } = useArticleType()

  const dispatch = useDispatch<AppDispatch>()

  const selected = useSelector<RootState, RootState['article-tab']['select-key']>((state) => state['article-tab']['select-key'])

  /**
   * 切换 tab 事件
   *
   * @param e 鼠标点击事件
   */
  const handleChangeItem: MouseEventHandler<HTMLSpanElement> = (e) => {
    dispatch(changeArticleSelectKey((e.target as HTMLSpanElement)?.dataset?.key ?? 'recommended'))
  }

  const [isScroll, setScroll] = useState(false)

  /**
   * 监听浏览器滚动条位置方法
   *
   * @param e 鼠标滚动事件
   */
  const handleElementScroll = (e: WheelEvent) => {
    if (e.deltaY > 0 && document.body.scrollTop > 500) {
      setScroll(true)
    } else if (e.deltaY < 0) {
      setScroll(false)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    const fun = throttle(handleElementScroll, 100)

    document.body.addEventListener('wheel', fun)
    return () => {
      document.body.removeEventListener('wheel', fun)
    }
  }, [])

  return (
    <>
      {/* 文章分类导航栏 */}
      <div className={[styles.container, isScroll ? styles.scroll : ''].join(' ')}>
        <ul className={styles.list}>
          {/* 综合 */}
          <li key="recommended" className={styles.item}>
            <Link href={'/recommended'} target="_blank" className={selected === 'recommended' ? styles.select : ''} onClick={handleChangeItem}>
              <span data-key="recommended">综合</span>
            </Link>
          </li>
          {/* 关注 */}
          <li key="following" className={styles.item}>
            <Link href={'/following'} target="_blank" className={selected === 'following' ? styles.select : ''} onClick={handleChangeItem}>
              <span data-key="following">关注</span>
            </Link>
          </li>
          {/* ${item.label} */}
          {data?.data?.map((v) => {
            const key = getArticleTypeKey(v.id)
            return (
              <li key={key} className={styles.item}>
                <Link href={`/${key}`} target="_blank" className={selected === key ? styles.select : ''} onClick={handleChangeItem}>
                  <span data-key={key}>{v.attributes.type}</span>
                </Link>
              </li>
            )
          })}
          {/* 标签管理 */}
          {
            <li key="subscribed" className={styles.item}>
              <Link href={'/subscribe/subscribed'} target="_blank">
                标签管理
              </Link>
            </li>
          }
        </ul>
      </div>
    </>
  )
}

export default ArticleTab
