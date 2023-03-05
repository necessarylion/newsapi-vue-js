import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import FilterSourceModal from './FilterSourceModal.vue'

test('mount component', async () => {
  expect(FilterSourceModal).toBeTruthy()
  const wrapper = mount(FilterSourceModal, {
    props: {
      open: true,
      sources: [
        {
          id: 'abc-news',
          name: 'ABC News',
          description:
            'Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.',
          url: 'https://abcnews.go.com',
          category: 'general',
          language: 'en',
          country: 'us'
        },
        {
          id: 'abc-news-au',
          name: 'ABC News (AU)',
          description:
            "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
          url: 'http://www.abc.net.au/news',
          category: 'general',
          language: 'en',
          country: 'au'
        }
      ]
    }
  })
  expect(wrapper.text()).toContain('Filter headlines by source')
  await wrapper.get('v-btn').trigger('click')
  expect(wrapper.emitted()).toHaveProperty('update:show')
})
