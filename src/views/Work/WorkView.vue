<template>
  <div class="work mt-3">
    <div class="card custom-card">
      <div
        class="card-header p-3 tx-medium my-auto tx-white custom-card-header border-bottom-0"
        style="background-color: #95a5a6"
      >
        <h5 class="main-content-label tx-white my-auto tx-medium">
          Works List
        </h5>
        <div class="card-options d-flex">
          <b-button @click="openLink">
            Add
            <font-awesome-icon icon="square-plus"
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
            <span
              v-if="props.column.field == 'actions'"
              style="display: flex; gap: 30px"
            >
              <!-- Edit Btn -->
              <b-button
                type="button"
                class="btn btn-warning me-2"
                @click="editRow(props.row._id)"
              >
                <font-awesome-icon icon="pen-to-square"
              /></b-button>
              <!-- Delete Btn -->
              <div class="uiverse">
                <span class="tooltip">Delete</span>
                <button
                  class="btn btn-danger me-2"
                  @click="deleteRow(props.row._id, props.index)"
                >
                  <font-awesome-icon icon="trash" />
                </button>
              </div>
              <!-- Show More Btn -->
              <div class="uiverse">
                <span class="tooltip">show more</span>
                <button
                  class="btn btn-info me-2"
                  @click="showRow(props.row._id)"
                >
                  <font-awesome-icon icon="eye" />
                </button>
              </div>
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
.uiverse {
  position: relative;
  width: 0;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.tooltip {
  position: absolute;
  top: 0;
  font-size: 14px;
  background: #ffffff;
  color: #ffffff;
  padding: 5px 8px;
  border-radius: 5px;
  width: 85px;
  text-align: center;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.tooltip::before {
  position: absolute;
  content: "";
  height: 8px;
  width: 8px;
  background: #ffffff;
  bottom: -3px;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.uiverse:hover .tooltip {
  top: -45px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

svg:hover span,
svg:hover .tooltip {
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}

.uiverse:hover,
.uiverse:hover .tooltip,
.uiverse:hover .tooltip::before {
  background: linear-gradient(320deg, rgb(3, 77, 146), rgb(0, 60, 255));
  color: #ffffff;
}
</style>
