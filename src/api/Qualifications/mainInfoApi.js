import { api } from "../config/axiosConfig";
import { defineCancelApiObject } from "../config/axiosUtils";
import { groupsListFixture } from "../../fixtures/groupsListFixture";
import { industriesFixture } from "../../fixtures/industriesFixture";
import { qualificationsListFixture } from "../../fixtures/qualificationsListFixture";
import { skillsFixture } from "../../fixtures/skillsFixture";
import { qualificationsListIndustriesFixture } from "../../fixtures/qualificationsListIndustriesFixture";

export const MainInfoAPI = {
  getIndustries: async function (array, cancel = false) {
    return industriesFixture;
  },

  getSkills: async function (array, cancel = false) {
    return skillsFixture;
  },

  getQualifications: async function (array, cancel = false) {
    return qualificationsListFixture;
  },

  getIndustriesQualifications: async function (array, cancel = false) {
    return qualificationsListIndustriesFixture;
  },

  //zapisanie
  create: async function (array, cancel = false) {
    // const response = await api.request({
    //   url: `kompas/get-kompas-qualifications-many`,
    //   method: "POST",
    //   data: [],
    //   withCredentials:false,
    //   signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
    // })
    return groupsListFixture;
    // return response.data;
  },

  //aktualizacja
  update: async function (mainInfo, cancel = false) {
    const response = await api.request({
      url: "",
      method: "PUT",
      data: mainInfo,
      withCredentials: false,
      signal: cancel
        ? cancelApiObject[this.create.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data;
  },

  //pobranie
  get: async function (offerId, cancel = false) {
    const response = await api.request({
      url: `kompas/nav`,
      method: "GET",
      withCredentials: false,
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });
    // return qualificationListFixture
    return response.data;
  },
};

const cancelApiObject = defineCancelApiObject(MainInfoAPI);
