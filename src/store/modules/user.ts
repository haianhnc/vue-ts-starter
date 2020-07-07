/* eslint-disable  @typescript-eslint/no-explicit-any */
/* eslint-disable  @typescript-eslint/camelcase */

import {
  ActionTree, MutationTree, GetterTree,
} from 'vuex';

export class User {
  first_name: string;

  last_name: string;

  email: string;

  password: string;

  constructor() {
    this.first_name = '';
    this.last_name = '';
    this.email = '';
    this.password = '';
  }
}

interface State {
  user: User;
}

const userState: State = {
  user: new User(),
};

const getters: GetterTree<State, any> = {
  user: ({ user }) => user,
};

const actions: ActionTree<State, any> = {
  setUserInfo({ commit }, payload) {
    commit('SET_USER_INFO', payload);
  },
};

const mutations: MutationTree<State> = {
  SET_USER_INFO(state: State, payload: User) {
    state.user = payload;
  },
};

export default {
  namespaced: true,
  state: userState,
  getters,
  actions,
  mutations,
};
