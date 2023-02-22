import useSWR from 'swr'
import { http } from '@/lib'
import type { ArticlePage, Pagination } from '@/models'
import { CMS_DOMAIN } from '@/config/index'

const getArticlePage = (url: any) => {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const articledata = data.data || {}
      // const userid = articledata.attributes.author.data.id

      // // 获取作者信息
      // const userdata = fetch(`${CMS_DOMAIN}/api/users/${userid}?populate=*`)
      //   .then((res) => res.json())
      //   .then((data) => {
      //     const userdata = data.data || {}
      //     console.log('userdata', userdata)
      //     return userdata
      //   })

      const article = {
        title: articledata.attributes.title,
        author: {
          avatar: '',
          username: articledata.attributes.author.data.attributes.username,
          level: '',
        },
        createtime: articledata.attributes.createTime,
        readCnt: articledata.attributes.readCnt,
        content: articledata.attributes.content,
        likeCnt: articledata.attributes.likeUsers?.data.length,
        authorId: articledata.attributes.author.data.id,
      }
      return article
    })
}

export const useArticlePage = (articleId: number) => {
  return useSWR(`${CMS_DOMAIN}/api/articles/${articleId}?populate=*`, getArticlePage)
}
