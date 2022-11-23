import * as types from "./mutation_types";

export default {
  [types.KLANT_DELETE_SET_DELETED](state, deleted) {
    Object.assign(state, { deleted, mercureDeleted: null });
  },

  [types.KLANT_DELETE_MERCURE_SET_DELETED](state, deleted) {
    Object.assign(state, { deleted: null, mercureDeleted: deleted });
  },

  [types.KLANT_DELETE_SET_ERROR](state, error) {
    Object.assign(state, { error });
  },

  [types.KLANT_DELETE_TOGGLE_LOADING](state) {
    Object.assign(state, { error: "", isLoading: !state.isLoading });
  },

  [types.KLANT_DELETE_RESET](state) {
    Object.assign(state, {
      deleted: null,
      mercureDeleted: null,
      error: "",
      isLoading: false,
    });
  },
};
