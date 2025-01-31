import { api } from "../config/axiosConfig";
import { defineCancelApiObject } from "../config/axiosUtils";
import {
  graphItemsFixture,
  graphItemsChildrenFixture,
} from "../../../fixtures/graphItemsFixture";
import { searchResultsFixture } from "../../../fixtures/searchResultsFixture";
import { qualificationFixture } from "../../../fixtures/qualificationFixture";
import { demandMapFixture } from "../../../fixtures/qualificationDemandMapFixture";
import { schoolDataFixture } from "../../../fixtures/schoolDataFixture";

export const MainInfoAPI = {
  getGraphItems: async function (array, cancel = false) {  //TODO:: dodac obsluge bledow
    return graphItemsFixture;
  },
  getGraphItemsChildren: async function (array, cancel = false) {
    return graphItemsChildrenFixture;
  },
  getSearchResults: async function (array, cancel = false) {
    return searchResultsFixture;
  },
  getQualification: async function (array, cancel = false) {
    return qualificationFixture;
  },
  getQualificationDemandMap: async function (array, cancel = false) {
    return demandMapFixture;
  },
  getSchoolData: async function (array, cancel = false) {
    return schoolDataFixture;
  }
};

const cancelApiObject = defineCancelApiObject(MainInfoAPI);
