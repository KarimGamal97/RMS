<template>
  <div class="container pt-4">
    <div class="row">
      <div class="col-lg-12">
        <form id="add-work-form" @submit.prevent="addData">
          <div class="controls">
            <div class="row mb-3">
              <!-- Code -->
              <div class="col-md-4">
                <div class="form-group">
                  <label for="form_code">Code</label>
                  <input
                    id="form_code"
                    type="number"
                    class="form-control mt-2"
                    v-model="formData.code"
                  />
                  <div class="help-block with-errors">
                    <p v-if="codeErrorMsg" class="error mt-2">
                      {{ codeErrorMsg }}
                    </p>
                  </div>
                </div>
              </div>
              <!-- Type -->
              <div class="col-md-4">
                <div class="form-group">
                  <label for="form_name">Type</label>
                  <select class="form-select mt-2" v-model="formData.type">
                    <option
                      v-for="type in types"
                      :key="type._id"
                      :value="type.name"
                    >
                      {{ type.name }}
                    </option>
                  </select>
                  <div class="help-block with-errors">
                    <p v-if="typeErrorMsg" class="error mt-2">
                      {{ typeErrorMsg }}
                    </p>
                  </div>
                </div>
              </div>
              <!-- Status -->
              <div class="col-md-4">
                <div class="form-group">
                  <label for="form_name">Status</label>
                  <select class="form-select mt-2" v-model="formData.status">
                    <option
                      v-for="status in statues"
                      :key="status._id"
                      :value="status.name"
                    >
                      {{ status.name }}
                    </option>
                  </select>
                  <div class="help-block with-errors">
                    <p v-if="statusErrorMsg" class="error mt-2">
                      {{ statusErrorMsg }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mb-3">
              <!-- Name -->
              <div class="col-md-4">
                <div class="form-group">
                  <label for="form_name">Owner Name</label>
                  <input
                    id="form_name"
                    type="text"
                    class="form-control mt-2"
                    v-model="formData.owner"
                  />
                  <div class="help-block with-errors">
                    <p v-if="ownerErrorMsg" class="error mt-2">
                      {{ ownerErrorMsg }}
                    </p>
                  </div>
                </div>
              </div>
              <!-- Phone -->
              <div class="col-md-4">
                <div class="form-group">
                  <label for="form_phone">Phone Number</label>
                  <input
                    id="form_phone"
                    type="tel"
                    class="form-control mt-2"
                    v-model="formData.phone"
                  />
                  <div class="help-block with-errors">
                    <p v-if="phoneErrorMsg" class="error mt-2">
                      {{ phoneErrorMsg }}
                    </p>
                  </div>
                </div>
              </div>
              <!-- Address -->
              <div class="col-md-4">
                <div class="form-group">
                  <label for="form_address">Address</label>
                  <input
                    id="form_address"
                    type="text"
                    class="form-control mt-2"
                    v-model="formData.address"
                  />
                  <div class="help-block with-errors">
                    <div class="help-block with-errors">
                      <p v-if="addressErrorMsg" class="error mt-2">
                        {{ addressErrorMsg }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mb-3">
              <!-- Price -->
              <div class="col-md-4">
                <div class="form-group">
                  <label for="form_price">Price</label>
                  <input
                    id="form_price"
                    type="number"
                    class="form-control mt-2"
                    v-model="formData.price"
                  />
                  <div class="help-block with-errors">
                    <div class="help-block with-errors">
                      <p v-if="priceErrorMsg" class="error mt-2">
                        {{ priceErrorMsg }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Duration -->
              <div class="col-md-4">
                <div class="form-group">
                  <label for="form_duration">Duration</label>
                  <input
                    id="form_duration"
                    type="number"
                    class="form-control mt-2"
                    v-model="formData.duration"
                  />
                  <div class="help-block with-errors">
                    <p v-if="durationErrorMsg" class="error mt-2">
                      {{ durationErrorMsg }}
                    </p>
                  </div>
                </div>
              </div>
              <!-- Insurance -->
              <div class="col-md-4">
                <div class="form-group">
                  <label for="form_price">Insurance</label>
                  <input
                    id="form_insurance"
                    type="number"
                    class="form-control mt-2"
                    v-model="formData.insurance"
                  />
                  <div class="help-block with-errors">
                    <p v-if="insuranceErrorMsg" class="error mt-2">
                      {{ insuranceErrorMsg }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <!-- Details -->
              <div class="col-md-12">
                <div class="form-group">
                  <label for="form_message">Details</label>
                  <textarea
                    id="form_details"
                    name="details"
                    class="form-control mt-2"
                    rows="4"
                    v-model="formData.details"
                  ></textarea>
                  <div class="help-block with-errors">
                    <p v-if="detailsErrorMsg" class="error mt-2">
                      {{ detailsErrorMsg }}
                    </p>
                  </div>
                </div>
              </div>
              <!-- Button -->
              <b-button
                variant="outline-success"
                type="submit"
                class="m-auto d-block mt-4"
                >Add</b-button
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import http from "../http";
import { useToast } from "vue-toastification";
export default {
  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      formData: {
        code: "",
        type: null,
        status: null,
        owner: "",
        phone: "",
        price: "",
        address: "",
        details: "",
        duration: "",
        insurance: "",
      },
      types: null,
      statues: null,
      codeErrorMsg: "",
      typeErrorMsg: "",
      statusErrorMsg: "",
      ownerErrorMsg: "",
      phoneErrorMsg: "",
      priceErrorMsg: "",
      addressErrorMsg: "",
      detailsErrorMsg: "",
      durationErrorMsg: "",
      insuranceErrorMsg: "",
    };
  },
  watch: {
    // Fe Moshkla hna
    "formData.code"(v) {
      if (v.length < 1) {
        this.codeErrorMsg = "Code must be at least one digit";
      } else if (v.length < 0) {
        this.codeErrorMsg = "Code can't be a negative value";
      } else if (v.length > 4) {
        this.codeErrorMsg = "Code can't be more than four digits";
      } else {
        this.codeErrorMsg = "";
      }
    },
    "formData.type"(v) {
      if (!v) {
        this.typeErrorMsg = "Please choose at least one item";
      } else {
        this.typeErrorMsg = "";
      }
    },
    "formData.status"(v) {
      if (!v) {
        this.statusErrorMsg = "Please choose at least one item";
      } else {
        this.statusErrorMsg = "";
      }
    },
    "formData.owner"(v) {
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
    "formData.address"(v) {
      if (v.length < 6 || v.length > 60) {
        this.addressErrorMsg = "Address must be between 6 and 60 characters";
      } else if (/\d/.test(v)) {
        this.addressErrorMsg = "Address must not contain numbers";
      } else {
        this.addressErrorMsg = "";
      }
    },
    "formData.price"(v) {
      if (isNaN(v)) {
        this.priceErrorMsg = "Type a valid price";
      } else if (v > 999999) {
        this.priceErrorMsg = "Price can't be more than 7 digits ";
      } else if (v < 0) {
        this.priceErrorMsg = "Price can't be a negative value";
      } else if (!/\d/.test(v)) {
        this.priceErrorMsg = "Price must contain at least one number";
      } else {
        this.priceErrorMsg = "";
      }
    },
    "formData.duration"(v) {
      if (isNaN(v)) {
        this.durationErrorMsg = "Type a valid duration";
      } else if (v > 365) {
        this.durationErrorMsg = "Duration can't be more than one year";
      } else if (v < 0) {
        this.durationErrorMsg = "Duration can't be a negative value";
      } else if (!/\d/.test(v)) {
        this.durationErrorMsg = "Duration must contain at least one number";
      } else {
        this.durationErrorMsg = "";
      }
    },
    "formData.insurance"(v) {
      if (isNaN(v)) {
        this.insuranceErrorMsg = "Type a valid duration";
      } else if (v > 99999) {
        this.insuranceErrorMsg = "Insurance can't be more than 5 digits";
      } else if (v < 0) {
        this.insuranceErrorMsg = "Insurance can't be a negative value";
      } else if (!/\d/.test(v)) {
        this.insuranceErrorMsg = "Insurance must contain at least one number";
      } else {
        this.insuranceErrorMsg = "";
      }
    },
    "formData.details"(v) {
      if (v.length < 5) {
        this.detailsErrorMsg = "Details must be more than 5 characters";
      } else if (v.length > 300) {
        this.detailsErrorMsg = "Details can't be longer than 300 characters";
      } else {
        this.detailsErrorMsg = "";
      }
    },
  },
  methods: {
    async getType() {
      await http.get("types").then((res) => {
        this.types = res.data.data;
      });
    },
    async getStatus() {
      await http.get("status").then((res) => {
        this.statues = res.data.data;
      });
    },
    async addData() {
      await http.post("works", this.formData).then((res) => {
        this.$router.push({ name: "work" });
        console.log(res.data.data);
        this.toast.success("Added successfully");
      });
    },
  },
  mounted() {
    this.getType();
    this.getStatus();
  },
};
</script>

<style scoped>
textarea {
  resize: none;
}
.error {
  color: #c0392b;
  font-size: 14px;
}
</style>
