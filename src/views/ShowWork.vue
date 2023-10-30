<template>
  <div class="container pt-4">
    <div class="row">
      <div class="col-lg-12">
        <form id="add-work-form">
          <div class="controls">
            <div class="row mb-3">
              <!-- Code -->
              <div class="col-md-4">
                <div class="form-group">
                  <h3>Code : {{ formData.code }}</h3>
                </div>
              </div>
              <!-- Type -->
              <div class="col-md-4">
                <div class="form-group">
                  <h3>Type : {{ formData.type }}</h3>
                </div>
              </div>
              <!-- Status -->
              <div class="col-md-4">
                <div class="form-group">
                  <h3>Status : {{ formData.status }}</h3>
                </div>
              </div>
            </div>
            <div class="row mb-3">
              <!-- Name -->
              <div class="col-md-4">
                <div class="form-group">
                  <h3>Owner Name : {{ formData.owner }}</h3>
                </div>
              </div>
              <!-- Phone -->
              <div class="col-md-4">
                <div class="form-group">
                  <h3>Phone Number : {{ formData.phone }}</h3>
                </div>
              </div>
              <!-- Address -->
              <div class="col-md-4">
                <div class="form-group">
                  <h3>Address : {{ formData.address }}</h3>
                </div>
              </div>
            </div>
            <div class="row mb-3">
              <!-- Price -->
              <div class="col-md-4">
                <div class="form-group">
                  <h3>Price : {{ formData.price }}</h3>
                </div>
              </div>
              <!-- Duration -->
              <div class="col-md-4">
                <div class="form-group">
                  <h3>Duration : {{ formData.duration }} days</h3>
                </div>
              </div>
              <!-- Insurance -->
              <div class="col-md-4">
                <div class="form-group">
                  <h3>Insurance : {{ formData.insurance }}</h3>
                </div>
              </div>
            </div>
            <div class="row">
              <!-- Details -->
              <div class="col-md-12">
                <div class="form-group">
                  <h3>Details : {{ formData.details }}</h3>
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

    async getById() {
      await http.get(`works/${this.$route.params.id}`).then((res) => {
        this.formData.code = res.data.data.code;
        this.formData.address = res.data.data.address;
        this.formData.insurance = res.data.data.insurance;
        this.formData.owner = res.data.data.owner;
        this.formData.phone = res.data.data.phone;
        this.formData.price = res.data.data.price;
        this.formData.details = res.data.data.details;
        this.formData.status = res.data.data.status;
        this.formData.type = res.data.data.type;
        if (res.data.data.duration) {
          this.formData.duration = res.data.data.duration;
        }
      });
    },
  },
  mounted() {
    this.getType();
    this.getStatus();
    this.getById();
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
