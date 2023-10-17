<template>
  <div class="task-list">
    <h2>Tasks List</h2>
    <form @submit.prevent="submitForm" class="flex">
      <div class="form-group">
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="newTask.title" required />
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea id="description" v-model="newTask.description" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary vue-button">Add Task</button>
    </form>
    <ul class="list-group">
      <Task v-for="task in tasks" :key="task.id" :task="task" @deleteTask="deleteTask" />
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Task from './Task.vue'

export default {
  components: {
    Task
  },
  data() {
    return {
      newTask: {
        title: '',
        description: ''
      }
    }
  },
  computed: {
    // get from tasks store the tasks state
    ...mapState('tasks', ['tasks'])
  },
  methods: {
    // get from tasks store the add tasks method

    ...mapActions('tasks', ['addTask']),
    // dispatch the delete action
    deleteTask(taskId) {
      this.$store.dispatch('tasks/deleteTask', taskId)
    },
    // handle the submit action
    submitForm() {
      if (this.newTask.title && this.newTask.description) {
        this.addTask({ ...this.newTask, id: Date.now() })
        this.newTask = { title: '', description: '' } // Réinitialisez le formulaire après l'ajout de la tâche
      } else {
        alert('Veuillez remplir tous les champs du formulaire.')
      }
    },
    async fetchTodos() {
      try {
        const response = await this.$axios.get('https://jsonplaceholder.typicode.com/todos')
        this.todos = response.data
      } catch (error) {
        console.error('Error fetching todos:', error.message)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.task-list {
  max-width: 600px;
  margin: auto;

  .form-group {
    margin-bottom: 10px;
    display: flex;
    column-gap: 20px;
    input,
    textarea {
      border: none;
      height: 30px;
      border-radius: 5px;
    }
  }
}

.list-group {
  padding-left: 0 !important;
  margin: 0;
  margin-top: 20px;
  border-top: 2px solid #fff;
  li {
    list-style: none;
    padding: 0;
  }
}
.flex {
  input,
  textarea {
    width: 100%;
  }
  textarea {
    min-height: 200px;
  }
  button {
    margin-left: auto;
    display: block;
  }
}
</style>
