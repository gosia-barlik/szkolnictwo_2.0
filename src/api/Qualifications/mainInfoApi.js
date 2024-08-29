import { api } from "../config/axiosConfig";
import { defineCancelApiObject } from "../config/axiosUtils";
import { autocompleteOptionsFixture } from "../../fixtures/autocompleteOptionsFixture";
import { graphItemsFixture } from "../../fixtures/graphItemsFixture";

export const MainInfoAPI = {
  getAutocompleteOptions: async function (array, cancel = false) {
    return autocompleteOptionsFixture;
  },
  getGraphItemsFixture: async function (array, cancel = false) {
    return graphItemsFixture;
  },

};

const cancelApiObject = defineCancelApiObject(MainInfoAPI);
