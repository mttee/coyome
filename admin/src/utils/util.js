import * as Constant from "../constants/index";
const axios = require("axios");

const apiCall = (method, endpoint, body) => {
  return axios({
    method: method,
    url: `${Constant.apiConstant.API_URL}/${endpoint}`,
    data: body
  }).catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
};

export default apiCall;
