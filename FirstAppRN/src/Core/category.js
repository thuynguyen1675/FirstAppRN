import axios from 'axios';
//const axios = require('axios').default;

export const allCategory = () => {
  return axios
    .get('https://api.itedu.me/category/all')
    .then((response) => {
      return response;
    })
    .catch((error) => console.log(error));
};

export const coursesNew = () => {
  return axios({
    method: 'post',
    url: 'https://api.itedu.me/course/top-new',
    data: {
      limit: 4,
      page: 1,
    },
  })
    .then((response) => {
      return response.data.payload;
    })
    .catch((error) => console.log('err:' + error));
};
