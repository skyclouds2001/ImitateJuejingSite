import React from 'react'
import { useAdvertisement } from '@/api'
import AuthorList from '@/components/AuthorList'
import Advertisement from '@/components/Advertisement'
import AppDownload from '@/components/AppDownload'
import styles from './index.module.css'

const SideBar: React.FC = () => {
  const { data } = useAdvertisement()

  return (
    <>
      <aside className={styles.aside}>
        {/* 小册广告位 */}
        {data?.data.map((v) => (
          <Advertisement key={v.id} advertisement={Object.assign(v.attributes, { id: v.id })} />
        ))}
        {/* 下载 APP 模块 */}
        <AppDownload />
        {/* 作者榜 */}
        <AuthorList />
      </aside>
    </>
  )
}

export default SideBar
