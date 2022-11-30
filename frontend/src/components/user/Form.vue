<template>
  <form @submit.prevent="handleSubmit(item)">
    <div class="form-group">
      <label for="user_username" class="form-control-label">username</label>
      <input
        id="user_username"
        v-model="item.username"
        :class="[
          'form-control',
          !isValid('username') ? 'is-invalid' : 'is-valid',
        ]"
        type="text"
        placeholder=""
        required
      />
      <div v-if="!isValid('username')" class="invalid-feedback">
        {{ violations.username }}
      </div>
    </div>
    <div class="form-group">
      <label for="user_roles" class="form-control-label">roles</label>
      <select
        v-model="item.roles"
        id="user_status"
        class="form-control"
      >
        <option :value='["ROLE_CUSTOMERS"]'>Customer</option>
        <option :value='["ROLE_SUPERADMIN"]'>Super admin</option>
      </select>
      <div v-if="!isValid('roles')" class="invalid-feedback">
        {{ violations.roles }}
      </div>
    </div>
    <div class="form-group">
      <label for="user_password"  class="form-control-label">password</label>
      <input
        id="user_password"
        v-model="item.password"
        :class="[
          'form-control',
          !isValid('password') ? 'is-invalid' : 'is-valid',
        ]"
        type="password"
        required
      />
      <div v-if="!isValid('password')" class="invalid-feedback">
        {{ violations.password }}
      </div>
    </div>
    <div class="form-group">
      <label for="user_email" class="form-control-label">email</label>
      <input
        id="user_email"
        v-model="item.email"
        :class="['form-control', !isValid('email') ? 'is-invalid' : 'is-valid']"
        type="text"
        placeholder=""
        required
      />
      <div v-if="!isValid('email')" class="invalid-feedback">
        {{ violations.email }}
      </div>
    </div>

    <button type="submit" class="btn btn-success">Submit</button>
  </form>
</template>

<script>
import { find, get, isUndefined } from "lodash";
import { mapActions } from "vuex";
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
    },
  },

  mounted() {
    this.klantGetSelectItems();
  },

  computed: {
    ...mapFields("klant/list", {
      klantSelectItems: "selectItems",
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
      klantGetSelectItems: "klant/list/getSelectItems",
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
