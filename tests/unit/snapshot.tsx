import { it, expect } from '@jest/globals'
import { render } from '@testing-library/react'
import Home from '@/pages/index'
import wrapper from './../util/render'

it('renders homepage unchanged', () => {
  const { container } = render(<Home name="test" />, { wrapper })
  expect(container).toMatchSnapshot()
})
