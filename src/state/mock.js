const MockAdapter = require("axios-mock-adapter");
const axios = require("axios");
const Mock = new MockAdapter(axios, { delayResponse: 1000 });
export default Mock;
