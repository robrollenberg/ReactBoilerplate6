var axios = require('axios');

const URL = 'http://eenurl.nl/';

module.exports = {
  getExample: function () {
    var requestUrl = `${URL}`;

    return axios.get(requestUrl +'voorbeeld.json')
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
