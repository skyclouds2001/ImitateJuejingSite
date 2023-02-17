import { FC, useState } from 'react'
import useSWR from 'swr'
import TopTab from '@/components/TopTab/TopTab'
import { NavItem } from '@/interface/nav'
import { CMS_DOMAIN } from '@/config'
import styles from './index.module.css'

export const Layout: FC<{ children: JSX.Element }> = ({ children }) => {
  const [navList, setNavList] = useState<NavItem[]>([])
  const fetcher = (url: any) => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const topnavdata = data.data || {}
        // 按key排序
        topnavdata.sort((a: any, b: any) => {
          return a.attributes.key - b.attributes.key
        })
        // 数据处理
        const navList = topnavdata.map((item: any) => {
          if (item.attributes.remark) return { key: item.id, label: item.attributes.label, remark: item.attributes.remark }
          else return { key: item.id, label: item.attributes.label }
        })
        return setNavList(navList)
      })
  }
  useSWR(`${CMS_DOMAIN}/api/top-tabs`, fetcher)

  return (
    <div>
      {/* 顶部 nav */}
      <TopTab navList={navList} />
      <main className={styles.container}>{children}</main>
    </div>
  )
}
