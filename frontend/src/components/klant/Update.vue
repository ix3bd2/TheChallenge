<template>
  <div>
    <h1>Edit Book {{ item && item['@id'] }}</h1>

    <div
      v-if="created"
      class="alert alert-success"
      role="status">{{ created['@id'] }} created.</div>
    <div
      v-if="updated"
      class="alert alert-success"
      role="status">{{ updated['@id'] }} updated.</div>
    <div
      v-if="isLoading || deleteLoading"
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

    <KlantForm
      v-if="item"
      :handle-submit="onSendForm"
      :values="item"
      :errors="violations"
      :initial-values="item" />

    <router-link
      v-if="item"
      :to="{ name: 'KlantList' }"
      class="btn btn-primary">Back to list</router-link>
    <button
      class="btn btn-danger"
      @click="del">Delete</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapFields } from 'vuex-map-fields';
import ItemWatcher from '../../mixins/ItemWatcher';
import KlantForm from './Form.vue';
import * as types from '../../store/modules/klant/update/mutation_types';
import * as delTypes from '../../store/modules/klant/delete/mutation_types';

export default {
  mixins: [ItemWatcher],
  components: {
    KlantForm,
  },

  computed: {
    ...mapFields('klant/del', {
      deleteError: 'error',
      deleteLoading: 'isLoading',
      deleted: 'deleted',
      mercureDeleted: 'mercureDeleted',
    }),
    ...mapFields('klant/create', {
      created: 'created',
    }),
    ...mapFields('klant/update', {
      isLoading: 'isLoading',
      error: 'error',
      item: 'retrieved',
      hubUrl: 'hubUrl',
      updated: 'updated',
      violations: 'violations',
    }),
    itemUpdateMutation: () => `klant/update/${types.SET_RETRIEVED}`,
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

  beforeDestroy() {
    this.reset();
  },

  created() {
    this.retrieve(decodeURIComponent(this.$route.params.id));
  },

  methods: {
    ...mapActions({
      createReset: 'klant/create/reset',
      deleteItem: 'klant/del/del',
      delReset: 'klant/del/reset',
      retrieve: 'klant/update/retrieve',
      updateReset: 'klant/update/reset',
      update: 'klant/update/update',
      updateRetrieved: 'klant/update/updateRetrieved',
    }),

    del() {
      if (window.confirm('Are you sure you want to delete this klant?')) {
        this.deleteItem(this.item);
      }
    },

    reset() {
      this.updateReset();
      this.createReset();
    },

    onSendForm() {
      this.update(this.item);
    },
  },
};
</script>
