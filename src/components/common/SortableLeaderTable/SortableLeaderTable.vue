<template>
  <table id="customers">
    <tr>
      <th v-for="(column, index) in columns" v-bind:key="index">{{ column }}</th>
    </tr>
    <tr v-for="(row, index) in rowData" v-bind:key="index">
      <td>{{ row.points }}</td>
      <td>{{ row.rebounds }}</td>
      <td>{{ row.steals }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "SortableLeaderTable",
  data() {
    return {
      columns: ["points", "rebounds", "steals"],
    };
  },
  props: {
    rowData: {
      type: Array,
      required: true, 
    },
  }
}
</script>

<style>
#customers {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}

</style>