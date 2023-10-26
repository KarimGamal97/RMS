<template>
  <div class="container">
    <div class="row">
      <div class="col-8 mx-auto">
        <form class="text-center pt-3" @submit.prevent="sendData">
          <h4 class="mb-4 fw-bold">FAQ'S</h4>
          <!-- name -->
          <div class="col-md-12 col-sm-12 mb-4">
            <input
              type="text"
              class="form-control"
              placeholder="Your Name"
              v-model="formData.name"
            />
          </div>
          <!-- Phone number -->
          <div class="col-md-12 col-sm-12 mb-4">
            <input
              type="text"
              class="form-control"
              placeholder="Phone number"
              v-model="formData.phone"
            />
          </div>
          <!-- E-mail -->
          <div class="col-md-12 col-sm-12 mb-4">
            <input
              type="email"
              class="form-control"
              placeholder="E-mail"
              v-model="formData.email"
              required
            />
          </div>
          <!-- Message -->
          <div class="col-md-12 col-sm-12 mb-4">
            <textarea
              type="text"
              class="form-control mb-4"
              placeholder="Your Message"
              v-model="formData.message"
              rows="5"
              cols="50"
              style="resize: none"
            />
          </div>
          <!-- Sign up button -->
          <button
            class="btn btn-success my-4 btn-block"
            type="submit"
            :disabled="isValid"
          >
            Send
            <font-awesome-icon icon="paper-plane" />
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import http from "../http";
// import { useToast } from "vue-toastification";
export default {
  //   setup() {
  //     const toast = useToast();
  //     return { toast };
  //   },
  data() {
    return {
      formData: {
        name: "",
        phone: "",
        email: "",
        message: "",
      },
    };
  },
  computed: {
    isValid() {
      const { name, phone, email, message } = this.formData;
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (
        name.length < 3 ||
        name.length > 15 ||
        phone.length < 7 ||
        phone.length > 15 ||
        (phone && isNaN(phone)) ||
        message.length < 5 ||
        message.length > 256 ||
        !email.match(emailPattern)
      ) {
        return true;
      }
      return false;
    },
  },
  watch: {
    "formData.name"(v) {
      if (v.length < 3 || v.length > 15) {
        this.ownerErrorMsg = "Name must be between 3 and 15 characters";
      } else if (/\d/.test(v)) {
        this.ownerErrorMsg = "Name must not contain numbers";
      } else {
        this.ownerErrorMsg = "";
      }
    },
    "formData.phone"(v) {
      if (v.length < 7 || v.length > 15) {
        this.phoneErrorMsg = "Type a valid phone between 7 and 15 numbers";
      } else {
        this.phoneErrorMsg = "";
      }
    },
    "formData.message"(v) {
      if (v.length < 5) {
        this.messageErrorMsg = "Message must be more than 5 characters";
      } else if (v.length > 256) {
        this.messageErrorMsg = "Message can't be longer than 256 characters";
      } else {
        this.messageErrorMsg = "";
      }
    },
    "formData.email"(v) {
      if (v.length < 5) {
        this.messageErrorMsg = "Message must be more than 5 characters";
      } else if (v.length > 256) {
        this.messageErrorMsg = "Message can't be longer than 256 characters";
      } else {
        this.messageErrorMsg = "";
      }
    },
  },
  methods: {
    // async sendData() {
    //   await http.post("contact", this.formData).then((res) => {
    //     console.log(res.data.data);
    //     this.toast.success("Sent successfully");
    //   });
    //   },
    sendData() {
      console.log(this.formData);
    },
  },
};
</script>

<style></style>
