<!-- src/components/Todos.vue -->
<template>
  <div>
    <h2>Todos</h2>
    <div v-if="loading" class="loading-message">Loading...</div>
    <div v-else>
      <ul v-if="todos.length > 0" class="todos">
        <li v-for="todo in todos" :key="todo.id" class="todo">{{ todo.title }}</li>
      </ul>
      <div v-else class="no-data">No todos available.</div>
    </div>
    <div v-if="error" class="error-message">{{ error }}</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      todos: [],
      loading: false,
      error: null,
      fetchError: false // To simulate a fetching error
    }
  },
  mounted() {
    // Fetch todos when the component is mounted
    this.fetchTodos()
  },
  methods: {
    async fetchTodos() {
      this.loading = true
      if (this.fetchError) {
        // Simulate a failed fetch
        this.loading = false
        this.todos = []
        this.error = 'An error occurred while fetching todos. Please try again later.'
        console.log('simulated')
        return
      }
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        this.todos = response.data
        this.error = null // Clear any previous error
      } catch (error) {
        console.error('Error fetching todos:', error.message)
        this.error = 'An error occurred while fetching todos. Please try again later.'
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.error-message {
  color: red;
  margin-top: 10px;
}
</style>
