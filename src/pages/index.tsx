import React from 'react'
import type { GetServerSideProps } from 'next'
import TopTab from '@/components/TopTab/TopTab'
import ArticleTab from '@/components/ArticleTab/ArticleTab'
import { NavProps, ArtNavItem, NavItem } from '../interface/nav'

const Home: React.FC<NavProps> = (props: NavProps) => {
  return (
    <>
      <TopTab navList={props.navList} />
      <ArticleTab navList={props.artnavList} />
      {/* 测试代码 */}
      <ul>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
      </ul>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<NavProps> = async () => {
  const res = await fetch('http://localhost:3000/api/toptab')
  const resArt = await fetch('http://localhost:3000/api/articletab')
  const data: { navList: NavItem[] } = await res.json()
  const dataArt: { artnavList: ArtNavItem[] } = await resArt.json()
  return { props: { navList: data.navList, artnavList: dataArt.artnavList } }
}

export default Home
