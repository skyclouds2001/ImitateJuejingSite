import React from 'react'
import type { Article } from '@/models'
import styles from './index.module.scss'

const ArticleListItem: React.FC<{ article?: Article }> = (props) => {
  return (
    <>
      <section className={styles.item}>
        <div className={styles.meta}>
          <div className={styles.author}>桃小瑞</div>
          <div className={styles.date}>1月前</div>
          <div className={styles.tags}>
            <a href="/tag/前端" target="_blank" className={styles.tag}>
              前端
            </a>
            <a href="/tag/JavaScript" target="_blank" className={styles.tag}>
              JavaScript
            </a>
            <a href="/tag/掘金·日新计划" target="_blank" className={styles.tag}>
              掘金·日新计划
            </a>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.main}>
            <div className={styles.title}>
              <a href="/post/7176554352155295800" target="_blank">
                别在让你的 await Streaking 了
              </a>
            </div>
            <div className={styles.desc}>
              <a href="/post/7176554352155295800" target="_blank">
                我们现在在请求接口的过程中，已经习惯了async/await的写法，已经逐渐的代替了promise。。。
              </a>
            </div>
            <ul className={styles.actions}>
              <li className={[styles.action, styles.view].join(' ')}>
                <i></i>
                <span>4310</span>
              </li>
              <li className={[styles.action, styles.like].join(' ')}>
                <i></i>
                <span>43</span>
              </li>
              <li className={[styles.action, styles.comment].join(' ')}>
                <i></i>
                <span>23</span>
              </li>
            </ul>
          </div>
          <img className={styles.img} src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3a8e18532b6843e2bb10a1f1cd3d8581~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp" alt="别在让你的 await Streaking 了" loading="lazy" />
        </div>
        <div className={styles.dislike}>
          <svg data-v-18e57856="" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-close">
            <path data-v-18e57856="" d="M1.70538 11.7191C1.52399 11.899 1.22992 11.899 1.04853 11.7191L1.03125 11.7019C0.849866 11.522 0.84987 11.2302 1.03125 11.0502L10.2956 1.85884C10.477 1.67889 10.7711 1.67889 10.9525 1.85885L10.9697 1.876C11.1511 2.05596 11.1511 2.34773 10.9697 2.52769L1.70538 11.7191Z"></path>
            <path data-v-18e57856="" d="M1.0828 2.48943C0.903312 2.30758 0.904276 2.01369 1.08495 1.83302L1.10216 1.8158C1.28284 1.63513 1.5748 1.63609 1.75428 1.81794L10.9104 11.0949C11.0898 11.2767 11.0889 11.5706 10.9082 11.7513L10.891 11.7685C10.7103 11.9492 10.4183 11.9482 10.2389 11.7664L1.0828 2.48943Z"></path>
          </svg>
        </div>
      </section>
    </>
  )
}

export default ArticleListItem
