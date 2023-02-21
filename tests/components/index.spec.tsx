import { describe, it, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import wrapper from './../util/render'

import AppDownload from '@/components/AppDownload'

describe('components test', () => {
  it('should render AppDownload component', () => {
    render(<AppDownload />, { wrapper })

    const el = screen.getByAltText('下载稀土掘金')
    expect(el).toBeInTheDocument()
  })
})
