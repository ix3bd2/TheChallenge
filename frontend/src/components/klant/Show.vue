<template>
  <div>
    <h1>Show Book {{ item && item['@id'] }}</h1>

    <div
      v-if="isLoading"
      class="alert alert-info"
      role="status">Loading...</div>
    <div
      v-if="error"
      class="alert alert-danger"
      role="alert">
      <span
        class="fa fa-exclamation-triangle"
        aria-hidden="true">{{ error }}</span>
    </div>
    <div
      v-if="deleteError"
      class="alert alert-danger"
      role="alert">
      <span
        class="fa fa-exclamation-triangle"
        aria-hidden="true">{{ deleteError }}</span>
    </div>
    <div
      v-if="item"
      class="table-responsive">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">adres</th>
            <td>{{ item['adres'] }}</td>
          </tr>
          <tr>
            <th scope="row">woonplaats</th>
            <td>{{ item['woonplaats'] }}</td>
          </tr>
          <tr>
            <th scope="row">kosten</th>
            <td>{{ item['kosten'] }}</td>
          </tr>
          <tr>
            <th scope="row">startdatum</th>
            <td>{{ item['startdatum'] }}</td>
          </tr>
          <tr>
            <th scope="row">user</th>
            <td>{{ item['user'] }}</td>
          </tr>
          <tr>
            <th scope="row">microbit</th>
            <td>{{ item['microbit'] }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <router-link
      :to="{ name: 'KlantList' }"
      class="btn btn-primary">
      Back to list
    </router-link>
    <router-link
      v-if="item"
      :to="{ name: 'KlantUpdate', params: { id: item['@id'] } }"
      class="btn btn-warning">
      Edit
    </router-link>
    <button
      class="btn btn-danger"
      @click="del">Delete</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapFields } from 'vuex-map-fields';
import ItemWatcher from '../../mixins/ItemWatcher';
import * as types from '../../store/modules/klant/show/mutation_types';
import * as delTypes from '../../store/modules/klant/delete/mutation_types';

export default {
  mixins: [ItemWatcher],
  computed: {
    ...mapFields('klant/del', {
      deleteError: 'error',
      deleted: 'deleted',
      mercureDeleted: 'mercureDeleted',
    }),
    ...mapFields('klant/show', {
      error: 'error',
      isLoading: 'isLoading',
      item: 'retrieved',
      hubUrl: 'hubUrl',
    }),
    itemUpdateMutation: () =>`klant/show/${types.KLANT_SHOW_SET_RETRIEVED}`,
    itemMercureDeletedMutation: () => `klant/del/${delTypes.KLANT_DELETE_MERCURE_SET_DELETED}`,
  },

  watch: {
    // eslint-disable-next-line object-shorthand,func-names
    deleted: function(deleted) {
      if (!deleted) {
        return;
      }

      this.$router.push({ name: 'KlantList' });
    },
    // eslint-disable-next-line object-shorthand,func-names
    mercureDeleted: function(deleted) {
      if (!deleted) {
        return;
      }

      this.$router.push({ name: 'KlantList' });
    },
  },

  beforeDestroy () {
    this.reset();
  },

  created () {
    this.retrieve(decodeURIComponent(this.$route.params.id));
  },

  methods: {
    ...mapActions({
      deleteItem: 'klant/del/del',
      reset: 'klant/show/reset',
      retrieve: 'klant/show/retrieve',
    }),

    del() {
      if (window.confirm('Are you sure you want to delete this klant?')) {
        this.deleteItem(this.item);
      }
    },
  },
};
</script>
<style scoped>
div{
  text-align: center;
  padding-top: 120px;
  padding-left: 10%;
  padding-right: 10%;
}
</style>