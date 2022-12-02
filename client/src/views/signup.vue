<template>
  <div class="body"><br><br /><br />
    <h3 >SignUp</h3>

    <form  class="form" @submit.prevent="signup">
   <div class="content">
            <label
              >Enter Name :<br />

            </label>
            <input
              id="name"
              type="option"
              class="form-control"
              v-model="note.name"
              placeholder="enter name"
            />
            <label
              >Enter Email Id :<br />

            </label>
            <input
              id="email"
              type="email"
              class="form-control"
              v-model="note.email"
              placeholder="enter email id"
            />

            <label>Enter Password:</label>
            <input
              type="password"
              id="password"
              class="form-control"
              v-model="note.password"
              v-on:keyup="countdown"
              placeholder="Enter password"
            />
            <label>Confirm Password:</label>
            <input
              type="password"
              id="confirmpassword"
              class="form-control"
              v-model="note.confirm_password"
              v-on:keyup="countdown"
              placeholder="Enter confirm password"
            />

<br >
            <button class="btn btn-primary mr-4" :disabled="isDisabled">
              Signup
            </button>
            <!-- <button
              type="button"
              class="btn btn-warning mr-4"
              :disabled="!note.title && !note.body"
              @click.prevent="clearInputs()"
            >
              Clear
            </button> -->
            <button
              type="button"
              class="btn btn-danger"
              @click.prevent="backToNotes()"
            >
              Cancel
            </button> &nbsp; &nbsp; &nbsp;
            <button class="btn btn-warning mr-4">
            <router-link to="/login" class="lin">Login</router-link></button>
          </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      note: {},
      maxCount: 280,
      remainingCount: 280,
      password: "",
      confirm_password: "",
      email: "",
      name: "",
      hasError: false,
      isDisabled: false
    };
  },

  methods: {
    signup() {
      const uri = "/notes/signup";
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
    }
  }
};
</script>

<style scoped>
.body
{
  text-align: center;
  margin: -48px -128px;
  width: 100vw;
  height:108vh;
  font-family:sans-serif;
  background: -webkit-linear-gradient(to right, #155799, #159957);
  background: linear-gradient(to right, #155799, #159957);
  color:whitesmoke;
}
form{
    width:40rem;
    height: 25rem;
    margin: 15px 15px;
    margin: auto;
    color:whitesmoke;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(11, 15, 13, 0.582);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
}
.lin{
  color:white;
}
.content{

padding: 35px;
}
</style>
