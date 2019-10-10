/* eslint-disable no-undef */
import Users from "@/components/Users.vue";
import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";

const localVue = createLocalVue();

localVue.use(Vuex);

const mockStore = {
  getters: {
    users: jest.fn()
  },
  actions: {
    getUsers: jest.fn()
  }
};

describe("Users", () => {
  describe("created", () => {
    beforeEach(() => {
      shallowMount(Users, {
        store: new Vuex.Store(mockStore),
        localVue
      });
    });

    it("should have called created", () => {
      expect(mockStore.actions.getUsers).toHaveBeenCalled();
    });
  });
});
