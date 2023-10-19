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
          <div class="card-options" v-if="computedTableData.length > 0">
            <div class="d-flex justify-content-end">
              <button class="btn btn-primary me-2" v-print="printObj">
                Print
                <font-awesome-icon icon="print" />
              </button>
              <!-- <button class="btn btn-primary me-2" @click="exportPdf">
                      PDF
                    </button>
                    <button class="btn btn-primary me-2" @click="exportToExcel">
                      Excel
                    </button> -->
            </div>
          </div>
        </div>
      </div>
      <div class="card-body">
        <vue-good-table
          id="printTable"
          v-if="tableAnimate"
          :columns="columns"
          :rows="computedTableData"
          :line-numbers="false"
          :select-options="{ enabled: false }"
          :search-options="{ enabled: false }"
          :pagination-options="{
            enabled: false,
            mode: 'records',
          }"
        >
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
      printObj: {
        id: "printTable",
        popTitle: "Works",
        extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>',
      },
      columns: [
        {
          label: "No.",
          field: "lineNumber",
          sortable: false,
        },
        {
          label: "Code",
          field: "code",
          sortable: false,
        },
        {
          label: "Type",
          field: "type",
          sortable: false,
        },
        {
          label: "Owner",
          field: "owner",
          sortable: false,
        },
        {
          label: "Phone",
          field: "phone",
          sortable: false,
        },
        {
          label: "Status",
          field: "status",
          sortable: false,
        },
        {
          label: "Price",
          field: "price",
          sortable: false,
        },
        {
          label: "Address",
          field: "address",
          sortable: false,
        },
        {
          label: "Insurance",
          field: "insurance",
          sortable: false,
        },
      ],
      rows: [],
      tableAnimate: false,
      tableSkelton: true,
    };
  },
  computed: {
    computedTableData() {
      return this.rows.map((row, index) => ({
        ...row,
        lineNumber: index + 1,
      }));
    },
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
