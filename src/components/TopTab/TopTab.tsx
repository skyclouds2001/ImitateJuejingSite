import React, { useState, useEffect, useContext } from 'react'
import styles from './TopTab.module.css'
import Image from 'next/image'
import logo from '/public/logo.png'
import { CaretDownOutlined } from '@ant-design/icons'
import { ThemeContext } from '../ThemeContext/ThemeContext'
import { NavProps } from '@/interface/nav'

const TopTab: React.FC<NavProps> = ({ navList }) => {
  // 主题 theme
  const { setTheme } = useContext(ThemeContext)
  // 顶部tab 配置数组
  // const navList = useSelector<RootState, RootState['toptab']['topnavList']>((state) => state.toptab.topnavList)
  // const { navList } = props
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
    if (top && e.target.scrollTop >= 290) top.className = styles.toptabcontainersroll
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
      <div id={styles.toptabcontainer} className={styles.toptabcontainerfirst}>
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
              {navList &&
                navList.map((item) => (
                  <li key={item.key}>
                    <a href="https://juejin.cn/" className={item.key === 1 ? styles.curselect : ''}>
                      {item.label}
                    </a>
                    {/* remark备注 */}
                    {item.remark && <span className={styles.remark}>{item.remark}</span>}
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
              {navList &&
                navList.map((item) => (
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
        <button className={styles.theme} onClick={handleThemeChange}></button>
      </div>
    </>
  )
}

export default TopTab
