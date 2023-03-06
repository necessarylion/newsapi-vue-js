import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import HeadlineDetailCard from './HeadlineDetailCard.vue'

test('mount component', async () => {
  expect(HeadlineDetailCard).toBeTruthy()
  const headline = {
    source: {
      id: 'bbc-news',
      name: 'BBC News'
    },
    author: 'BBC News',
    title: 'Greek train crash: PM Mitsotakis seeks forgiveness from families',
    description:
      'His plea comes as protesters angry over the deadly disaster clash with police in the capital Athens.',
    url: 'http://www.bbc.co.uk/news/world-europe-64853213',
    urlToImage:
      'https://ichef.bbci.co.uk/news/1024/branded_news/4BAF/production/_128857391_a88d2475f2035b672b6aeb771fe43212dd22f78b0_219_2108_11862108x1186.jpg',
    publishedAt: '2023-03-05T13:07:20.2939255Z',
    content:
      'Greek Prime Minister Kyriakos Mitsotakis has asked for forgiveness from the families of the 57 victims of this week\'s train crash.\r\nIn a Facebook message, Mr Mitsotakis said that "in the Greece of 20… [+2622 chars]'
  }
  const wrapper = mount(HeadlineDetailCard, {
    props: {
      headline
    }
  })
  expect(wrapper.text()).toContain('BBC News')
  expect(wrapper.text()).toContain(
    'Greek train crash: PM Mitsotakis seeks forgiveness from families'
  )
  expect(wrapper.find('img[alt="headline"]').attributes().src).toBe(headline.urlToImage)
  expect(wrapper.text()).toContain('His plea comes as protesters angry over')
})
