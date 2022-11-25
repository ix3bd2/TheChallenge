<template>
  <div class="users-list">
    <h1>Gebruikers Lijst</h1>

    <div
      v-if="isLoading"
      class="alert alert-info">Loading...</div>
    <div
      v-if="deletedItem"
      class="alert alert-success">{{ deletedItem['@id'] }} deleted.</div>
    <div
      v-if="mercureDeletedItem"
      class="alert alert-success">{{ mercureDeletedItem['@id'] }} deleted by another user.</div>
    <div
      v-if="error"
      class="alert alert-danger">{{ error }}</div>

    <p>
      <router-link
        :to="{ name: 'UserCreate' }"
        class="btn btn-primary">Create</router-link>
    </p>

    <table class="table table-responsive table-striped table-hover">
      <thead>
        <tr>
          <th>id</th>
          <th>username</th>
          <th>roles</th>
          <th>email</th>
          <th colspan="2"></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in items"
          :key="item['@id']">
          <th scope="row">
            <router-link
              v-if="item"
              :to="{name: 'UserShow', params: { id: item['@id'] }}">
              {{ item['@id'] }}
            </router-link>
          </th>
        <td>
            {{ item['username'] }}
        </td>
        <td>
           {{ checkRole(item["roles"]) }}
        </td>
        <td>
            {{ item['email'] }}
        </td>

          <td>
            <router-link
              :to="{name: 'UserShow', params: { id: item['@id'] }}">
              <span
                class="fa fa-search"
                aria-hidden="true"></span>
              <span class="sr-only">Show</span>
            </router-link>
          </td>
          <td>
            <router-link :to="{name: 'UserUpdate', params: { id: item['@id'] }}">
              <span
                class="fa fa-pencil"
                aria-hidden="true"></span>
              <span class="sr-only">Edit</span>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
        <pagination v-if="view" :view="view" @previous="getPage" @next="getPage" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapFields } from 'vuex-map-fields';
import ListWatcher from '../../mixins/ListWatcher';
import * as types from '../../store/modules/user/list/mutation_types'
import * as delTypes from '../../store/modules/user/delete/mutation_types';
import pagination from '../pagination.vue';

export default {
  mixins: [ListWatcher],
    components: { pagination },

  computed: {
      ...mapFields('user/del', {
          deletedItem: 'deleted',
          mercureDeletedItem: 'mercureDeleted',
      }),
      ...mapFields('user/list', {
          error: 'error',
          items: 'items',
          hubUrl: 'hubUrl',
          isLoading: 'isLoading',
          view: 'view',
      }),
      itemUpdateMutation: () => `user/list/${types.UPDATE_ITEM}`,
      itemDeleteMutation: () => `user/list/${types.DELETE_ITEM}`,
      itemMercureDeletedMutation: () => `user/del/${delTypes.USER_DELETE_MERCURE_SET_DELETED}`,
  },

  mounted() {
    this.getPage();
  },

  methods: {
    ...mapActions({
      getPage: 'user/list/default',
    }),
    checkRole(role) {
      if (role[0] == 'ROLE_CUSTOMERS') {
        return "Customer";
      }
      if (role [0]== 'ROLE_EMPLOYEE') {
        return "Employee";
      }
      if (role[0] == 'ROLE_SUPERADMIN') {
        return "Super admin";
      }
    },
  },
};
</script>
<style scoped>
.users-list{
  text-align: center;
  padding-top: 120px;
  padding-left: 10%;
  padding-right: 10%;
}
</style>