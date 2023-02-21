import { describe, it, expect } from '@jest/globals'

import { CMS_DOMAIN } from '@/config'
import { getAuthorWriterLevelImage, customNextImageLoader } from '@/util'

describe('util tests', () => {
  it('should get author writer level image only between 2 and 7', () => {
    expect(getAuthorWriterLevelImage(0)).toBe('')
    expect(getAuthorWriterLevelImage(1)).toBe('')
    expect(getAuthorWriterLevelImage(2)).not.toBe('')
    expect(getAuthorWriterLevelImage(7)).not.toBe('')
    expect(getAuthorWriterLevelImage(8)).toBe('')
  })

  it('should get image path with CMS_DOMAIN', () => {
    const props = {
      src: '/test.jpg',
      width: 100,
      quality: 1,
    }
    expect(customNextImageLoader(props)).toMatch(CMS_DOMAIN)
    expect(customNextImageLoader(props)).toMatch(`w=${props.width}`)
    expect(customNextImageLoader(props)).toMatch(`q=${props.quality}`)
  })
})
