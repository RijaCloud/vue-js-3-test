<template>
  <div>
    <h2>Contact Us</h2>
    <form @submit.prevent="submitForm" class="contact-form">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="formData.message" class="form-control" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary vue-button">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Just printing the form data in the console as requested
      console.log('Form submitted:', this.formData)
    }
  }
}
</script>

<style scoped lang="scss">
.contact-form {
  margin: auto;
  .form-group {
    position: relative;
    margin-bottom: 30px;
    border-bottom: 2px solid #ccc;
    input,
    textarea {
      padding: 9px;
      color: #666;
      width: 100%;
      outline: none;
      border: none;
      border-radius: 5px;
    }
  }
}
</style>
