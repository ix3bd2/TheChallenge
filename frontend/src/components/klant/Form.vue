<template>
  <form @submit.prevent="handleSubmit(item)">
    <div class="form-group">
      <label
        for="klant_adres"
        class="form-control-label">adres</label>
        <input
          id="klant_adres"
          v-model="item.adres"
          :class="['form-control', !isValid('adres') ? 'is-invalid' : 'is-valid']"
          type="text"
          placeholder="">
      <div
        v-if="!isValid('adres')"
        class="invalid-feedback">{{ violations.adres }}</div>
    </div>
    <div class="form-group">
      <label
        for="klant_woonplaats"
        class="form-control-label">woonplaats</label>
        <input
          id="klant_woonplaats"
          v-model="item.woonplaats"
          :class="['form-control', !isValid('woonplaats') ? 'is-invalid' : 'is-valid']"
          type="text"
          placeholder="">
      <div
        v-if="!isValid('woonplaats')"
        class="invalid-feedback">{{ violations.woonplaats }}</div>
    </div>
    <div class="form-group">
      <label
        for="klant_kosten"
        class="form-control-label">kosten</label>
        <input
          id="klant_kosten"
          v-model="item.kosten"
          :class="['form-control', !isValid('kosten') ? 'is-invalid' : 'is-valid']"
          type="number"
          step="0.1"
          placeholder="">
      <div
        v-if="!isValid('kosten')"
        class="invalid-feedback">{{ violations.kosten }}</div>
    </div>
    <div class="form-group">
      <label
        for="klant_startdatum"
        class="form-control-label">startdatum</label>
        <input
          id="klant_startdatum"
          v-model="item.startdatum"
          :class="['form-control', !isValid('startdatum') ? 'is-invalid' : 'is-valid']"
          type="dateTime"
          placeholder="">
      <div
        v-if="!isValid('startdatum')"
        class="invalid-feedback">{{ violations.startdatum }}</div>
    </div>
    <div class="form-group">
      <label
        for="klant_user"
        class="form-control-label">user</label>
        <input
          id="klant_user"
          v-model="item.user"
          :class="['form-control', !isValid('user') ? 'is-invalid' : 'is-valid']"
          type="text"
          placeholder="">
      <div
        v-if="!isValid('user')"
        class="invalid-feedback">{{ violations.user }}</div>
    </div>
    <div class="form-group">
      <label
        for="klant_microbit"
        class="form-control-label">microbit</label>
        <select
          v-model="item.microbit"
          id="klant_microbit"
          multiple
          class="form-control"
        >
          <option v-for="selectItem in microbitSelectItems"
                  :key="selectItem['@id']"
                  :value="selectItem['@id']"
                  :selected="isSelected('microbit', selectItem['@id'])">{{ selectItem.name }}
          </option>
        </select>
      <div
        v-if="!isValid('microbit')"
        class="invalid-feedback">{{ violations.microbit }}</div>
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
    this.microbitGetSelectItems();
  },

  computed: {
    ...mapFields('microbit/list', {
      'microbitSelectItems': 'selectItems',
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
        microbitGetSelectItems: 'microbit/list/getSelectItems',
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
