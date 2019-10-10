import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
axios.defaults.baseURL = "http://localhost:3001/users";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Access-Control-Allow-Methods"] = "*";
export default new Vuex.Store({
  state: {
    users: []
  },
  actions: {
    getUsers({ commit }) {
      axios.get("/").then(resp => {
        commit("SET_USERS", resp);
      });
    },
    createUser({ commit }, userData) {
      axios.post("/", userData).then(updatedUser => {
        commit("SET_USER", updatedUser);
      });
    },
    updateUser({ commit }, userData) {
      axios.post("/", userData).then(updatedUser => {
        commit("EDIT_USER", updatedUser);
      });
    }
  },
  mutations: {
    SET_USERS(state, payload) {
      state.users = payload.data;
    },
    SET_USER(state, payload) {
      state.users.push(payload);
    },
    EDIT_USER(state, payload) {
      let index = state.users.findIndex(u => {
        u.id == payload.id;
      });
      if (index > -1) {
        state.users[index] = payload;
      }
    }
  },
  getters: {
    users: ({ users }) => users
  }
});
