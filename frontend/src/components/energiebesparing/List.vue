<template>
  <div class="energy-list">
    <h1>Energiebesparing List</h1>

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
        :to="{ name: 'EnergiebesparingCreate' }"
        class="btn btn-primary">Create</router-link>
    </p>

    <table class="table table-responsive table-striped table-hover">
      <thead>
        <tr>
          <th>id</th>
          <th>weekBesparing</th>
          <th>datum</th>
          <th>microBit</th>
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
              :to="{name: 'EnergiebesparingShow', params: { id: item['@id'] }}">
              {{ item['@id'] }}
            </router-link>
          </th>
        <td>
            {{ item['weekBesparing'] }}
        </td>
        <td>
            {{ item['datum'] }}
        </td>
        <td>
            <template>
              <div
                v-if="Array.isArray(item['micro_bits'])">
                <router-link
                  v-for="link in item['micro_bits']"
                  :key="link['@id']"
                  :to="{ name: 'MicroBitShow', params: { id: link['@id'] } }">
                  {{ link['@id'] }}
                </router-link>
              </div>
              <router-link
                v-else
                :to="{ name: 'MicroBitShow', params: { id: item['micro_bits'] } }">
                {{ item['micro_bits'] }}
              </router-link>
            </template>
        </td>
          <td>
            <router-link
              :to="{name: 'EnergiebesparingShow', params: { id: item['@id'] }}">
              <span
                class="fa fa-search"
                aria-hidden="true"></span>
              <span class="sr-only">Show</span>
            </router-link>
          </td>
          <td>
            <router-link :to="{name: 'EnergiebesparingUpdate', params: { id: item['@id'] }}">
              <span
                class="fa fa-pencil"
                aria-hidden="true"></span>
              <span class="sr-only">Edit</span>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>

    <nav aria-label="Page navigation" v-if="view">
      <router-link
        :to="view['hydra:first'] ? view['hydra:first'] : 'EnergiebesparingContactList'"
        :class="{ disabled: !view['hydra:previous'] }"
        class="btn btn-primary"
        aria-label="First page">
        <span aria-hidden="true">&lArr;</span> First
      </router-link>
      &nbsp;
      <router-link
        :to="!view['hydra:previous'] || view['hydra:previous'] === view['hydra:first'] ? 'EnergiebesparingList' : view['hydra:previous']"
        :class="{ disabled: !view['hydra:previous'] }"
        class="btn btn-primary"
        aria-label="Previous page">
        <span aria-hidden="true">&larr;</span> Previous
      </router-link>

      <router-link
        :to="view['hydra:next'] ? view['hydra:next'] : '#'"
        :class="{ disabled: !view['hydra:next'] }"
        class="btn btn-primary"
        aria-label="Next page">
        Next <span aria-hidden="true">&rarr;</span>
      </router-link>

      <router-link
        :to="view['hydra:last'] ? view['hydra:last'] : '#'"
        :class="{ disabled: !view['hydra:next'] }"
        class="btn btn-primary"
        aria-label="Last page">
        Last <span aria-hidden="true">&rArr;</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapFields } from 'vuex-map-fields';
import ListWatcher from '../../mixins/ListWatcher';
import * as types from '../../store/modules/energiebesparing/list/mutation_types'
import * as delTypes from '../../store/modules/energiebesparing/delete/mutation_types';

export default {
  mixins: [ListWatcher],
  computed: {
      ...mapFields('energiebesparing/del', {
          deletedItem: 'deleted',
          mercureDeletedItem: 'mercureDeleted',
      }),
      ...mapFields('energiebesparing/list', {
          error: 'error',
          items: 'items',
          hubUrl: 'hubUrl',
          isLoading: 'isLoading',
          view: 'view',
      }),
      itemUpdateMutation: () => `energiebesparing/list/${types.UPDATE_ITEM}`,
      itemDeleteMutation: () => `energiebesparing/list/${types.DELETE_ITEM}`,
      itemMercureDeletedMutation: () => `energiebesparing/del/${delTypes.ENERGIEBESPARING_DELETE_MERCURE_SET_DELETED}`,
  },

  mounted() {
    this.getPage();
  },

  methods: {
    ...mapActions({
      getPage: 'energiebesparing/list/default',
    }),
  },
};
</script>
<style scoped>
.energy-list{
  text-align: center;
  padding-top: 120px;
  padding-left: 10%;
  padding-right: 10%;
}
</style>