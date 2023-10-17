// src/components/__tests__/Todos.test.js
import { mount } from '@vue/test-utils'
import { assert, describe, it } from 'vitest'
import Todos from '../Todos.vue'

// Execute the tests
describe('Todos.vue', () => {
  it('renders todos when fetched successfully', async () => {
    // Mount the Todos component
    const wrapper = mount(Todos, {})

    // Simulate a successful fetch with some todos
    await wrapper.vm.fetchTodos()

    // Assert that the todos are rendered
    assert.equal(wrapper.findAll('.todo').length, 200)
    assert.equal(wrapper.find('.todo:first-child').text(), 'delectus aut autem')
    assert.equal(wrapper.find('.todo:last-child').text(), 'ipsam aperiam voluptates qui')
  })

  it('renders error message when fetching todos fails', async () => {
    // Mount the Todos component
    const wrapper = mount(Todos, {})

    // Simulate a failed fetch
    await wrapper.setData({ fetchError: true })

    // Trigger the asynchronous method
    await wrapper.vm.fetchTodos()

    // Update the wrapper to reflect the changes
    await wrapper.vm.$nextTick()

    // Assert that the error message is rendered
    assert.equal(
      wrapper.find('.error-message').text(),
      'An error occurred while fetching todos. Please try again later.'
    )
  })
})
