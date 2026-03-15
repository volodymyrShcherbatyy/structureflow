import { describe, it, expect } from 'vitest'
import { glob } from 'glob'
import fs from 'fs'

describe('Architecture rules', () => {
  it('core must not depend on infrastructure', async () => {
    const files = await glob('src/core/**/*.ts')

    for (const file of files) {
      const content = fs.readFileSync(file, 'utf8')

      expect(content.includes('infrastructure')).toBe(false)
    }
  })
})