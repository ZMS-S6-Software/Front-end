<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { getUserById } from './assets/apicalls'
</script>

<template>
  <!-- <header> -->
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <!-- <div class="wrapper"> -->
      <!-- <HelloWorld msg="You did it!" /> -->

      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    <!-- </div> -->
  <!-- </header> -->

  <!-- <RouterView /> -->

  <div class="col-md-6">
    <label class="small mb-1" for="inputFirstName">Patient ID</label>
    <input class="form-control" id="inputFirstName" v-model="userid" type="text" placeholder="ID" value="ID">
  </div>
  <div class="col-md-6">
    <button class="btn btn-primary" v-on:click="getPatient" type="button">Get</button>
  </div>


  <!-- edit patient -->
  <div class="container-xl px-4 mt-4">
    <hr class="mt-0 mb-4">
    <div class="row">
      <div class="col-xl-4">
        <div class="card mb-4 mb-xl-0">
          <div class="card-header">Profile Picture</div>
          <div class="card-body text-center">
            <img class="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png"
              alt="">
          </div>
        </div>
      </div>
      <div class="col-xl-8">
        <div class="card mb-4">
          <div class="card-header">Account Details</div>
          <div class="card-body">
            <form>
              <div class="row gx-3 mb-3">
                <div class="col-md-6">
                  <label class="small mb-1" for="inputFirstName">First name</label>
                  <input class="form-control" id="inputFirstName" type="text" placeholder="Enter your first name"
                    v-model="firstname" value="John">
                </div>
                <div class="col-md-6">
                  <label class="small mb-1" for="inputLastName">Prefix</label>
                  <input class="form-control" id="inputLastName" type="text" placeholder="Enter your last name"
                    v-model="prefix" value="from">
                </div>
                <div class="col-md-6">
                  <label class="small mb-1" for="inputLastName">Last name</label>
                  <input class="form-control" id="inputLastName" type="text" placeholder="Enter your last name"
                    v-model="lastname" value="Doe">
                </div>
                <div class="col-md-6">
                  <label class="small mb-1" for="inputLastName">Email</label>
                  <input class="form-control" id="inputLastName" type="text" placeholder="Enter your last name"
                    v-model="email" value="example@email.com">
                </div>
                <div class="col-md-6">
                  <label class="small mb-1" for="inputLastName">Bio</label>
                  <input class="form-control" id="inputLastName" type="text" placeholder="Enter your last name"
                    v-model="bio" value="Patient bio">
                </div>
              </div>
              <button class="btn btn-primary" v-on:click="changePatient" type="button">Save changes</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userid: '',

      firstname: '',
      prefix: '',
      lastname: '',
      email: '',
      bio: '',
    }
  },
  methods: {
    async getPatient() {
      console.log(this.userid)
      const user = await getUserById(this.userid);
      // console.log('user', user);

      // this.firstname = user[0].firstname;
      // this.prefix = user[0].prefix;
      // this.lastname = user[0].lastname;
      // this.email = user[0].email;
      // this.bio = user[0].bio;
    },
    async changePatient() {
      console.log('123123123123')
    }
  }
}
</script>


<style scoped>
body {
  margin-top: 20px;
  background-color: #f2f6fc;
  color: #69707a;
}

.img-account-profile {
  height: 10rem;
}

.rounded-circle {
  border-radius: 50% !important;
}

.card {
  box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%);
}

.card .card-header {
  font-weight: 500;
}

.card-header:first-child {
  border-radius: 0.35rem 0.35rem 0 0;
}

.card-header {
  padding: 1rem 1.35rem;
  margin-bottom: 0;
  background-color: rgba(33, 40, 50, 0.03);
  border-bottom: 1px solid rgba(33, 40, 50, 0.125);
}

.form-control,
.dataTable-input {
  display: block;
  width: 100%;
  padding: 0.875rem 1.125rem;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1;
  color: #69707a;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #c5ccd6;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.35rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.nav-borders .nav-link.active {
  color: #0061f2;
  border-bottom-color: #0061f2;
}

.nav-borders .nav-link {
  color: #69707a;
  border-bottom-width: 0.125rem;
  border-bottom-style: solid;
  border-bottom-color: transparent;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0;
  padding-right: 0;
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>