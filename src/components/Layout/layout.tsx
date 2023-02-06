import { FC } from 'react'
import TopTab from '@/components/TopTab/TopTab'

export const Layout: FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <div>
      {/* 顶部 nav */}
      <TopTab />
      <main>{children}</main>
    </div>
  )
}
