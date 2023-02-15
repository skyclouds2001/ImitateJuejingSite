import React, { useState, useEffect } from 'react'
import styles from './ArticleTab.module.css'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store/index'
import { useDispatch } from 'react-redux'
import { changeArticleselectkey } from '@/store'

const ArticleTab: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  // 文章分类tab 配置数组
  // const navList = props.artnavList
  const navList = useSelector<RootState, RootState['articletab']['artnavList']>((state) => state.articletab.artnavList)
  const navselect = useSelector<RootState, RootState['articletab']['selectkey']>((state) => state.articletab.selectkey)
  // 浏览器滚动条位置
  const [SliderHeight, setSliderHeight] = useState<number>(0)
  // 更新浏览器滚动条位置函数
  const sliderHeightUpdate: any = (e: any) => {
    setSliderHeight(e.target.scrollTop)
    const artnav = document.querySelector(`#${styles.container}`)
    if (artnav && e.target.scrollTop >= 290) artnav.className = styles.artnavcontainerscroll
    else if (artnav) artnav.className = styles.artnavcontainer
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
      <div id={styles.container} className={styles.artnavcontainer}>
        <ul className={styles.navul}>
          <li key="recommended">
            <button onClick={handleChangeItem} data-key="recommended" className={navselect === 'recommended' ? styles.selectli : ''}>
              <Link href={'/article/recommended'}>综合</Link>
              {/* 综合 */}
            </button>
          </li>
          <li key="following">
            <button onClick={handleChangeItem} data-key="following" className={navselect === 'following' ? styles.selectli : ''}>
              <Link href={'/article/following'}>关注</Link>
              {/* 关注 */}
            </button>
          </li>
          {navList?.map((item) => (
            <li key={item.key}>
              <button onClick={handleChangeItem} data-key={item.key} className={navselect === String(item.key) ? styles.selectli : ''}>
                <Link href={'/article/' + item.key}>{item.label}</Link>
                {/* {item.label} */}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default ArticleTab
