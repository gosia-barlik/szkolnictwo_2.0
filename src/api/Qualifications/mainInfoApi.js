import { api } from "../config/axiosConfig";
import { defineCancelApiObject } from "../config/axiosUtils";
import {
  graphItemsFixture,
  graphItemsChildrenFixture,
} from "../../fixtures/graphItemsFixture";
import { searchResultsFixture } from "../../fixtures/searchResultsFixture";
import { qualificationFixture } from "../../fixtures/qualificationFixture";
import { demandMapFixture } from "../../fixtures/qualificationDemandMapFixture";
import { schoolDataFixture } from "../../fixtures/schoolDataFixture";

export const MainInfoAPI = {
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
  getQualificationDemandMapFixture: async function (array, cancel = false) {
    return demandMapFixture;
  },
  getSchoolDataFixture: async function (array, cancel = false) {
    return schoolDataFixture;
  }
};

const cancelApiObject = defineCancelApiObject(MainInfoAPI);
