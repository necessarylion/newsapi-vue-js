import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import NavBar from './NavBar.vue'
import router from "@/router"

test('mount component', async () => {
  expect(NavBar).toBeTruthy()

  const wrapper = mount(NavBar, {
    global: {
      plugins: [router]
    }
  })
  expect(wrapper.text()).toContain('Today News')
})
