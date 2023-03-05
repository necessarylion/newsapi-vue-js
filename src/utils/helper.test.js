import { describe, it, expect } from 'vitest'
import { formatDate, convertToSlug } from './helper'

describe('formatDate', () => {
  it('show return a day ago', () => {
    const d = new Date();
    d.setDate(d.getDate() -1);
    expect(formatDate(d.toISOString())).toBe('a day ago')
  })

  it('show return 2 day ago', () => {
    const d = new Date();
    d.setDate(d.getDate() -2);
    expect(formatDate(d.toISOString())).toBe('2 days ago')
  })
})

describe('convertToSlug', () => {
  it('show return a slug with dash', () => {
    expect(convertToSlug('this is slug')).toBe('this-is-slug')
  })
})