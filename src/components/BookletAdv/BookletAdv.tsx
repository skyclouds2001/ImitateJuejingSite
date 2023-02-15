import Image from 'next/image'
import React from 'react'
import styles from './BookletAdv.module.css'
import DownCodeImage from '/public/downcode.png'
import CloseImage from '/public/close.png'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/index'
import { AdvItem } from '@/interface/adv'

const BookletAdv: React.FC = () => {
  // 获取 advList 数据
  const advList = useSelector<RootState, RootState['bookletadv']['advList']>((state) => state.bookletadv.advList)
  // 移动鼠标-关闭按钮变化
  const handlerMouseMoveClose = (e: any) => {
    const closebtn = document.querySelector(`#${styles.closebtn}`)
    if (closebtn && e.type === 'mousemove') closebtn.className = ''
    else if (closebtn && e.type === 'mouseleave') closebtn.className = styles.hidden
  }
  // 移动鼠标 广告-投放广告
  const handlerMouseMoveAdv = (e: any) => {
    const advbtn = document.querySelector(`.${styles.advtips} span`)
    if (advbtn && e.type === 'mousemove') advbtn.innerHTML = '投放广告'
    else if (advbtn && e.type === 'mouseleave') advbtn.innerHTML = '广告'
  }
  // 关闭广告
  const handlerCloseAdv = (e: any) => {
    const adv = document.querySelector(`.${styles.advimg}`)
    if (adv) adv.className = styles.hidden
  }
  return (
    <>
      {/* 小册广告容器 */}
      <div className={styles.advcontainer}>
        {/* 广告图片 */}
        {advList.map((item: AdvItem) => (
          <div key={item.key} className={styles.advimg} onMouseMove={handlerMouseMoveClose} onMouseLeave={handlerMouseMoveClose}>
            <a href="https://juejin.cn/">
              {/* show 为 true 展示的广告  只会有一个 */}
              <Image src={item.src} alt={item.title} width={240} height={200}></Image>
            </a>
            {/* 关闭 */}
            <button id={styles.closebtn} className={styles.hidden} onClick={handlerCloseAdv}>
              <Image src={CloseImage} alt="关闭广告" width={16}></Image>
            </button>
            {/* 广告 */}
            <a href="https://bd.juejin.cn/?utm_campaign=bd&utm_source=web&utm_medium=banner" className={styles.advtips} onMouseMove={handlerMouseMoveAdv} onMouseLeave={handlerMouseMoveAdv}>
              <span>广告</span>
            </a>
          </div>
        ))}
        {/* 下载稀土掘金 */}
        <a href="https://juejin.cn/app" className={styles.download}>
          <Image src={DownCodeImage} alt="下载稀土掘金" width={50}></Image>
          <div className={styles.textcontainer}>
            <p>下载稀土掘金</p>
            <p>一个帮助开发者成长的社区</p>
          </div>
        </a>
      </div>
    </>
  )
}

export default BookletAdv
