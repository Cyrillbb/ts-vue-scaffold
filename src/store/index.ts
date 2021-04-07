import { createStore } from "vuex";

interface State {
  count: number;
  data: Array<Record<string, unknown>>;
}

export default createStore({
  state: {
    count: 0,
    data: [],
  } as State,
  mutations: {
    increment(state, amount: number): void {
      state.count += amount;
    },
    pushObj(state): void {
      state.data.push({ a: 2 });
    },
  },
  actions: {},
  modules: {},
});
