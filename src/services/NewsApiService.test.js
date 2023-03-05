import { describe, it, vi, expect } from 'vitest'
import NewsApiService from './NewsApiService'

describe('NewsApiService', () => {
  it('getHeadlines', async () => {
    const mockFetch = vi.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            status: 'ok',
            articles: [{}]
          })
      })
    )
    global.import.meta.env.VITE_API_KEY = '1234'
    global.fetch = mockFetch
    const result = await NewsApiService.getHeadlines()
    expect(result.status).toBe('ok')
    expect(typeof result.articles).toBe('object')
    expect(mockFetch.mock.calls[0][0]).toBe(
      `https://newsapi.org/v2/top-headlines?apiKey=1234&country=us`
    )
  })

  it('getSources', async () => {
    const mockFetch = vi.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            status: 'ok',
            sources: [{}]
          })
      })
    )
    global.import.meta.env.VITE_API_KEY = '1234'
    global.fetch = mockFetch
    const result = await NewsApiService.getSources()
    expect(result.status).toBe('ok')
    expect(typeof result.sources).toBe('object')
    expect(mockFetch.mock.calls[0][0]).toBe(`https://newsapi.org/v2/sources?apiKey=1234`)
  })

  it('getHeadlinesBySources', async () => {
    const mockFetch = vi.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            status: 'ok',
            articles: [{}]
          })
      })
    )
    global.fetch = mockFetch
    global.import.meta.env.VITE_API_KEY = '1234'
    const result = await NewsApiService.getHeadlinesBySources(['a', 'b'])
    expect(result.status).toBe('ok')
    expect(typeof result.articles).toBe('object')
    expect(mockFetch.mock.calls[0][0]).toBe(
      `https://newsapi.org/v2/top-headlines?apiKey=1234&sources=a%2Cb`
    )
  })

  it('getHeadlinesBySources', async () => {
    const mockFetch = vi.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            status: 'ok',
            articles: [{}]
          })
      })
    )
    global.fetch = mockFetch
    global.import.meta.env.VITE_API_KEY = '1234'
    const result = await NewsApiService.searchHeadline('trump')
    expect(result.status).toBe('ok')
    expect(typeof result.articles).toBe('object')
    expect(mockFetch.mock.calls[0][0]).toBe(
      `https://newsapi.org/v2/top-headlines?apiKey=1234&q=trump`
    )
  })
})
