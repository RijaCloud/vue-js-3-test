const state = {
  tasks: [
    { id: 1, title: 'Task 1', description: 'Description for Task 1' },
    { id: 2, title: 'Task 2', description: 'Description for Task 2' }
  ]
}

const mutations = {
  addTask(state, newTask) {
    state.tasks.push(newTask)
  },
  deleteTask(state, taskId) {
    state.tasks = state.tasks.filter((task) => task.id !== taskId)
  }
}

const actions = {
  addTask({ commit }, newTask) {
    commit('addTask', newTask)
  },
  deleteTask({ commit }, taskId) {
    commit('deleteTask', taskId)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
