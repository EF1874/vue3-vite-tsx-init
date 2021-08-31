/*
 * @Author: 李聪
 * @Date: 2021-08-31 11:41:49
 * @LastEditors: 李聪
 * @LastEditTime: 2021-08-31 14:04:55
 * @Description: Vuex仓库
 */

import { createStore } from 'vuex';

const defaultState = {
  count: 0
};

export default createStore({
  state() {
    return defaultState;
  },
  mutations: {
    increment(state: typeof defaultState) {
      state.count += 1;
    }
  },
  actions: {
    increment(context) {
      context.commit('increment');
    }
  },
  getters: {
    double(state: typeof defaultState) {
      return 2 * state.count;
    }
  }
});
