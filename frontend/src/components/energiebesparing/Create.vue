<template>
  <div>
    <h1>Create Energiebesparing</h1>

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

    <EnergiebesparingForm
      :handle-submit="onSendForm"
      :values="item"
      :errors="violations" />

    <router-link
      :to="{ name: 'EnergiebesparingList' }"
      class="btn btn-default">Back to list</router-link>
  </div>
</template>

<script>
import { createHelpers } from 'vuex-map-fields';
import { mapActions } from 'vuex';
import EnergiebesparingForm from './Form.vue';

const { mapFields } = createHelpers({
    getterType: 'energiebesparing/create/getField',
    mutationType: 'energiebesparing/create/updateField',
});

export default {
  components: {
    EnergiebesparingForm,
  },

  data () {
    return {
      item: {},
    };
  },

  computed: {
    ...mapFields([
      'error',
      'isLoading',
      'created',
      'violations',
    ]),
  },

  watch: {
    // eslint-disable-next-line object-shorthand,func-names
    created: function(created) {
      if (!created) {
        return;
      }

      this.$router.push({ name: 'EnergiebesparingUpdate', params: { id: created['@id'] } });
    }
  },

  methods: {
    ...mapActions('energiebesparing/create', [
      'create',
    ]),

    onSendForm () {
      this.create(this.item);
    },
  },
};
</script>
