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

    <EnergiebesparingForm
      v-if="item"
      :handle-submit="onSendForm"
      :values="item"
      :errors="violations"
      :initial-values="item" />

    <router-link
      v-if="item"
      :to="{ name: 'EnergiebesparingList' }"
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
import EnergiebesparingForm from './Form.vue';
import * as types from '../../store/modules/energiebesparing/update/mutation_types';
import * as delTypes from '../../store/modules/energiebesparing/delete/mutation_types';

export default {
  mixins: [ItemWatcher],
  components: {
    EnergiebesparingForm,
  },

  computed: {
    ...mapFields('energiebesparing/del', {
      deleteError: 'error',
      deleteLoading: 'isLoading',
      deleted: 'deleted',
      mercureDeleted: 'mercureDeleted',
    }),
    ...mapFields('energiebesparing/create', {
      created: 'created',
    }),
    ...mapFields('energiebesparing/update', {
      isLoading: 'isLoading',
      error: 'error',
      item: 'retrieved',
      hubUrl: 'hubUrl',
      updated: 'updated',
      violations: 'violations',
    }),
    itemUpdateMutation: () => `energiebesparing/update/${types.SET_RETRIEVED}`,
    itemMercureDeletedMutation: () => `energiebesparing/del/${delTypes.ENERGIEBESPARING_DELETE_MERCURE_SET_DELETED}`,
  },

  watch: {
    // eslint-disable-next-line object-shorthand,func-names
    deleted: function(deleted) {
      if (!deleted) {
        return;
      }

      this.$router.push({ name: 'EnergiebesparingList' });
    },
    // eslint-disable-next-line object-shorthand,func-names
    mercureDeleted: function(deleted) {
      if (!deleted) {
        return;
      }

      this.$router.push({ name: 'EnergiebesparingList' });
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
      createReset: 'energiebesparing/create/reset',
      deleteItem: 'energiebesparing/del/del',
      delReset: 'energiebesparing/del/reset',
      retrieve: 'energiebesparing/update/retrieve',
      updateReset: 'energiebesparing/update/reset',
      update: 'energiebesparing/update/update',
      updateRetrieved: 'energiebesparing/update/updateRetrieved',
    }),

    del() {
      if (window.confirm('Are you sure you want to delete this energiebesparing?')) {
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
<style scoped>
div{
  text-align: center;
  padding-top: 120px;
  padding-left: 10%;
  padding-right: 10%;
}
</style>