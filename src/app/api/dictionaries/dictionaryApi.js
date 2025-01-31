import { api } from "../config/axiosConfig";
import { defineCancelApiObject, handleApiResponse } from "../config/axiosUtils";
import { autocompleteOptionsFixture } from "../../../fixtures/autocompleteOptionsFixture";
import { filtersOptionsFixture } from "../../../fixtures/filtersOptionsFixture";
import { voivodeships } from "../../../fixtures/voivodeships";

export const DictionaryAPI = {
  getAutocompleteOptions: async function (array, cancel = false) {
    return autocompleteOptionsFixture;
  },
  getFiltersOptions: async function (array, cancel = false) {
    return filtersOptionsFixture;
  },
  getVoivodeships: async function (array, cancel = false) {
    return voivodeships;
  },

  getCities: async function (voivodeship, cancel = false) {
    return handleApiResponse( async ()=> api.request({
      url: `/cities/?voivodeship=${voivodeship}`,
      method: "GET",
      signal: cancel
        ? cancelApiObject[this.search.name].handleRequestCancellation().signal
        : undefined,
    })
  )},

};


const cancelApiObject = defineCancelApiObject(DictionaryAPI);
