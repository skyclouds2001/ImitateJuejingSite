import React, { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons'
import { useTopTab } from '@/api'
import logo from '@/assets/img/logo-pc.svg'
import { ThemeContext } from '../ThemeContext/ThemeContext'
import { Theme } from '@/enum'
import { getTopTabPath } from '@/util'
import styles from './index.module.css'

const TopTab: React.FC = () => {
  const { data: tabs } = useTopTab()

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

  /**
   * 页面较窄情况下设置下拉框显示与否
   */
  const [isShow, setShow] = useState(false)

  /**
   * 页面较窄情况下的下拉框点击事件
   */
  const handleDropdown = () => {
    setShow(!isShow)
  }

  /**
   * 主题 theme
   */
  const { theme, setTheme } = useContext(ThemeContext)

  /**
   * 明暗主题切换按钮点击事件
   */
  const handleThemeChange = () => {
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
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
              <div className={styles.narrower}>
                <button className={styles.btn} onClick={handleDropdown}>
                  <span>{tabs?.data?.at(0)?.attributes.label ?? '首页'}</span>
                  {isShow ? <CaretUpOutlined /> : <CaretDownOutlined />}
                </button>
                <ul className={[styles.list, styles.show].join(' ')}>
                  {tabs?.data?.map((v) => (
                    <li className={styles.item} key={v.attributes.key}>
                      <a href={getTopTabPath(v.id)} className={v.attributes.key === 0 ? styles.selected : ''}>
                        {v.attributes.label}
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
