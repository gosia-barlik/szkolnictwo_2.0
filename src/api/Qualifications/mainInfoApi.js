import { api } from "../config/axiosConfig";
import { defineCancelApiObject } from "../config/axiosUtils";
import { autocompleteOptionsFixture } from "../../fixtures/autocompleteOptionsFixture";
import {
  graphItemsFixture,
  graphItemsChildrenFixture,
} from "../../fixtures/graphItemsFixture";
import { searchResultsFixture } from "../../fixtures/searchResultsFixture";
import { qualificationFixture } from "../../fixtures/qualificationFixture";
import { filtersOptionsFixture } from "../../fixtures/filtersOptionsFixture";
import { voivodeships } from "../../fixtures/voivodeships";
import { demandMapFixture } from "../../fixtures/qualificationDemandMapFixture";

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
  getSearchResultsFixture: async function (array, cancel = false) {
    return searchResultsFixture;
  },
  getQualificationFixture: async function (array, cancel = false) {
    return qualificationFixture;
  },
  getFiltersOptionsFixture: async function (array, cancel = false) {
    return filtersOptionsFixture;
  },
  getVoivodeships: async function (array, cancel = false) {
    return voivodeships;
  },
  getQualificationDemandMapFixture: async function (array, cancel = false) {
    return demandMapFixture;
  },
};

const cancelApiObject = defineCancelApiObject(MainInfoAPI);
