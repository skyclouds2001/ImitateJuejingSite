import React from 'react'
import { Provider } from 'react-redux'
import { App as Ap, ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import 'antd/dist/reset.css'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import ThemeContextProvider from '@/components/ThemeContext'
import store from '@/store'
import '@/styles/globals.css'

dayjs.locale('zh-cn')

const wrapper: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  return (
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <Ap>
          <ThemeContextProvider>{children}</ThemeContextProvider>
        </Ap>
      </Provider>
    </ConfigProvider>
  )
}

export default wrapper
