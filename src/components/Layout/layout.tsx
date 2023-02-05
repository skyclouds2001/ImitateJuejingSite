import { FC } from 'react'
import TopTab from '@/components/TopTab/TopTab'
import { NavProps } from '@/interface/nav'

export const Layout: FC<NavProps & { children: JSX.Element }> = ({ children }) => {
  return (
    <div>
      {/* 顶部 nav */}
      <TopTab />
      <main>{children}</main>
    </div>
  )
}
