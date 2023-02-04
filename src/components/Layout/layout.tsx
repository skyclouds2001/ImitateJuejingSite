import { FC } from 'react'
import TopTab from '@/components/TopTab/TopTab'
import ArticleTab from '@/components/ArticleTab/ArticleTab'
import BookletAdv from '@/components/BookletAdv/BookletAdv'
import { NavProps } from '@/interface/nav'

export const Layout: FC<NavProps & { children: JSX.Element }> = ({ children }) => {
  return (
    <div>
      {/* 顶部 nav */}
      <TopTab />
      {/* 文章分类 nav */}
      <ArticleTab />
      {/* 小册广告位 */}
      <BookletAdv />
      <main>{children}</main>
    </div>
  )
}
