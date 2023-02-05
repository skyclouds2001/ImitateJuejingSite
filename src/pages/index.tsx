import React, { useEffect } from 'react'
import type { GetServerSideProps } from 'next'
import { NavProps, ArtNavItem, NavItem } from '../interface/nav'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '@/store'
import { changeTopNavList, changeArticleNavList } from '@/store'
import TopTab from '@/components/TopTab/TopTab'
import ArticleTab from '@/components/ArticleTab/ArticleTab'
import BookletAdv from '@/components/BookletAdv/BookletAdv'

const Home: React.FC<NavProps> = (props: NavProps) => {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    // 更新 store 中的 topnav
    if (props.navList) dispatch(changeTopNavList(props.navList))
    // 更新 store 中的 artnav
    if (props.artnavList) dispatch(changeArticleNavList(props.artnavList))
  }, [dispatch, props])
  return (
    <>
      {/* 顶部 nav */}
      <TopTab />
      {/* 文章分类 nav */}
      <ArticleTab />
      {/* 小册广告位 */}
      <BookletAdv />
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
