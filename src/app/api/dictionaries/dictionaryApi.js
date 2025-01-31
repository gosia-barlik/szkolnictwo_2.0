import { api } from "../config/axiosConfig";
import { defineCancelApiObject, handleApiResponse } from "../config/axiosUtils";
import { autocompleteOptionsFixture } from "../../../fixtures/autocompleteOptionsFixture";
import { filtersOptionsFixture } from "../../../fixtures/filtersOptionsFixture";
import { voivodeships } from "../../../fixtures/voivodeships";

export const DictionaryAPI = {
  getAutocompleteOptions: async function (array, cancel = false) {
    return autocompleteOptionsFixture;
  },
  getFiltersOptionsFixture: async function (array, cancel = false) { //TODO:: konwencja nazewnictwa - zmiana z Fixture, nazwa metody http w nazwie funkcji
    return filtersOptionsFixture;
  },
  voivodeships: async function (array, cancel = false) {
    return voivodeships;
  },
  cities: async function (voivodeship, cancel = false) {
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
