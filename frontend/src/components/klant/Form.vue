<template>
  <form @submit.prevent="handleSubmit(item)">
    <div class="form-group">
      <label for="klant_adres" class="form-control-label">adres</label>
      <input
        id="klant_adres"
        v-model="item.adres"
        :class="['form-control', !isValid('adres') ? 'is-invalid' : 'is-valid']"
        type="text"
        placeholder=""
      />
      <div v-if="!isValid('adres')" class="invalid-feedback">
        {{ violations.adres }}
      </div>
    </div>
    <div class="form-group">
      <label for="klant_woonplaats" class="form-control-label"
        >woonplaats</label
      >
      <input
        id="klant_woonplaats"
        v-model="item.woonplaats"
        :class="[
          'form-control',
          !isValid('woonplaats') ? 'is-invalid' : 'is-valid',
        ]"
        type="text"
        placeholder=""
      />
      <div v-if="!isValid('woonplaats')" class="invalid-feedback">
        {{ violations.woonplaats }}
      </div>
    </div>
    <div class="form-group">
      <label for="klant_kosten" class="form-control-label">kosten</label>
      <input
        id="klant_kosten"
        v-model="item.kosten"
        :class="[
          'form-control',
          !isValid('kosten') ? 'is-invalid' : 'is-valid',
        ]"
        type="number"
        step="0.1"
        placeholder=""
      />
      <div v-if="!isValid('kosten')" class="invalid-feedback">
        {{ violations.kosten }}
      </div>
    </div>
   
    <div class="form-group">
      <label for="klant_startdatum" class="form-control-label">Startdatum</label>
      <input
        id="klant_startdatum"
        v-model="item.startdatum"
        :class="[
          'form-control',
          !isValid('startdatum') ? 'is-invalid' : 'is-valid',
        ]"
        type="datetime-local"
        placeholder
        required
      />
    <div class="form-group">
      <label for="appointments_resources" class="form-control-label">User</label>
      <select v-model="item.user" id="appointments_resources" class="form-control">
        <option
          v-for="usersel in users"
          :key="usersel['@id']"
          :value="usersel['@id']"
        >{{ usersel.username }}</option>
      </select>
      <P>Graag geen user selecteren bij het Wijzigen van data</P>
    </div>
    </div>
    <button type="submit" class="btn btn-success">Submit</button>
  </form>
</template>

<script>
import { find, get, isUndefined } from "lodash";
import { mapActions } from "vuex";
import { mapFields } from "vuex-map-fields";
import axios from "axios";
import { ENTRYPOINT } from "../../config/entrypoint";
export default {
  data() {
    return {
      users:null
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
    },
  },
  async created() {
    const usersdata = await axios.get(
      ENTRYPOINT + "users/" + "?pagination=false"
    );
    this.users = usersdata.data["hydra:member"];
    console.log(this.users)
  },

  mounted() {
    this.microbitGetSelectItems();
  },

  computed: {
    ...mapFields("microbit/list", {
      microbitSelectItems: "selectItems",
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
      microbitGetSelectItems: "microbit/list/getSelectItems",
    }),

    isSelected(collection, id) {
      return find(this.item[collection], ["@id", id]) !== undefined;
    },

    isValid(key) {
      return isUndefined(get(this.violations, key));
    },
  },
};
</script>
