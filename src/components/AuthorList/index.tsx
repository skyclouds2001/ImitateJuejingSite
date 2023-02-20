import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useAuthor } from '@/api'
import RightIcon from '@/assets/icon/right.svg'
import AuthorItem from '@/components/AuthorListItem'
import styles from './index.module.scss'
import { JUEJING_DOMAIN } from '@/config'

const AuthorList: React.FC = () => {
  const { data: authors } = useAuthor()

  return (
    <>
      <div className={styles.list}>
        <header className={styles.header}>🎖️作者榜</header>
        <article className={styles.content}>
          {authors?.map((v) => (
            <AuthorItem key={v.id} author={v} />
          ))}
        </article>
        <footer className={styles.footer}>
          <Link href={`${JUEJING_DOMAIN}/recommendation/authors/recommended`} target="_blank" rel="noreferrer">
            <span>完整榜单</span>
            <Image src={RightIcon} alt="" width={16} />
          </Link>
        </footer>
      </div>
    </>
  )
}

export default AuthorList
