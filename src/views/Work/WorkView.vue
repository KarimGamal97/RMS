<template>
  <div class="work mt-3">
    <div class="card custom-card">
      <div
        class="card-header p-3 tx-medium my-auto tx-white custom-card-header border-bottom-0 bg-secondary-subtle"
      >
        <h5 class="main-content-label text-black my-auto tx-medium">
          Works List
        </h5>
        <div class="card-options d-flex">
          <button @click="openLink" class="custom-btn">
            Add Work
            <font-awesome-icon icon="square-plus" />
          </button>
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
            <span
              v-if="props.column.field == 'actions'"
              style="display: flex; justify-content: center; gap: 10px"
            >
              <!-- Edit Btn -->
              <b-button
                type="button"
                class="btn btn-warning me-2"
                @click="editRow(props.row._id)"
                v-tippy="{
                  content: 'Edit',
                  arrow: true,
                  interactive: true,
                  trigger: 'mouseenter',
                }"
              >
                <font-awesome-icon icon="pen-to-square"
              /></b-button>
              <!-- Delete Btn -->
              <button
                class="btn btn-danger me-2"
                @click="deleteRow(props.row._id, props.index)"
                v-tippy="{
                  content: 'Delete',
                  arrow: true,
                  interactive: true,
                  trigger: 'mouseenter',
                }"
              >
                <font-awesome-icon icon="trash" />
              </button>
              <!-- Show More Btn -->
              <button
                class="btn btn-info me-2"
                @click="showRow(props.row._id)"
                v-tippy="{
                  content: 'More..',
                  arrow: true,
                  interactive: true,
                  trigger: 'mouseenter',
                }"
              >
                <font-awesome-icon icon="eye" />
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
</template>

<script>
import http from "../../http";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      columns: [
        {
          label: "Code",
          field: "code",
        },
        {
          label: "Type",
          field: "type",
        },
        {
          label: "Owner",
          field: "owner",
        },
        {
          label: "Phone",
          field: "phone",
        },
        {
          label: "Status",
          field: "status",
        },
        {
          label: "Price",
          field: "price",
        },
        {
          label: "Actions",
          field: "actions",
          sortable: false,
        },
      ],
      rows: [],
      tableAnimate: false,
      tableSkelton: true,
    };
  },
  methods: {
    async getData() {
      await http
        .get(`works?limit=100000000000000000000000000000000000000`)
        .then((res) => {
          this.rows = res.data.data;
          this.tableSkelton = false;
          this.tableAnimate = true;
        });
    },
    async deleteRow(id, index) {
      await http.delete(`works/${id}`).then((res) => {
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
    async editRow(id) {
      this.$router.push({ name: "EditWork", params: { id: id } });
      console.log(id);
    },
    async showRow(id) {
      this.$router.push({ name: "ShowWork", params: { id: id } });
      console.log(id);
    },
    openLink() {
      this.$router.push({ name: "AddWorkView" });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
.custom-theme {
  background-color: #ffcc00; /* Replace with your desired background color */
  color: #000; /* Specify the text color */
  /* Add any other custom styles you want */
}
</style>
