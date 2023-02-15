import React, { useEffect } from 'react'
import type { GetServerSideProps } from 'next'
import { NavProps, ArtNavItem, NavItem, ArtNavProps } from '../interface/nav'
import { AdvProps } from '../interface/adv'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '@/store'
import { changeTopNavList, changeArticleNavList, changeAdvList, changeArticleselectkey } from '@/store'
import TopTab from '@/components/TopTab/TopTab'
import ArticleTab from '@/components/ArticleTab/ArticleTab'
import BookletAdv from '@/components/BookletAdv/BookletAdv'
import SideBar from '@/components/SideBar'

const Home: React.FC<NavProps & AdvProps & ArtNavProps> = (props: NavProps & AdvProps & ArtNavProps) => {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    // 更新 store 中的 topnav
    if (props.navList) dispatch(changeTopNavList(props.navList))
    // 更新 store 中的 artnav
    if (props.artnavList) dispatch(changeArticleNavList(props.artnavList))
    // 更新 store 中的 advlist
    if (props.advList) dispatch(changeAdvList(props.advList))
    // 更新 store 中的 advlist
    if (props.selectKey) dispatch(changeArticleselectkey(props.selectKey))
  }, [dispatch, props])
  return (
    <>
      {/* 顶部 nav */}
      {/* <TopTab /> */}
      {/* 文章分类 nav */}
      <ArticleTab />
      {/* 文章模块 */}
      {/* 侧边栏 */}
      <SideBar />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<NavProps> = async () => {
  const res = await fetch('http://localhost:3000/api/toptab')
  const resArt = await fetch('http://localhost:3000/api/articletab')
  const resAdv = await fetch('http://localhost:3000/api/adv')
  const data: { navList: NavItem[] } = await res.json()
  const dataArt: { artnavList: ArtNavItem[]; selectkey: string } = await resArt.json()
  const dataAdv: { advList: AdvProps } = await resAdv.json()
  return { props: { navList: data.navList, artnavList: dataArt.artnavList, selectKey: dataArt.selectkey, advList: dataAdv.advList } }
}

export default Home
