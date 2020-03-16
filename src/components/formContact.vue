<template>
  <div class="formContact">
    <form id="formContact">
      <div class="formInputGroup">
        <vs-input
          v-validate="'required'"
          label="Nom"
          name="inputName"
          v-model="form.nom"
          class="mt-5"
        />
        <span
          class="text-danger text-sm"
          v-show="errors.has('inputName')"
        >{{ errors.first('inputName') }}</span>
      </div>

      <div class="formInputGroup">
        <vs-input
          v-validate="'required'"
          label="Prénom"
          name="inputFirstName"
          v-model="form.prenom"
          class="mt-5"
        />
        <span
          class="text-danger text-sm"
          v-show="errors.has('inputFirstName')"
        >{{ errors.first('inputFirstName') }}</span>
      </div>

      <div class="formInputGroup">
        <vs-input
          v-validate="'required'"
          label="E-mail"
          name="inputMail"
          v-model="form.mail"
          class="mt-5"
        />
        <span
          class="text-danger text-sm"
          v-show="errors.has('inputMail')"
        >{{ errors.first('inputMail') }}</span>
      </div>

      <div class="formInputGroup">
        <vs-input
          v-validate="'required'"
          label="Téléphone :"
          name="inputTel"
          v-model="form.tel"
          class="mt-5"
        />
        <span
          class="text-danger text-sm"
          v-show="errors.has('inputTel')"
        >{{ errors.first('inputTel') }}</span>
      </div>

      <div class="formInputGroup">
        <vs-textarea
          v-validate="'required'"
          name="inputMessage"
          v-model="form.message"
          class="mt-5"
          label="Message :"
        />
        <span
          class="text-danger text-sm"
          v-show="errors.has('inputMessage')"
        >{{ errors.first('inputMessage') }}</span>
      </div>

      <btnLireSuite @click.prevent="submitForm" class="mt-5 btnContact" msg="Envoyer" />
    </form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
import btnLireSuite from '@/components/BtnLireSuite.vue'

export default {
  name:'formContact',
  components: {
    btnLireSuite
  },
  data() {
    return {
      form: {
        nom: "",
        prenom: "",
        mail: "",
        tel: "",
        message: ""
      }
    };
  },
  methods: {
    submitForm() {
      this.$validator.validateAll().then(result => {
        if (result) {
          // if form have no errors
          alert("form submitted!");
        } else {
          // form have errors
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>