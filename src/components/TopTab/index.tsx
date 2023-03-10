import React, { useState, useEffect, useContext, type MouseEventHandler } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons'
import { throttle } from 'lodash-es'
import { useTopTab } from '@/api'
import LogoLight from '@/assets/img/logo-pc-light.svg'
import LogoDark from '@/assets/img/logo-pc-dark.svg'
import LogoMobile from '@/assets/img/logo-mobile.svg'
import { ThemeContext } from '@/components/ThemeContext'
import { Theme } from '@/enum'
import { getTopTabPath } from '@/util'
import styles from './index.module.css'

const TopTab: React.FC = () => {
  const { data: tabs } = useTopTab()

  const [isVisible, setVisible] = useState(true)

  /**
   * 监听浏览器滚动条位置方法
   *
   * @param e 鼠标滚动事件
   */
  const handleElementScroll = (e: WheelEvent) => {
    if (e.deltaY > 0 && document.body.scrollTop > 500) {
      setVisible(false)
    } else {
      setVisible(true)
    }
  }

  useEffect(() => {
    const fun = throttle(handleElementScroll, 100)

    window.addEventListener('wheel', fun)
    return () => {
      window.removeEventListener('wheel', fun)
    }
  }, [])

  /**
   * 页面较窄情况下设置下拉框显示与否
   */
  const [isShow, setShow] = useState(false)

  /**
   * 页面较窄情况下的下拉框点击事件
   */
  const handleDropdown: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = () => {
    setShow(!isShow)
  }

  /**
   * 主题 theme
   */
  const { theme, setTheme } = useContext(ThemeContext)

  /**
   * 明暗主题切换按钮点击事件
   */
  const handleThemeChange: MouseEventHandler<HTMLButtonElement> = () => {
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
  }

  return (
    <>
      {/* 顶部tab */}
      <header className={styles.container}>
        <div className={isVisible ? styles.visible : ''}>
          <div>
            {/* 稀土掘金logo区域 */}
            <Link className={styles.logo} href="/" target="_self">
              <Image className={styles.pc} src={theme === Theme.LIGHT ? LogoLight : LogoDark} alt="稀土掘金" width={107} />
              <Image className={styles.mobile} src={LogoMobile} alt="稀土掘金" width={31} />
            </Link>

            {/* 导航栏 */}
            <div className={styles.nav}>
              {/* 页面足够宽-nav导航栏 */}
              <div className={styles.wider}>
                <ul className={styles.list}>
                  {tabs?.data?.map((v) => (
                    <li className={styles.item} key={v.attributes.key}>
                      <Link href={getTopTabPath(v.id)} className={v.attributes.key === 0 ? styles.selected : ''}>
                        {v.attributes.label}
                      </Link>
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
                <ul className={[styles.list, isShow ? styles.show : ''].join(' ')}>
                  {tabs?.data?.map((v) => (
                    <li className={styles.item} key={v.attributes.key}>
                      <Link href={getTopTabPath(v.id)} className={v.attributes.key === 0 ? styles.selected : ''} onClick={handleDropdown}>
                        {v.attributes.label}
                      </Link>
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
