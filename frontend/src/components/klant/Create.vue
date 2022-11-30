<template>
  <div>
    <h1>Create Klant</h1>

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

    <KlantForm
      :handle-submit="onSendForm"
      :values="item"
      :errors="violations" />

    <router-link
      :to="{ name: 'KlantList' }"
      class="btn btn-default">Back to list</router-link>
  </div>
</template>

<script>
import { createHelpers } from 'vuex-map-fields';
import { mapActions } from 'vuex';
import KlantForm from './Form.vue';

const { mapFields } = createHelpers({
    getterType: 'klant/create/getField',
    mutationType: 'klant/create/updateField',
});

export default {
  components: {
    KlantForm,
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

      this.$router.push({ name: 'KlantUpdate', params: { id: created['@id'] } });
    }
  },

  methods: {
    ...mapActions('klant/create', [
      'create',
    ]),

    onSendForm () {
      this.create(this.item);
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