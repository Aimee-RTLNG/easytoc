<template>
  <div>
    <div class="card">
      <div class="card-header">
        <i class="fas fa-pencil-alt"></i> Edit Profile
      </div>
      <div class="card-body">
        <form class="form-horizontal">
          <div class="form-group row">
            <label class="col-md-3">Full Name</label>
            <div class="col-md-9">
              <input
                class="form-control"
                :class="{'is-invalid': errors.name}"
                type="text"
                v-model="user.name"
              />
              <span class="help-block">Enter your name, so people you know can recognize you.</span>
              <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-md-3">Email</label>
            <div class="col-md-9">
              <input
                class="form-control"
                :class="{'is-invalid': errors.email}"
                type="email"
                v-model="user.email"
              />
              <span class="help-block">This email will be displayed on your public profile.</span>
              <div class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}</div>
            </div>
          </div>
        </form>
      </div>
      <div class="card-footer">
        <div class="form-group row">
          <div class="col-md-9 offset-md-3">
            <button
              class="btn btn-primary"
              type="button"
              :disabled="submiting"
              @click="updateAuthUser"
            >
              <i class="fas fa-spinner fa-spin" v-if="submiting"></i> Save
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <i class="fas fa-pencil-alt"></i> Edit Password
      </div>
      <div class="card-body">
        <form class="form-horizontal">
          <div class="form-group row">
            <label class="col-md-3">Mot de passe</label>
            <div class="col-md-9">
              <input
                class="form-control"
                :class="{'is-invalid': errors.password}"
                name="password"
                type="password"
                v-model="user.password"
              />
              <span class="help-block">Enter your new password.</span>
              <div class="invalid-feedback" v-if="errors.password">{{errors.password[0]}}</div>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-md-3">Password confirm</label>
            <div class="col-md-9">
              <input
                class="form-control"
                :class="{'is-invalid': errors.password}"
                name="password_confirmation"
                type="password"
                placeholder="Password, Again"
                data-vv-as="password"
              />
              <span class="help-block">Entrez à nouveau votre mot de passe</span>
              <div
                class="invalid-feedback"
                v-if="errors.password_confirmation"
              >{{errors.password_confirmation[0]}}</div>
            </div>
          </div>
        </form>
      </div>
      <div class="card-footer">
        <div class="form-group row">
          <div class="col-md-9 offset-md-3">
            <button
              class="btn btn-primary"
              type="button"
              :disabled="submiting"
              @click="updatePasswordUser"
            >
              <i class="fas fa-spinner fa-spin" v-if="submiting"></i> Save
            </button>
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
      user: {},
      errors: {},
      submiting: false
    };
  },
  mounted() {
    this.getAuthUser();
  },
  methods: {
    getAuthUser() {
      // à changer
      axios.get(`./api/profile/getAuthUser`).then(response => {
        this.user = response.data;
      });
    },
    updateAuthUser() {
      this.submiting = true;
      // à changer
      axios
        .put(`./api/profile/updateAuthUser`, this.user)
        .then(response => {
          this.errors = {};
          this.submiting = false;
          this.$toasted.global.error("Profile updated!");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
          this.submiting = false;
        });
    },
    updatePasswordUser() {
      this.submiting = true;
      // à changer
      axios
        .put(`./api/profile/updatePasswordUser`, this.user)
        .then(response => {
          this.errors = {};
          this.submiting = false;
          this.$toasted.global.error("Password updated!");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
          this.submiting = false;
        });
    }
  }
};
</script>