<template>
  <div class="microbit-list">
    <h1>MicroBit List</h1>

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
        :to="{ name: 'MicroBitCreate' }"
        class="btn btn-primary">Create</router-link>
    </p>

    <table class="table table-responsive table-striped table-hover">
      <thead>
        <tr>
          <th>id</th>
          <th>apparaat</th>
          <th>klant</th>
          <th>energie</th>
          <th>status</th>
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
              :to="{name: 'MicroBitShow', params: { id: item['@id'] }}">
              {{ item['@id'] }}
            </router-link>
          </th>
        <td>
            {{ item['apparaat'] }}
        </td>
        <td v-if="Object.keys(item).length === 7">
            {{item.klant.user.username}}
        </td>  
            <td v-if="Object.keys(item).length === 6">
            Deleted User

        </td>   
        <td>
            {{ item['energieJaar'] }}
        </td>
        <td>
            <div v-if="item['status']"><span class="badge text-bg-success">Intact</span></div>
            <div v-if="!item['status']"><span class="badge text-bg-danger">Defect</span></div>
        </td>
          <td>
            <router-link
              :to="{name: 'MicroBitShow', params: { id: item['@id'] }}">
              <span
                class="fa fa-search"
                aria-hidden="true"></span>
              <span class="sr-only">Show</span>
            </router-link>
          </td>
          <td>
            <router-link :to="{name: 'MicroBitUpdate', params: { id: item['@id'] }}">
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
import pagination from "../pagination.vue";
import { mapActions } from 'vuex';
import { mapFields } from 'vuex-map-fields';
import ListWatcher from '../../mixins/ListWatcher';
import * as types from '../../store/modules/microbit/list/mutation_types'
import * as delTypes from '../../store/modules/microbit/delete/mutation_types';

export default {
  mixins: [ListWatcher],
    components: { pagination },
  computed: {
      ...mapFields('microbit/del', {
          deletedItem: 'deleted',
          mercureDeletedItem: 'mercureDeleted',
      }),
      ...mapFields('microbit/list', {
          error: 'error',
          items: 'items',
          hubUrl: 'hubUrl',
          isLoading: 'isLoading',
          view: 'view',
      }),
      itemUpdateMutation: () => `microbit/list/${types.UPDATE_ITEM}`,
      itemDeleteMutation: () => `microbit/list/${types.DELETE_ITEM}`,
      itemMercureDeletedMutation: () => `microbit/del/${delTypes.MICROBIT_DELETE_MERCURE_SET_DELETED}`,
  },

  mounted() {
    this.getPage();
  },

  methods: {
    ...mapActions({
      getPage: 'microbit/list/default',
    }),
  },
};
</script>
<style scoped>
.microbit-list{
  text-align: center;
  padding-top: 120px;
  padding-left: 10%;
  padding-right: 10%;
}
</style>