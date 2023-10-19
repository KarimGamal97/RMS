<template>
  <div>
    <b-tabs card>
      <b-tab title="Works" active>
        <works-comp></works-comp>
      </b-tab>
      <b-tab title="Drafts">
        <div class="draft mt-3">
          <div class="card custom-card">
            <div
              class="card-header p-3 tx-medium my-auto tx-white custom-card-header border-bottom-0"
            >
              <h5 class="main-content-label tx-white my-auto tx-medium">
                Drafts List
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
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import worksComp from "../components/worksComp.vue";
import http from "../http";
export default {
  name: "my-component",
  components: { worksComp },
  data() {
    return {
      printObj: {
        id: "printTable",
        popTitle: "Drafts",
        extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>',
      },
      columns: [
        {
          label: "No.",
          field: "lineNumber",
          sortable: false,
        },
        {
          label: "Name",
          field: "name",
          sortable: false,
        },
        {
          label: "Phone Number",
          field: "phone",
          sortable: false,
        },
        {
          label: "Client Order",
          field: "order",
          sortable: false,
        },
        {
          label: "Price",
          field: "price",
          sortable: false,
        },
        {
          label: "Type",
          field: "type",
          sortable: false,
        },
      ],
      rows: [],
      types: [],
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
      await http.get(`drafts/reports/all`).then((res) => {
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
  },
  mounted() {
    this.getData();
    this.getType();
  },
};
</script>

<style>
button.nav-link {
  color: #fff !important;
  background: #0056b3 !important;
  padding: 10px;
  margin: 10px;
  border: none;
}
button.nav-link.active {
  color: #fff !important;
  background: #0163cc !important;
  padding: 10px;
  margin: 10px;
  border: none;
}
</style>
