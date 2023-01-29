import { describe, it, expect, beforeAll, afterEach, afterAll } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import Home from '@/pages/index'
import wrapper from './../util/render'

const server = setupServer(
  rest.get('/api/hello', (req, res, ctx) => {
    return res(ctx.json({ name: 'sky' }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Home', () => {
  it('renders a heading', async () => {
    render(<Home name="test" />, { wrapper })

    const heading = screen.getByRole('heading', {
      name: /next\.js template/i,
    })

    // @ts-ignore
    expect(heading).toBeInTheDocument()
  })
})
