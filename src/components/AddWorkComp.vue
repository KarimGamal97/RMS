<template>
  <div class="container pt-4" style="">
    <div class="row">
      <div class="col-lg-12">
        <form id="add-work-form" @submit.prevent="addData">
          <div class="controls">
            <div class="row mb-3">
              <!-- Code -->
              <div class="col-md-4">
                <div class="form-group">
                  <label for="form_name">Code</label>
                  <input
                    id="form_code"
                    type="number"
                    class="form-control mt-2"
                    v-model="formData.code"
                  />
                  <div class="help-block with-errors"></div>
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
                  <div class="help-block with-errors"></div>
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
                  <div class="help-block with-errors"></div>
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
                  <div class="help-block with-errors"></div>
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
                  <div class="help-block with-errors"></div>
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
                  <div class="help-block with-errors"></div>
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
                  <div class="help-block with-errors"></div>
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
                  <div class="help-block with-errors"></div>
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
                  <div class="help-block with-errors"></div>
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
                  <div class="help-block with-errors"></div>
                </div>
              </div>
              <!-- Button -->
              <!-- <div class="col-md-12 text-center mt-5">
                <input
                  type="submit"
                  class="btn btn-success btn-send"
                  value="Add Work"
                />
              </div> -->
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
    };
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
</style>
