<template>
  <div>
    <h1>Show Book {{ item && item['@id'] }}</h1>

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
    <div
      v-if="deleteError"
      class="alert alert-danger"
      role="alert">
      <span
        class="fa fa-exclamation-triangle"
        aria-hidden="true">{{ deleteError }}</span>
    </div>
    <div
      v-if="item"
      class="table-responsive">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">apparaat</th>
            <td>{{ item['apparaat'] }}</td>
          </tr>
          <tr>
            <th scope="row">klant</th>
            <td v-if="Object.keys(item).length === 8">
            {{item.klant.user.username}}
        </td>  
            <td v-if="Object.keys(item).length === 7">
            Deleted User

        </td>   
          </tr>
          
          <tr>
            <th scope="row">energie</th>
            <td>          <button type="button" class="btn btn-warning" style="margin:0!important;color:white;" v-on:click="goToPageEnergy(item['energieJaar'] )"> <i class="fa fa-bolt"></i> Check</button>
</td>
          </tr>
          <tr>
            <th scope="row">status</th>
            <td>{{ item['status'] }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <router-link
      :to="{ name: 'MicroBitList' }"
      class="btn btn-primary">
      Back to list
    </router-link>
    <router-link
      v-if="item"
      :to="{ name: 'MicroBitUpdate', params: { id: item['@id'] } }"
      class="btn btn-warning">
      Edit
    </router-link>
    <button
      class="btn btn-danger"
      @click="del">Delete</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapFields } from 'vuex-map-fields';
import ItemWatcher from '../../mixins/ItemWatcher';
import * as types from '../../store/modules/microbit/show/mutation_types';
import * as delTypes from '../../store/modules/microbit/delete/mutation_types';

export default {
  mixins: [ItemWatcher],
  computed: {
    ...mapFields('microbit/del', {
      deleteError: 'error',
      deleted: 'deleted',
      mercureDeleted: 'mercureDeleted',
    }),
    ...mapFields('microbit/show', {
      error: 'error',
      isLoading: 'isLoading',
      item: 'retrieved',
      hubUrl: 'hubUrl',
    }),
    itemUpdateMutation: () =>`microbit/show/${types.MICROBIT_SHOW_SET_RETRIEVED}`,
    itemMercureDeletedMutation: () => `microbit/del/${delTypes.MICROBIT_DELETE_MERCURE_SET_DELETED}`,
  },

  watch: {
    // eslint-disable-next-line object-shorthand,func-names
    deleted: function(deleted) {
      if (!deleted) {
        return;
      }

      this.$router.push({ name: 'MicroBitList' });
    },
    // eslint-disable-next-line object-shorthand,func-names
    mercureDeleted: function(deleted) {
      if (!deleted) {
        return;
      }

      this.$router.push({ name: 'MicroBitList' });
    },
  },

  beforeDestroy () {
    this.reset();
  },

  created () {
    this.retrieve(decodeURIComponent(this.$route.params.id));
  },

  methods: {
    ...mapActions({
      deleteItem: 'microbit/del/del',
      reset: 'microbit/show/reset',
      retrieve: 'microbit/show/retrieve',
    }),

    del() {
      if (window.confirm('Are you sure you want to delete this microbit?')) {
        this.deleteItem(this.item);
      }
    },
    goToPageEnergy(energy)
    {
      sessionStorage.setItem('energy',energy);
      location.href = "/checkEnergy";
    }
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