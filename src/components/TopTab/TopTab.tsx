import React, { useState, useEffect } from 'react'
import styles from './TopTab.module.css'
import Image from 'next/image'
import logo from '/public/logo.png'
import light from '/public/light.png'
import dark from '/public/dark.png'
import { CaretDownOutlined } from '@ant-design/icons'

interface NavItem {
  key: number
  label: string
}
interface NavProps {
  navList: NavItem[]
}

const TopTab: React.FC<NavProps> = (props: NavProps) => {
  // 顶部tab 配置数组
  const { navList } = props
  // 浏览器窗口宽度
  const [Browsewidth, setBrowsWidth] = useState<number>(1400)
  // 浏览器窗口高度
  const [SliderHeight, setSliderHeight] = useState<number>(0)
  // 更新浏览器窗口宽度函数
  const browsewidthUpdate: any = (e: any) => {
    setBrowsWidth(e.target.innerWidth)
  }
  // 更新浏览器滚动条位置函数
  const sliderHeightUpdate: any = (e: any) => {
    setSliderHeight(e.target.scrollTop)
    const top = document.getElementsByClassName(styles.toptabcontainer)[0]
    if (e.target.scrollTop >= 290) top.classList.add(styles.hidden)
    else top.classList.remove(styles.hidden)
  }
  useEffect(() => {
    // 获取滚动元素
    const scrollEle = document.getElementById('scrollDom') || document.body
    // 初始化
    // setBrowsWidth(window.innerWidth)
    // setBrowsWidth(document.documentElement.scrollTop)
    window.addEventListener('resize', browsewidthUpdate)
    scrollEle.addEventListener('scroll', sliderHeightUpdate)
    return () => {
      // 组件销毁时移除监听事件
      window.removeEventListener('resize', browsewidthUpdate)
      scrollEle.removeEventListener('scroll', sliderHeightUpdate)
    }
  }, [])
  // nav栏较窄的下拉框点击事件
  const handleDropdown = () => {
    const nav = document.querySelector('.' + styles.navsmall + ' ul')
    if (nav) {
      if (nav.className == styles.dropdown) nav.className = styles.hidden
      else nav.className = styles.dropdown
    }
  }
  // 黑白主题切换按钮点击事件
  const handleThemeChange = () => {
    const btnDark = document.getElementById('dark')
    const btnLight = document.getElementById('light')
    if (btnDark && btnLight) {
      // 调整为暗色主题
      if (btnDark.className == styles.hidden) {
        btnLight.className = styles.hidden
        btnDark.className = ''
        document.body.className = styles.dark
      }
      // 调整为亮色主题
      else {
        btnDark.className = styles.hidden
        btnLight.className = ''
        document.body.className = ''
      }
    }
  }

  return (
    <>
      {/* 顶部tab */}
      <div className={styles.toptabcontainer}>
        {/* 稀土掘金logo区域 */}
        <div className={styles.logo}>
          <Image src={logo} alt={'掘金社区'} width={24}></Image>
          <span>稀土掘金</span>
        </div>
        {/* 导航栏 */}
        <div className={styles.nav}>
          {/* 页面足够宽-nav导航栏 */}
          <div className={Browsewidth < 1140 ? styles.hidden : styles.navbig}>
            <ul>
              {navList.map((item) => (
                <li key={item.key}>
                  <a href="https://juejin.cn/" className={item.key === 1 ? styles.curselect : ''}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* 页面不够宽的兼容-nav导航栏 */}
          <div className={(styles.hidden, Browsewidth >= 1140 ? styles.hidden : styles.navsmall)}>
            <button className={styles.navfirst} onClick={handleDropdown}>
              {navList[0].label}
              <CaretDownOutlined />
            </button>
            <ul className={styles.hidden}>
              {navList.map((item) => (
                <li key={item.key}>
                  <a href="https://juejin.cn/" className={item.key === 1 ? styles.curselect : ''}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* 黑白主题切换 */}
        <div className={styles.theme}>
          <button id="dark" className={styles.hidden} onClick={handleThemeChange}>
            <Image src={light} alt="变亮色主题" width={30} height={30}></Image>
          </button>
          <button id="light" onClick={handleThemeChange}>
            <Image src={dark} alt="变暗色主题" width={30} height={30}></Image>
          </button>
        </div>
      </div>
      {/* 测试代码 需删除 */}
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </>
  )
}

export default TopTab
