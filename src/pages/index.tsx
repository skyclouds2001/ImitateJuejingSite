import React from 'react'
import type { GetServerSideProps } from 'next'
import TopTab from '@/components/TopTab/TopTab'

interface NavItem {
  key: number
  label: string
}
interface NavProps {
  navList: NavItem[]
}

const Home: React.FC<NavProps> = (props: NavProps) => {
  return (
    <>
      <TopTab navList={props.navList} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<NavProps> = async () => {
  const res = await fetch('http://localhost:3000/api/toptab')
  const data: { navList: NavItem[] } = await res.json()
  return { props: { navList: data.navList } }
}

export default Home
