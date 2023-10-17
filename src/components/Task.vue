<template>
  <li class="list-group-item task-item">
    <div>
      <h3>Title: {{ task.title }}</h3>
      <p>Description : {{ task.description }}</p>
      <button class="btn btn-danger vue-button" @click="deleteTask">Delete</button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['task'],
  methods: {
    deleteTask() {
      // Emiting the delete action to the tasks store
      this.$emit('deleteTask', this.task.id)
    }
  }
}
</script>

<style scoped lang="scss">
.task-item {
  margin-bottom: 10px;
}
</style>
