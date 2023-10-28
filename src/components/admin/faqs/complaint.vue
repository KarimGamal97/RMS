<template>
    <div class="work mt-3">
      <div class="card custom-card">
        <div
          class="card-header p-3 tx-medium my-auto tx-white custom-card-header border-bottom-0"
        >
          <h5 class="main-content-label tx-white my-auto tx-medium">
            Complaints List
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
                        </button> -->
                <button class="btn btn-primary me-2" @click="exportToExcel">
                  Excel
                  <font-awesome-icon icon="table" />
                </button>
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
  import http from '../../../http';
  import xlsx from "xlsx/dist/xlsx.full.min";
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
            label: "Name",
            field: "name",
            sortable: false,
          },
          {
            label: "Phone",
            field: "phone",
            sortable: false,
          },
          {
            label: "email",
            field: "email",
            sortable: false,
          },
          {
            label: "Msg",
            field: "msg",
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
        await http.get("faqs/reports/all").then((response) => {
          const responseData = response.data.data;
          const filteredData = responseData.filter(item => item.type === "complaints");
          this.rows = filteredData;
          this.tableSkelton = false;
          this.tableAnimate = true;
        });
      },
      exportToExcel() {
        const XLSX = xlsx;
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.aoa_to_sheet([
          this.columns.map((col) => col.label),
          ...this.computedTableData.map((row) =>
            this.columns.map((col) => {
              if (col.field === "phone") {
                // Format the phone number as text to preserve the format
                return { t: "s", v: row[col.field] };
              } else {
                return row[col.field];
              }
            })
          ),
        ]);
        const wscols = [
          { wch: 5 },
          { wch: 5 },
          { wch: 5 },
          { wch: 20 },
          { wch: 20 },
          { wch: 10 },
          { wch: 10 },
          { wch: 20 },
          { wch: 10 },
        ];
        worksheet["!cols"] = wscols;
        XLSX.utils.book_append_sheet(workbook, worksheet, "framework");
        XLSX.writeFile(workbook, "framework.xlsx");
      },
    },
    mounted() {
      this.getData();
    },
  };
  </script>
  