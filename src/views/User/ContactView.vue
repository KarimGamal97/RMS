<template>
  <div class="container">
    <div class="row">
      <div class="col-8 mx-auto">
        <form class="text-center pt-3" @submit.prevent="sendData">
          <h4 class="mb-4 fw-bold">Contact Us</h4>
          <!-- name -->
          <div class="col-md-12 col-sm-12 mb-4">
            <input
              type="text"
              class="form-control"
              placeholder="Your Name"
              v-model="formData.name"
            />
            <p v-if="ownerErrorMsg" class="error mt-2">
              {{ ownerErrorMsg }}
            </p>
          </div>
          <!-- Phone number -->
          <div class="col-md-12 col-sm-12 mb-4">
            <input
              type="text"
              class="form-control"
              placeholder="Phone number"
              v-model="formData.phone"
            />
            <p v-if="phoneErrorMsg" class="error mt-2">
              {{ phoneErrorMsg }}
            </p>
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
            <p v-if="emailErrorMsg" class="error mt-2">
              {{ emailErrorMsg }}
            </p>
          </div>
          <!-- Address -->
          <div class="col-md-12 col-sm-12 mb-4">
            <input
              type="text"
              class="form-control"
              placeholder="Your Address"
              v-model="formData.address"
            />
            <p v-if="addressErrorMsg" class="error mt-2">
              {{ addressErrorMsg }}
            </p>
          </div>
          <!-- Message -->
          <div class="col-md-12 col-sm-12 mb-4">
            <textarea
              type="text"
              class="form-control mb-4"
              placeholder="Your Message"
              v-model="formData.msg"
              rows="5"
              cols="50"
              style="resize: none"
            />
            <p v-if="messageErrorMsg" class="error mt-2">
              {{ messageErrorMsg }}
            </p>
          </div>
          <!-- Submit button -->
          <b-button
            variant="outline-success"
            type="submit"
            class="m-auto d-block mt-4"
            :disabled="isValid"
            >Send
            <font-awesome-icon icon="paper-plane" />
          </b-button>
          <div id="loaders4" v-if="loadingForm">
            <div id="Loading">
              <div class="text-center">
                <div class="rms-ripple">
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import http from "../../http";
import { useToast } from "vue-toastification";
// import emailjs from "emailjs-com";
export default {
  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      formData: {
        name: "",
        phone: "",
        email: "",
        address: "",
        msg: "",
      },
      loadingForm: false,
      ownerErrorMsg: "",
      phoneErrorMsg: "",
      emailErrorMsg: "",
      messageErrorMsg: "",
      addressErrorMsg: "",
    };
  },
  computed: {
    isValid() {
      const { name, phone, email, msg, address } = this.formData;
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (
        name.length < 3 ||
        name.length > 15 ||
        phone.length < 7 ||
        phone.length > 15 ||
        (phone && isNaN(phone)) ||
        msg.length < 5 ||
        msg.length > 256 ||
        !email.match(emailPattern) ||
        address.length < 5 ||
        address.length > 40
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
      } else if (isNaN(v)) {
        this.phoneErrorMsg = "Phone number can only contains digits";
      } else {
        this.phoneErrorMsg = "";
      }
    },
    "formData.msg"(v) {
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
        this.emailErrorMsg = "Email must be more than 5 characters";
      } else if (v.length > 256) {
        this.emailErrorMsg = "Email can't be longer than 256 characters";
      } else if (!/\S+@\S+\.\S+/.test(v)) {
        this.emailErrorMsg = "Invalid email format";
      } else {
        this.emailErrorMsg = "";
      }
    },
    "formData.address"(v) {
      if (v.length < 5 || v.length > 40) {
        this.addressErrorMsg = "Address must be between 5 and 40 characters";
      } else {
        this.addressErrorMsg = "";
      }
    },
  },
  methods: {
    // sendEmail() {
    //   const emailParams = {
    //     from_name: this.formData.name,
    //     from_phone: this.formData.phone,
    //     from_email: this.formData.email,
    //     from_address: this.formData.address,
    //     message: this.formData.msg,
    //   };
    //   emailjs
    //     .send("service_mjs3ihv", "template_raapfvl", emailParams)
    //     .then((response) => {
    //       console.log("Email sent:", response);
    //     })
    //     .catch((error) => {
    //       console.error("Email not sent:", error);
    //     });
    // },
    async sendData() {
      this.loadingForm = true;
      await http.post("contact", this.formData).then((res) => {
        console.log(res.data.data);
        this.toast.success("Sent successfully");
        this.loadingForm = false;
      });
    },
  },
};
</script>

<style></style>
