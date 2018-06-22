import axios from 'axios';

export default {
  postUserData(data) {
    console.log('posting data......');
    axios.post('ENDPOINT', {
      body: data,
    })
      .then();
  },
};
