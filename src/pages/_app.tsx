import React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { ConfigProvider, App as Ap } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import 'antd/dist/reset.css'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Provider } from 'react-redux'
import '@/styles/globals.css'
import ThemeContextProvider from '@/components/ThemeContext'
import Layout from '@/components/Layout'
import store from '@/store'

dayjs.locale('zh-cn')

dayjs.extend(relativeTime)

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="application-name" content="稀土掘金" />
        <meta name="author" content="skyclouds2001@gmail.com" />
        <meta name="description" content="掘金是面向全球中文开发者的技术内容分享与交流平台。我们通过技术文章、沸点、课程、直播等产品和服务，打造一个激发开发者创作灵感，激励开发者沉淀分享，陪伴开发者成长的综合类技术社区。" />
        <meta name="generator" content="Next.js" />
        <meta name="keywords" content="掘金,稀土" />
        <meta name="referrer" content="no-referrer" />
        <meta name="theme-color" media="(prefers-color-scheme:light)" content="white" />
        <meta name="theme-color" media="(prefers-color-scheme:dark)" content="black" />
        <meta name="color-schema" content="[light|dark]" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,viewport-fit=cover,user-scalable=yes" />
        <meta name="creator" content="skyclouds2001@gmail.com" />
        <meta name="googlebot" content="index,follow" />
        <meta name="publisher" content="skyclouds2001@gmail.com" />
        <meta name="robots" content="index,follow" />
        <meta name="renderer" content="webkit" />
        <meta name="force-rendering" content="webkit" />
        <meta name="format-detection" content="telephone=no,date=no,address=no" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
        <meta httpEquiv="content-type" content="text/html;charset=utf-8" />
        <meta property="og:title" content="稀土掘金" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/favicon.ico" />
        <base href="/" target="_self" />
        <title>稀土掘金</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ConfigProvider locale={zhCN}>
        <Provider store={store}>
          <Ap>
            <ThemeContextProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeContextProvider>
          </Ap>
        </Provider>
      </ConfigProvider>
    </>
  )
}

export default App
