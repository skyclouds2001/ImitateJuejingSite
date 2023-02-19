import React from 'react'
import TopTab from '@/components/TopTab'
import styles from './index.module.css'

export const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <>
      <TopTab />
      <main className={styles.container}>{children}</main>
    </>
  )
}
