import React from 'react'
import AuthorList from '@/components/AuthorList'
import BookletAdv from '@/components/BookletAdv/BookletAdv'
import styles from './index.module.css'

const SideBar: React.FC = () => {
  return (
    <>
      <aside className={styles.aside}>
        {/* 小册广告位 */}
        <BookletAdv />
        {/* 作者榜 */}
        <AuthorList />
      </aside>
    </>
  )
}

export default SideBar
