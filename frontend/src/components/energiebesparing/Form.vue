<template>
  <form @submit.prevent="handleSubmit(item)">
    <div class="form-group">
      <label
        for="energiebesparing_weekBesparing"
        class="form-control-label">weekBesparing</label>
        <input
          id="energiebesparing_weekBesparing"
          v-model="item.weekBesparing"
          :class="['form-control', !isValid('weekBesparing') ? 'is-invalid' : 'is-valid']"
          type="number"
          placeholder="">
      <div
        v-if="!isValid('weekBesparing')"
        class="invalid-feedback">{{ violations.weekBesparing }}</div>
    </div>
    <div class="form-group">
      <label
        for="energiebesparing_datum"
        class="form-control-label">datum</label>
        <input
          id="energiebesparing_datum"
          v-model="item.datum"
          :class="['form-control', !isValid('datum') ? 'is-invalid' : 'is-valid']"
          type="dateTime"
          placeholder="">
      <div
        v-if="!isValid('datum')"
        class="invalid-feedback">{{ violations.datum }}</div>
    </div>
    <div class="form-group">
      <label
        for="energiebesparing_microBit"
        class="form-control-label">microBit</label>
        <select
          v-model="item.microBit"
          id="energiebesparing_microBit"
          class="form-control"
        >
          <option v-for="selectItem in microBitSelectItems"
                  :key="selectItem['@id']"
                  :value="selectItem['@id']"
                  :selected="isSelected('microBit', selectItem['@id'])">{{ selectItem.name }}
          </option>
        </select>
      <div
        v-if="!isValid('microBit')"
        class="invalid-feedback">{{ violations.microBit }}</div>
    </div>

    <button
      type="submit"
      class="btn btn-success">Submit</button>
  </form>
</template>

<script>
  import { find, get, isUndefined } from 'lodash';
  import { mapActions } from 'vuex';
  import { mapFields } from 'vuex-map-fields';

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
    this.microBitGetSelectItems();
  },

  computed: {
    ...mapFields('microBit/list', {
      'microBitSelectItems': 'selectItems',
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
        microBitGetSelectItems: 'microBit/list/getSelectItems',
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
