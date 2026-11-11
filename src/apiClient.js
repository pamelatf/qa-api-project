const request = require("supertest");
const { BASE_URL } = require("./endpoints");

function api() {
  return request(BASE_URL);
}

async function get(path) {
  return api().get(path);
}

async function post(path, body) {
  return api().post(path).send(body);
}

module.exports = { api, get, post };
