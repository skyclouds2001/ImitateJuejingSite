import React from 'react'
import ArticleList from '@/components/ArticleList'
import ArticleTab from '@/components/ArticleTab'
import SideBar from '@/components/SideBar'
import styles from './index.module.css'

const Home: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        {/* 文章分类 nav */}
        <ArticleTab />
        {/* 页面主体内容 */}
        <div className={styles.content}>
          {/* 文章列表 */}
          <ArticleList />
          {/* 侧边栏 */}
          <SideBar />
        </div>
      </div>
    </>
  )
}

export default Home
