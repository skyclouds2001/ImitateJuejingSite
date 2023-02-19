import { useRouter } from 'next/router'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import type { GetServerSideProps } from 'next'
import remarkGfm from 'remark-gfm' // 划线、表、任务列表和直接url等的语法扩展
import 'github-markdown-css'
import MarkdownNavbar from 'markdown-navbar'
//高亮的主题，还有很多别的主题，可以自行选择
import styles from './MarkdownDisplay.module.scss'
import 'markdown-navbar/dist/navbar.css'
import rehypeRaw from 'rehype-raw'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import dark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'
const Post = (props: any) => {
  console.log('props', props)
  const router = useRouter()
  const { pid } = router.query
  console.log(pid)
  return (
    <div className={styles.posts}>
      <ReactMarkdown
        children={props?.content?.content}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter children={String(children).replace(/\n$/, '')} style={dark} language={match[1]} PreTag="div" {...props} />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
        }}
      ></ReactMarkdown>

      <div className={styles.postNav}>
        <MarkdownNavbar source={props?.content?.content} />
      </div>
    </div>
  )
}

export const getServerSideProps = async (context: any) => {
  const pid = Number(context.query.pid)
  const articleJson = await fetch(`http://localhost:8080/api/articles/${pid}`)
  const articleData = await articleJson.json()
  console.log('articleData', articleData.data.attributes)
  return { props: { content: articleData.data.attributes } }
}

export default Post
