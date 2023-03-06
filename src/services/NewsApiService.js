class NewsApiService {
  API_BASE_URL = 'https://newsapi.org/v2/'

  async getHeadlines() {
    return this.apiCall('top-headlines', { country: 'us' })
  }

  async searchHeadline(keyword) {
    return this.apiCall('top-headlines', { q: keyword })
  }

  async getHeadlinesBySources(sourcesArray) {
    const sources = sourcesArray.join(',')
    return this.apiCall('top-headlines', { sources })
  }

  async getSources(params) {
    return this.apiCall('sources', params)
  }

  async apiCall(route, params) {
    const query = new URLSearchParams({
      apiKey: import.meta.env.VITE_API_KEY,
      ...params
    })
    const response = await fetch(`${this.API_BASE_URL + route}?${query}`)
    const data = await response.json()
    return data
  }
}

export default new NewsApiService()
