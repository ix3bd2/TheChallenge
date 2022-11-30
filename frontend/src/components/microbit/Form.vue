<template>
  <form @submit.prevent="handleSubmit(item)">
    <div class="form-group">
      <label
        for="microbit_apparaat"
        class="form-control-label">apparaat</label>
        <input
          id="microbit_apparaat"
          v-model="item.apparaat"
          :class="['form-control', !isValid('apparaat') ? 'is-invalid' : 'is-valid']"
          type="text"
          placeholder="">
      <div
        v-if="!isValid('apparaat')"
        class="invalid-feedback">{{ violations.apparaat }}</div>
    </div>
    <div class="form-group">
      <label
        for="microbit_klant"
        class="form-control-label">klant</label>
        <select
          v-model="item.klant"
          id="microbit_klant"
          class="form-control"
        >
          <option v-for="selectItem in klantSelectItems"
                  :key="selectItem['@id']"
                  :value="selectItem['@id']"
                  :selected="isSelected('klant', selectItem['@id'])">{{ selectItem.name }}
          </option>
        </select>
      <div
        v-if="!isValid('klant')"
        class="invalid-feedback">{{ violations.klant }}</div>
    </div>
    <div class="form-group">
      <label
        for="microbit_energieJaar"
        class="form-control-label">energieJaar</label>
        <input
          id="microbit_energieJaar"
          v-model="item.energieJaar"
          :class="['form-control', !isValid('energieJaar') ? 'is-invalid' : 'is-valid']"
          type="text"
          placeholder="">
      <div
        v-if="!isValid('energieJaar')"
        class="invalid-feedback">{{ violations.energieJaar }}</div>
    </div>
    <div class="form-group">
      <label
        for="microbit_status"
        class="form-control-label">status</label>
        <input
          id="microbit_status"
          v-model="item.status"
          :class="['form-control', !isValid('status') ? 'is-invalid' : 'is-valid']"
          type="checkbox"
          placeholder="">
      <div
        v-if="!isValid('status')"
        class="invalid-feedback">{{ violations.status }}</div>
    </div>

    <button
      type="submit"
      class="btn btn-success">Submit</button>
  </form>
</template>

<script>
  import { find, get, isUndefined } from 'lodash';
  import { mapActions } from 'vuex';
import { mapFields } from "vuex-map-fields";

  export default {
  props: {
    handleSubmit: {
      type: Function,
      required: true,
    },

    values: {
      type: Object,
      required: true,
    },

    errors: {
      type: Object,
      default: () => {},
    },

    initialValues: {
      type: Object,
      default: () => {},
    }
  },

  mounted() {
    this.klantGetSelectItems();
    this.energiebesparingGetSelectItems();
  },

  computed: {
    ...mapFields('klant/list', {
      'klantSelectItems': 'selectItems',
    }),
    ...mapFields('energiebesparing/list', {
      'energiebesparingSelectItems': 'selectItems',
    }),

    // eslint-disable-next-line
    item() {
      return this.initialValues || this.values;
    },

    violations() {
      return this.errors || {};
    },
  },

  methods: {
    ...mapActions({
        klantGetSelectItems: 'klant/list/getSelectItems',
        energiebesparingGetSelectItems: 'energiebesparing/list/getSelectItems',
    }),

    isSelected(collection, id) {
      return find(this.item[collection], ['@id', id]) !== undefined;
    },

    isValid(key) {
      return isUndefined(get(this.violations, key));
    },
  },
};
</script>
