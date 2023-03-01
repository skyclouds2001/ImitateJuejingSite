import useSWR from 'swr'
import { CMS_DOMAIN } from '@/config'

const getArticlePage = (url: any) => {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const articledata = data.data || {}

      return {
        title: articledata.attributes.title,
        author: {
          id: articledata.attributes.author.data.id,
          avatar: '',
          username: articledata.attributes.author.data.attributes.username,
          level: articledata.attributes.author.data.attributes.writerLevel,
        },
        createtime: articledata.attributes.createTime,
        readCnt: articledata.attributes.readCnt,
        content: articledata.attributes.content,
        likeCnt: articledata.attributes.likeUsers?.data.length,
      }
    })
}

export const useArticlePage = (articleId: number) => {
  return useSWR(`${CMS_DOMAIN}/api/articles/${articleId}?populate=*`, getArticlePage)
}
