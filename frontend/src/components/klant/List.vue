<template>
  <div class="klant-list">
    <h1>Klant List</h1>

    <div v-if="isLoading" class="alert alert-info">Loading...</div>
    <div v-if="deletedItem" class="alert alert-success">
      {{ deletedItem["@id"] }} deleted.
    </div>
    <div v-if="mercureDeletedItem" class="alert alert-success">
      {{ mercureDeletedItem["@id"] }} deleted by another user.
    </div>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>

    <p>
      <router-link :to="{ name: 'KlantCreate' }" class="btn btn-primary"
        >Create</router-link
      >
    </p>

    <table class="table table-responsive table-striped table-hover">
      <thead>
        <tr>
          <th>id</th>
          <th>adres</th>
          <th>woonplaats</th>
          <th>kosten</th>
          <th>startdatum</th>
          <th>user</th>
          <th colspan="2"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item['@id']">
          <th scope="row">
            <router-link
              v-if="item"
              :to="{ name: 'KlantShow', params: { id: item['@id'] } }"
            >
              {{ item["@id"] }}
            </router-link>
          </th>
          <td>
            {{ item["adres"] }}
          </td>
          <td>
            {{ item["woonplaats"] }}
          </td>
          <td>
            {{ item["kosten"] }}
          </td>
          <td>
            {{ startDateString(item["startdatum"]) }}
          </td>
          <td>
            {{ item["user"].username }}
          </td>
          <td>
            <router-link
              :to="{ name: 'KlantShow', params: { id: item['@id'] } }"
            >
              <span class="fa fa-search" aria-hidden="true"></span>
              <span class="sr-only">Show</span>
            </router-link>
          </td>
          <td>
            <router-link
              :to="{ name: 'KlantUpdate', params: { id: item['@id'] } }"
            >
              <span class="fa fa-pencil" aria-hidden="true"></span>
              <span class="sr-only">Edit</span>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <pagination v-if="view" :view="view" @previous="getPage" @next="getPage" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapFields } from "vuex-map-fields";
import ListWatcher from "../../mixins/ListWatcher";
import * as types from "../../store/modules/klant/list/mutation_types";
import * as delTypes from "../../store/modules/klant/delete/mutation_types";
import pagination from "../pagination.vue";

export default {
  mixins: [ListWatcher],
  components: { pagination },

  computed: {
    ...mapFields("klant/del", {
      deletedItem: "deleted",
      mercureDeletedItem: "mercureDeleted",
    }),
    ...mapFields("klant/list", {
      error: "error",
      items: "items",
      hubUrl: "hubUrl",
      isLoading: "isLoading",
      view: "view",
    }),
    itemUpdateMutation: () => `klant/list/${types.UPDATE_ITEM}`,
    itemDeleteMutation: () => `klant/list/${types.DELETE_ITEM}`,
    itemMercureDeletedMutation: () =>
      `klant/del/${delTypes.KLANT_DELETE_MERCURE_SET_DELETED}`,
  },

  mounted() {
    this.getPage();
  },

  methods: {
    ...mapActions({
      getPage: "klant/list/default",
    }),
    startDateString(date) {
      return new Date(date).toDateString();
    },
  },
};
</script>
<style scoped>
.klant-list {
  text-align: center;
  padding-top: 120px;
  padding-left: 10%;
  padding-right: 10%;
}
</style>