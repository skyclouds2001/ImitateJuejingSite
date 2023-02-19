import React, { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CaretDownOutlined } from '@ant-design/icons'
import { useTopTab } from '@/api'
import logo from '@/assets/img/logo-pc.svg'
import { ThemeContext } from '../ThemeContext/ThemeContext'
import { getTopTabPath } from '@/util'
import styles from './index.module.css'

const TopTab: React.FC = () => {
  const { data: tabs } = useTopTab()

  // 主题 theme
  const { theme, setTheme } = useContext(ThemeContext)

  /*
  // 浏览器窗口宽度
  const [Browsewidth, setBrowsWidth] = useState<number>(1400)
  // 浏览器窗口高度
  const [SliderHeight, setSliderHeight] = useState<number>(0)
  // 更新浏览器窗口宽度函数
  const browsewidthUpdate: any = (e: any) => {
    setBrowsWidth(e.target.innerWidth)
    const logotext = document.querySelector(`.${styles.logo} span`)
    if (logotext && e.target.innerWidth <= 600) logotext.className = styles.hidden
    else if (logotext) logotext.className = ''
  }
  // 更新浏览器滚动条位置函数
  const sliderHeightUpdate: any = (e: any) => {
    setSliderHeight(e.target.scrollTop)
    const top = document.querySelector('#' + styles.toptabcontainer)
    if (top && e.target.scrollTop >= 500) top.className = styles.toptabcontainersroll
    else if (top) top.className = styles.toptabcontainerfirst
  }
  useEffect(() => {
    // 获取滚动元素
    const scrollEle = document.getElementById('scrollDom') || document.body
    window.addEventListener('resize', browsewidthUpdate)
    scrollEle.addEventListener('scroll', sliderHeightUpdate)
    return () => {
      // 组件销毁时移除监听事件
      window.removeEventListener('resize', browsewidthUpdate)
      scrollEle.removeEventListener('scroll', sliderHeightUpdate)
    }
  }, [])
   */

  // nav栏较窄的下拉框点击事件
  const handleDropdown = () => {
    const nav = document.querySelector('.' + styles.narrower + ' ul')
    if (nav) {
      if (nav.className == styles.dropdown) nav.className = styles.hidden
      else nav.className = styles.dropdown
    }
  }

  /**
   * 明暗主题切换按钮点击事件
   */
  const handleThemeChange = () => {
    console.log(theme)
    if (localStorage.getItem('theme') === 'dark') {
      setTheme('light')
      document.body.style.backgroundColor = '#F4F5F5'
    } else {
      setTheme('dark')
      document.body.style.backgroundColor = '#121212'
    }
  }

  return (
    <>
      {/* 顶部tab */}
      <header className={styles.container}>
        <div className={styles.visible}>
          <div>
            {/* 稀土掘金logo区域 */}
            <Link className={styles.logo} href="/" target="_self">
              <Image src={logo} alt="稀土掘金" width={107}></Image>
            </Link>

            {/* 导航栏 */}
            <div className={styles.nav}>
              {/* 页面足够宽-nav导航栏 */}
              <div className={styles.wider}>
                <ul className={styles.list}>
                  {tabs?.data?.map((v) => (
                    <li className={styles.item} key={v.attributes.key}>
                      <a href={getTopTabPath(v.id)} className={v.attributes.key === 0 ? styles.selected : ''}>
                        {v.attributes.label}
                      </a>
                      {v.attributes.remark && <span className={styles.remark}>{v.attributes.remark}</span>}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 页面不够宽的兼容-nav导航栏 */}
              <div hidden className={styles.narrower}>
                <button className={styles.navfirst} onClick={handleDropdown}>
                  {/*{tabs[0].label}*/}
                  <CaretDownOutlined />
                </button>
                <ul className={styles.hidden}>
                  {tabs &&
                    tabs.data.map((item) => (
                      <li key={item.attributes.key}>
                        <a href="https://juejin.cn/" className={item.attributes.key === 1 ? styles.curselect : ''}>
                          {item.attributes.label}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            {/* 黑白主题切换 */}
            <button className={styles.theme} onClick={handleThemeChange}></button>
          </div>
        </div>
      </header>
    </>
  )
}

export default TopTab
