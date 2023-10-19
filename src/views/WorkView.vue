<template>
  <div class="work mt-3">
    <div class="card custom-card">
      <div
        class="card-header p-3 tx-medium my-auto tx-white custom-card-header border-bottom-0"
      >
        <h5 class="main-content-label tx-white my-auto tx-medium">
          Works List
        </h5>
        <div class="card-options d-flex">
          <b-button @click="showModal = true"
            >Add Work <font-awesome-icon icon="square-plus"
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
              <button class="btn btn-info me-2" @click="deleteRow(props.row)">
                Show
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
import http from "../http";
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
          label: "Address",
          field: "address",
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
  },
  mounted() {
    this.getData();
  },
};
</script>

<style></style>
