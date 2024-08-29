import { api } from "../config/axiosConfig";
import { defineCancelApiObject } from "../config/axiosUtils";
import { autocompleteOptionsFixture } from "../../fixtures/autocompleteOptionsFixture";
import {
  graphItemsFixture,
  graphItemsChildrenFixture,
} from "../../fixtures/graphItemsFixture";

export const MainInfoAPI = {
  getAutocompleteOptions: async function (array, cancel = false) {
    return autocompleteOptionsFixture;
  },
  getGraphItemsFixture: async function (array, cancel = false) {
    return graphItemsFixture;
  },
  getGraphItemsChildrenFixture: async function (array, cancel = false) {
    return graphItemsChildrenFixture;
  },
};

const cancelApiObject = defineCancelApiObject(MainInfoAPI);
