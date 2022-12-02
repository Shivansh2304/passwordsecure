<template >
  <div class="body">
  <div class="head">
      <br> <br /><br /> <h3 >LOGIN</h3>
    </div>
    <br />
    <div>
      {{}}
    </div>
    <form class="form" @submit.prevent="login">
        <div class="content">
            <label
              >Enter Email id:<br />

            </label>
            <input
              id="title"
              type="email"
              class="form-control"
              v-model="note.email"
              placeholder="enter email id"
            />
<br />
            <label>Enter Password:</label>
            <input
              type="password"
              id="body"
              class="form-control"
              v-model="note.password"
              v-on:keyup="countdown"
              placeholder="Enter password"
            />
                 <br>

            <button class="btn btn-primary mr-4" :disabled="isDisabled">
              Login
            </button>

             <!-- <button
              type="button"
              class="btn btn-warning mr-4"
              :disabled="!note.title && !note.body"
              @click.prevent="clearInputs()"
            >
              Clear
            </button> -->
            <!-- <button
              type="button"
              class="btn btn-danger"
              @click.prevent="backToNotes()"
            >
              Cancel
            </button> -->
            &nbsp; &nbsp; &nbsp;
            <button class="btn btn-success">
            <router-link to="/signup" class="link">Signup</router-link></button>
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
      email: "",
      hasError: false,
      isDisabled: false,
      error: ""
    };
  },

  methods: {
    login() {
      const uri = "/notes/login";
      this.axios.post(uri, this.note).then((res) => {
        console.log(res);
        this.$router.push({ name: "notes" });
      }).catch(function (error) {
        // handle error
        alert("Something went wrong ");
        console.log(error);
      })
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
 background-color: #344D67;
  color:whitesmoke;
}
form{
    width:30rem;
    height: 20rem;
    margin: 15px 15px;
    margin: auto;
    color:whitesmoke;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(11, 15, 13, 0.582);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
}
.content{

  padding: 35px;
}

.box{
  text-align: center;
  border-style: solid black;
  border-radius: 25% 10%;
}
.link{
  color:whitesmoke;
}

</style>
