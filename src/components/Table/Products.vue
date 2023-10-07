<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const itemsSelected = ref([]);

const searchField = ["Title", "Price"];
const searchValue = ref();

const Header = [
  { text: "SKU", value: "id", sortable: true },
  { text: "Title", value: "title" },
  { text: "Price", value: "price", sortable: true },
  { text: "Stock", value: "stock" },
  { text: "View Details", value: "title" },
];

const Item = ref([{}]);

const loading = ref(true);
onMounted(async () => {
  const res = await fetch("https://dummyjson.com/products").then((res) => {
    return res.json();
  });
  Item.value = res.products;
});

const itemClick = (number, player) => {
  alert(`Number is=${number} & Player Name is=${player}`);
};
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div>
              <input placeholder="Search..." class="form-control mb-2 w-auto form-control-sm" type="text" v-model="searchValue" />
              <EasyDataTable buttons-pagination alternating :headers="Header" :items="Item" :rows-per-page="10" :search-field="searchField" :search-value="searchValue">
                <template #item-number="{ number, player }">
                  <button class="btn btn-success btn-sm" @click="itemClick(number, player)">Delete</button>
                </template>
              </EasyDataTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
