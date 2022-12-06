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
                  :selected="isSelected('klant', selectItem['@id'])">{{ selectItem.user.username }}
          </option>
        </select>
      <div
        v-if="!isValid('klant')"
        class="invalid-feedback">{{ violations.klant }}</div>
    </div>

    <div class="form-group">
      <label
        for="microbit_status"
        class="form-control-label">status</label>
        <select v-model="item.status" id="microbit_status" class="form-control">
        <option :value=true>Intact</option>
        <option :value=false>Defect</option>
      </select>
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
import axios from "axios";
import { ENTRYPOINT } from "../../config/entrypoint";
  export default {
    data() {
    return {
      klanten:null
    };
  },
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
 async created() {
    const klantsdata = await axios.get(
      ENTRYPOINT + "klants/" + "?pagination=false"
    );
    this.klanten = klantsdata.data["hydra:member"];
    console.log(this.klanten)
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
