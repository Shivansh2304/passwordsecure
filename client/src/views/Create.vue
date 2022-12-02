<template>
  <div class="ind">
    <div class="d-flex justify-content-center">
      <div class="alert alert-primary border-primary p-2 m-0" role="alert">
        <h3 class="alert-heading text-center">Secure Notes</h3>
        <hr class="m-2" />

      </div>
    </div>
    <br />
    <form @submit.prevent="addNote">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="form-group">
            <label
              > Type Of Password:<br />
            </label>
            <input
              id="title"
              type="option"
              class="form-control"
              v-model="note.title"
              minlength="4"
              maxlength="23"
              placeholder="type of password"
            />
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="form-group">
            <label>Write your Password here:</label>
            <textarea
              id="body"
              class="form-control"
              v-model="note.body"
              v-on:keyup="countdown"
              minlength="4"
              maxlength="280"
              rows="9"
              placeholder="Enter at least 4 characters"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="form-group">
          <div class="col-md-6 d-flex">
            <button class="btn btn-primary mr-4" :disabled="isDisabled">
              Create
            </button>
            <button
              type="button"
              class="btn btn-warning mr-4"
              :disabled="!note.title && !note.body"
              @click.prevent="clearInputs()"
            >
              Clear
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click.prevent="backToNotes()"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      note: { email: localStorage.getItem("email") },
      maxCount: 280,
      remainingCount: 280,
      title: "",
      body: "",
      email: "",
      hasError: false,
      isDisabled: true
    };
  },

  methods: {
    addNote() {
      const uri = "/notes/add";
      this.axios.post(uri, this.note).then(() => {
        this.$router.push({ name: "notes" });
      });
    },
    clearInputs() {
      this.note = {};
      this.isDisabled = true;
      this.remainingCount = 280;
    },
    backToNotes() {
      this.$router.push("/");
    },
    countdown() {
      this.remainingCount = this.maxCount - this.note.body.length;
      this.hasError = this.remainingCount < 5;
      this.isDisabled = this.note.title.length < 4 || this.note.body.length < 4;
    }
  }
};
</script>
<style scoped>
.ind{
  background-color:#173e43;
  width: 100vw;
  height:108vh;
  margin: -24px -128px;
}
</style>
