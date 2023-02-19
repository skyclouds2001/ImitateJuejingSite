import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import type { GetServerSideProps } from 'next'
import { useSelector, useDispatch } from 'react-redux'
import Hello from '@/components/hello'
import { increase, decrease } from '@/store'
import type { RootState, AppDispatch } from '@/store'
import styles from './index.module.css'
import RelatedArticle from '@/components/RealtedArticle/index'
import AuthorInfo from '@/components/AuthorInfo/index'

interface HomeProps {
  name: string
  articleList?: any
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
      <div className={styles.home}>
        <div className={styles.article_list}>
          {props.articleList &&
            props.articleList.map((item: any) => (
              <div className={styles.article_list_item} key={item.id}>
                <Link href={`/post/${item.id}`}>
                  <div className={styles.article_list_item_left}>
                    <p className={styles.title}>{item.attributes.title}</p>
                    <div>{item.attributes.content.slice(0, 100)}</div>
                    <div>{item.attributes.createdAt.slice(0, 10)}</div>
                  </div>
                  <div className={styles.article_list_item_right}></div>
                </Link>
              </div>
            ))}
        </div>
        <div className={styles.author}>
          <RelatedArticle number={2}></RelatedArticle>
          <AuthorInfo></AuthorInfo>
        </div>
        <style jsx>{`
          div {
            color: #111;
          }
        `}</style>
      </div>
    </>
  )
}

Home.propTypes = {
  name: PropTypes.string.isRequired,
  articleList: PropTypes.any,
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const res = await fetch('http://localhost:3000/api/hello')
  const data: { name: string } = await res.json()
  const articleJson = await fetch('http://localhost:8080/api/articles')
  const articleData = await articleJson.json()
  console.log('articleData', articleData.data) //文章数组
  return { props: { name: data.name, articleList: articleData.data } }
}

export default Home
