import * as types from "./mutation_types";

export default {
  [types.USER_SHOW_RESET](state) {
    Object.assign(state, {
      error: "",
      isLoading: false,
      retrieved: null,
      hubUrl: null,
    });
  },

  [types.USER_SHOW_SET_ERROR](state, error) {
    Object.assign(state, { error });
  },

  [types.USER_SHOW_SET_RETRIEVED](state, retrieved) {
    Object.assign(state, { retrieved });
  },

  [types.USER_SHOW_SET_HUB_URL](state, hubUrl) {
    Object.assign(state, { hubUrl });
  },

  [types.USER_SHOW_TOGGLE_LOADING](state) {
    Object.assign(state, { error: "", isLoading: !state.isLoading });
  },
};
