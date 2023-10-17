<template>
  <!-- Start Add Modal -->
  <teleport to="body">
    <b-modal
      v-model="showModal"
      ref="modal"
      title="Add Your New Draft !"
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
        </b-form-group>
        <!-- Phone Input -->
        <!-- Order Input -->
        <b-form-group
          label="Client Order"
          label-for="order-input"
          invalid-feedback="Client Order is required"
          :state="nameState"
        >
          <b-form-input
            id="phone-input"
            v-model="formData.order"
            :state="nameState"
          ></b-form-input>
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
        </b-form-group>
        <!-- Type SelectBox -->
        <b-button
          variant="outline-success"
          type="submit"
          class="m-auto d-block mt-4"
          >Add</b-button
        >
      </form>
    </b-modal>
  </teleport>
  <!-- End Add Modal -->
  <!-- Start Table -->
  <div class="draft container mt-5">
    <div class="card custom-card">
      <div
        class="card-header p-3 tx-medium my-auto tx-white custom-card-header border-bottom-0"
      >
        <h5 class="main-content-label tx-white my-auto tx-medium">
          Drafts List
        </h5>
        <div class="card-options d-flex">
          <!-- <div>
            <b-dropdown id="dropdown-1" text="Print Options" class="m-md-2">
              <b-dropdown-item v-print="'#printTable'"
                >Normal Print</b-dropdown-item
              >
              <b-dropdown-item>Pdf</b-dropdown-item>
              <b-dropdown-item>Excel Sheet</b-dropdown-item>
            </b-dropdown>
          </div> -->
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
  <!-- End Table -->
  <!-- Start Edit Modal -->
  <teleport to="body">
    <b-modal
      v-model="editModal"
      ref="modal"
      title="Edit on your Draft !"
      hide-footer
    >
      <form ref="form" @submit.prevent="updateRow">
        <!-- Name Input -->
        <b-form-group label="Name" label-for="name-input" :state="nameState">
          <b-form-input
            id="name-input"
            v-model="updatedData.name"
            :state="nameState"
          ></b-form-input>
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
        </b-form-group>
        <!-- Phone Input -->
        <!-- Order Input -->
        <b-form-group
          label="Client Order"
          label-for="order-input"
          :state="nameState"
        >
          <b-form-input
            id="phone-input"
            v-model="updatedData.order"
            :state="nameState"
          ></b-form-input>
        </b-form-group>
        <!-- Order Input -->
        <!-- Price Input -->
        <b-form-group label="Price" label-for="price-input" :state="nameState">
          <b-form-input
            id="price-input"
            v-model="updatedData.price"
            :state="nameState"
          ></b-form-input>
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
          >Update</b-button
        >
      </form>
    </b-modal>
  </teleport>
  <!-- End Edit Modal -->
</template>

<script>
import Swal from "sweetalert2";
import { useToast } from "vue-toastification";
import http from "../http";
export default {
  name: "my-component",
  // Print

  // Toast
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
          sort: false,
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
      id: null,
      nameState: null,
      showModal: false,
      editModal: false,
      // nameErrorMsg: "",
      // phoneErrorMsg: "",
      // orderErrorMsg: "",
      // priceErrorMsg: "",
      // typeErrorMsg: "",
      tableAnimate: false,
      tableSkelton: true,
    };
  },
  methods: {
    resetModal() {
      this.formData.name = "";
      this.formData.phone = "";
      this.formData.order = "";
      this.formData.price = "";
      this.formData.type = null;
      this.nameState = null;
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
      await http
        .delete(`https://apis-03au.onrender.com/api/drafts/${id}`)
        .then((res) => {
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
      await http
        .post("https://apis-03au.onrender.com/api/drafts", this.formData)
        .then((res) => {
          this.rows.push(res.data.data);
          this.formData = {};
          this.showModal = false;
          this.toast.success("Your draft added successfully");
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
      await http.patch(
        `https://apis-03au.onrender.com/api/drafts/${this.id}`,
        this.updatedData
      );
      this.getData();
      this.editModal = false;
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
  // watch: {
  //   "formData.name"(v) {
  //     if (v.length < 3 || v.length > 15) {
  //       this.nameErrorMsg = "Name must be between 3 and 15 characters";
  //     } else if (/\d/.test(v)) {
  //       this.nameErrorMsg = "Name must not contain numbers";
  //     } else {
  //       this.nameErrorMsg = "";
  //     }
  //   },
  //   "formData.phone"(v) {
  //     if (v.length != 11) {
  //       this.phoneErrorMsg = "Type a valid number with (11) numbers only";
  //     } else {
  //       this.phoneErrorMsg = "";
  //     }
  //   },
  //   "formData.order"(v) {
  //     if (v.length < 3 || v.length > 100) {
  //       this.orderErrorMsg = "Type a valid order between 3 and 100 characters";
  //     } else {
  //       this.orderErrorMsg = "";
  //     }
  //   },
  //   "formData.price"(v) {
  //     if (isNaN(v)) {
  //       this.priceErrorMsg = "Type a valid price";
  //     } else if (v >= 9.999e8 || v < 0) {
  //       this.priceErrorMsg =
  //         "Price can't be more than 7 digits and a positive value";
  //     } else if (!/\d/.test(v)) {
  //       this.priceErrorMsg = "Price must contain at least one number";
  //     } else {
  //       this.priceErrorMsg = "";
  //     }
  //   },
  //   "formData.type"(v) {
  //     if (!v) {
  //       this.typeErrorMsg = "Please choose at least one item";
  //     } else {
  //       this.typeErrorMsg = "";
  //     }
  //   },
  // },
  // computed: {
  //   disBtn() {
  //     const { name, phone, order, price, type } = this.formData;
  //     if (
  //       name.length < 3 ||
  //       name.length > 15 ||
  //       !type ||
  //       order.length < 3 ||
  //       order.length > 100 ||
  //       isNaN(Number(phone)) ||
  //       isNaN(Number(price))
  //     ) {
  //       return true;
  //     }
  //     return false;
  //   },
  // },
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
