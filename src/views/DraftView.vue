<template>
  <teleport to="body">
    <b-modal
      v-model="showModal"
      ref="modal"
      title="Add Draft"
      @show="resetModal"
      @hidden="resetModal"
      hide-footer
    >
      <form ref="form" @submit.prevent="addData">
        <!-- Name Input -->
        <b-form-group
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="formData.name"
            :state="nameState"
            required
          ></b-form-input>
          <p v-if="nameErrorMsg" class="error mt-2">{{ nameErrorMsg }}</p>
        </b-form-group>
        <!-- Name Input -->
        <!-- Phone Input -->
        <b-form-group
          label="Phone Number"
          label-for="phone-input"
          invalid-feedback="Phone Number is required"
          :state="nameState"
        >
          <b-form-input
            id="phone-input"
            v-model="formData.phone"
            :state="nameState"
            type="number"
          ></b-form-input>
          <p v-if="phoneErrorMsg" class="error mt-2">{{ phoneErrorMsg }}</p>
        </b-form-group>
        <!-- Phone Input -->
        <!-- Order Input -->
        <b-form-group
          label="Client Order"
          label-for="order-input"
          invalid-feedback="Client Order is required"
          :state="nameState"
        >
          <b-form-textarea
            rows="3"
            no-resize
            id="order-input"
            v-model="formData.order"
            :state="nameState"
          ></b-form-textarea>
          <p v-if="orderErrorMsg" class="error mt-2">{{ orderErrorMsg }}</p>
        </b-form-group>
        <!-- Order Input -->
        <!-- Price Input -->
        <b-form-group
          label="Price"
          label-for="price-input"
          invalid-feedback="Price is required"
          :state="nameState"
        >
          <b-form-input
            id="price-input"
            v-model="formData.price"
            :state="nameState"
            type="number"
          ></b-form-input>
          <p v-if="priceErrorMsg" class="error mt-2">{{ priceErrorMsg }}</p>
        </b-form-group>
        <!-- Price Input -->
        <!-- Type SelectBox -->
        <b-form-group
          label="Type"
          label-for="type-select"
          invalid-feedback="Type is required"
          :state="nameState"
        >
          <b-form-select id="type-select" v-model="formData.type">
            <option v-for="type in types" :key="type._id" :value="type.name">
              {{ type.name }}
            </option>
          </b-form-select>
          <p v-if="typeErrorMsg" class="error mt-2">{{ typeErrorMsg }}</p>
        </b-form-group>

        <b-button
          variant="outline-success"
          type="submit"
          class="m-auto d-block mt-4"
          :disabled="dis"
          >Add</b-button
        >
        <div id="loaders4" v-if="loadingFormAdd">
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
    </b-modal>
  </teleport>
  <div class="draft container mt-5">
    <div class="card custom-card">
      <div
        class="card-header p-3 tx-medium my-auto tx-white custom-card-header border-bottom-0"
      >
        <h5 class="main-content-label tx-white my-auto tx-medium">
          Drafts List
        </h5>
        <div class="card-options d-flex">
          <b-button @click="showModal = true"
            >Add Draft <font-awesome-icon icon="square-plus"
          /></b-button>
        </div>
      </div>
      <div class="card-body">
        <vue-good-table
          v-if="tableAnimate"
          :columns="columns"
          :rows="rows"
          :line-numbers="true"
          :select-options="{ enabled: false }"
          :search-options="{ enabled: true }"
          :pagination-options="{
            enabled: true,
            mode: 'records',
          }"
          id="printTable"
        >
          <template #table-row="props">
            <span v-if="props.column.field == 'actions'">
              <b-button
                type="button"
                class="btn btn-warning me-2"
                @click="editRow(props.row)"
                >Edit <font-awesome-icon icon="pen-to-square"
              /></b-button>
              <button
                class="btn btn-danger me-2"
                @click="deleteRow(props.row._id, props.index)"
              >
                Delete
                <font-awesome-icon icon="trash" />
              </button>
            </span>
            <span v-else>
              {{ props.formattedRow[props.column.field] }}
            </span>
          </template>
        </vue-good-table>
        <!-- Start Skelton Animation -->
        <b-skeleton-table
          :rows="5"
          :columns="4"
          :table-props="{ bordered: true, striped: true }"
          v-if="tableSkelton"
        ></b-skeleton-table>
        <!-- End Skelton Animation -->
      </div>
    </div>
  </div>
  <teleport to="body">
    <b-modal v-model="editModal" ref="modal" title="Edit Draft" hide-footer>
      <form ref="form" @submit.prevent="updateRow">
        <!-- Name Input -->
        <b-form-group label="Name" label-for="name-input" :state="nameState">
          <b-form-input
            id="name-input"
            v-model="updatedData.name"
            :state="nameState"
          ></b-form-input>
          <p v-if="unameErrorMsg" class="error mt-2">{{ unameErrorMsg }}</p>
        </b-form-group>
        <!-- Name Input -->
        <!-- Phone Input -->
        <b-form-group
          label="Phone Number"
          label-for="phone-input"
          :state="nameState"
        >
          <b-form-input
            id="phone-input"
            v-model="updatedData.phone"
            :state="nameState"
          ></b-form-input>
          <p v-if="updatePhone" class="error mt-2">{{ updatePhone }}</p>
        </b-form-group>
        <!-- Phone Input -->
        <!-- Order Input -->
        <b-form-group
          label="Client Order"
          label-for="order-input"
          :state="nameState"
        >
          <b-form-textarea
            rows="3"
            no-resize
            id="phone-input"
            v-model="updatedData.order"
            :state="nameState"
          ></b-form-textarea>
          <p v-if="updateOrderErrorMsg" class="error mt-2">
            {{ updateOrderErrorMsg }}
          </p>
        </b-form-group>
        <!-- Order Input -->
        <!-- Price Input -->
        <b-form-group label="Price" label-for="price-input" :state="nameState">
          <b-form-input
            id="price-input"
            v-model="updatedData.price"
            :state="nameState"
          ></b-form-input>
          <p v-if="updatePriceErrorMsg" class="error mt-2">
            {{ updatePriceErrorMsg }}
          </p>
        </b-form-group>
        <!-- Price Input -->
        <!-- Type SelectBox -->
        <b-form-group
          label="Type"
          label-for="type-select"
          invalid-feedback="Type is required"
          :state="nameState"
        >
          <b-form-select id="type-select" v-model="updatedData.type">
            <option v-for="type in types" :key="type._id" :value="type.name">
              {{ type.name }}
            </option>
          </b-form-select>
        </b-form-group>
        <!-- Type SelectBox -->
        <b-button
          variant="outline-success"
          type="submit"
          class="m-auto d-block mt-4"
          :disabled="diss"
          >Update</b-button
        >
        <div id="loaders4" v-if="loadingFormEdit">
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
    </b-modal>
  </teleport>
</template>

<script>
import Swal from "sweetalert2";
import { useToast } from "vue-toastification";
import http from "../http";
export default {
  name: "my-component",
  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      columns: [
        {
          label: "Name",
          field: "name",
        },
        {
          label: "Phone Number",
          field: "phone",
        },
        {
          label: "Client Order",
          field: "order",
        },
        {
          label: "Price",
          field: "price",
        },
        {
          label: "Type",
          field: "type",
        },
        {
          label: "Actions",
          field: "actions",
          sortable: false,
        },
      ],
      rows: [],
      formData: {
        name: "",
        phone: "",
        order: "",
        price: "",
        type: null,
      },
      updatedData: {
        name: "",
        phone: "",
        order: "",
        price: "",
        type: null,
      },
      types: [],
      loadingFormAdd: false,
      loadingFormEdit: false,
      id: null,
      nameState: null,
      showModal: false,
      editModal: false,
      nameErrorMsg: "",
      phoneErrorMsg: "",
      orderErrorMsg: "",
      priceErrorMsg: "",
      typeErrorMsg: "",
      unameErrorMsg: "",
      updatePhone: "",
      updateOrderErrorMsg: "",
      updatePriceErrorMsg: "",
      tableAnimate: false,
      tableSkelton: true,
    };
  },
  computed: {
    dis() {
      const { name, phone, order, price, type } = this.formData;

      if (
        name.length < 3 ||
        name.length > 15 ||
        order.length < 3 ||
        order.length > 265 ||
        phone.length < 7 ||
        phone.length > 15 ||
        (phone && isNaN(phone)) ||
        isNaN(Number(price)) ||
        price < 1 ||
        price > 999999 ||
        order.length < 3 ||
        order.length > 265 ||
        !type
      ) {
        return true;
      }

      return false;
    },
    diss() {
      const { name, phone, order, price, type } = this.updatedData;

      if (
        name.length < 3 ||
        name.length > 15 ||
        order.length < 3 ||
        order.length > 265 ||
        phone.length < 7 ||
        phone.length > 15 ||
        (phone && isNaN(phone)) ||
        isNaN(Number(price)) ||
        price < 1 ||
        price > 999999 ||
        order.length < 3 ||
        order.length > 265 ||
        !type
      ) {
        return true;
      }

      return false;
    },
  },
  watch: {
    "formData.name"(v) {
      if (v.length < 3 || v.length > 15) {
        this.nameErrorMsg = "Name must be between 3 and 15 characters";
      } else if (/\d/.test(v)) {
        this.nameErrorMsg = "Name must not contain numbers";
      } else {
        this.nameErrorMsg = "";
      }
    },
    "formData.phone"(v) {
      if (v.length < 7 || v.length > 15) {
        this.phoneErrorMsg = "Type a valid order between 7 and 15 characters";
      } else {
        this.phoneErrorMsg = "";
      }
    },
    "formData.order"(v) {
      if (v.length < 3 || v.length > 100) {
        this.orderErrorMsg = "Type a valid order between 3 and 100 characters";
      } else {
        this.orderErrorMsg = "";
      }
    },
    "formData.price"(v) {
      if (isNaN(v)) {
        this.priceErrorMsg = "Price a valid price";
      } else if (v > 999999 || v < 0) {
        this.priceErrorMsg =
          "Price can't be more than 6 digits and a positive value";
      } else if (!/\d/.test(v)) {
        this.priceErrorMsg = "Price must contain at least one number";
      } else {
        this.priceErrorMsg = "";
      }
    },
    "formData.type"(v) {
      if (!v) {
        this.typeErrorMsg = "Please choose at least one item";
      } else {
        this.typeErrorMsg = "";
      }
    },
    "updatedData.name"(v) {
      if (v.length < 3 || v.length > 15) {
        this.unameErrorMsg = "Name must be between 3 and 15 characters";
      } else if (/\d/.test(v)) {
        this.unameErrorMsg = "Name must not contain numbers";
      } else {
        this.unameErrorMsg = "";
      }
    },
    "updatedData.phone"(v) {
      if (v.length < 7 || v.length > 15) {
        this.updatePhone = "Type a valid order between 7 and 15 characters";
      } else {
        this.updatePhone = "";
      }
    },
    "updatedData.order"(v) {
      if (v.length < 3 || v.length > 100) {
        this.updateOrderErrorMsg =
          "Type a valid order between 3 and 100 characters";
      } else {
        this.updateOrderErrorMsg = "";
      }
    },
    "updatedData.price"(v) {
      if (isNaN(v)) {
        this.updatePriceErrorMsg = "Price a valid price";
      } else if (v > 999999 || v < 0) {
        this.updatePriceErrorMsg =
          "Price can't be more than 6 digits and a positive value";
      } else if (!/\d/.test(v)) {
        this.updatePriceErrorMsg = "Price must contain at least one number";
      } else {
        this.updatePriceErrorMsg = "";
      }
    },
    "updatedData.type"(v) {
      if (!v) {
        this.typeErrorMsg = "Please choose at least one item";
      } else {
        this.typeErrorMsg = "";
      }
    },
  },
  methods: {
    resetModal() {
      this.formData.name = "";
      this.formData.phone = "";
      this.formData.order = "";
      this.formData.price = "";
      this.formData.type = null;
      this.nameState = null;
      const errorElements = document.querySelectorAll(".error");

      if (errorElements.length) {
        errorElements.forEach((element) => {
          element.style.display = "none";
        });
      }
    },
    async getData() {
      await http
        .get(`drafts?limit=100000000000000000000000000000000000000`)
        .then((res) => {
          this.rows = res.data.data;
          this.tableSkelton = false;
          this.tableAnimate = true;
        });
    },
    async getType() {
      await http.get("types").then((res) => {
        this.types = res.data.data;
        // console.log(this.types);
      });
    },
    async deleteRow(id, index) {
      await http.delete(`drafts/${id}`).then((res) => {
        if (res) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              this.rows.splice(index, 1);
            }
          });
        }
      });
    },
    async addData() {
      this.loadingFormAdd = true;
      await http.post("drafts", this.formData).then((res) => {
        this.rows.push(res.data.data);
        this.showModal = false;
        this.loadingFormAdd = false;
        this.toast.success("Added successfully");
      });
    },
    async editRow(data) {
      this.editModal = true;
      this.updatedData.name = data.name;
      this.updatedData.phone = data.phone;
      this.updatedData.type = data.type;
      this.updatedData.order = data.order;
      this.updatedData.price = data.price;
      this.id = data._id;
    },
    async updateRow() {
      this.loadingFormEdit = true;
      await http.patch(`drafts/${this.id}`, this.updatedData);
      this.getData();
      this.editModal = false;
      this.loadingFormEdit = false;
      this.toast.success("Updated Successfully", {
        position: "top-right",
        timeout: 5000,
      });
    },
    print() {
      this.$htmlToPaper("printMe");
    },
  },
  mounted() {
    this.getData();
    this.getType();
  },
};
</script>

<style scoped>
.error-message {
  color: #c0392b;
  font-size: 14px;
}

.draft-heading {
  background-color: #eee;
  padding: 15px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

@media print {
  .vgt-wrap__footer,
  .vgt-global-search {
    display: none !important;
  }
}
</style>
