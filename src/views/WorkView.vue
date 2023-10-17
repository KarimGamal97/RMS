<template>
  <div class="work">
    <vue-good-table
      :columns="columns"
      :rows="rows"
      :line-numbers="true"
      :select-options="{ enabled: false }"
      :search-options="{ enabled: true }"
      :pagination-options="{
        enabled: true,
        mode: 'records',
        perPage: 3,
        position: 'bottom',
        perPageDropdown: [5, 7, 9],
        dropdownAllowAll: false,
        setCurrentPage: 2,
        nextLabel: 'Next',
        prevLabel: 'Previous',
        rowsPerPageLabel: 'rows number per page',
        ofLabel: 'of',
        pageLabel: 'page',
        allLabel: 'All',
      }"
    />
  </div>
</template>

<script>
import axios from "axios";
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
          label: "Insurance",
          field: "insurance",
        },
      ],
      rows: [],
    };
  },
  methods: {
    async getData() {
      await axios
        .get("https://apis-03au.onrender.com/api/works")
        .then((res) => {
          this.rows = res.data.data;
          // console.log(res);
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style></style>
