import React, { useEffect } from 'react'
import type { GetServerSideProps } from 'next'
import { NavProps, ArtNavItem, NavItem } from '../interface/nav'
import { AdvProps } from '../interface/adv'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '@/store'
import { changeTopNavList, changeArticleNavList, changeAdvList } from '@/store'
import TopTab from '@/components/TopTab/TopTab'
import ArticleTab from '@/components/ArticleTab/ArticleTab'
import BookletAdv from '@/components/BookletAdv/BookletAdv'

const Home: React.FC<NavProps & AdvProps> = (props: NavProps & AdvProps) => {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    // 更新 store 中的 topnav
    if (props.navList) dispatch(changeTopNavList(props.navList))
    // 更新 store 中的 artnav
    if (props.artnavList) dispatch(changeArticleNavList(props.artnavList))
    // 更新 store 中的 advlist
    if (props.advList) dispatch(changeAdvList(props.advList))
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
  const resAdv = await fetch('http://localhost:3000/api/adv')
  const data: { navList: NavItem[] } = await res.json()
  const dataArt: { artnavList: ArtNavItem[] } = await resArt.json()
  const dataAdv: { advList: AdvProps } = await resAdv.json()
  return { props: { navList: data.navList, artnavList: dataArt.artnavList, advList: dataAdv.advList } }
}

export default Home
