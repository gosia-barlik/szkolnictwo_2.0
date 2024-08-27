import { api } from "../config/axiosConfig";
import { defineCancelApiObject } from "../config/axiosUtils";
import { autocompleteOptionsFixture } from "../../fixtures/autocompleteOptionsFixture";

export const MainInfoAPI = {
  getAutocompleteOptions: async function (array, cancel = false) {
    return autocompleteOptionsFixture;
  },

};

const cancelApiObject = defineCancelApiObject(MainInfoAPI);
