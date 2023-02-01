import React from 'react'
import styles from './ArticleTab.module.css'
import { NavProps } from '../../interface/nav'

const ArticleTab: React.FC<NavProps> = (props: NavProps) => {
  // 文章分类tab 配置数组
  const { navList } = props
  return (
    <>
      <div>ArticleTab!</div>
    </>
  )
}

export default ArticleTab
