import React, { useState, useEffect } from 'react'
import styles from './ArticleTab.module.css'
import { NavProps } from '../../interface/nav'
import Link from 'next/link'

const ArticleTab: React.FC<NavProps> = (props: NavProps) => {
  // 文章分类tab 配置数组
  const { navList } = props
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
  return (
    <>
      {/* 文章分类导航栏 */}
      <div id={styles.container} className={styles.artnavcontainer}>
        <ul className={styles.navul}>
          {navList?.map((item) => (
            <li key={item.key} className={item.key === 1 ? styles.selectli : ''}>
              <Link href={'/article/' + item.key}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default ArticleTab
