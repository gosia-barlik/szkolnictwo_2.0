import { api } from "../config/axiosConfig"
import { defineCancelApiObject } from "../config/axiosUtils"

export const MainInfoAPI = {

  //zapisanie 
  create: async function (array, cancel = false) {
    const response = await api.request({
      url: `kompas/get-kompas-qualifications-many`,
      method: "POST",
      data: [],
      withCredentials:false,
      signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
    })

    return response.data;
  },

  //aktualizacja 
  update: async function (mainInfo, cancel = false) {
    const response = await api.request({
      url: '',
      method: "PUT",
      data: mainInfo,
      withCredentials:false,
      signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
    })

    return response.data;
  },

  //pobranie 
  get: async function (offerId, cancel = false) {
    const response = await api.request({
      url: `kompas/get-kompas-qualifications-many`,
      method: "GET",
      withCredentials:false,
      signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined,
    })

    return response.data;
  },


}

const cancelApiObject = defineCancelApiObject(MainInfoAPI);