import React from 'react'
import PropTypes from 'prop-types'
import type { GetServerSideProps } from 'next'
import { useSelector, useDispatch } from 'react-redux'
import Hello from '@/components/hello'
import { increase, decrease } from '@/store'
import type { RootState, AppDispatch } from '@/store'
import styles from './index.module.css'
import RelatedArticle from '@/components/RealtedArticle/RelatedArticle'
import ArticleInfo from '@/components/ArticleInfo/ArticleInfo'
interface HomeProps {
  name: string
}

const Home: React.FC<HomeProps> = (props) => {
  const value = useSelector<RootState, RootState['hello']['value']>((state) => state.hello.value)
  const dispatch = useDispatch<AppDispatch>()

  const add = () => {
    dispatch(increase())
  }

  const sub = () => {
    dispatch(decrease())
  }

  return (
    <>
      <main className="w-screen h-screen flex justify-center items-center flex-col">
        <h1 className={styles.title}>next.js template</h1>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.value}>{value}</div>
        <button onClick={add}>+</button>
        <button onClick={sub}>-</button>
        <Hello />
        <RelatedArticle></RelatedArticle>
        <ArticleInfo></ArticleInfo>
        <style jsx>{`
          div {
            color: #111;
          }
        `}</style>
      </main>
    </>
  )
}

Home.propTypes = {
  name: PropTypes.string.isRequired,
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const res = await fetch('http://localhost:3000/api/hello')
  const data: { name: string } = await res.json()
  return { props: { name: data.name } }
}

export default Home
