import React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { ConfigProvider, App as Ap } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import dayjs from 'dayjs'
import { Provider } from 'react-redux'
import 'dayjs/locale/zh-cn'
import 'antd/dist/reset.css'
import store from '@/store'
import '@/styles/globals.css'
import { ThemeContextProvider } from '@/components/ThemeContext/ThemeContext'
import { Layout } from '@/components/Layout/layout'

dayjs.locale('zh-cn')

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="application-name" content="next.js-template-sky" />
        <meta name="author" content="skyclouds2001@163.com" />
        <meta name="description" content="A template project for next.js by skyclouds2001." />
        <meta name="generator" content="next.js" />
        <meta name="keywords" content="next.js,template,config" />
        <meta name="referrer" content="no-referrer" />
        <meta name="theme-color" media="(prefers-color-scheme:light)" content="white" />
        <meta name="theme-color" media="(prefers-color-scheme:dark)" content="black" />
        <meta name="color-schema" content="[light|dark]" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,viewport-fit=cover,user-scalable=yes" />
        <meta name="creator" content="skyclouds2001@163.com" />
        <meta name="googlebot" content="index,follow" />
        <meta name="publisher" content="skyclouds2001@163.com" />
        <meta name="robots" content="index,follow" />
        <meta name="renderer" content="webkit" />
        <meta name="force-rendering" content="webkit" />
        <meta name="format-detection" content="telephone=no,date=no,address=no" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
        <meta httpEquiv="content-type" content="text/html;charset=utf-8" />
        <meta property="og:title" content="next.js-template-sky" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/favicon.ico" />
        <base href="/" target="_self" />
        <title>next.js template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ConfigProvider locale={zhCN}>
        <Provider store={store}>
          <Ap>
            <Layout>
              <ThemeContextProvider>
                <Component {...pageProps} />
              </ThemeContextProvider>
            </Layout>
          </Ap>
        </Provider>
      </ConfigProvider>
    </>
  )
}

export default App
