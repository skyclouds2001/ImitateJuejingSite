import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { useArticleType } from '@/api'
import { changeArticleselectkey, type AppDispatch, type RootState } from '@/store'
import styles from './index.module.css'

const ArticleTab: React.FC = () => {
  const { data } = useArticleType()

  const dispatch = useDispatch<AppDispatch>()

  const selected = useSelector<RootState, RootState['articletab']['selectkey']>((state) => state.articletab.selectkey)
  console.log(selected)

  // 浏览器滚动条位置
  const [SliderHeight, setSliderHeight] = useState(0)

  // 更新浏览器滚动条位置函数
  const sliderHeightUpdate: any = (e: any) => {
    setSliderHeight(e.target.scrollTop)
    const artnav = document.querySelector(`#${styles.container}`)
    if (artnav && e.target.scrollTop >= 290) artnav.className = styles.artnavcontainerscroll
    else if (artnav) artnav.className = styles.container
  }

  useEffect(() => {
    // 获取滚动元素
    const scrollEle = document.getElementById('scrollDom') || document.body
    scrollEle.addEventListener('scroll', sliderHeightUpdate)
    return () => {
      // 组件销毁时移除监听事件
      scrollEle.removeEventListener('scroll', sliderHeightUpdate)
    }
  }, [])

  // 点击 tab
  const handleChangeItem = (e: any) => {
    dispatch(changeArticleselectkey(String(e.target.dataset.key)))
    console.log(e.target.dataset.key)
  }

  return (
    <>
      {/* 文章分类导航栏 */}
      <div className={styles.container}>
        <ul className={styles.list}>
          {/* 综合 */}
          <li key="recommended" className={styles.item}>
            <button onClick={handleChangeItem} data-key="recommended" className={selected === 'recommended' ? styles.select : ''}>
              <Link href={'/recommended'} target="_blank">
                综合
              </Link>
            </button>
          </li>
          {/* 关注 */}
          <li key="following" className={styles.item}>
            <button onClick={handleChangeItem} data-key="following" className={selected === 'following' ? styles.select : ''}>
              <Link href={'/following'} target="_blank">
                关注
              </Link>
            </button>
          </li>
          {/* ${item.label} */}
          {data?.data.map((v) => (
            <li key={v.id} className={styles.item}>
              <button onClick={handleChangeItem} data-key={v.id} className={selected === String(v.id) ? styles.select : ''}>
                <Link href={`/${v.id}`} target="_blank">
                  {v.attributes.type}
                </Link>
              </button>
            </li>
          ))}
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
